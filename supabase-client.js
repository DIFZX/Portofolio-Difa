(function initializePortfolioSupabase(global) {
    const config = global.PORTFOLIO_SUPABASE_CONFIG || {};
    const isConfigured = Boolean(
        config.url
        && config.publishableKey
        && !String(config.url).startsWith('YOUR_')
        && !String(config.publishableKey).startsWith('YOUR_')
        && global.supabase?.createClient
    );
    const client = isConfigured
        ? global.supabase.createClient(config.url, config.publishableKey, {
            auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
        })
        : null;

    function assertConfigured() {
        if (!client) {
            throw new Error('Supabase belum dikonfigurasi. Isi supabase-config.js terlebih dahulu.');
        }
    }

    function throwIfError(error, fallback) {
        if (error) throw new Error(error.message || fallback);
    }

    function formatRating(row) {
        const date = new Date(row.created_at);
        return {
            ...row,
            rating: Number(row.rating),
            origin: row.origin || '',
            created_at: Number.isNaN(date.getTime())
                ? String(row.created_at || '')
                : date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
        };
    }

    async function requireAdmin() {
        assertConfigured();
        const { data: sessionData, error: sessionError } = await client.auth.getSession();
        throwIfError(sessionError, 'Sesi admin tidak dapat diperiksa.');
        const user = sessionData.session?.user;
        if (!user) throw new Error('Silakan login sebagai admin.');

        const { data: role, error: roleError } = await client
            .from('portfolio_admins')
            .select('user_id')
            .eq('user_id', user.id)
            .maybeSingle();
        throwIfError(roleError, 'Hak akses admin tidak dapat diperiksa.');
        if (!role) throw new Error('Akun ini belum terdaftar sebagai admin portofolio.');
        return user;
    }

    const api = {
        configured: isConfigured,
        client,

        async getContent() {
            assertConfigured();
            const { data, error } = await client
                .from('portfolio_content')
                .select('content, updated_at')
                .eq('id', 1)
                .maybeSingle();
            throwIfError(error, 'Konten portofolio tidak dapat dimuat.');
            return {
                success: true,
                data: data?.content || null,
                updated_at: data?.updated_at || null,
                using_default: !data
            };
        },

        async saveContent(content) {
            const user = await requireAdmin();
            const { data, error } = await client
                .from('portfolio_content')
                .upsert({ id: 1, content, updated_by: user.id }, { onConflict: 'id' })
                .select('content, updated_at')
                .single();
            throwIfError(error, 'Konten portofolio gagal disimpan.');
            return { success: true, data: data.content, updated_at: data.updated_at };
        },

        async getRatings() {
            assertConfigured();
            const { data, error } = await client
                .from('ratings')
                .select('id, name, origin, message, rating, created_at')
                .eq('is_visible', true)
                .order('created_at', { ascending: false })
                .limit(100);
            throwIfError(error, 'Rating pengunjung tidak dapat dimuat.');
            return (data || []).map(formatRating);
        },

        async createRating(input) {
            assertConfigured();
            const payload = {
                name: String(input.name || '').trim(),
                origin: String(input.origin || '').trim() || null,
                message: String(input.message || '').trim(),
                rating: Number(input.rating)
            };
            const { data, error } = await client
                .from('ratings')
                .insert(payload)
                .select('id, name, origin, message, rating, created_at')
                .single();
            throwIfError(error, 'Rating gagal dikirim.');
            return formatRating(data);
        },

        async getAdminSession() {
            if (!client) return { authenticated: false, configured: false };
            const { data, error } = await client.auth.getSession();
            throwIfError(error, 'Sesi admin tidak dapat diperiksa.');
            if (!data.session?.user) return { authenticated: false, configured: true };
            try {
                const user = await requireAdmin();
                return { authenticated: true, configured: true, admin: { id: user.id, email: user.email } };
            } catch (adminError) {
                await client.auth.signOut();
                throw adminError;
            }
        },

        async login(email, password) {
            assertConfigured();
            const { error } = await client.auth.signInWithPassword({ email: email.trim(), password });
            throwIfError(error, 'Email atau password salah.');
            const user = await requireAdmin();
            return { authenticated: true, admin: { id: user.id, email: user.email } };
        },

        async logout() {
            assertConfigured();
            const { error } = await client.auth.signOut();
            throwIfError(error, 'Logout gagal.');
        },

        async changePassword(currentPassword, newPassword) {
            const user = await requireAdmin();
            const { error: verifyError } = await client.auth.signInWithPassword({
                email: user.email,
                password: currentPassword
            });
            throwIfError(verifyError, 'Password saat ini tidak sesuai.');
            const { error } = await client.auth.updateUser({ password: newPassword });
            throwIfError(error, 'Password gagal diperbarui.');
        },

        async uploadImage(file) {
            await requireAdmin();
            if (!file || !file.type?.startsWith('image/')) throw new Error('Pilih file gambar yang valid.');
            if (file.size > 5 * 1024 * 1024) throw new Error('Ukuran gambar maksimal 5 MB.');
            const extension = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '');
            const randomPart = global.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
            const path = `uploads/${Date.now()}-${randomPart}.${extension}`;
            const bucket = config.storageBucket || 'portfolio-assets';
            const { error } = await client.storage.from(bucket).upload(path, file, {
                cacheControl: '3600',
                contentType: file.type,
                upsert: false
            });
            throwIfError(error, 'Gambar gagal diunggah.');
            const { data } = client.storage.from(bucket).getPublicUrl(path);
            return data.publicUrl;
        }
    };

    global.portfolioSupabase = api;
})(window);

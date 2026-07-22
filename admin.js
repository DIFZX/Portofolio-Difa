const state = { content: null, language: 'id', csrf: '' };
const pageTextDefaults = {
    id: {
        portfolio: 'Portofolio Pribadi', contactMe: 'Hubungi Saya', seeWork: 'Lihat Kontribusi', downloadCv: 'Unduh CV',
        stats: ['Pengalaman kerja', 'Keterampilan utama', 'Siap berkontribusi'], statValues: ['2+', '7+', '100%'],
        available: 'Tersedia untuk bekerja', profileNote: 'Operasional, produksi, admin, dan entry level IT support.', ready: 'Open to work',
        aboutEyebrow: 'Profil', aboutTitle: 'Tentang Saya', infoLabels: ['Domisili'], infoValues: ['Bekasi'], focusTitle: 'Fokus Utama & Keahlian Pendukung', focusItems: ['Pengembangan Web', 'Pemrograman', 'Jaringan Komputer', 'IT Support & Administrasi'],
        educationEyebrow: 'Perjalanan Akademik', educationTitle: 'Pendidikan', historyEyebrow: 'Riwayat', historyTitle: 'Pengalaman Kerja',
        projectEyebrow: 'Kontribusi', projectTitle: 'Proyek dan Tanggung Jawab', certificationEyebrow: 'Kredensial', certificationTitle: 'Sertifikasi',
        skillEyebrow: 'Kemampuan', skillTitle: 'Keterampilan', contactEyebrow: 'Kontak', contactTitle: 'Mari Terhubung',
        nav: ['Beranda', 'Tentang', 'Pendidikan', 'Pengalaman', 'Proyek', 'Sertifikasi', 'Skill', 'Rating', 'Kontak'],
        contactLabels: ['Telepon', 'Email', 'Alamat'], rights: 'Hak cipta dilindungi.'
    },
    en: {
        portfolio: 'Personal Portfolio', contactMe: 'Contact Me', seeWork: 'View Contributions', downloadCv: 'Download CV',
        stats: ['Work experience', 'Core skills', 'Ready to contribute'], statValues: ['2+', '7+', '100%'],
        available: 'Available for work', profileNote: 'Operations, production, administration, and entry-level IT support.', ready: 'Open to work',
        aboutEyebrow: 'Profile', aboutTitle: 'About Me', infoLabels: ['Location'], infoValues: ['Bekasi'], focusTitle: 'Core Focus & Supporting Skills', focusItems: ['Web Development', 'Programming', 'Computer Networking', 'IT Support & Administration'],
        educationEyebrow: 'Academic Journey', educationTitle: 'Education', historyEyebrow: 'History', historyTitle: 'Work Experience',
        projectEyebrow: 'Contributions', projectTitle: 'Projects and Responsibilities', certificationEyebrow: 'Credentials', certificationTitle: 'Certifications',
        skillEyebrow: 'Capabilities', skillTitle: 'Skills', contactEyebrow: 'Contact', contactTitle: "Let's Connect",
        nav: ['Home', 'About', 'Education', 'Experience', 'Projects', 'Certifications', 'Skills', 'Rating', 'Contact'],
        contactLabels: ['Phone', 'Email', 'Address'], rights: 'All Rights Reserved.'
    },
    ja: {
        portfolio: '個人ポートフォリオ', contactMe: 'お問い合わせ', seeWork: '実績を見る',
        stats: ['実務経験', '主要スキル', '貢献への意欲'], statValues: ['2+', '7+', '100%'],
        available: '就業可能', profileNote: '店舗運営、生産、事務、初級ITサポートに対応できます。', ready: 'Open to work',
        aboutEyebrow: 'プロフィール', aboutTitle: '自己紹介', infoLabels: ['居住地', '学歴', '関心分野'], infoValues: ['ブカシ', 'コンピュータ・ネットワーク工学', '運営、事務、ITサポート'],
        educationEyebrow: '学びの歩み', educationTitle: '学歴', historyEyebrow: '経歴', historyTitle: '職歴',
        projectEyebrow: '実績', projectTitle: 'プロジェクトと担当業務', certificationEyebrow: '資格情報', certificationTitle: '資格・認定',
        skillEyebrow: '能力', skillTitle: 'スキル', contactEyebrow: '連絡先', contactTitle: 'お気軽にご連絡ください',
        nav: ['ホーム', '自己紹介', '学歴', '職歴', '実績', '資格', 'スキル', '評価', '連絡先'],
        contactLabels: ['電話', 'メール', '住所'], rights: '無断転載を禁じます。'
    }
};
pageTextDefaults.ja.downloadCv = 'Download CV';
pageTextDefaults.ja.focusTitle = 'Core Focus & Supporting Skills';
pageTextDefaults.ja.focusItems = ['Web Development', 'Programming', 'Computer Networking', 'IT Support & Administration'];
const defaultSkillImages = [
    'assets/skills/microsoft-excel.svg', 'assets/skills/microsoft-word.svg', 'assets/skills/microsoft-powerpoint.svg',
    'assets/skills/canva.svg', 'assets/skills/basic-english.svg', 'assets/skills/problem-solving.svg',
    'assets/skills/computer-network.svg', 'assets/skills/customer-communication.svg', 'assets/skills/stock-management.svg',
    'assets/skills/programming.svg'
];
const programmingTechnologies = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Node.js', 'Next.js', 'React', 'Python', 'C++', 'Flutter'];
const programmingSkillByLanguage = {
    id: { name: 'Programming', category: 'hard', since: '2023', level: 'Menengah', image: 'assets/skills/programming.svg', description: 'Mempelajari pengembangan aplikasi dan website dari sisi antarmuka, logika program, back-end, hingga dasar pengembangan aplikasi lintas platform.', technologies: programmingTechnologies },
    en: { name: 'Programming', category: 'hard', since: '2023', level: 'Intermediate', image: 'assets/skills/programming.svg', description: 'Studies application and website development, covering interfaces, programming logic, back-end fundamentals, and cross-platform application development.', technologies: programmingTechnologies },
    ja: { name: 'プログラミング', category: 'hard', since: '2023', level: '中級', image: 'assets/skills/programming.svg', description: 'インターフェース、プログラミングロジック、バックエンド、クロスプラットフォーム開発の基礎を学んでいます。', technologies: programmingTechnologies }
};
const experienceDefaultsByLanguage = {
    id: [
        { category: 'Pengalaman Kerja', period: 'Okt 2025 - Jan 2026', image: 'assets/experience/production.svg', description: 'Mendukung proses produksi, pengemasan, pemindahan, dan penyusunan barang dengan tetap mengikuti SOP, target kerja, dan aturan keselamatan.' },
        { category: 'Pengalaman Kerja', period: 'Feb 2024 - Okt 2025', image: 'assets/experience/store.svg', description: 'Menangani pelayanan pelanggan, transaksi pembayaran, laporan penjualan, pencatatan stok, dan kebutuhan operasional toko.' },
        { category: 'Magang', period: 'Juni 2022 - September 2022', image: 'assets/experience/sumitomo-electric.jpg', description: 'Mendukung administrasi produksi melalui pengelolaan, pemindaian, koordinasi, dan pengarsipan dokumen operasional pabrik.' }
    ],
    en: [
        { category: 'Work Experience', period: 'Oct 2025 - Jan 2026', image: 'assets/experience/production.svg', description: 'Supported production, packaging, movement, and arrangement of goods while following SOPs, work targets, and safety requirements.' },
        { category: 'Work Experience', period: 'Feb 2024 - Oct 2025', image: 'assets/experience/store.svg', description: 'Handled customer service, payment transactions, sales reports, stock records, and day-to-day store operations.' },
        { category: 'Internship', period: 'June 2022 - September 2022', image: 'assets/experience/sumitomo-electric.jpg', description: 'Supported production administration through document management, scanning, coordination, and factory operational filing.' }
    ],
    ja: [
        { category: '職務経験', period: '2025年10月 - 2026年1月', image: 'assets/experience/production.svg', description: 'SOP、作業目標、安全規則に従い、生産、梱包、商品の移動と整理を支援しました。' },
        { category: '職務経験', period: '2024年2月 - 2025年10月', image: 'assets/experience/store.svg', description: '顧客対応、決済、売上報告、在庫記録、日々の店舗運営を担当しました。' },
        { category: 'インターンシップ', period: '2022年6月 - 2022年9月', image: 'assets/experience/sumitomo-electric.jpg', description: '生産文書の管理、スキャン、調整、保管を通じて工場の生産事務を支援しました。' }
    ]
};
const internshipExperienceByLanguage = {
    id: { title: 'Asisten Admin Produksi', company: 'PT Sumitomo Wintec Electric Indonesia', period: 'Juni 2022 - September 2022', category: 'Magang', image: 'assets/experience/sumitomo-electric.jpg', description: experienceDefaultsByLanguage.id[2].description, duties: ['Mengelola dokumen hasil produksi untuk mendukung administrasi operasional pabrik.', 'Membuat salinan dokumen lebih dari 200 data per hari menggunakan scanner.', 'Berkoordinasi dengan tim produksi untuk memastikan dokumen sesuai dengan standar perusahaan.', 'Menyusun dan memelihara arsip dokumen agar mudah diakses saat dibutuhkan.', 'Berpengalaman dalam bekerja di lingkungan pabrik dan memahami standar keselamatan kerja (K3).'] },
    en: { title: 'Production Admin Assistant', company: 'PT Sumitomo Wintec Electric Indonesia', period: 'June 2022 - September 2022', category: 'Internship', image: 'assets/experience/sumitomo-electric.jpg', description: experienceDefaultsByLanguage.en[2].description, duties: ['Managed production documents to support factory operational administration.', 'Scanned and copied more than 200 document records per day.', 'Coordinated with the production team to ensure documents met company standards.', 'Organized and maintained document archives for easy retrieval.', 'Gained experience in a factory environment and followed occupational safety standards.'] },
    ja: { title: '生産事務アシスタント', company: 'PT Sumitomo Wintec Electric Indonesia', period: '2022年6月 - 2022年9月', category: 'インターンシップ', image: 'assets/experience/sumitomo-electric.jpg', description: experienceDefaultsByLanguage.ja[2].description, duties: ['工場運営事務を支援するため生産文書を管理。', 'スキャナーを使用して1日200件以上の文書データを複製。', '文書が会社基準を満たすよう生産チームと連携。', '必要なときに簡単に参照できるよう文書を整理・保管。', '工場環境での業務と労働安全基準を経験。'] }
};

function isCustomCollectionImage(path) {
    if (typeof path !== 'string' || !path.trim()) return false;
    return !/^assets\/(experience|skills)\//i.test(path.trim());
}

function experienceMediaKey(item, index) {
    return String(item?.company || item?.title || `experience-${index}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-');
}

function skillMediaKey(item, index) {
    const value = `${item?.name || item?.title || ''} ${item?.image || ''}`.toLowerCase();
    const aliases = [
        ['microsoft-excel', /excel/], ['microsoft-powerpoint', /powerpoint/], ['microsoft-word', /\bword\b/],
        ['canva', /canva/], ['basic-english', /english|inggris|英語/],
        ['problem-solving', /problem|pemecahan|問題/], ['computer-network', /network|jaringan|ネットワーク/],
        ['customer-communication', /customer|pelanggan|顧客/], ['stock-management', /stock|stok|在庫/],
        ['programming', /program|pemrogram|プログラ/]
    ];
    return aliases.find(([, pattern]) => pattern.test(value))?.[0] || `skill-${index}`;
}

const schemas = {
    education: [
        ['period', 'Periode'], ['status', 'Status'], ['program', 'Jurusan / Program'], ['school', 'Sekolah / Kampus'],
        ['description', 'Deskripsi', 'textarea', true], ['logo', 'Path atau URL logo', 'text', true]
    ],
    jobs: [
        ['title', 'Posisi / jabatan', 'text', false, 'Contoh: Helper Produksi'],
        ['company', 'Perusahaan', 'text', false, 'Contoh: PT Prakarsa Alam Segar'],
        ['period', 'Periode kerja', 'text', false, 'Contoh: Okt 2025 - Jan 2026'],
        ['category', 'Kategori', 'text', false, 'Contoh: Pengalaman Kerja'],
        ['image', 'Gambar / logo pengalaman', 'text', true, 'Upload gambar atau masukkan URL'],
        ['description', 'Ringkasan pekerjaan', 'textarea', true, 'Ringkasan singkat yang tampil pada kartu'],
        ['duties', 'Tanggung jawab — satu per baris', 'textarea', true]
    ],
    projects: [
        ['category', 'Kategori'], ['title', 'Judul proyek'], ['text', 'Deskripsi', 'textarea', true]
    ],
    certifications: [
        ['title', 'Judul sertifikat', 'text', false, 'Contoh: CCNA: Introduction to Networks'],
        ['issuer', 'Penerbit / brand sertifikat', 'text', false, 'Contoh: Cisco Networking Academy'],
        ['date', 'Tanggal terbit', 'text', false, 'Contoh: 10 Februari 2026'],
        ['certificate_number', 'Nomor sertifikat', 'text', false, 'Opsional'],
        ['image', 'Gambar / thumbnail sertifikat', 'text', true, 'Upload gambar atau masukkan URL'],
        ['description', 'Deskripsi sertifikat', 'textarea', true, 'Jelaskan materi atau pencapaian dari sertifikat ini'],
        ['document', 'Link unduh PDF / Google Drive', 'url', true, 'https://drive.google.com/...'],
        ['credential_url', 'Link credential / Credly', 'url', true, 'Kosongkan jika belum tersedia']
    ],
    skills: [
        ['name', 'Nama keahlian', 'text', false, 'Contoh: Microsoft Excel'],
        ['category', 'Jenis keahlian', 'skill_category'],
        ['since', 'Digunakan sejak', 'text', false, 'Contoh: 2022'],
        ['level', 'Tingkat kemampuan', 'text', false, 'Contoh: Dasar, Menengah, atau Mahir'],
        ['image', 'Gambar / logo keahlian', 'text', true, 'Upload gambar atau masukkan URL'],
        ['description', 'Deskripsi keahlian', 'textarea', true, 'Jelaskan pengalaman dan cara Anda menggunakan keahlian ini'],
        ['technologies', 'Teknologi yang dipelajari — satu per baris', 'textarea', true, 'Contoh: HTML\nCSS\nJavaScript']
    ]
};

const listIds = { education: 'educationList', jobs: 'jobsList', projects: 'projectsList', certifications: 'certificationsList', skills: 'skillsList' };
const labels = { education: 'Pendidikan', jobs: 'Pengalaman', projects: 'Proyek', certifications: 'Sertifikasi', skills: 'Keahlian' };

async function request(url, options = {}) {
    const headers = { ...(options.headers || {}) };
    if (options.body && !(options.body instanceof FormData)) headers['Content-Type'] = 'application/json';
    if (state.csrf) headers['X-CSRF-Token'] = state.csrf;
    const response = await fetch(url, { ...options, headers });
    const responseText = await response.text();
    let data;
    try {
        data = JSON.parse(responseText);
    } catch (_) {
        throw new Error('API PHP mengalami error. Periksa versi PHP atau log Apache.');
    }
    if (!response.ok || !data.success) throw new Error(data.message || 'Permintaan gagal.');
    return data;
}

function showNotice(message, type = 'success') {
    const notice = document.getElementById('globalNotice');
    notice.textContent = message;
    notice.className = `global-notice ${type}`;
    notice.hidden = false;
    clearTimeout(showNotice.timer);
    showNotice.timer = setTimeout(() => { notice.hidden = true; }, 4500);
}

function showLogin() {
    document.getElementById('loginView').hidden = false;
    document.getElementById('adminView').hidden = true;
}

async function showAdmin(session) {
    state.csrf = session.csrf_token;
    document.getElementById('loginView').hidden = true;
    document.getElementById('adminView').hidden = false;
    const result = await request('api/content.php');
    state.content = result.data;
    state.content.common ||= {};
    if (!state.content.common.phone || state.content.common.phone === '089634899278') {
        state.content.common.phone = '081776396965';
    }
    state.content.common.whatsapp ||= 'https://wa.me/6281776396965';
    state.content.common.cv_url ||= 'https://drive.google.com/file/d/1GPihzRvLOoqR0jMukVrECQ5yT0zxC3t_/view?usp=sharing';
    if (typeof state.content.common.open_to_work_enabled !== 'boolean') {
        state.content.common.open_to_work_enabled = true;
    }
    if (!Array.isArray(state.content.common.profile_photos) || state.content.common.profile_photos.length === 0) {
        state.content.common.profile_photos = state.content.common.profile_photo ? [state.content.common.profile_photo] : [];
    }
    state.content.languages ||= {};
    ['id', 'en', 'ja'].forEach((language) => {
        state.content.languages[language] ||= { education: [], jobs: [], projects: [], certifications: [], skills: [] };
        Object.entries(pageTextDefaults[language]).forEach(([key, value]) => {
            if (state.content.languages[language][key] === undefined) {
                state.content.languages[language][key] = Array.isArray(value) ? [...value] : value;
            }
        });
        const storedLocation = state.content.languages[language].infoValues;
        state.content.languages[language].infoValues = [
            Array.isArray(storedLocation) && storedLocation[0]
                ? storedLocation[0]
                : pageTextDefaults[language].infoValues[0]
        ];
        const experienceDefaults = experienceDefaultsByLanguage[language];
        const normalizedJobs = (state.content.languages[language].jobs || []).map((item, index) => {
            const job = Array.isArray(item) ? { title: item[0], company: item[1], duties: item[2] } : item;
            const companyParts = String(job.company || '').split('|').map((part) => part.trim()).filter(Boolean);
            const fallback = experienceDefaults[index] || {};
            return {
                ...job,
                company: companyParts[0] || job.company || '',
                period: job.period || companyParts.slice(1).join(' | ') || fallback.period || '',
                category: job.category || fallback.category || '',
                image: job.image || fallback.image || '',
                description: job.description || fallback.description || ''
            };
        });
        const internshipExperience = internshipExperienceByLanguage[language];
        const isSumitomo = (job) => /sumitomo/i.test(`${job.company || ''} ${job.title || ''}`);
        const hasSumitomo = normalizedJobs.some(isSumitomo);
        state.content.languages[language].jobs = hasSumitomo
            ? normalizedJobs.map((job) => isSumitomo(job) ? {
                ...internshipExperience,
                ...job,
                period: job.period || internshipExperience.period,
                category: job.category || internshipExperience.category,
                image: job.image || internshipExperience.image,
                description: job.description || internshipExperience.description,
                duties: Array.isArray(job.duties) && job.duties.length ? job.duties : [...internshipExperience.duties]
            } : job)
            : [...normalizedJobs, { ...internshipExperience, duties: [...internshipExperience.duties] }];
        const skills = state.content.languages[language].skills || [];
        const normalizedSkills = skills.map((skill, index) => typeof skill === 'string' ? {
            name: skill,
            category: [5, 7].includes(index) ? 'soft' : 'hard',
            since: '',
            level: '',
            image: defaultSkillImages[index] || '',
            description: '',
            technologies: []
        } : skill);
        const isProgramming = (skill) => skill.image === 'assets/skills/programming.svg' || /program|pemrogram|プログラ/i.test(skill.name || '');
        const hasProgramming = normalizedSkills.some(isProgramming);
        state.content.languages[language].skills = hasProgramming
            ? normalizedSkills.map((skill) => isProgramming(skill) ? {
                ...programmingSkillByLanguage[language],
                ...skill,
                since: skill.since || '2023',
                level: skill.level || programmingSkillByLanguage[language].level,
                image: skill.image || 'assets/skills/programming.svg',
                description: skill.description || programmingSkillByLanguage[language].description,
                technologies: Array.isArray(skill.technologies) && skill.technologies.length ? skill.technologies : [...programmingTechnologies]
            } : skill)
            : [...normalizedSkills, { ...programmingSkillByLanguage[language], technologies: [...programmingTechnologies] }];
    });
    synchronizeCollectionImages();
    renderEditor();
    if (result.using_default) showNotice('Menggunakan konten awal. Klik Simpan perubahan untuk menyimpannya ke database.');
}

function languageData() {
    return state.content.languages[state.language];
}

function synchronizeCollectionImages() {
    const languageOrder = [state.language, ...['id', 'en', 'ja'].filter((code) => code !== state.language)];
    ['jobs', 'skills'].forEach((type) => {
        const keyFor = type === 'jobs' ? experienceMediaKey : skillMediaKey;
        const sharedImages = new Map();

        languageOrder.forEach((code) => {
            const items = state.content.languages?.[code]?.[type];
            if (!Array.isArray(items)) return;
            items.forEach((item, index) => {
                if (item && typeof item === 'object' && isCustomCollectionImage(item.image)) {
                    const key = keyFor(item, index);
                    if (!sharedImages.has(key)) sharedImages.set(key, item.image);
                }
            });
        });

        Object.values(state.content.languages || {}).forEach((content) => {
            const items = content?.[type];
            if (!Array.isArray(items)) return;
            items.forEach((item, index) => {
                if (!item || typeof item !== 'object') return;
                const sharedImage = sharedImages.get(keyFor(item, index));
                if (sharedImage) item.image = sharedImage;
            });
        });
    });
}

function renderEditor() {
    document.querySelectorAll('[data-common]').forEach((input) => {
        const value = state.content.common[input.dataset.common];
        if (input.type === 'checkbox') input.checked = value !== false;
        else input.value = value || '';
    });
    renderProfilePhotos();
    const content = languageData();
    document.querySelectorAll('[data-language]').forEach((input) => {
        const value = content[input.dataset.language];
        input.value = input.hasAttribute('data-array') && Array.isArray(value) ? value.join('\n') : (value || '');
    });
    Object.keys(schemas).forEach((type) => renderCollection(type));
}

function readProfilePhotoInputs() {
    return [...document.querySelectorAll('[data-profile-photo]')].map((input) => input.value.trim());
}

function renderProfilePhotos() {
    const container = document.getElementById('profilePhotosList');
    const photos = state.content.common.profile_photos || [];
    container.replaceChildren();

    if (!photos.length) {
        const empty = document.createElement('div');
        empty.className = 'editor-empty';
        empty.textContent = 'Belum ada foto profil. Gunakan tombol tambah gambar di atas.';
        container.appendChild(empty);
        return;
    }

    photos.forEach((photo, index) => {
        const card = document.createElement('article');
        card.className = 'editor-card profile-photo-editor';

        const header = document.createElement('div');
        header.className = 'editor-card-header';
        const title = document.createElement('strong');
        title.textContent = index === 0 ? 'Foto utama' : `Foto ${index + 1}`;
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'remove-item';
        remove.textContent = 'Hapus';
        remove.addEventListener('click', () => {
            state.content.common.profile_photos = readProfilePhotoInputs();
            state.content.common.profile_photos.splice(index, 1);
            renderProfilePhotos();
        });
        header.append(title, remove);

        const fields = document.createElement('div');
        fields.className = 'editor-fields';
        const label = document.createElement('label');
        label.className = 'wide';
        const caption = document.createElement('span');
        caption.textContent = 'Path atau URL gambar';
        const row = document.createElement('span');
        row.className = 'upload-row';
        const input = document.createElement('input');
        input.dataset.profilePhoto = String(index);
        input.value = typeof photo === 'string' ? photo : '';
        input.placeholder = 'Upload gambar atau masukkan URL';
        const upload = document.createElement('button');
        upload.type = 'button';
        upload.className = 'upload-trigger';
        upload.textContent = 'Upload gambar';
        upload.addEventListener('click', () => chooseAndUpload(input));
        row.append(input, upload);
        label.append(caption, row);
        fields.appendChild(label);
        card.append(header, fields);
        container.appendChild(card);
    });
}

function createField(field, item) {
    const [key, labelText, kind = 'text', wide = false, placeholder = ''] = field;
    const label = document.createElement('label');
    if (wide) label.className = 'wide';
    const caption = document.createElement('span');
    caption.textContent = labelText;
    let input;
    if (kind === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 4;
    } else if (kind === 'skill_category') {
        input = document.createElement('select');
        [['hard', 'Hard Skill'], ['soft', 'Soft Skill']].forEach(([value, text]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            input.appendChild(option);
        });
    } else {
        input = document.createElement('input');
        input.type = kind;
    }
    input.placeholder = placeholder;
    input.dataset.key = key;
    const value = item[key];
    input.value = Array.isArray(value) ? value.join('\n') : (value || '');
    label.append(caption);
    if (key === 'logo' || key === 'image') {
        const row = document.createElement('span');
        row.className = 'upload-row';
        const upload = document.createElement('button');
        upload.type = 'button'; upload.className = 'upload-trigger'; upload.textContent = 'Upload gambar';
        upload.addEventListener('click', () => chooseAndUpload(input));
        row.append(input, upload);
        label.append(row);
    } else {
        label.append(input);
    }
    return label;
}

async function uploadImage(file) {
    const form = new FormData();
    form.append('image', file);
    return request('api/upload.php', { method: 'POST', body: form });
}

function chooseAndUpload(targetInput) {
    const picker = document.createElement('input');
    picker.type = 'file'; picker.accept = 'image/png,image/jpeg,image/webp,image/gif';
    picker.addEventListener('change', async () => {
        if (!picker.files[0]) return;
        try {
            const result = await uploadImage(picker.files[0]);
            targetInput.value = result.path;
            showNotice('Gambar berhasil diunggah. Simpan perubahan untuk menggunakannya.');
        } catch (error) { showNotice(error.message, 'error'); }
    });
    picker.click();
}

function renderCollection(type) {
    const container = document.getElementById(listIds[type]);
    const items = languageData()[type] || [];
    container.replaceChildren();
    if (!items.length) {
        const empty = document.createElement('div');
        empty.className = 'editor-empty';
        empty.textContent = `Belum ada ${labels[type].toLowerCase()}. Gunakan tombol tambah di atas.`;
        container.appendChild(empty);
        return;
    }
    items.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'editor-card';
        card.dataset.index = index;
        const header = document.createElement('div');
        header.className = 'editor-card-header';
        const title = document.createElement('strong');
        title.textContent = `${labels[type]} ${index + 1}`;
        const remove = document.createElement('button');
        remove.type = 'button'; remove.className = 'remove-item'; remove.textContent = 'Hapus';
        remove.addEventListener('click', () => {
            persistLanguageForm();
            languageData()[type].splice(index, 1);
            renderCollection(type);
        });
        header.append(title, remove);
        const fields = document.createElement('div');
        fields.className = 'editor-fields';
        schemas[type].forEach((field) => fields.appendChild(createField(field, item)));
        card.append(header, fields);
        container.appendChild(card);
    });
}

function readCollection(type) {
    const container = document.getElementById(listIds[type]);
    return [...container.querySelectorAll('.editor-card')].map((card) => {
        const item = {};
        card.querySelectorAll('[data-key]').forEach((input) => {
            const value = input.value.trim();
            item[input.dataset.key] = ['duties', 'technologies'].includes(input.dataset.key)
                ? value.split('\n').map((line) => line.trim()).filter(Boolean)
                : value;
        });
        return item;
    });
}

function persistLanguageForm() {
    if (!state.content) return;
    const content = languageData();
    document.querySelectorAll('[data-language]').forEach((input) => {
        const value = input.value.trim();
        content[input.dataset.language] = input.hasAttribute('data-array')
            ? value.split('\n').map((line) => line.trim()).filter(Boolean)
            : value;
    });
    Object.keys(schemas).forEach((type) => { content[type] = readCollection(type); });
}

function collectCommonForm() {
    document.querySelectorAll('[data-common]').forEach((input) => {
        state.content.common[input.dataset.common] = input.type === 'checkbox' ? input.checked : input.value.trim();
    });
    const profilePhotos = readProfilePhotoInputs().filter(Boolean);
    state.content.common.profile_photos = profilePhotos;
    state.content.common.profile_photo = profilePhotos[0] || state.content.common.profile_photo || '';
}

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const notice = document.getElementById('loginNotice');
    notice.hidden = true;
    try {
        const result = await request('api/admin.php?action=login', { method: 'POST', body: JSON.stringify({ username: document.getElementById('loginUsername').value, password: document.getElementById('loginPassword').value }) });
        await showAdmin(result);
    } catch (error) {
        notice.textContent = error.message; notice.className = 'notice error'; notice.hidden = false;
    }
});

document.getElementById('adminNav').addEventListener('click', (event) => {
    const button = event.target.closest('[data-panel]');
    if (!button) return;
    document.querySelectorAll('[data-panel]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('[data-panel-content]').forEach((panel) => panel.classList.toggle('active', panel.dataset.panelContent === button.dataset.panel));
    document.getElementById('panelTitle').textContent = button.textContent;
});

document.getElementById('languageSelect').addEventListener('change', (event) => {
    persistLanguageForm();
    collectCommonForm();
    synchronizeCollectionImages();
    state.language = event.target.value;
    renderEditor();
});

document.getElementById('addProfilePhoto').addEventListener('click', () => {
    state.content.common.profile_photos = readProfilePhotoInputs();
    state.content.common.profile_photos.push('');
    renderProfilePhotos();
});

document.querySelectorAll('.add-item').forEach((button) => button.addEventListener('click', () => {
    persistLanguageForm();
    const type = button.dataset.type;
    const defaults = { education: { period: '', status: '', program: '', school: '', description: '', logo: '' }, jobs: { title: '', company: '', period: '', category: 'Pengalaman Kerja', image: '', description: '', duties: [] }, projects: { category: '', title: '', text: '' }, certifications: { title: '', issuer: '', date: '', image: '', certificate_number: '', document: '', credential_url: '', description: '' }, skills: { name: '', category: 'hard', since: '', level: '', image: '', description: '', technologies: [] } };
    languageData()[type] ||= [];
    languageData()[type].push(defaults[type]);
    renderCollection(type);
}));

document.querySelectorAll('[data-target-common]').forEach((button) => button.addEventListener('click', () => {
    const target = document.querySelector(`[data-common="${button.dataset.targetCommon}"]`);
    chooseAndUpload(target);
}));

document.getElementById('saveButton').addEventListener('click', async () => {
    const button = document.getElementById('saveButton');
    try {
        persistLanguageForm(); collectCommonForm();
        synchronizeCollectionImages();
        if (!state.content.common.name) throw new Error('Nama tidak boleh kosong.');
        button.disabled = true; button.textContent = 'Menyimpan...';
        await request('api/content.php', { method: 'PUT', body: JSON.stringify(state.content) });
        showNotice('Semua perubahan berhasil disimpan dan langsung tampil di website.');
    } catch (error) { showNotice(error.message, 'error'); }
    finally { button.disabled = false; button.textContent = 'Simpan perubahan'; }
});

document.getElementById('logoutButton').addEventListener('click', async () => {
    try { await request('api/admin.php?action=logout', { method: 'POST' }); } catch (_) {}
    state.content = null; state.csrf = ''; showLogin();
});

document.getElementById('passwordForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const current = document.getElementById('currentPassword').value;
    const next = document.getElementById('newPassword').value;
    if (next !== document.getElementById('confirmPassword').value) { showNotice('Konfirmasi password baru tidak sama.', 'error'); return; }
    try {
        await request('api/admin.php?action=password', { method: 'PUT', body: JSON.stringify({ current_password: current, new_password: next }) });
        event.target.reset(); showNotice('Password admin berhasil diubah.');
    } catch (error) { showNotice(error.message, 'error'); }
});

(async function boot() {
    try {
        const session = await request('api/admin.php?action=status');
        if (session.authenticated) await showAdmin(session); else showLogin();
    } catch (error) {
        showLogin();
        const notice = document.getElementById('loginNotice'); notice.textContent = error.message; notice.className = 'notice error'; notice.hidden = false;
    }
})();

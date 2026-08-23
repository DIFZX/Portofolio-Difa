const { useEffect, useRef, useState } = React;

const translations = {
    id: {
        code: 'ID', language: 'Bahasa Indonesia', portfolio: 'Portofolio Pribadi',
        nav: ['Beranda', 'Tentang', 'Pendidikan', 'Pengalaman', 'Sertifikasi', 'Skill', 'Rating', 'Kontak'],
        heroDesc: 'Lulusan Teknik Komputer dan Jaringan dengan pengalaman di produksi, pergudangan, administrasi stok, dan operasional toko. Terbiasa bekerja mengikuti SOP, teliti, dan siap belajar cepat.',
        contactMe: 'Hubungi Saya', seeWork: 'Lihat Kontribusi', downloadCv: 'Unduh CV', previewCv: 'Pratinjau CV', cvTitle: 'Pratinjau Curriculum Vitae', closeCv: 'Tutup pratinjau CV', stats: ['Pengalaman kerja', 'Keterampilan utama', 'Siap berkontribusi'], statValues: ['2+', '7+', '100%'],
        available: 'Tersedia untuk bekerja', profileNote: 'Operasional, produksi, admin, dan entry level IT support.', ready: 'Open to work',
        aboutEyebrow: 'Profil', aboutTitle: 'Tentang Saya', aboutText: 'Saya adalah lulusan Teknik Komputer dan Jaringan dengan pengalaman kerja di bidang produksi, pergudangan, dan operasional toko. Pernah bekerja sebagai Helper Produksi di PT Prakarsa Alam Segar dan Crew Store di PT Sewu Segar Primatama (Re.juve). Saya terbiasa bekerja dengan target, teliti dalam pencatatan, disiplin mengikuti SOP, serta mampu bekerja mandiri maupun dalam tim.',
        infoLabels: ['Domisili'], infoValues: ['Bekasi'], focusTitle: 'Fokus Utama & Keahlian Pendukung', focusItems: ['Pengembangan Web', 'Pemrograman', 'Jaringan Komputer', 'IT Support & Administrasi'],
        educationEyebrow: 'Perjalanan Akademik', educationTitle: 'Pendidikan', education: [
            ['2023 - Sekarang', 'Sedang ditempuh', 'Teknik Informatika', 'Universitas Bani Saleh', 'Sedang menempuh pendidikan Teknik Informatika dengan pembelajaran di bidang pengembangan perangkat lunak, jaringan komputer, basis data, dan sistem informasi.', 'assets/education/universitas-bani-saleh.png'],
            ['2020 - 2023', 'Lulus', 'Teknik Komputer dan Jaringan', 'SMK Yadika 13', 'Menyelesaikan pendidikan kejuruan Teknik Komputer dan Jaringan dengan pembelajaran dasar perangkat keras, jaringan, sistem operasi, dan troubleshooting komputer.', 'assets/education/smk-yadika-13.png']
        ],
        historyEyebrow: 'Riwayat', historyTitle: 'Pengalaman Kerja', jobs: [
            ['Helper Produksi', 'PT Prakarsa Alam Segar | Okt 2025 - Jan 2026', ['Membantu proses produksi mie instan sesuai prosedur kerja.', 'Melakukan pemindahan dan penyusunan kardus ke pallet dengan rapi dan aman.', 'Membantu proses packing produk agar siap dikirim.', 'Menjaga kebersihan area kerja dan mematuhi aturan K3.', 'Bekerja sama dengan tim produksi dan gudang untuk mengejar target harian.']],
            ['Crew Store Part Time', 'PT Sewu Segar Primatama (Re.juve) | Feb 2024 - Okt 2025', ['Melayani pembayaran customer melalui EDC, cash, dan e-wallet.', 'Melakukan opening dan closing penjualan produk baru serta program diskon.', 'Memastikan pekerjaan sesuai SOP toko dan membantu persiapan audit.', 'Membuat laporan penjualan harian, mingguan, dan bulanan.', 'Mencatat stok produk dan melaporkan kebutuhan restock.']]
        ],
        projectEyebrow: 'Kontribusi', projectTitle: 'Proyek dan Tanggung Jawab', projects: [
            ['Administrasi', 'Laporan Penjualan Harian', 'Mencatat transaksi harian, memisahkan metode pembayaran, dan membantu rekap penjualan toko.'],
            ['Operasional', 'Kontrol Stok Produk', 'Membantu pencatatan stok, kebutuhan restock, dan ketersediaan produk agar operasional tetap lancar.'],
            ['Produksi', 'Dukungan Produksi', 'Membantu proses pengemasan dan penyusunan barang sesuai kebutuhan tim produksi dan gudang.']
        ],
        certificationEyebrow: 'Kredensial', certificationTitle: 'Sertifikasi', certificationEmpty: 'Sertifikasi akan ditambahkan di bagian ini.',
        skillEyebrow: 'Kemampuan', skillTitle: 'Keterampilan', skills: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Desain Grafis Canva', 'Bahasa Inggris Dasar', 'Pemecahan Masalah', 'Teknik Komputer & Jaringan', 'Komunikasi Customer', 'Manajemen Stok'],
        contactEyebrow: 'Kontak', contactTitle: 'Mari Terhubung', contactText: 'Saya terbuka untuk kesempatan kerja dan siap dihubungi untuk proses rekrutmen, interview, atau diskusi kebutuhan posisi.', contactLabels: ['Telepon', 'Email', 'Alamat'],
        preferences: 'Preferensi tampilan', chooseLanguage: 'Pilih bahasa', themes: ['Mode terang', 'Mode gelap', 'Ikuti sistem'], menuOpen: 'Buka menu navigasi', menuClose: 'Tutup menu navigasi', backTop: 'Kembali ke atas', rights: 'Hak cipta dilindungi.'
    },
    en: {
        code: 'EN', language: 'English', portfolio: 'Personal Portfolio',
        nav: ['Home', 'About', 'Education', 'Experience', 'Certifications', 'Skills', 'Rating', 'Contact'],
        heroDesc: 'A Computer and Network Engineering graduate with experience in production, warehousing, stock administration, and store operations. Accustomed to following SOPs, working carefully, and learning quickly.',
        contactMe: 'Contact Me', seeWork: 'View Contributions', downloadCv: 'Download CV', previewCv: 'Preview CV', cvTitle: 'Curriculum Vitae Preview', closeCv: 'Close CV preview', stats: ['Work experience', 'Core skills', 'Ready to contribute'], statValues: ['2+', '7+', '100%'],
        available: 'Available for work', profileNote: 'Operations, production, administration, and entry-level IT support.', ready: 'Open to work',
        aboutEyebrow: 'Profile', aboutTitle: 'About Me', aboutText: 'I am a Computer and Network Engineering graduate with experience in production, warehousing, and store operations. I worked as a Production Helper at PT Prakarsa Alam Segar and as a Part-Time Store Crew member at PT Sewu Segar Primatama (Re.juve). I am accustomed to targets, accurate record-keeping, following SOPs, and working independently or in a team.',
        infoLabels: ['Location'], infoValues: ['Bekasi'], focusTitle: 'Core Focus & Supporting Skills', focusItems: ['Web Development', 'Programming', 'Computer Networking', 'IT Support & Administration'],
        educationEyebrow: 'Academic Journey', educationTitle: 'Education', education: [
            ['2023 - Present', 'In progress', 'Informatics Engineering', 'Universitas Bani Saleh', 'Currently studying Informatics Engineering with coursework in software development, computer networks, databases, and information systems.', 'assets/education/universitas-bani-saleh.png'],
            ['2020 - 2023', 'Graduated', 'Computer and Network Engineering', 'SMK Yadika 13', 'Completed vocational education in Computer and Network Engineering, covering computer hardware, networking, operating systems, and computer troubleshooting.', 'assets/education/smk-yadika-13.png']
        ],
        historyEyebrow: 'History', historyTitle: 'Work Experience', jobs: [
            ['Production Helper', 'PT Prakarsa Alam Segar | Oct 2025 - Jan 2026', ['Supported instant noodle production according to work procedures.', 'Moved and arranged boxes neatly and safely on pallets.', 'Helped pack products for shipment.', 'Maintained workspace cleanliness and followed safety rules.', 'Worked with production and warehouse teams to meet daily targets.']],
            ['Part-Time Store Crew', 'PT Sewu Segar Primatama (Re.juve) | Feb 2024 - Oct 2025', ['Handled customer payments via EDC, cash, and e-wallet.', 'Managed opening and closing sales for new products and promotions.', 'Ensured compliance with store SOPs and supported audit preparation.', 'Prepared daily, weekly, and monthly sales reports.', 'Recorded product stock and reported restocking needs.']]
        ],
        projectEyebrow: 'Contributions', projectTitle: 'Projects and Responsibilities', projects: [
            ['Administration', 'Daily Sales Reports', 'Recorded daily transactions, separated payment methods, and supported store sales recaps.'],
            ['Operations', 'Product Stock Control', 'Helped track inventory, restocking needs, and product availability to keep operations running smoothly.'],
            ['Production', 'Production Support', 'Supported packaging and product arrangement based on production and warehouse team needs.']
        ],
        certificationEyebrow: 'Credentials', certificationTitle: 'Certifications', certificationEmpty: 'Certifications will be added here.',
        skillEyebrow: 'Capabilities', skillTitle: 'Skills', skills: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Canva Graphic Design', 'Basic English', 'Problem Solving', 'Computer & Network Engineering', 'Customer Communication', 'Stock Management'],
        contactEyebrow: 'Contact', contactTitle: "Let's Connect", contactText: 'I am open to job opportunities and available for recruitment, interviews, or discussions about position requirements.', contactLabels: ['Phone', 'Email', 'Address'],
        preferences: 'Display preferences', chooseLanguage: 'Choose language', themes: ['Light mode', 'Dark mode', 'Use system setting'], menuOpen: 'Open navigation menu', menuClose: 'Close navigation menu', backTop: 'Back to top', rights: 'All Rights Reserved.'
    },
    ja: {
        code: 'JP', language: '日本語', portfolio: '個人ポートフォリオ',
        nav: ['ホーム', '自己紹介', '学歴', '職歴', '資格', 'スキル', '評価', '連絡先'],
        heroDesc: 'コンピュータ・ネットワーク工学を専攻し、生産、倉庫、在庫管理、店舗運営の経験があります。SOPを遵守し、丁寧に仕事を進め、新しいことを素早く学べます。',
        contactMe: 'お問い合わせ', seeWork: '実績を見る', stats: ['実務経験', '主要スキル', '貢献への意欲'], statValues: ['2+', '7+', '100%'],
        available: '就業可能', profileNote: '店舗運営、生産、事務、初級ITサポートに対応できます。', ready: 'Open to work',
        aboutEyebrow: 'プロフィール', aboutTitle: '自己紹介', aboutText: 'コンピュータ・ネットワーク工学の卒業生で、生産、倉庫、店舗運営の経験があります。PT Prakarsa Alam Segarで生産補助、PT Sewu Segar Primatama（Re.juve）でパートタイム店舗スタッフとして勤務しました。目標を意識し、正確な記録、SOPの遵守、個人・チームの両方での業務に慣れています。',
        infoLabels: ['居住地', '学歴', '関心分野'], infoValues: ['ブカシ', 'コンピュータ・ネットワーク工学', '運営、事務、ITサポート'],
        educationEyebrow: '学びの歩み', educationTitle: '学歴', education: [
            ['2023年 - 現在', '在学中', '情報工学', 'Universitas Bani Saleh', 'ソフトウェア開発、コンピュータネットワーク、データベース、情報システムを中心に情報工学を学んでいます。', 'assets/education/universitas-bani-saleh.png'],
            ['2020年 - 2023年', '卒業', 'コンピュータ・ネットワーク工学', 'SMK Yadika 13', 'コンピュータのハードウェア、ネットワーク、オペレーティングシステム、トラブルシューティングを学びました。', 'assets/education/smk-yadika-13.png']
        ],
        historyEyebrow: '経歴', historyTitle: '職歴', jobs: [
            ['生産補助', 'PT Prakarsa Alam Segar | 2025年10月 - 2026年1月', ['手順に従って即席麺の生産を補助。', '段ボールを安全かつ整然とパレットへ移動・配置。', '出荷に向けた製品梱包を補助。', '作業場の清掃と安全規則を遵守。', '日々の目標達成に向け生産・倉庫チームと連携。']],
            ['パートタイム店舗スタッフ', 'PT Sewu Segar Primatama (Re.juve) | 2024年2月 - 2025年10月', ['EDC、現金、電子ウォレットでの決済対応。', '新商品や割引施策の販売開始・締め作業。', '店舗SOPの遵守と監査準備を支援。', '日次・週次・月次の売上レポートを作成。', '商品在庫を記録し補充の必要性を報告。']]
        ],
        projectEyebrow: '実績', projectTitle: 'プロジェクトと担当業務', projects: [
            ['事務', '日次売上レポート', '日々の取引を記録し、決済方法を分類して売上集計を支援。'],
            ['運営', '商品在庫管理', '在庫、補充の必要性、商品状況を記録し円滑な運営を支援。'],
            ['生産', '生産サポート', '生産・倉庫チームの要望に応じて梱包と商品の整理を支援。']
        ],
        certificationEyebrow: '資格情報', certificationTitle: '資格・認定', certificationEmpty: '資格・認定はここに追加されます。',
        skillEyebrow: '能力', skillTitle: 'スキル', skills: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Canvaグラフィックデザイン', '基礎英語', '問題解決', 'コンピュータ・ネットワーク工学', '顧客対応', '在庫管理'],
        contactEyebrow: '連絡先', contactTitle: 'お気軽にご連絡ください', contactText: '求人の機会を歓迎しており、採用選考、面接、ポジション要件についてのご相談に対応できます。', contactLabels: ['電話', 'メール', '住所'],
        preferences: '表示設定', chooseLanguage: '言語を選択', themes: ['ライトモード', 'ダークモード', 'システム設定を使用'], menuOpen: 'ナビゲーションを開く', menuClose: 'ナビゲーションを閉じる', backTop: 'ページ上部へ', rights: '無断転載を禁じます。'
    }
};

function InterfaceIcon({ name }) {
    const paths = {
        language: <><path d="M4 5h7"/><path d="M7.5 3v2c0 4-2 7-5 8"/><path d="M5 8c1 2 3 4 6 5"/><path d="m13 19 3.5-8 3.5 8"/><path d="M14.5 16h4"/></>,
        sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
        moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>,
        system: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
        chevron: <path d="m8 10 4 4 4-4"/>,
        linkedin: <><path d="M6.5 8.5V18"/><path d="M6.5 5.5h.01"/><path d="M11 18v-5.3a3.2 3.2 0 0 1 6.4 0V18"/><path d="M11 8.5V18"/></>,
        instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
        tiktok: <><path d="M14 4v9.2a4 4 0 1 1-3.4-4"/><path d="M14 4c.7 2.1 2.2 3.5 4.5 3.8"/></>,
        whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M8.2 7.7c.3-.3.6-.2.8.1l1 2c.1.3 0 .5-.2.8l-.7.8c.7 1.4 1.8 2.5 3.3 3.2l.8-.8c.2-.2.5-.3.8-.1l1.9.9c.3.2.4.5.2.8-.4.8-1.2 1.4-2.2 1.4-3.5-.1-6.7-3.2-6.8-6.8 0-1 .4-1.8 1.1-2.3Z"/></>,
        certificate: <><path d="M7 3h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M9 7h6M9 11h4"/><path d="m10 16-1 5 3-2 3 2-1-5"/></>
    };
    return <svg className="interface-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function InteractiveNameTitle({ firstName, remainingName }) {
    const canvasRef = useRef(null);
    const stageRef = useRef(null);
    const pointerLabelRef = useRef(null);
    const pointerRef = useRef({ x: -9999, y: -9999, targetX: -9999, targetY: -9999, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        const stage = stageRef.current;
        if (!canvas || !stage) return undefined;

        const context = canvas.getContext('2d');
        const mask = document.createElement('canvas');
        const maskContext = mask.getContext('2d', { willReadFrequently: true });
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let particles = [];
        let frame = 0;
        let width = 0;
        let height = 0;
        let dpr = 1;

        const buildParticles = () => {
            const bounds = stage.getBoundingClientRect();
            width = Math.max(280, Math.round(bounds.width));
            height = Math.round(Math.max(230, Math.min(470, width * 0.38)));
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            mask.width = width;
            mask.height = height;
            maskContext.clearRect(0, 0, width, height);
            maskContext.fillStyle = '#000';
            maskContext.textAlign = 'center';
            maskContext.textBaseline = 'middle';
            const compact = width < 620;
            const sharedNameSize = Math.min(width * (compact ? 0.19 : 0.145), compact ? 86 : 176);
            maskContext.font = `800 ${sharedNameSize}px "Bricolage Grotesque", sans-serif`;
            maskContext.fillText(String(firstName || '').toUpperCase(), width / 2, height * 0.35);
            maskContext.font = `800 ${sharedNameSize}px "Bricolage Grotesque", sans-serif`;
            maskContext.fillText(String(remainingName || '').toUpperCase(), width / 2, height * 0.67);

            const pixels = maskContext.getImageData(0, 0, width, height).data;
            const step = compact ? 4 : 5;
            const next = [];
            for (let y = step; y < height; y += step) {
                for (let x = step; x < width; x += step) {
                    if (pixels[(y * width + x) * 4 + 3] > 80) {
                        const warm = ((Math.floor(x / step) + Math.floor(y / step)) % 3) !== 0;
                        next.push({ x, y, tx: x, ty: y, vx: 0, vy: 0, color: warm ? '#f05222' : '#163143' });
                    }
                }
            }
            particles = next;
        };

        const render = () => {
            context.clearRect(0, 0, width, height);
            const pointer = pointerRef.current;
            const radius = width < 620 ? 64 : 96;
            if (pointer.active && !reduceMotion) {
                pointer.x += (pointer.targetX - pointer.x) * 0.075;
                pointer.y += (pointer.targetY - pointer.y) * 0.075;
                if (pointerLabelRef.current) {
                    pointerLabelRef.current.style.left = `${pointer.x}px`;
                    pointerLabelRef.current.style.top = `${pointer.y}px`;
                }
            }
            particles.forEach((particle) => {
                const dx = particle.x - pointer.x;
                const dy = particle.y - pointer.y;
                const distance = Math.hypot(dx, dy) || 1;
                if (pointer.active && distance < radius && !reduceMotion) {
                    const force = (1 - distance / radius) * 1.75;
                    particle.vx += (dx / distance) * force;
                    particle.vy += (dy / distance) * force;
                }
                particle.vx += (particle.tx - particle.x) * 0.045;
                particle.vy += (particle.ty - particle.y) * 0.045;
                particle.vx *= 0.88;
                particle.vy *= 0.88;
                particle.x += particle.vx;
                particle.y += particle.vy;
                context.fillStyle = particle.color;
                context.fillRect(particle.x, particle.y, width < 620 ? 2.8 : 3.4, width < 620 ? 2.8 : 3.4);
            });

            if (pointer.active) {
                context.beginPath();
                context.arc(pointer.x, pointer.y, radius * 0.48, 0, Math.PI * 2);
                context.strokeStyle = 'rgba(20, 49, 67, 0.36)';
                context.lineWidth = 1;
                context.setLineDash([4, 5]);
                context.stroke();
                context.setLineDash([]);
            }
            frame = requestAnimationFrame(render);
        };

        const handlePointer = (event) => {
            const bounds = canvas.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            const pointer = pointerRef.current;
            if (!pointer.active) {
                pointer.x = x;
                pointer.y = y;
            }
            pointer.targetX = x;
            pointer.targetY = y;
            pointer.active = true;
            pointerLabelRef.current?.classList.add('is-visible');
        };

        const handleLeave = () => {
            pointerRef.current.active = false;
            pointerLabelRef.current?.classList.remove('is-visible');
        };

        buildParticles();
        document.fonts?.ready.then(buildParticles);
        frame = requestAnimationFrame(render);
        canvas.addEventListener('pointermove', handlePointer);
        canvas.addEventListener('pointerleave', handleLeave);
        window.addEventListener('resize', buildParticles);

        return () => {
            cancelAnimationFrame(frame);
            canvas.removeEventListener('pointermove', handlePointer);
            canvas.removeEventListener('pointerleave', handleLeave);
            window.removeEventListener('resize', buildParticles);
        };
    }, [firstName, remainingName]);

    return (
        <div className="interactive-name-stage" ref={stageRef}>
            <h1 className="sr-only">{firstName} {remainingName}</h1>
            <canvas ref={canvasRef} aria-hidden="true"></canvas>
            <span
                className="interactive-pointer-label"
                ref={pointerLabelRef}
                aria-hidden="true"
            >You</span>
        </div>
    );
}

function App() {
    const [loaderState, setLoaderState] = useState('loading');
    const [portfolioContent, setPortfolioContent] = useState(null);
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('portfolio-language');
        return translations[savedLanguage] ? savedLanguage : 'id';
    });

    useEffect(() => {
        let active = true;
        const contentRequest = window.portfolioSupabase?.configured
            ? window.portfolioSupabase.getContent()
            : fetch('api/content.php', { headers: { Accept: 'application/json' } }).then((response) => response.json());
        contentRequest
            .then((result) => {
                if (active && result.success && result.data) setPortfolioContent(result.data);
            })
            .catch(() => {
                // Konten statis tetap digunakan ketika database belum disiapkan.
            });
        return () => { active = false; };
    }, []);

    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
        document.documentElement.lang = language === 'ja' ? 'ja' : language;
        document.title = `${translations[language].portfolio} - Difa Alfaruq`;
    }, [language]);

    useEffect(() => {
        localStorage.removeItem('portfolio-theme');
        document.documentElement.dataset.theme = 'light';
        document.documentElement.style.colorScheme = 'light';
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#cfe5f2');
    }, []);

    useEffect(() => {
        document.body.classList.add('portfolio-loading');
        const exitTimer = window.setTimeout(() => setLoaderState('exiting'), 2800);
        const finishTimer = window.setTimeout(() => {
            setLoaderState('complete');
            document.body.classList.remove('portfolio-loading');
        }, 3650);

        return () => {
            window.clearTimeout(exitTimer);
            window.clearTimeout(finishTimer);
            document.body.classList.remove('portfolio-loading');
        };
    }, []);

    return (
        <div className="app-container" data-theme="light">
            <AmbientBackground />
            <MainPortfolio
                language={language}
                onChangeLanguage={setLanguage}
                portfolioContent={portfolioContent}
            />
            {loaderState !== 'complete' && (
                <AssetLoadingScreen language={language} isExiting={loaderState === 'exiting'} />
            )}
        </div>
    );
}

function AmbientBackground() {
    return (
        <div className="ambient-background" aria-hidden="true">
            <div className="ambient-grid"></div>
            <div className="cloudscape">
                <img className="cloud cloud-one" src="assets/atmosphere/cloud-soft.png" alt="" />
                <img className="cloud cloud-two" src="assets/atmosphere/cloud-soft.png" alt="" />
                <img className="cloud cloud-three" src="assets/atmosphere/cloud-soft.png" alt="" />
                <img className="cloud cloud-four" src="assets/atmosphere/cloud-soft.png" alt="" />
                <img className="cloud cloud-five" src="assets/atmosphere/cloud-soft.png" alt="" />
            </div>
        </div>
    );
}

function WelcomeScreen({ language, onStart }) {
    const copy = {
        id: ['Selamat datang di', 'portofolio saya', 'Masuk Portofolio'],
        en: ['Welcome to', 'my portfolio', 'Enter Portfolio'],
        ja: ['ようこそ', '私のポートフォリオへ', 'ポートフォリオを見る']
    }[language];
    return (
        <div className="screen welcome-screen fade-in">
            <div className="welcome-content">
                <h1 className="welcome-title">
                    {copy[0]} <span>{copy[1]}</span>
                </h1>
                <button className="btn-explore pulse" onClick={onStart}>
                    {copy[2]} <span aria-hidden="true">-&gt;</span>
                </button>
            </div>
        </div>
    );
}

function LoadingScreen({ language }) {
    const loadingText = { id: 'Menyiapkan portofolio...', en: 'Preparing portfolio...', ja: 'ポートフォリオを準備しています...' }[language];
    return (
        <div className="screen loading-screen fade-in">
            <div className="tech-loader" role="status" aria-label={loadingText}>
                <div className="tech-orbit" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="tech-core" aria-hidden="true">
                    <span>&lt;</span><strong>/</strong><span>&gt;</span>
                </div>
                <div className="tech-scan" aria-hidden="true"></div>
            </div>
        </div>
    );
}

function AssetLoadingScreen({ language, isExiting }) {
    const [progress, setProgress] = useState(0);
    const copy = {
        id: { label: 'MEMUAT ASET', preparing: 'Menyiapkan antarmuka', ready: 'Sistem siap' },
        en: { label: 'LOADING ASSETS', preparing: 'Preparing interface', ready: 'System ready' },
        ja: { label: 'LOADING ASSETS', preparing: 'インターフェースを準備中', ready: 'システム準備完了' }
    }[language];

    useEffect(() => {
        const startedAt = performance.now();
        let frame;
        const updateProgress = (time) => {
            const nextProgress = Math.min(100, Math.floor(((time - startedAt) / 2550) * 100));
            setProgress(nextProgress);
            if (nextProgress < 100) frame = requestAnimationFrame(updateProgress);
        };
        frame = requestAnimationFrame(updateProgress);
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        if (isExiting) setProgress(100);
    }, [isExiting]);

    const currentTask = progress < 24
        ? 'SYS_MEM_ALLOCATING'
        : progress < 52
            ? 'FETCHING_CONTENT_DATA'
            : progress < 82
                ? 'RENDERING_COMPONENTS'
                : progress < 100 ? 'FINALIZING_INTERFACE' : 'BOOT_SEQUENCE_COMPLETE';

    return (
        <div className={`asset-loading-screen ${isExiting ? 'is-exiting' : ''}`}>
            <div className="asset-loader-grid" aria-hidden="true"></div>
            <section className="asset-loader-terminal" role="status" aria-live="polite" aria-label={`${copy.preparing} ${progress}%`}>
                <div className="asset-loader-topline">
                    <span>SYS.BOOT / PORTFOLIO</span>
                    <span>BUILD_2026.07</span>
                </div>
                <div className="asset-loader-title"><span>&gt;</span> {copy.label}<i></i></div>
                <div className="battery-loader" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}>
                    <div className="battery-loader-fill" style={{ width: `${progress}%` }}>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
                <div className="asset-loader-meta">
                    <span>{progress.toString().padStart(3, '0')}%</span>
                    <span>{progress === 100 ? copy.ready : copy.preparing}</span>
                </div>
                <div className="asset-loader-log">
                    <span>&gt;&gt; {currentTask}</span>
                    <span>&gt;&gt; 0x{Math.max(progress * 4093, 1).toString(16).toUpperCase().padStart(6, '0')}</span>
                </div>
            </section>
        </div>
    );
}

const mediaLanguages = ['id', 'en', 'ja'];

function isCustomCollectionImage(path) {
    if (typeof path !== 'string' || !path.trim()) return false;
    return !/^assets\/(experience|skills)\//i.test(path.trim());
}

function experienceMediaKey(item, index) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) return `experience-${index}`;
    return String(item.company || item.title || `experience-${index}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-');
}

function skillMediaKey(item, index) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) return `skill-${index}`;
    const value = `${item.name || item.title || ''} ${item.image || ''}`.toLowerCase();
    const aliases = [
        ['microsoft-excel', /excel/], ['microsoft-powerpoint', /powerpoint/], ['microsoft-word', /\bword\b/],
        ['canva', /canva/], ['basic-english', /english|inggris|英語/],
        ['problem-solving', /problem|pemecahan|問題/], ['computer-network', /network|jaringan|ネットワーク/],
        ['customer-communication', /customer|pelanggan|顧客/], ['stock-management', /stock|stok|在庫/],
        ['programming', /program|pemrogram|プログラ/]
    ];
    return aliases.find(([, pattern]) => pattern.test(value))?.[0] || `skill-${index}`;
}

function collectionWithSharedImages(portfolioContent, language, type) {
    const selectedItems = portfolioContent?.languages?.[language]?.[type];
    if (!Array.isArray(selectedItems)) return selectedItems;
    const keyFor = type === 'jobs' ? experienceMediaKey : skillMediaKey;
    const sharedImages = new Map();

    mediaLanguages.forEach((code) => {
        const items = portfolioContent?.languages?.[code]?.[type];
        if (!Array.isArray(items)) return;
        items.forEach((item, index) => {
            const collectionImage = [item?.image, item?.logo].find((image) => isCustomCollectionImage(image));
            if (item && typeof item === 'object' && !Array.isArray(item) && collectionImage) {
                const key = keyFor(item, index);
                if (!sharedImages.has(key)) sharedImages.set(key, collectionImage);
            }
        });
    });

    return selectedItems.map((item, index) => {
        if (!item || typeof item !== 'object' || Array.isArray(item)) return item;
        const sharedImage = sharedImages.get(keyFor(item, index));
        return sharedImage ? { ...item, image: sharedImage } : item;
    });
}

function sanitizeStoredContent(value) {
    if (typeof value === 'string') return /\?{2,}/.test(value) ? undefined : value;
    if (Array.isArray(value)) {
        const sanitizedItems = value.map(sanitizeStoredContent).filter((item) => item !== undefined);
        return value.length > 0 && sanitizedItems.length === 0 ? undefined : sanitizedItems;
    }
    if (value && typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value)
                .map(([key, item]) => [key, sanitizeStoredContent(item)])
                .filter(([, item]) => item !== undefined)
        );
    }
    return value;
}

function MainPortfolio({ language, onChangeLanguage, portfolioContent }) {
    const storedLanguageOverrides = sanitizeStoredContent(portfolioContent?.languages?.[language] || {});
    const sharedJobs = sanitizeStoredContent(collectionWithSharedImages(portfolioContent, language, 'jobs'));
    const sharedSkills = sanitizeStoredContent(collectionWithSharedImages(portfolioContent, language, 'skills'));
    const languageOverrides = {
        ...storedLanguageOverrides,
        ...(Array.isArray(sharedJobs) ? { jobs: sharedJobs } : {}),
        ...(Array.isArray(sharedSkills) ? { skills: sharedSkills } : {})
    };
    const t = { ...translations[language], ...languageOverrides };
    const common = {
        name: 'Difa Alfaruq',
        profession: 'Web Developer',
        profile_photo: 'foto.jpg',
        phone: '081776396965',
        email: 'alfaruqdifa1211@gmail.com',
        address: 'Papan Indah 2, Mangunjaya, Tambun Selatan, Kab. Bekasi',
        linkedin: 'https://www.linkedin.com/in/difa-alfaruq-45156b312/',
        instagram: 'https://www.instagram.com/difaalfaruqq?igsh=ZXZydzVpYmlvcGRm',
        whatsapp: 'https://wa.me/6281776396965',
        cv_url: 'https://drive.google.com/file/d/1GPihzRvLOoqR0jMukVrECQ5yT0zxC3t_/view?usp=sharing',
        open_to_work_enabled: true,
        ...(portfolioContent?.common || {})
    };
    if (!common.phone || common.phone === '089634899278') common.phone = '081776396965';
    if (!common.whatsapp) common.whatsapp = 'https://wa.me/6281776396965';
    const [firstName, ...remainingName] = String(common.name || '').trim().split(/\s+/);
    const [activeSection, setActiveSection] = useState('home');
    const [showTopButton, setShowTopButton] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [footerTime, setFooterTime] = useState(() => new Date());
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);
    const [expandedExperienceIndex, setExpandedExperienceIndex] = useState(null);
    const [activeSkillCategory, setActiveSkillCategory] = useState('hard');
    const [activeProfilePhoto, setActiveProfilePhoto] = useState(0);
    const [profileTouchStart, setProfileTouchStart] = useState(null);
    const hangingCardRef = useRef(null);
    const hangingStageRef = useRef(null);
    const hangingRopeRef = useRef(null);
    const hangingRopeShadowRef = useRef(null);
    const experienceSectionRef = useRef(null);
    const experienceStickyRef = useRef(null);
    const experienceViewportRef = useRef(null);
    const experienceTrackRef = useRef(null);
    const experienceProgressRef = useRef(null);
    const configuredProfilePhotos = Array.isArray(common.profile_photos)
        ? common.profile_photos.filter((photo) => typeof photo === 'string' && photo.trim() !== '')
        : [];
    const profilePhotos = configuredProfilePhotos.length > 0
        ? configuredProfilePhotos
        : [common.profile_photo].filter(Boolean);
    const profileCarouselCopy = {
        id: { previous: 'Foto sebelumnya', next: 'Foto berikutnya', select: 'Tampilkan foto' },
        en: { previous: 'Previous photo', next: 'Next photo', select: 'Show photo' },
        ja: { previous: '前の写真', next: '次の写真', select: '写真を表示' }
    }[language];
    const cvCopy = {
        id: { download: t.downloadCv || 'Unduh CV', preview: t.previewCv || 'Pratinjau CV', title: t.cvTitle || 'Pratinjau Curriculum Vitae', close: t.closeCv || 'Tutup pratinjau CV' },
        en: { download: t.downloadCv || 'Download CV', preview: t.previewCv || 'Preview CV', title: t.cvTitle || 'Curriculum Vitae Preview', close: t.closeCv || 'Close CV preview' },
        ja: { download: t.downloadCv || 'Download CV', preview: t.previewCv || 'Preview CV', title: t.cvTitle || 'Curriculum Vitae Preview', close: t.closeCv || 'Close CV preview' }
    }[language];
    const cvDriveMatch = String(common.cv_url || '').match(/\/d\/([^/]+)/) || String(common.cv_url || '').match(/[?&]id=([^&]+)/);
    const cvDriveId = cvDriveMatch?.[1] || '';
    const cvDownloadUrl = cvDriveId
        ? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(cvDriveId)}`
        : common.cv_url;
    const cvPreviewUrl = cvDriveId
        ? `https://drive.google.com/file/d/${encodeURIComponent(cvDriveId)}/preview`
        : common.cv_url;
    const focusFallback = {
        id: { title: 'Fokus Utama & Keahlian Pendukung', items: ['Pengembangan Web', 'Pemrograman', 'Jaringan Komputer', 'IT Support & Administrasi'] },
        en: { title: 'Core Focus & Supporting Skills', items: ['Web Development', 'Programming', 'Computer Networking', 'IT Support & Administration'] },
        ja: { title: 'Core Focus & Supporting Skills', items: ['Web Development', 'Programming', 'Computer Networking', 'IT Support & Administration'] }
    }[language];
    const focusTitle = t.focusTitle || focusFallback.title;
    const focusItems = Array.isArray(t.focusItems) && t.focusItems.filter(Boolean).length
        ? t.focusItems.filter(Boolean)
        : focusFallback.items;

    useEffect(() => {
        const revealTargets = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.16 });

        revealTargets.forEach((target) => revealObserver.observe(target));

        const sectionTargets = document.querySelectorAll('[data-section]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-35% 0px -55% 0px' });

        sectionTargets.forEach((target) => sectionObserver.observe(target));

        const handleScroll = () => {
            setShowTopButton(window.scrollY > 520);
            const documentHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
            const remainingScroll = documentHeight - window.scrollY;
            const exactProgress = remainingScroll <= 2 ? 100 : (window.scrollY / documentHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, Number(exactProgress.toFixed(2)))));
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            revealObserver.disconnect();
            sectionObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const closeMobileMenu = (event) => {
            if (event.type === 'resize' && window.innerWidth <= 768) return;
            if (event.type === 'keydown' && event.key !== 'Escape') return;
            setIsMenuOpen(false);
            setIsLanguageOpen(false);
        };

        window.addEventListener('resize', closeMobileMenu);
        document.addEventListener('keydown', closeMobileMenu);

        return () => {
            window.removeEventListener('resize', closeMobileMenu);
            document.removeEventListener('keydown', closeMobileMenu);
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen || window.innerWidth > 1050) return undefined;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previousOverflow; };
    }, [isMenuOpen]);

    useEffect(() => {
        if (!selectedCertificate && !selectedSkill && !isCvPreviewOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setSelectedCertificate(null);
                setSelectedSkill(null);
                setIsCvPreviewOpen(false);
            }
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [selectedCertificate, selectedSkill, isCvPreviewOpen]);

    useEffect(() => {
        setExpandedExperienceIndex(null);
    }, [language]);

    useEffect(() => {
        const clockTimer = window.setInterval(() => setFooterTime(new Date()), 1000);
        return () => window.clearInterval(clockTimer);
    }, []);

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const magneticItems = [
            ...document.querySelectorAll('.magnetic-surface'),
            ...document.querySelectorAll('.magnetic-link')
        ];
        let animationFrame = 0;
        let pointerX = -1000;
        let pointerY = -1000;

        const resetItem = (item) => {
            item.style.setProperty('--magnetic-x', '0px');
            item.style.setProperty('--magnetic-y', '0px');
            item.classList.remove('is-magnetic');
        };

        const updateMagnet = () => {
            if (window.innerWidth <= 1050) {
                magneticItems.forEach(resetItem);
                return;
            }

            magneticItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const isLink = item.classList.contains('magnetic-link');
                const range = isLink ? 30 : 76;
                const strength = isLink ? 4 : (item.classList.contains('nav-brand') ? 9 : 6);
                const outsideX = Math.max(rect.left - pointerX, 0, pointerX - rect.right);
                const outsideY = Math.max(rect.top - pointerY, 0, pointerY - rect.bottom);
                const distance = Math.hypot(outsideX, outsideY);

                if (distance > range) {
                    resetItem(item);
                    return;
                }

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const pull = 1 - distance / range;
                const normalizedX = Math.max(-1, Math.min(1, (pointerX - centerX) / (rect.width / 2 + range)));
                const normalizedY = Math.max(-1, Math.min(1, (pointerY - centerY) / (rect.height / 2 + range)));
                item.style.setProperty('--magnetic-x', `${normalizedX * strength * pull}px`);
                item.style.setProperty('--magnetic-y', `${normalizedY * strength * pull}px`);
                item.classList.add('is-magnetic');
            });
        };

        const handlePointerMove = (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            window.cancelAnimationFrame(animationFrame);
            animationFrame = window.requestAnimationFrame(updateMagnet);
        };
        const resetAll = () => magneticItems.forEach(resetItem);

        document.addEventListener('pointermove', handlePointerMove, { passive: true });
        document.addEventListener('pointerleave', resetAll);
        window.addEventListener('blur', resetAll);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerleave', resetAll);
            window.removeEventListener('blur', resetAll);
            resetAll();
        };
    }, []);

    useEffect(() => {
        const card = hangingCardRef.current;
        const stage = hangingStageRef.current;
        const rope = hangingRopeRef.current;
        const ropeShadow = hangingRopeShadowRef.current;
        if (!card || !stage || !rope || !ropeShadow || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const motion = {
            angle: 0,
            angularVelocity: 0,
            shiftX: 0,
            shiftVelocity: 0,
            shiftY: 0,
            shiftVelocityY: 0,
            tiltX: 0,
            targetAngle: 0,
            targetShiftX: 0,
            targetShiftY: 0,
            targetTiltX: 0,
            dragging: false,
            pointerId: null,
            lastPointerX: 0,
            lastPointerY: 0,
            lastPointerTime: performance.now(),
            lastScrollY: window.scrollY,
            dragStartPointerX: 0,
            dragStartPointerY: 0,
            dragStartShiftX: 0,
            dragStartShiftY: 0,
            ropeWidth: 480,
            ropeStartOffset: 260,
            ropeBaseEndY: 420,
            ropeHeight: 650
        };
        let animationFrame = 0;

        const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
        const section = stage.closest('.about-section');

        const updateLanyardGeometry = () => {
            if (!section) return;
            const stageRect = stage.getBoundingClientRect();
            const sectionRect = section.getBoundingClientRect();
            const stagePaddingTop = Number.parseFloat(window.getComputedStyle(stage).paddingTop) || 0;
            motion.ropeWidth = stageRect.width;
            motion.ropeStartOffset = Math.max(30, stageRect.top - sectionRect.top + 4);
            motion.ropeBaseEndY = motion.ropeStartOffset + stagePaddingTop - 4;
            motion.ropeHeight = motion.ropeBaseEndY + 250;
            const ropeSvg = rope.ownerSVGElement;
            ropeSvg.style.top = `${(-motion.ropeStartOffset).toFixed(1)}px`;
            ropeSvg.style.height = `${motion.ropeHeight.toFixed(1)}px`;
            ropeSvg.setAttribute('viewBox', `0 0 ${motion.ropeWidth.toFixed(1)} ${motion.ropeHeight.toFixed(1)}`);
        };

        const animateCard = () => {
            const spring = motion.dragging ? 0.15 : 0.038;
            motion.angularVelocity += (motion.targetAngle - motion.angle) * spring;
            motion.angularVelocity *= motion.dragging ? 0.72 : 0.91;
            motion.angle = clamp(motion.angle + motion.angularVelocity, -13, 13);

            motion.shiftVelocity += (motion.targetShiftX - motion.shiftX) * (motion.dragging ? 0.12 : 0.045);
            motion.shiftVelocity *= motion.dragging ? 0.7 : 0.86;
            motion.shiftX = clamp(motion.shiftX + motion.shiftVelocity, -190, 190);
            motion.shiftVelocityY += (motion.targetShiftY - motion.shiftY) * (motion.dragging ? 0.12 : 0.042);
            motion.shiftVelocityY *= motion.dragging ? 0.7 : 0.87;
            motion.shiftY = clamp(motion.shiftY + motion.shiftVelocityY, -125, 210);
            motion.tiltX += (motion.targetTiltX - motion.tiltX) * 0.1;

            card.style.setProperty('--id-angle', `${motion.angle.toFixed(3)}deg`);
            card.style.setProperty('--id-shift-x', `${motion.shiftX.toFixed(3)}px`);
            card.style.setProperty('--id-shift-y', `${motion.shiftY.toFixed(3)}px`);
            card.style.setProperty('--id-tilt-x', `${motion.tiltX.toFixed(3)}deg`);
            card.style.setProperty('--id-strain', `${Math.min(5, Math.abs(motion.angularVelocity) * 1.4).toFixed(2)}px`);

            const startX = motion.ropeWidth / 2;
            const endX = startX + motion.shiftX;
            const endY = motion.ropeBaseEndY + motion.shiftY;
            const bend = clamp((motion.shiftVelocity * 8) + (motion.angularVelocity * 13), -52, 52);
            const controlOneX = startX + motion.shiftX * 0.08 + bend * 0.22;
            const controlOneY = Math.max(42, endY * 0.34);
            const controlTwoX = endX - motion.shiftX * 0.2 - bend;
            const controlTwoY = endY - Math.max(48, endY * 0.2);
            const ropePath = `M ${startX.toFixed(2)} 0 C ${controlOneX.toFixed(2)} ${controlOneY.toFixed(2)}, ${controlTwoX.toFixed(2)} ${controlTwoY.toFixed(2)}, ${endX.toFixed(2)} ${endY.toFixed(2)}`;
            rope.setAttribute('d', ropePath);
            ropeShadow.setAttribute('d', ropePath);
            animationFrame = window.requestAnimationFrame(animateCard);
        };

        const updatePointerTarget = (event, isDragging = motion.dragging) => {
            const rect = stage.getBoundingClientRect();
            const normalizedX = clamp((event.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width / 2, 1), -1, 1);
            const normalizedY = clamp((event.clientY - (rect.top + rect.height / 2)) / Math.max(rect.height / 2, 1), -1, 1);
            if (!isDragging) motion.targetAngle = normalizedX * 3.2;
            motion.targetTiltX = normalizedY * -3.5;
        };

        const handlePointerDown = (event) => {
            if (event.pointerType === 'touch' || event.target.closest('button')) return;
            motion.dragging = true;
            motion.pointerId = event.pointerId;
            motion.lastPointerX = event.clientX;
            motion.lastPointerY = event.clientY;
            motion.lastPointerTime = performance.now();
            motion.dragStartPointerX = event.clientX;
            motion.dragStartPointerY = event.clientY;
            motion.dragStartShiftX = motion.shiftX;
            motion.dragStartShiftY = motion.shiftY;
            card.classList.add('is-grabbed');
            card.setPointerCapture?.(event.pointerId);
            updatePointerTarget(event, true);
        };

        const handlePointerMove = (event) => {
            if (event.pointerType === 'touch') return;
            if (motion.dragging && event.pointerId !== motion.pointerId) return;

            const now = performance.now();
            const elapsed = Math.max(now - motion.lastPointerTime, 8);
            if (motion.dragging) {
                const pointerSpeedX = (event.clientX - motion.lastPointerX) / elapsed;
                const pointerSpeedY = (event.clientY - motion.lastPointerY) / elapsed;
                const maximumX = Math.max(80, Math.min(190, stage.clientWidth * 0.42));
                motion.targetShiftX = clamp(motion.dragStartShiftX + (event.clientX - motion.dragStartPointerX) * 0.88, -maximumX, maximumX);
                motion.targetShiftY = clamp(motion.dragStartShiftY + (event.clientY - motion.dragStartPointerY) * 0.88, -125, 210);
                motion.targetAngle = clamp(motion.targetShiftX * 0.035 + pointerSpeedX * 1.8, -12, 12);
                motion.shiftVelocity = clamp(motion.shiftVelocity + pointerSpeedX * 0.3, -3.2, 3.2);
                motion.shiftVelocityY = clamp(motion.shiftVelocityY + pointerSpeedY * 0.3, -3.2, 3.2);
            }
            motion.lastPointerX = event.clientX;
            motion.lastPointerY = event.clientY;
            motion.lastPointerTime = now;
            updatePointerTarget(event);
        };

        const releaseCard = (event) => {
            if (!motion.dragging || (event?.pointerId !== undefined && event.pointerId !== motion.pointerId)) return;
            motion.dragging = false;
            motion.pointerId = null;
            motion.targetAngle = 0;
            motion.targetShiftX = 0;
            motion.targetShiftY = 0;
            motion.targetTiltX = 0;
            card.classList.remove('is-grabbed');
        };

        const resetHover = () => {
            if (motion.dragging) return;
            motion.targetAngle = 0;
            motion.targetShiftX = 0;
            motion.targetShiftY = 0;
            motion.targetTiltX = 0;
        };

        const handleScrollSwing = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - motion.lastScrollY;
            motion.lastScrollY = currentScrollY;
            motion.angularVelocity = clamp(motion.angularVelocity + delta * 0.018, -2.4, 2.4);
            motion.shiftVelocity = clamp(motion.shiftVelocity + delta * 0.022, -1.8, 1.8);
            motion.shiftVelocityY = clamp(motion.shiftVelocityY - delta * 0.028, -2.4, 2.4);
        };

        card.addEventListener('pointerdown', handlePointerDown);
        card.addEventListener('pointermove', handlePointerMove);
        card.addEventListener('pointerup', releaseCard);
        card.addEventListener('pointercancel', releaseCard);
        card.addEventListener('pointerleave', resetHover);
        window.addEventListener('pointerup', releaseCard);
        window.addEventListener('scroll', handleScrollSwing, { passive: true });
        window.addEventListener('resize', updateLanyardGeometry);
        const geometryObserver = typeof ResizeObserver !== 'undefined' && section
            ? new ResizeObserver(updateLanyardGeometry)
            : null;
        geometryObserver?.observe(section);
        updateLanyardGeometry();
        animationFrame = window.requestAnimationFrame(animateCard);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            card.removeEventListener('pointerdown', handlePointerDown);
            card.removeEventListener('pointermove', handlePointerMove);
            card.removeEventListener('pointerup', releaseCard);
            card.removeEventListener('pointercancel', releaseCard);
            card.removeEventListener('pointerleave', resetHover);
            window.removeEventListener('pointerup', releaseCard);
            window.removeEventListener('scroll', handleScrollSwing);
            window.removeEventListener('resize', updateLanyardGeometry);
            geometryObserver?.disconnect();
        };
    }, []);

    useEffect(() => {
        setActiveProfilePhoto((current) => current < profilePhotos.length ? current : 0);
        if (profilePhotos.length < 2) return undefined;

        const timer = window.setInterval(() => {
            setActiveProfilePhoto((current) => (current + 1) % profilePhotos.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, [profilePhotos.length]);

    useEffect(() => {
        const section = experienceSectionRef.current;
        const sticky = experienceStickyRef.current;
        const viewport = experienceViewportRef.current;
        const track = experienceTrackRef.current;
        const progressBar = experienceProgressRef.current;
        if (!section || !sticky || !viewport || !track || !progressBar) return undefined;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let horizontalTravel = 0;
        let horizontalMode = false;
        let animationFrame = 0;

        const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

        const updateHorizontalPosition = () => {
            animationFrame = 0;
            if (!horizontalMode || horizontalTravel <= 0) {
                track.style.transform = 'translate3d(0, 0, 0)';
                progressBar.style.transform = 'scaleX(0)';
                return;
            }

            const sectionRect = section.getBoundingClientRect();
            const stickyTop = Number.parseFloat(window.getComputedStyle(sticky).top) || 0;
            const scrollRange = Math.max(section.offsetHeight - sticky.offsetHeight, 1);
            const progress = clamp((stickyTop - sectionRect.top) / scrollRange, 0, 1);
            track.style.transform = `translate3d(${(-horizontalTravel * progress).toFixed(2)}px, 0, 0)`;
            progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
        };

        const requestHorizontalUpdate = () => {
            if (animationFrame) return;
            animationFrame = window.requestAnimationFrame(updateHorizontalPosition);
        };

        const measureHorizontalSection = () => {
            horizontalMode = window.innerWidth > 1050 && !reducedMotion.matches;
            section.classList.toggle('is-horizontal-ready', horizontalMode);

            if (!horizontalMode) {
                horizontalTravel = 0;
                section.style.removeProperty('height');
                track.style.transform = 'translate3d(0, 0, 0)';
                track.style.removeProperty('--experience-center-inset');
                progressBar.style.transform = 'scaleX(0)';
                return;
            }

            const firstCard = track.querySelector('.experience-card');
            const cardWidth = firstCard?.getBoundingClientRect().width || 0;
            const centerInset = Math.max(2, (viewport.clientWidth - cardWidth) / 2);
            track.style.setProperty('--experience-center-inset', `${centerInset.toFixed(2)}px`);
            horizontalTravel = Math.max(0, track.scrollWidth - viewport.clientWidth);
            section.style.height = `${Math.ceil(sticky.offsetHeight + horizontalTravel)}px`;
            requestHorizontalUpdate();
        };

        const resizeObserver = typeof ResizeObserver !== 'undefined'
            ? new ResizeObserver(measureHorizontalSection)
            : null;
        resizeObserver?.observe(viewport);
        window.addEventListener('resize', measureHorizontalSection);
        window.addEventListener('scroll', requestHorizontalUpdate, { passive: true });
        document.fonts?.ready.then(measureHorizontalSection);
        measureHorizontalSection();

        return () => {
            window.cancelAnimationFrame(animationFrame);
            resizeObserver?.disconnect();
            window.removeEventListener('resize', measureHorizontalSection);
            window.removeEventListener('scroll', requestHorizontalUpdate);
            section.style.removeProperty('height');
            section.classList.remove('is-horizontal-ready');
            track.style.removeProperty('transform');
            progressBar.style.removeProperty('transform');
        };
    }, [language, portfolioContent]);

    const showPreviousProfilePhoto = () => {
        setActiveProfilePhoto((current) => (current - 1 + profilePhotos.length) % profilePhotos.length);
    };

    const showNextProfilePhoto = () => {
        setActiveProfilePhoto((current) => (current + 1) % profilePhotos.length);
    };

    const finishProfileSwipe = (event) => {
        if (profileTouchStart === null || profilePhotos.length < 2) return;
        const distance = event.changedTouches[0].clientX - profileTouchStart;
        if (Math.abs(distance) > 45) {
            if (distance > 0) showPreviousProfilePhoto();
            else showNextProfilePhoto();
        }
        setProfileTouchStart(null);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const highlights = [
        { value: t.statValues?.[0] || '2+', label: t.stats[0] },
        { value: t.statValues?.[1] || '7+', label: t.stats[1] },
        { value: t.statValues?.[2] || '100%', label: t.stats[2] },
    ];

    const education = (t.education || []).map((item) => Array.isArray(item)
        ? { period: item[0], status: item[1], program: item[2], school: item[3], description: item[4], logo: item[5] }
        : item);
    const experienceCopy = {
        id: { category: 'Pengalaman Kerja', detail: 'Buka detail', responsibilities: 'Tanggung jawab', close: 'Tutup detail pengalaman' },
        en: { category: 'Work Experience', detail: 'View details', responsibilities: 'Responsibilities', close: 'Close experience details' },
        ja: { category: '職務経験', detail: '詳細を見る', responsibilities: '担当業務', close: '職務経験の詳細を閉じる' }
    }[language];
    const experienceDescriptions = {
        id: [
            'Mendukung proses produksi, pengemasan, pemindahan, dan penyusunan barang dengan tetap mengikuti SOP, target kerja, dan aturan keselamatan.',
            'Menangani pelayanan pelanggan, transaksi pembayaran, laporan penjualan, pencatatan stok, dan kebutuhan operasional toko.',
            'Mendukung administrasi produksi melalui pengelolaan, pemindaian, koordinasi, dan pengarsipan dokumen operasional pabrik.'
        ],
        en: [
            'Supported production, packaging, movement, and arrangement of goods while following SOPs, work targets, and safety requirements.',
            'Handled customer service, payment transactions, sales reports, stock records, and day-to-day store operations.',
            'Supported production administration through document management, scanning, coordination, and factory operational filing.'
        ],
        ja: [
            'SOP、作業目標、安全規則に従い、生産、梱包、商品の移動と整理を支援しました。',
            '顧客対応、決済、売上報告、在庫記録、日々の店舗運営を担当しました。',
            '生産文書の管理、スキャン、調整、保管を通じて工場の生産事務を支援しました。'
        ]
    }[language];
    const experienceDetailDescriptions = {
        id: [
            'Di PT Prakarsa Alam Segar, saya mendukung kelancaran lini produksi mie instan mulai dari proses pengemasan, pemindahan kardus, hingga penataan produk di pallet. Saya terbiasa bekerja cepat dan rapi sesuai SOP, menjaga kebersihan serta keselamatan area kerja, dan berkoordinasi dengan tim produksi maupun gudang untuk mencapai target harian.',
            'Di Re.juve, saya menangani pengalaman pelanggan dari awal hingga akhir, termasuk transaksi melalui EDC, tunai, dan e-wallet, pelaksanaan program promosi, serta proses opening dan closing toko. Saya juga menyusun laporan penjualan, mencatat pergerakan stok, menyiapkan kebutuhan restock, dan memastikan operasional selalu sesuai SOP serta siap menghadapi audit.',
            'Selama menjadi Asisten Admin Produksi di Sumitomo Electric Wintec I., saya mengelola dan memindai lebih dari 200 dokumen produksi per hari, memastikan data tersusun akurat dan mudah ditemukan, serta berkoordinasi dengan tim produksi agar setiap dokumen memenuhi standar perusahaan. Pengalaman ini memperkuat ketelitian, kecepatan administrasi, dan pemahaman saya terhadap disiplin kerja serta keselamatan K3 di lingkungan pabrik.'
        ],
        en: [
            'At PT Prakarsa Alam Segar, I supported the instant-noodle production line from packaging and moving cartons to arranging finished products on pallets. I learned to work quickly and accurately within SOPs, maintain a clean and safe workspace, and coordinate with production and warehouse teams to achieve daily targets.',
            'At Re.juve, I managed the customer journey from payment through EDC, cash, and e-wallet to promotional programs and store opening and closing procedures. I also prepared sales reports, monitored stock movement, coordinated restocking needs, and kept daily operations compliant with SOPs and ready for audit.',
            'As a Production Admin Assistant at Sumitomo Electric Wintec I., I managed and scanned more than 200 production documents each day, maintained accurate and accessible records, and coordinated with production teams to ensure documentation met company standards. The role strengthened my attention to detail, administrative speed, and understanding of disciplined factory operations and workplace safety.'
        ],
        ja: [
            'PT Prakarsa Alam Segarでは、即席麺の包装、段ボールの移動、完成品のパレット配置まで、生産ラインの円滑な運営を支援しました。SOPを守りながら迅速かつ正確に作業し、清潔で安全な作業環境を維持するとともに、生産・倉庫チームと連携して日々の目標達成に取り組みました。',
            'Re.juveでは、EDC・現金・電子ウォレットによる決済から販促施策、店舗の開店・閉店業務まで、一連の顧客対応を担当しました。さらに売上報告、在庫管理、補充調整を行い、日々の店舗運営がSOPに沿い監査に対応できる状態を維持しました。',
            'Sumitomo Electric Wintec I.の生産事務アシスタントとして、1日200件以上の生産文書を管理・スキャンし、正確で検索しやすい記録を維持しました。生産チームと連携して文書を会社基準に合わせる経験を通じ、細部への注意、事務処理の速さ、工場での規律と安全への理解を高めました。'
        ]
    }[language];
    const experienceImages = [
        'assets/uploads/20260720-082534-05e6dc0432b5.webp',
        'assets/uploads/20260720-082539-9be8e6f22c3d.png',
        'assets/experience/sumitomo-electric.jpg'
    ];
    const experienceImageFor = (job, defaultJob, index) => {
        const candidates = [job.image, job.logo, defaultJob.image, defaultJob.logo].filter(Boolean);
        const customImage = candidates.find((image) => isCustomCollectionImage(image));
        if (customImage) return customImage;
        const companyIdentity = `${job.company || defaultJob.company || ''} ${job.title || defaultJob.title || ''}`;
        if (/prakarsa|\bpas\b/i.test(companyIdentity)) return experienceImages[0];
        if (/re\.?juve|sewu segar/i.test(companyIdentity)) return experienceImages[1];
        if (/sumitomo/i.test(companyIdentity)) return experienceImages[2];
        return candidates[0] || experienceImages[index] || '';
    };
    const internshipExperience = {
        id: {
            title: 'Asisten Admin Produksi', company: 'Sumitomo Electric Wintec I.', period: 'Juni 2022 - September 2022', category: 'Magang', image: 'assets/experience/sumitomo-electric.jpg',
            description: experienceDescriptions[2],
            detail: experienceDetailDescriptions[2],
            duties: ['Mengelola dokumen hasil produksi untuk mendukung administrasi operasional pabrik.', 'Membuat salinan dokumen lebih dari 200 data per hari menggunakan scanner.', 'Berkoordinasi dengan tim produksi untuk memastikan dokumen sesuai dengan standar perusahaan.', 'Menyusun dan memelihara arsip dokumen agar mudah diakses saat dibutuhkan.', 'Berpengalaman dalam bekerja di lingkungan pabrik dan memahami standar keselamatan kerja (K3).']
        },
        en: {
            title: 'Production Admin Assistant', company: 'Sumitomo Electric Wintec I.', period: 'June 2022 - September 2022', category: 'Internship', image: 'assets/experience/sumitomo-electric.jpg',
            description: experienceDescriptions[2],
            detail: experienceDetailDescriptions[2],
            duties: ['Managed production documents to support factory operational administration.', 'Scanned and copied more than 200 document records per day.', 'Coordinated with the production team to ensure documents met company standards.', 'Organized and maintained document archives for easy retrieval.', 'Gained experience in a factory environment and followed occupational safety standards.']
        },
        ja: {
            title: '生産事務アシスタント', company: 'Sumitomo Electric Wintec I.', period: '2022年6月 - 2022年9月', category: 'インターンシップ', image: 'assets/experience/sumitomo-electric.jpg',
            description: experienceDescriptions[2],
            detail: experienceDetailDescriptions[2],
            duties: ['工場運営事務を支援するため生産文書を管理。', 'スキャナーを使用して1日200件以上の文書データを複製。', '文書が会社基準を満たすよう生産チームと連携。', '必要なときに簡単に参照できるよう文書を整理・保管。', '工場環境での業務と労働安全基準を経験。']
        }
    }[language];
    const normalizedJobs = (t.jobs || []).map((item, index) => {
        const job = Array.isArray(item) ? { title: item[0], company: item[1], duties: item[2] } : item;
        const defaultItem = translations[language].jobs?.[index];
        const defaultJob = Array.isArray(defaultItem)
            ? { title: defaultItem[0], company: defaultItem[1], duties: defaultItem[2] }
            : (defaultItem || {});
        const companyParts = String(job.company || defaultJob.company || '').split('|').map((part) => part.trim()).filter(Boolean);
        const defaultCompanyParts = String(defaultJob.company || '').split('|').map((part) => part.trim()).filter(Boolean);
        return {
            ...defaultJob,
            ...job,
            title: job.title || defaultJob.title || '',
            company: companyParts[0] || defaultCompanyParts[0] || '',
            period: job.period || companyParts.slice(1).join(' | ') || defaultCompanyParts.slice(1).join(' | '),
            category: job.category || experienceCopy.category,
            image: experienceImageFor(job, defaultJob, index),
            description: job.description || experienceDescriptions[index] || (job.duties || defaultJob.duties || [])[0] || '',
            detail: job.detail || experienceDetailDescriptions[index] || (job.duties || defaultJob.duties || []).join(' '),
            duties: job.duties?.length ? job.duties : (defaultJob.duties || [])
        };
    });
    const isSumitomoExperience = (job) => /sumitomo/i.test(`${job.company} ${job.title}`);
    const hasSumitomoExperience = normalizedJobs.some(isSumitomoExperience);
    const jobs = hasSumitomoExperience
        ? normalizedJobs.map((job) => isSumitomoExperience(job) ? {
            ...internshipExperience,
            ...job,
            period: job.period || internshipExperience.period,
            category: job.category || internshipExperience.category,
            image: job.image || internshipExperience.image,
            description: job.description || internshipExperience.description,
            detail: job.detail || internshipExperience.detail,
            duties: job.duties?.length ? job.duties : internshipExperience.duties
        } : job)
        : [...normalizedJobs, internshipExperience];
    const projects = (t.projects || []).map((item, index) => {
        const project = Array.isArray(item) ? { category: item[0], title: item[1], text: item[2] } : item;
        const defaultItem = translations[language].projects?.[index];
        const fallback = Array.isArray(defaultItem)
            ? { category: defaultItem[0], title: defaultItem[1], text: defaultItem[2] }
            : (defaultItem || {});
        return {
            ...fallback,
            ...project,
            category: project.category || fallback.category || '',
            title: project.title || fallback.title || '',
            text: project.text || fallback.text || ''
        };
    });
    const certificateCopy = {
        id: { detail: 'Detail', issued: 'Tanggal terbit', number: 'Nomor sertifikat', download: 'Unduh PDF', credential: 'Lihat Credential', pending: 'Tautan credential akan ditambahkan setelah tersedia.', close: 'Tutup detail sertifikat' },
        en: { detail: 'Details', issued: 'Issued on', number: 'Certificate number', download: 'Download PDF', credential: 'View Credential', pending: 'The credential link will be added once available.', close: 'Close certificate details' },
        ja: { detail: '詳細', issued: '取得日', number: '認定番号', download: 'PDFをダウンロード', credential: 'Credential を見る', pending: 'Credential リンクは準備でき次第追加されます。', close: '認定詳細を閉じる' }
    }[language];
    const allDefaultCertificates = [
        {
            title: 'CCNA: Introduction to Networks',
            issuer: 'Cisco Networking Academy',
            date: language === 'id' ? '10 Februari 2026' : (language === 'ja' ? '2026年2月10日' : '10 February 2026'),
            image: 'assets/ccna-preview.png',
            document: 'assets/DIFA_ALFARUQ_certificate.pdf',
            certificate_number: '20260202033',
            description: language === 'id'
                ? 'Berhasil menyelesaikan CCNA: Introduction to Networks yang diselenggarakan oleh Universitas Bani Saleh melalui program Cisco Networking Academy.'
                : (language === 'ja'
                    ? 'Universitas Bani Saleh が Cisco Networking Academy プログラムを通じて提供する CCNA: Introduction to Networks を修了しました。'
                    : 'Successfully completed CCNA: Introduction to Networks, offered by Universitas Bani Saleh through the Cisco Networking Academy program.'),
            credential_url: ''
        },
        {
            title: 'Cisco IT Essentials',
            issuer: 'Cisco Networking Academy',
            date: language === 'id' ? '15 November 2025' : (language === 'ja' ? '2025年11月15日' : '15 November 2025'),
            image: 'assets/it-essentials-preview.png',
            document: 'assets/IT_Essentials_certificate_difaalfaruq-m-ubs-ac-id_0f3bf3c1-43cf-4153-88f0-9d0bd5bfded7 (2).pdf',
            certificate_number: 'ITE-2025-0891',
            description: language === 'id'
                ? 'Sertifikasi IT Essentials dari Cisco Networking Academy yang mencakup pemahaman tentang perangkat keras komputer, perangkat lunak, sistem operasi, jaringan dasar, dan troubleshooting.'
                : (language === 'ja'
                    ? 'Cisco Networking Academy による IT Essentials 認定。コンピュータハードウェア、ソフトウェア、OS、ネットワークの基礎、トラブルシューティングを網羅。'
                    : 'IT Essentials certification from Cisco Networking Academy covering computer hardware, software, operating systems, networking fundamentals, and troubleshooting.'),
            credential_url: ''
        },
        {
            title: 'Sertifikat Keahlian Jaringan BNSP',
            issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
            date: language === 'id' ? '20 Agustus 2023' : (language === 'ja' ? '2023年8月20日' : '20 August 2023'),
            image: 'assets/bnsp-preview.png',
            document: 'assets/Sertifikat Keahlian Jaringan BNSP (1).pdf',
            certificate_number: 'BNSP-TKJ-2023-551',
            description: language === 'id'
                ? 'Sertifikasi kompetensi nasional bidang Teknik Komputer dan Jaringan yang diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP) sebagai pengakuan atas keahlian operasional dan pemeliharaan jaringan.'
                : (language === 'ja'
                    ? 'インドネシア国家職業認定機関（BNSP）が発行するコンピュータ・ネットワーク工学分野の国家技能認定。'
                    : 'National competency certification in Computer and Network Engineering issued by the National Professional Certification Agency (BNSP) recognizing operational and network maintenance expertise.'),
            credential_url: ''
        }
    ];
    const storedCertifications = Array.isArray(t.certifications) && t.certifications.length > 0 ? t.certifications : [];
    const updatedStoredCertifications = storedCertifications.map(item => {
        const matchingDef = allDefaultCertificates.find(d => d.title === item.title || d.certificate_number === item.certificate_number);
        if (matchingDef) {
            return {
                ...item,
                image: matchingDef.image,
                document: item.document && !item.document.includes('drive.google.com') ? item.document : matchingDef.document
            };
        }
        return item;
    });
    const mergedCertifications = [...updatedStoredCertifications];
    allDefaultCertificates.forEach(defCert => {
        if (!mergedCertifications.some(c => c.title === defCert.title || c.certificate_number === defCert.certificate_number)) {
            mergedCertifications.push(defCert);
        }
    });
    const certifications = mergedCertifications.length > 0 ? mergedCertifications : allDefaultCertificates;
    const skillCopy = {
        id: { intro: 'Bukan sekadar daftar nama—buka setiap keahlian untuk melihat pengalaman dan cara saya menggunakannya.', hard: 'Hard Skill', soft: 'Soft Skill', since: 'Sejak', level: 'Tingkat', learned: 'Teknologi yang dipelajari', detail: 'Detail', close: 'Tutup detail keahlian', empty: 'Belum ada keahlian pada kategori ini.' },
        en: { intro: 'More than a list—open each skill to see my experience and how I use it.', hard: 'Hard Skills', soft: 'Soft Skills', since: 'Since', level: 'Level', learned: 'Technologies learned', detail: 'Details', close: 'Close skill details', empty: 'No skills have been added to this category.' },
        ja: { intro: '各スキルを開くと、経験や活用方法の詳細を確認できます。', hard: 'ハードスキル', soft: 'ソフトスキル', since: '開始年', level: 'レベル', learned: '学習した技術', detail: '詳細', close: 'スキル詳細を閉じる', empty: 'このカテゴリにはまだスキルがありません。' }
    }[language];
    const skillDescriptions = {
        id: [
            'Menggunakan Microsoft Excel untuk pencatatan, rekap penjualan, pengelolaan data stok, dan kebutuhan administrasi dasar.',
            'Menggunakan Microsoft Word untuk membuat, menyunting, dan merapikan dokumen administrasi maupun laporan.',
            'Menggunakan Microsoft PowerPoint untuk menyusun materi presentasi yang terstruktur dan mudah dipahami.',
            'Menggunakan Canva untuk membuat desain grafis sederhana, materi promosi, presentasi, dan konten visual.',
            'Memahami bahasa Inggris dasar untuk membaca instruksi, istilah teknis, dan melakukan komunikasi sederhana.',
            'Menganalisis kendala operasional secara runtut dan mencari solusi yang aman serta sesuai prosedur kerja.',
            'Memahami dasar perangkat keras komputer, jaringan, sistem operasi, serta troubleshooting dari pendidikan Teknik Komputer dan Jaringan.',
            'Berkomunikasi dengan pelanggan secara sopan dan jelas, termasuk saat melayani transaksi dan menjelaskan informasi produk.',
            'Melakukan pencatatan stok, memantau ketersediaan barang, dan melaporkan kebutuhan restock untuk mendukung operasional.',
            'Mempelajari pengembangan aplikasi dan website dari sisi antarmuka, logika program, back-end, hingga dasar pengembangan aplikasi lintas platform.'
        ],
        en: [
            'Uses Microsoft Excel for records, sales recaps, stock data management, and basic administration.',
            'Uses Microsoft Word to create, edit, and format administrative documents and reports.',
            'Uses Microsoft PowerPoint to prepare structured and easy-to-follow presentation materials.',
            'Uses Canva for simple graphic design, promotional materials, presentations, and visual content.',
            'Understands basic English for instructions, technical terms, and simple communication.',
            'Reviews operational issues methodically and looks for safe solutions that follow work procedures.',
            'Understands computer hardware, networking, operating systems, and basic troubleshooting from Computer and Network Engineering studies.',
            'Communicates politely and clearly with customers when handling transactions and product information.',
            'Records stock, monitors product availability, and reports restocking needs to support operations.',
            'Studies application and website development, covering interfaces, programming logic, back-end fundamentals, and cross-platform application development.'
        ],
        ja: [
            'Microsoft Excelを使用して、記録、売上集計、在庫データ、基本的な事務作業を行います。',
            'Microsoft Wordを使用して、文書やレポートの作成、編集、書式設定を行います。',
            'Microsoft PowerPointを使用して、分かりやすく構成されたプレゼンテーション資料を作成します。',
            'Canvaを使用して、シンプルなグラフィック、販促資料、プレゼンテーションを作成します。',
            '指示や技術用語の読解、簡単なコミュニケーションに必要な基礎英語を理解しています。',
            '業務上の問題を順序立てて分析し、手順に沿った安全な解決策を検討します。',
            'コンピュータのハードウェア、ネットワーク、OS、基本的なトラブルシューティングを理解しています。',
            '取引や商品案内の際に、顧客と丁寧かつ明確にコミュニケーションを取ります。',
            '在庫を記録し、商品状況を確認して補充の必要性を報告します。',
            'インターフェース、プログラミングロジック、バックエンド、クロスプラットフォーム開発の基礎を学んでいます。'
        ]
    }[language];
    const skillImages = [
        'assets/skills/microsoft-excel.svg', 'assets/skills/microsoft-word.svg', 'assets/skills/microsoft-powerpoint.svg',
        'assets/skills/canva.svg', 'assets/skills/basic-english.svg', 'assets/skills/problem-solving.svg',
        'assets/skills/computer-network.svg', 'assets/skills/customer-communication.svg', 'assets/skills/stock-management.svg',
        'assets/skills/programming.svg'
    ];
    const programmingTechnologies = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Node.js', 'Next.js', 'React', 'Python', 'C++', 'Flutter'];
    const programmingFallback = {
        name: language === 'ja' ? 'プログラミング' : 'Programming',
        category: 'hard',
        since: '2023',
        level: language === 'id' ? 'Menengah' : (language === 'ja' ? '中級' : 'Intermediate'),
        image: 'assets/skills/programming.svg',
        description: skillDescriptions[9],
        technologies: programmingTechnologies
    };
    const rawSkills = Array.isArray(t.skills) ? t.skills : [];
    const normalizedSkills = rawSkills.map((item, index) => {
        const savedImage = typeof item === 'object' && item ? item.image : '';
        const savedImageIndex = skillImages.indexOf(savedImage);
        const fallbackIndex = savedImageIndex >= 0 ? savedImageIndex : index;
        const translatedSkill = translations[language].skills?.[fallbackIndex];
        const fallback = {
            name: typeof item === 'string' ? item : (typeof translatedSkill === 'string' ? translatedSkill : `Skill ${index + 1}`),
            category: [5, 7].includes(fallbackIndex) ? 'soft' : 'hard',
            since: '',
            level: '',
            image: skillImages[fallbackIndex] || '',
            description: skillDescriptions[fallbackIndex] || '',
            technologies: fallbackIndex === 9 ? programmingTechnologies : []
        };
        if (typeof item === 'string') return fallback;
        const technologies = Array.isArray(item.technologies)
            ? item.technologies
            : (typeof item.technologies === 'string' ? item.technologies.split('\n').map((technology) => technology.trim()).filter(Boolean) : fallback.technologies);
        return {
            ...fallback,
            ...item,
            name: item.name || item.title || fallback.name,
            category: item.category === 'soft' ? 'soft' : 'hard',
            image: item.image || fallback.image,
            description: item.description || fallback.description,
            technologies
        };
    });
    const isProgrammingSkill = (skill) => skill.image === programmingFallback.image || /program|pemrogram|プログラ/i.test(skill.name);
    const hasProgrammingSkill = normalizedSkills.some(isProgrammingSkill);
    const skills = hasProgrammingSkill
        ? normalizedSkills.map((skill) => isProgrammingSkill(skill) ? {
            ...programmingFallback,
            ...skill,
            since: skill.since || programmingFallback.since,
            level: skill.level || programmingFallback.level,
            image: skill.image || programmingFallback.image,
            description: skill.description || programmingFallback.description,
            technologies: skill.technologies?.length ? skill.technologies : programmingTechnologies
        } : skill)
        : [...normalizedSkills, programmingFallback];
    const visibleSkills = skills.filter((skill) => skill.category === activeSkillCategory);
    const footerClock = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(footerTime).replace(/:/g, ' : ');

    const sectionIds = ['home', 'about', 'education', 'experience', 'certifications', 'skills', 'rating', 'contact'];
    const navItems = sectionIds.map((id, index) => ({ href: `#${id}`, id, label: t.nav[index] }));
    const handleAgentResult = (result) => {
        if (result.type === 'certificate') setSelectedCertificate(result.item);
        if (result.type === 'skill') setSelectedSkill(result.item);
        if (result.type === 'experience') setExpandedExperienceIndex(result.index);
        window.setTimeout(() => document.getElementById(result.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    };

    return (
        <div className="main-portfolio fade-in-up">
            <div className="top-ruler" aria-hidden="true">
                <span className="top-ruler-brand">DIFA ALFARUQ</span>
                <span className="top-ruler-track" style={{ '--scroll-progress': `${scrollProgress}%` }}>
                    {Array.from({ length: 12 }, (_, index) => <i key={index}>{(index + 1) * 100}</i>)}
                    <strong className={`top-ruler-progress ${scrollProgress === 100 ? 'is-full' : ''}`}>
                        {scrollProgress === 100 ? 'FULL' : `${Math.round(scrollProgress)}%`}
                    </strong>
                </span>
                <span className="top-ruler-status"><i></i>LIVE · {footerClock}</span>
            </div>
            <div className="navigation-shell">
                <div className="hero-availability-pill"><i></i>{t.available}</div>
                <nav className="navbar magnetic-surface">
                <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`} id="primary-navigation">
                    <div className="mobile-nav-meta" aria-hidden="true">
                        <span>Navigation Matrix</span>
                        <strong><i></i>Mobile</strong>
                    </div>
                    {navItems.map((item, index) => (
                        <a
                            className={`${activeSection === item.id ? 'active' : ''} ${item.id === 'rating' ? 'nav-rating' : ''} ${item.id === 'contact' ? 'nav-contact' : ''} magnetic-link`.trim()}
                            href={item.href}
                            key={item.id}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="mobile-nav-index">{String(index + 1).padStart(2, '0')}</span>
                            <span className="nav-label">{item.label}</span>
                            <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
                            {item.id === 'rating' && <span className="nav-link-icon" aria-hidden="true">☆</span>}
                            {item.id === 'contact' && <span className="nav-link-icon" aria-hidden="true">↗</span>}
                        </a>
                    ))}
                </div>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
                    type="button"
                    aria-label={isMenuOpen ? t.menuClose : t.menuOpen}
                    aria-controls="primary-navigation"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((currentState) => !currentState)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                </nav>
                <a className="hero-email-pill" href={`mailto:${common.email}`}><span aria-hidden="true">✉</span>{common.email}</a>
            </div>

            <header id="home" className="hero-section" data-section>
                <div className="hero-content reveal is-visible">
                    <InteractiveNameTitle firstName={firstName} remainingName={remainingName.join(' ')} />
                    <TypewriterProfession firstRole={common.profession} />
                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary">{t.contactMe}</a>
                        <div className="cv-action" role="group" aria-label={cvCopy.download}>
                            <a href={cvDownloadUrl} className="cv-download" target="_blank" rel="noreferrer">
                                <span>{cvCopy.download}</span>
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" /></svg>
                            </a>
                            <button type="button" className="cv-preview" onClick={() => setIsCvPreviewOpen(true)} aria-label={cvCopy.preview} title={cvCopy.preview}>
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.8" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="hero-stats">
                        {highlights.map((item, index) => (
                            <div className="stat-card interactive-card" key={`stat-${index}`} style={{ '--delay': `${index * 90}ms` }}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero-corner hero-corner-left"><strong>WORKING WORLDWIDE</strong><span>BEKASI BASED, ON PURPOSE</span></div>
                <div className="hero-corner hero-corner-right"><strong>OPEN FOR 2026</strong><span>YOUR TIMEZONE, HANDLED</span></div>
            </header>

            {isCvPreviewOpen && (
                <div className="cv-preview-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setIsCvPreviewOpen(false)}>
                    <section className="cv-preview-modal" role="dialog" aria-modal="true" aria-labelledby="cv-preview-title">
                        <header className="cv-preview-header">
                            <div>
                                <span>PDF / CV</span>
                                <h2 id="cv-preview-title">{cvCopy.title}</h2>
                            </div>
                            <button type="button" onClick={() => setIsCvPreviewOpen(false)} aria-label={cvCopy.close}>
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
                            </button>
                        </header>
                        <div className="cv-preview-frame">
                            <iframe src={cvPreviewUrl} title={cvCopy.title} allow="autoplay"></iframe>
                        </div>
                        <footer className="cv-preview-footer">
                            <a href={cvDownloadUrl} target="_blank" rel="noreferrer">{cvCopy.download}</a>
                        </footer>
                    </section>
                </div>
            )}

            <section id="about" className="section about-section reveal" data-section>
                <div className="section-heading">
                    <p className="eyebrow">{t.aboutEyebrow}</p>
                    <h2 className="section-title">{t.aboutTitle}</h2>
                </div>
                <div className="about-grid">
                    <div className="about-copy-column">
                        <div className="about-content">
                            <p>{t.aboutText}</p>
                        </div>
                        <div className="core-focus-block">
                            <p className="core-focus-title"><i aria-hidden="true"></i>{focusTitle}</p>
                            <div className="core-focus-list">
                                {focusItems.map((item, index) => <span key={`focus-${index}`}>{item}</span>)}
                            </div>
                        </div>
                    </div>
                    <div className="about-profile-container">
                        <div className="hanging-id-stage" ref={hangingStageRef}>
                            <svg className="id-flex-rope" aria-hidden="true" preserveAspectRatio="none">
                                <path className="id-flex-rope-shadow" ref={hangingRopeShadowRef}></path>
                                <path className="id-flex-rope-line" ref={hangingRopeRef}></path>
                            </svg>
                            <div className="hanging-id-motion" ref={hangingCardRef}>
                                <span className="id-card-clip" aria-hidden="true"><i></i></span>
                                <div className="profile-panel id-profile-card">
                                    <div className="id-card-heading">
                                        <span>PROFILE / 01</span>
                                        <strong>DIFA ALFARUQ</strong>
                                        <i aria-hidden="true"></i>
                                    </div>
                            <div
                                className="image-frame profile-carousel"
                                onTouchStart={(event) => setProfileTouchStart(event.touches[0].clientX)}
                                onTouchEnd={finishProfileSwipe}
                            >
                                {profilePhotos.length > 0 && (
                                    <img
                                        src={profilePhotos[activeProfilePhoto]}
                                                alt={`${common.name} ${activeProfilePhoto + 1}`}
                                                className="profile-photo"
                                                draggable={false}
                                                key={`${profilePhotos[activeProfilePhoto]}-${activeProfilePhoto}`}
                                        onError={(event) => { event.currentTarget.style.display = 'none'; }}
                                    />
                                )}
                                <div className="placeholder-image"><span>DA</span></div>
                                <div className="profile-image-caption">
                                    <span>NAME</span>
                                    <strong>{common.name}</strong>
                                </div>
                                {profilePhotos.length > 1 && (
                                    <>
                                        <button className="profile-carousel-arrow previous" type="button" aria-label={profileCarouselCopy.previous} onClick={showPreviousProfilePhoto}>‹</button>
                                        <button className="profile-carousel-arrow next" type="button" aria-label={profileCarouselCopy.next} onClick={showNextProfilePhoto}>›</button>
                                        <div className="profile-carousel-dots" aria-label={`${activeProfilePhoto + 1} / ${profilePhotos.length}`}>
                                            {profilePhotos.map((photo, index) => (
                                                <button
                                                    className={activeProfilePhoto === index ? 'active' : ''}
                                                    type="button"
                                                    aria-label={`${profileCarouselCopy.select} ${index + 1}`}
                                                    aria-current={activeProfilePhoto === index ? 'true' : undefined}
                                                    onClick={() => setActiveProfilePhoto(index)}
                                                    key={`${photo}-${index}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                                    </div>
                                    <div className="id-card-footer">
                                        <span><i className="availability-dot"></i>{common.open_to_work_enabled !== false ? 'AVAILABLE' : 'PROFILE'}</span>
                                        <strong>{common.profession}</strong>
                                        <small>{t.infoValues[0]}</small>
                                    </div>
                                </div>
                                <span className="id-drag-hint" aria-hidden="true">DRAG FREELY</span>
                            </div>
                        </div>
                        <div className="profile-meta-grid">
                            {common.open_to_work_enabled !== false && (
                                <div className="profile-meta-card">
                                    <span>STATUS</span>
                                    <strong><i className="availability-dot"></i>Available</strong>
                                </div>
                            )}
                            <div className="profile-meta-card">
                                <span>LOCATION</span>
                                <strong>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                                    {t.infoValues[0]}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education" className="section education-section reveal" data-section>
                <div className="section-heading">
                    <p className="eyebrow">{t.educationEyebrow}</p>
                    <h2 className="section-title">{t.educationTitle}</h2>
                </div>
                <div className="education-list">
                    {education.map((item, index) => (
                        <article className="education-card interactive-card" key={item.school} style={{ '--delay': `${index * 110}ms` }}>
                            <div className="education-logo">
                                <img src={item.logo} alt={`Logo ${item.school}`} />
                            </div>
                            <div className="education-content">
                                <div className="education-meta">
                                    <span>{item.period}</span>
                                    <small>{item.status}</small>
                                </div>
                                <h3>{item.program}</h3>
                                <h4>{item.school}</h4>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="experience" className="section experience-section reveal" data-section ref={experienceSectionRef}>
                <div className="experience-sticky" ref={experienceStickyRef}>
                    <div className="experience-horizontal-header">
                        <div className="section-heading">
                            <p className="eyebrow">{t.historyEyebrow}</p>
                            <h2 className="section-title">{t.historyTitle}</h2>
                        </div>
                    </div>
                    <div className="experience-scroll-viewport" ref={experienceViewportRef}>
                        <div className="experience-timeline" ref={experienceTrackRef}>
                        {jobs.map((job, index) => {
                        const isExpanded = expandedExperienceIndex === index;
                        const detailId = `experience-detail-${index}`;
                        return (
                        <article className={`experience-card interactive-card ${isExpanded ? 'is-expanded' : ''}`} key={`experience-${index}`} style={{ '--delay': `${index * 100}ms` }}>
                            <span className="experience-dot" aria-hidden="true"></span>
                            <div className="experience-card-shell">
                            <div className="experience-card-main">
                                <span className="experience-card-index">{String(index + 1).padStart(2, '0')}</span>
                                <div className="experience-card-content">
                                    <span className="experience-card-meta">
                                        {job.period && <time>{job.period}</time>}
                                    </span>
                                    <h3 className="experience-title">{job.title}</h3>
                                    <p className="experience-company">{job.company}</p>
                                    {job.description && <p className="experience-summary">{job.description}</p>}
                                </div>
                                <div className={`experience-visual ${/prakarsa/i.test(job.company) ? 'logo-pas' : (/sumitomo/i.test(job.company) ? 'logo-sumitomo' : '')}`}>
                                    {job.image && (
                                        <img
                                            src={job.image}
                                            alt={`Logo ${job.company}`}
                                            onError={(event) => event.currentTarget.parentElement?.classList.add('is-missing')}
                                        />
                                    )}
                                    <span className="experience-logo-fallback">{job.company.charAt(0)}</span>
                                </div>
                            </div>
                            <div className="experience-card-action-row">
                                <button
                                    className="experience-detail-button"
                                    type="button"
                                    aria-expanded={isExpanded}
                                    aria-controls={detailId}
                                    onClick={() => setExpandedExperienceIndex(isExpanded ? null : index)}
                                >
                                    <span>{isExpanded ? experienceCopy.close : experienceCopy.detail}</span>
                                    <i aria-hidden="true">{isExpanded ? '−' : '↓'}</i>
                                </button>
                            </div>
                                <div className="experience-inline-detail" id={detailId} aria-hidden={!isExpanded}>
                                    <div className="experience-inline-detail-inner">
                                        <p className="experience-detail-paragraph">{job.detail}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        );
                        })}
                        </div>
                    </div>
                    <div className="experience-pan-status" aria-hidden="true">
                        <span>01</span>
                        <i><b ref={experienceProgressRef}></b></i>
                        <span>{String(jobs.length).padStart(2, '0')}</span>
                    </div>
                </div>
            </section>

            <section id="certifications" className="section certifications-section reveal" data-section>
                <div className="section-heading">
                    <p className="eyebrow">{t.certificationEyebrow}</p>
                    <h2 className="section-title">{t.certificationTitle}</h2>
                </div>
                {certifications.length > 0 ? (
                    <div className="compact-cert-grid">
                        {certifications.map((item, index) => (
                            <article
                                className="compact-cert-card"
                                key={`${item.title}-${index}`}
                                onClick={() => setSelectedCertificate(item)}
                                style={{ '--delay': `${index * 90}ms` }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCertificate(item); }}
                            >
                                <div className="compact-cert-media">
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} />
                                    ) : (
                                        <div className="compact-cert-fallback">
                                            <InterfaceIcon name="certificate" />
                                        </div>
                                    )}
                                    <span className="compact-cert-badge">{item.date}</span>
                                </div>
                                <div className="compact-cert-body">
                                    <span className="compact-cert-issuer">{item.issuer}</span>
                                    <h3 className="compact-cert-title">{item.title}</h3>
                                    <div className="compact-cert-footer">
                                        <span>{certificateCopy.detail}</span>
                                        <span aria-hidden="true" className="compact-cert-arrow">→</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="certification-empty">
                        <span className="certification-icon"><InterfaceIcon name="certificate" /></span>
                        <p>{t.certificationEmpty}</p>
                    </div>
                )}
            </section>

            {selectedCertificate && (
                <CertificateModal
                    certificate={selectedCertificate}
                    copy={certificateCopy}
                    onClose={() => setSelectedCertificate(null)}
                />
            )}

            <section id="skills" className="section skills-section reveal" data-section>
                <div className="skills-showcase-header">
                    <div className="section-heading">
                        <p className="eyebrow">{t.skillEyebrow}</p>
                        <h2 className="section-title">{t.skillTitle}</h2>
                        <p className="skills-intro">{skillCopy.intro}</p>
                    </div>
                    <div className="skill-tabs" role="tablist" aria-label={t.skillTitle}>
                        {['hard', 'soft'].map((category) => (
                            <button
                                className={activeSkillCategory === category ? 'active' : ''}
                                type="button"
                                role="tab"
                                aria-selected={activeSkillCategory === category}
                                onClick={() => setActiveSkillCategory(category)}
                                key={category}
                            >
                                <span aria-hidden="true">{category === 'hard' ? '◇' : '○'}</span>
                                {category === 'hard' ? skillCopy.hard : skillCopy.soft}
                            </button>
                        ))}
                    </div>
                </div>
                {visibleSkills.length > 0 ? (
                    <div className="skills-grid" role="tabpanel">
                        {visibleSkills.map((skill, index) => (
                            <article className="skill-card interactive-card" key={`${skill.name}-${index}`} style={{ '--delay': `${index * 55}ms` }}>
                                <div className="skill-card-icon">
                                    {skill.image ? <img src={skill.image} alt="" /> : <span aria-hidden="true">{skill.name.charAt(0)}</span>}
                                </div>
                                <div className="skill-card-content">
                                    <h3>{skill.name}</h3>
                                    {(skill.since || skill.level) && (
                                        <p>
                                            {skill.since && `${skillCopy.since} ${skill.since}`}
                                            {skill.since && skill.level && <span aria-hidden="true"> · </span>}
                                            {skill.level && skill.level}
                                        </p>
                                    )}
                                </div>
                                <button type="button" onClick={() => setSelectedSkill(skill)}>
                                    {skillCopy.detail} <span aria-hidden="true">→</span>
                                </button>
                            </article>
                        ))}
                    </div>
                ) : <p className="skills-empty">{skillCopy.empty}</p>}
            </section>

            {selectedSkill && (
                <SkillModal skill={selectedSkill} copy={skillCopy} onClose={() => setSelectedSkill(null)} />
            )}

            <RatingSection language={language} />

            <section id="contact" className="section contact-section reveal" data-section>
                <div className="section-heading">
                    <p className="eyebrow">{t.contactEyebrow}</p>
                    <h2 className="section-title">{t.contactTitle}</h2>
                </div>
                <div className="contact-panel">
                    <div className="contact-copy">
                        <p>
                            {t.contactText}
                        </p>
                        <div className="social-links" aria-label="Social media">
                            {[
                                ['LinkedIn', 'linkedin', common.linkedin],
                                ['Instagram', 'instagram', common.instagram],
                                ['WhatsApp', 'whatsapp', common.whatsapp]
                            ].map(([label, icon, url]) => (
                                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} key={label}>
                                    <InterfaceIcon name={icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="contact-info">
                        <a href={common.whatsapp} target="_blank" rel="noopener noreferrer"><strong>{t.contactLabels[0]}</strong><span>{common.phone}</span></a>
                        <a href={`mailto:${common.email}`}><strong>{t.contactLabels[1]}</strong><span>{common.email}</span></a>
                        <div><strong>{t.contactLabels[2]}</strong><span>{common.address}</span></div>
                    </div>
                </div>
            </section>

            <LocalPortfolioAgent
                language={language}
                common={common}
                education={education}
                jobs={jobs}
                projects={projects}
                certifications={certifications}
                skills={skills}
                aboutText={t.aboutText}
                onOpenResult={handleAgentResult}
            />

            <section className="preferences-section" aria-label={t.chooseLanguage}>
                <div className="preferences-controls">
                    <div className="language-control">
                        <button
                            className="language-trigger"
                            type="button"
                            aria-label={t.chooseLanguage}
                            aria-expanded={isLanguageOpen}
                            onClick={() => setIsLanguageOpen((current) => !current)}
                        >
                            <span className="language-icon"><InterfaceIcon name="language" /></span>
                            <strong>{t.code}</strong>
                            <span className={`language-chevron ${isLanguageOpen ? 'is-open' : ''}`}><InterfaceIcon name="chevron" /></span>
                        </button>
                        <div className={`language-menu ${isLanguageOpen ? 'is-open' : ''}`}>
                            {['id', 'ja', 'en'].map((code) => {
                                const option = translations[code];
                                return (
                                <button
                                    className={language === code ? 'active' : ''}
                                    type="button"
                                    key={code}
                                    onClick={() => {
                                        onChangeLanguage(code);
                                        setIsLanguageOpen(false);
                                    }}
                                >
                                    <span>{option.language}</span>
                                    <strong>{option.code}</strong>
                                </button>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

            <footer className="footer">
                <div className="footer-system-bar">
                    <div className="footer-system-status">
                        <span>SYS.STATUS:</span>
                        <strong><i aria-hidden="true"></i>ONLINE</strong>
                    </div>
                    <time dateTime={footerTime.toISOString()}>{footerClock} GMT+7</time>
                    <div className="footer-legal">
                        <p>&copy; {new Date().getFullYear()} {common.name}. {t.rights}</p>
                    </div>
                </div>
            </footer>

            <button
                className={`back-to-top ${showTopButton ? 'show' : ''}`}
                onClick={scrollToTop}
                type="button"
                aria-label={t.backTop}
            >
                ^
            </button>
        </div>
    );
}

function TypewriterProfession({ firstRole }) {
    const roles = [firstRole || 'Web Developer', 'IT Support', 'AI Enthusiast'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [visibleText, setVisibleText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        setRoleIndex(0);
        setVisibleText('');
        setIsDeleting(false);
    }, [firstRole]);

    useEffect(() => {
        if (prefersReducedMotion) {
            setVisibleText(roles[0]);
            return undefined;
        }

        const activeRole = roles[roleIndex];
        let delay = isDeleting ? 48 : 92;

        if (!isDeleting && visibleText === activeRole) {
            delay = 1700;
        } else if (isDeleting && visibleText === '') {
            delay = 380;
        }

        const timer = window.setTimeout(() => {
            if (!isDeleting && visibleText === activeRole) {
                setIsDeleting(true);
                return;
            }
            if (isDeleting && visibleText === '') {
                setIsDeleting(false);
                setRoleIndex((current) => (current + 1) % roles.length);
                return;
            }
            setVisibleText((current) => isDeleting
                ? activeRole.slice(0, Math.max(0, current.length - 1))
                : activeRole.slice(0, current.length + 1));
        }, delay);

        return () => window.clearTimeout(timer);
    }, [roleIndex, visibleText, isDeleting, firstRole, prefersReducedMotion]);

    return (
        <p className="hero-profession typewriter-profession" aria-label={roles[roleIndex]}>
            <span>{visibleText || '\u00a0'}</span>
            <i className="typewriter-cursor" aria-hidden="true"></i>
        </p>
    );
}

function LocalPortfolioAgent({ language, common, education, jobs, projects, certifications, skills, aboutText, onOpenResult }) {
    const copy = {
        id: {
            name: 'difa_agent', status: 'Lokal / Online', placeholder: 'Tanyakan isi portofolio...', send: 'Kirim', close: 'Tutup asisten lokal', open: 'Buka asisten portofolio',
            welcome: `System Online. Saya asisten lokal portofolio ${common.name}. Ketik help atau tanyakan sertifikat, pengalaman, skill, pendidikan, proyek, CV, dan kontak.`,
            help: 'Saya hanya menjawab berdasarkan isi website ini. Gunakan perintah cepat di bawah atau tulis pertanyaan seperti “Apa pengalaman Difa?” dan “Sertifikat apa yang dimiliki?”.',
            found: 'Saya menemukan data berikut di portofolio:', empty: 'Data tersebut belum saya temukan di portofolio ini.', openResult: 'Tampilkan', thinking: 'Mencari data lokal...'
        },
        en: {
            name: 'difa_agent', status: 'Local / Online', placeholder: 'Ask about this portfolio...', send: 'Send', close: 'Close local assistant', open: 'Open portfolio assistant',
            welcome: `System Online. I am ${common.name}'s local portfolio assistant. Type help or ask about certificates, experience, skills, education, projects, CV, and contact details.`,
            help: 'I only answer from the content of this website. Use a quick command below or ask a question such as “What experience does Difa have?”.',
            found: 'I found the following portfolio data:', empty: 'I could not find that information in this portfolio.', openResult: 'Show', thinking: 'Searching local data...'
        },
        ja: {
            name: 'difa_agent', status: 'Local / Online', placeholder: 'ポートフォリオについて質問...', send: 'Send', close: 'Close local assistant', open: 'Open portfolio assistant',
            welcome: `${common.name}のローカルポートフォリオアシスタントです。資格、経験、スキル、学歴、プロジェクト、CV、連絡先について質問できます。`,
            help: 'このウェブサイトに保存されている情報だけを案内します。下のコマンドを選ぶか、質問を入力してください。',
            found: 'ポートフォリオ内で次の情報が見つかりました：', empty: 'このポートフォリオでは該当情報が見つかりませんでした。', openResult: 'Show', thinking: 'Searching local data...'
        }
    }[language];
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{ role: 'agent', text: copy.welcome, results: [] }]);
    const inputRef = useRef(null);
    const logRef = useRef(null);

    useEffect(() => {
        setMessages([{ role: 'agent', text: copy.welcome, results: [] }]);
        setInput('');
    }, [language]);

    useEffect(() => {
        const handleShortcut = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
                event.preventDefault();
                setIsOpen((current) => !current);
            }
            if (event.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleShortcut);
        return () => document.removeEventListener('keydown', handleShortcut);
    }, []);

    useEffect(() => {
        if (isOpen) window.setTimeout(() => inputRef.current?.focus(), 80);
    }, [isOpen]);

    useEffect(() => {
        if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
    }, [messages, isOpen]);

    const textOf = (value) => String(value || '').toLowerCase();
    const includesAny = (query, words) => words.some((word) => query.includes(word));
    const catalogs = {
        certificates: certifications.map((item, index) => ({
            type: 'certificate', section: 'certifications', index, item,
            title: item.title, meta: [item.issuer, item.date].filter(Boolean).join(' · '),
            search: textOf([item.title, item.issuer, item.date, item.description, item.certificate_number].join(' '))
        })),
        experience: jobs.map((item, index) => ({
            type: 'experience', section: 'experience', index, item,
            title: item.title, meta: [item.company, item.period].filter(Boolean).join(' · '),
            search: textOf([item.title, item.company, item.period, item.category, item.description, ...(item.duties || [])].join(' '))
        })),
        skills: skills.map((item, index) => ({
            type: 'skill', section: 'skills', index, item,
            title: item.name, meta: [item.since && `Sejak ${item.since}`, item.level].filter(Boolean).join(' · '),
            search: textOf([item.name, item.category, item.since, item.level, item.description, ...(item.technologies || [])].join(' '))
        })),
        education: education.map((item, index) => ({
            type: 'education', section: 'education', index, item,
            title: item.program, meta: [item.school, item.period].filter(Boolean).join(' · '),
            search: textOf([item.program, item.school, item.period, item.status, item.description].join(' '))
        })),
        projects: projects.map((item, index) => ({
            type: 'project', section: 'projects', index, item,
            title: item.title, meta: item.category || '',
            search: textOf([item.title, item.category, item.text].join(' '))
        }))
    };

    const answerQuery = (rawQuery) => {
        const query = textOf(rawQuery).trim();
        if (!query) return null;
        if (includesAny(query, ['help', 'bantuan', 'tolong', './help'])) return { text: copy.help, results: [] };

        if (includesAny(query, ['siapa', 'tentang difa', 'profil', 'about difa', 'who is'])) {
            return { text: `${common.name} — ${common.profession}. ${aboutText || ''}`.trim(), results: [] };
        }

        if (includesAny(query, ['whatsapp', 'kontak', 'contact', 'telepon', 'nomor', 'email', 'alamat', 'address'])) {
            return {
                text: copy.found,
                results: [
                    { type: 'external', title: `WhatsApp · ${common.phone}`, meta: common.whatsapp, url: common.whatsapp },
                    { type: 'external', title: `Email · ${common.email}`, meta: common.email, url: `mailto:${common.email}` }
                ]
            };
        }
        if (includesAny(query, ['cv', 'resume', 'curriculum'])) {
            return { text: copy.found, results: [{ type: 'external', title: 'Curriculum Vitae', meta: common.name, url: common.cv_url }] };
        }

        let scope = null;
        if (includesAny(query, ['sertifikat', 'certificate', 'certification', 'credential', './certificates'])) scope = 'certificates';
        else if (includesAny(query, ['pengalaman', 'experience', 'kerja', 'magang', './experience'])) scope = 'experience';
        else if (includesAny(query, ['skill', 'keahlian', 'kemampuan', 'programming', 'pemrograman', './skills', './stack'])) scope = 'skills';
        else if (includesAny(query, ['pendidikan', 'education', 'kuliah', 'sekolah', 'kampus', './education'])) scope = 'education';
        else if (includesAny(query, ['proyek', 'project', 'kontribusi', './projects'])) scope = 'projects';

        const allItems = Object.values(catalogs).flat();
        const searchableWords = query.split(/\s+/).filter((word) => word.length > 2 && !['apa', 'yang', 'difa', 'saya', 'tentang', 'adalah', 'show', 'what', 'does', 'have'].includes(word));
        let results = scope ? catalogs[scope] : allItems.filter((entry) => searchableWords.some((word) => entry.search.includes(word)));
        if (scope && searchableWords.length > 0) {
            const specific = results.filter((entry) => searchableWords.some((word) => entry.search.includes(word)));
            if (specific.length > 0) results = specific;
        }
        results = results.slice(0, 6);
        return results.length ? { text: copy.found, results } : { text: copy.empty, results: [] };
    };

    const submitQuery = (queryValue) => {
        const cleanQuery = String(queryValue || '').trim();
        if (!cleanQuery) return;
        const answer = answerQuery(cleanQuery);
        setMessages((current) => [...current, { role: 'user', text: cleanQuery, results: [] }, { role: 'agent', ...answer }]);
        setInput('');
    };

    const openResult = (result) => {
        if (result.type === 'external') {
            const openedWindow = window.open(result.url, '_blank', 'noopener,noreferrer');
            if (openedWindow) openedWindow.opener = null;
        } else {
            onOpenResult(result);
        }
        setIsOpen(false);
    };

    const shortcuts = [
        ['./skills', './skills'],
        ['./certificates', './certificates'],
        ['./experience', './experience'],
        ['./contact', 'kontak whatsapp']
    ];

    return (
        <div className={`portfolio-agent ${isOpen ? 'is-open' : ''}`}>
            <button className="portfolio-agent-trigger" type="button" aria-label={copy.open} aria-expanded={isOpen} onClick={() => setIsOpen((current) => !current)}>
                <span aria-hidden="true">&gt;_</span>
            </button>
            <section className="portfolio-agent-window" role="dialog" aria-modal="false" aria-label={copy.name}>
                <header className="portfolio-agent-header">
                    <div className="agent-window-dots" aria-hidden="true"><i></i><i></i><i></i></div>
                    <strong>{copy.name}</strong>
                    <span>{copy.status}</span>
                    <kbd>Ctrl+K</kbd>
                    <button type="button" onClick={() => setIsOpen(false)} aria-label={copy.close}>×</button>
                </header>
                <div className="portfolio-agent-log" ref={logRef} aria-live="polite">
                    <p className="agent-last-login">Last login: {new Date().toLocaleDateString(language === 'id' ? 'id-ID' : 'en-GB')} on portfolio.local</p>
                    {messages.map((message, index) => (
                        <div className={`agent-message ${message.role}`} key={`agent-message-${index}`}>
                            <span className="agent-prompt" aria-hidden="true">{message.role === 'agent' ? '●' : '›'}</span>
                            <div>
                                <p>{message.text}</p>
                                {message.results?.length > 0 && (
                                    <div className="agent-results">
                                        {message.results.map((result, resultIndex) => (
                                            <button type="button" onClick={() => openResult(result)} key={`${result.type}-${result.title}-${resultIndex}`}>
                                                <span><strong>{result.title}</strong><small>{result.meta}</small></span>
                                                <b>{copy.openResult} ↗</b>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="portfolio-agent-shortcuts">
                    {shortcuts.map(([label, query]) => <button type="button" onClick={() => submitQuery(query)} key={label}>{label}</button>)}
                </div>
                <form className="portfolio-agent-input" onSubmit={(event) => { event.preventDefault(); submitQuery(input); }}>
                    <span aria-hidden="true">›</span>
                    <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} placeholder={copy.placeholder} autoComplete="off" />
                    <button type="submit" aria-label={copy.send}>↵</button>
                </form>
            </section>
        </div>
    );
}

function ExperienceModal({ experience, copy, onClose }) {
    const closeOnBackdrop = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    return (
        <div className="experience-modal-backdrop" role="presentation" onMouseDown={closeOnBackdrop}>
            <section className="experience-modal" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title">
                <button className="experience-modal-close" type="button" onClick={onClose} aria-label={copy.close} autoFocus>
                    <span aria-hidden="true">×</span>
                </button>
                <div className="experience-modal-header">
                    <div className="experience-modal-image">
                        {experience.image ? <img src={experience.image} alt="" /> : <span>{experience.company.charAt(0)}</span>}
                    </div>
                    <div>
                        <span className="experience-modal-category">{experience.category}</span>
                        <h2 id="experience-modal-title">{experience.title}</h2>
                        <h3>{experience.company}</h3>
                        {experience.period && <time>{experience.period}</time>}
                    </div>
                </div>
                {experience.description && <p className="experience-modal-description">{experience.description}</p>}
                {(experience.duties || []).length > 0 && (
                    <div className="experience-responsibilities">
                        <strong>{copy.responsibilities}</strong>
                        <ul>{experience.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
                    </div>
                )}
            </section>
        </div>
    );
}

function SkillModal({ skill, copy, onClose }) {
    const closeOnBackdrop = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    return (
        <div className="skill-modal-backdrop" role="presentation" onMouseDown={closeOnBackdrop}>
            <section className="skill-modal" role="dialog" aria-modal="true" aria-labelledby="skill-modal-title">
                <button className="skill-modal-close" type="button" onClick={onClose} aria-label={copy.close} autoFocus>
                    <span aria-hidden="true">×</span>
                </button>
                <div className="skill-modal-icon">
                    {skill.image ? <img src={skill.image} alt="" /> : <span aria-hidden="true">{skill.name.charAt(0)}</span>}
                </div>
                <span className="skill-modal-category">{skill.category === 'soft' ? copy.soft : copy.hard}</span>
                <h2 id="skill-modal-title">{skill.name}</h2>
                {skill.description && <p>{skill.description}</p>}
                {Array.isArray(skill.technologies) && skill.technologies.length > 0 && (
                    <div className="skill-technologies">
                        <strong>{copy.learned}</strong>
                        <div className="skill-technology-list">
                            {skill.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                        </div>
                    </div>
                )}
                {(skill.since || skill.level) && (
                    <dl className="skill-modal-meta">
                        {skill.since && <div><dt>{copy.since}</dt><dd>{skill.since}</dd></div>}
                        {skill.level && <div><dt>{copy.level}</dt><dd>{skill.level}</dd></div>}
                    </dl>
                )}
            </section>
        </div>
    );
}

function CertificateModal({ certificate, copy, onClose }) {
    const closeOnBackdrop = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    return (
        <div className="certificate-modal-backdrop" role="presentation" onMouseDown={closeOnBackdrop}>
            <section className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title">
                <button className="certificate-modal-close" type="button" onClick={onClose} aria-label={copy.close} autoFocus>
                    <span aria-hidden="true">×</span>
                </button>
                <div className="certificate-modal-preview">
                    {certificate.image
                        ? <img src={certificate.image} alt={`Sertifikat ${certificate.title}`} />
                        : <span className="certification-icon"><InterfaceIcon name="certificate" /></span>}
                </div>
                <div className="certificate-modal-content">
                    <span className="certificate-modal-kicker">{certificate.issuer}</span>
                    <h2 id="certificate-modal-title">{certificate.title}</h2>
                    {certificate.description && <p>{certificate.description}</p>}
                    <dl className="certificate-meta">
                        <div>
                            <dt>{copy.issued}</dt>
                            <dd>{certificate.date}</dd>
                        </div>
                        {certificate.certificate_number && (
                            <div>
                                <dt>{copy.number}</dt>
                                <dd>{certificate.certificate_number}</dd>
                            </div>
                        )}
                    </dl>
                    <div className="certificate-modal-actions">
                        {certificate.document && (
                            <a className="certificate-download-button" href={certificate.document} target="_blank" rel="noopener noreferrer">
                                {copy.download} <span aria-hidden="true">↓</span>
                            </a>
                        )}
                        {certificate.credential_url ? (
                            <a className="certificate-credential-button" href={certificate.credential_url} target="_blank" rel="noopener noreferrer">
                                {copy.credential} <span aria-hidden="true">↗</span>
                            </a>
                        ) : (
                            <button className="certificate-credential-button is-disabled" type="button" disabled title={copy.pending}>
                                {copy.credential} <span aria-hidden="true">↗</span>
                            </button>
                        )}
                    </div>
                    {!certificate.credential_url && <small className="certificate-credential-note">{copy.pending}</small>}
                </div>
            </section>
        </div>
    );
}

function RatingSection({ language }) {
    const copy = {
        id: { eyebrow: 'Rating Pengunjung', title: 'Bagikan kesan setelah melihat portofolio saya', reviews: 'ulasan', loading: 'Memuat rating pengunjung...', empty: 'Belum ada rating. Jadilah pengunjung pertama yang memberi masukan.', formTitle: 'Kasih masukan', formText: 'Rating dan pesan yang kamu kirim akan langsung ditampilkan.', stars: 'Bintang', name: 'Nama', namePlaceholder: 'Nama kamu', origin: 'Asal', originPlaceholder: 'Kota atau instansi (opsional)', message: 'Masukan', messagePlaceholder: 'Tulis kesan, kritik, atau saran', sending: 'Mengirim...', submit: 'Kirim masukan', chooseStar: 'Pilih jumlah bintang terlebih dahulu.', success: 'Terima kasih! Rating kamu berhasil ditampilkan.', loadError: 'Rating belum dapat dimuat.', submitError: 'Rating gagal dikirim.', outOf: 'dari 5 bintang' },
        en: { eyebrow: 'Visitor Ratings', title: 'Share your impression after viewing my portfolio', reviews: 'reviews', loading: 'Loading visitor ratings...', empty: 'No ratings yet. Be the first visitor to leave feedback.', formTitle: 'Leave feedback', formText: 'Your rating and message will be displayed immediately.', stars: 'Stars', name: 'Name', namePlaceholder: 'Your name', origin: 'From', originPlaceholder: 'City or organization (optional)', message: 'Feedback', messagePlaceholder: 'Write your impressions or suggestions', sending: 'Sending...', submit: 'Send feedback', chooseStar: 'Please select a star rating first.', success: 'Thank you! Your rating is now displayed.', loadError: 'Ratings could not be loaded.', submitError: 'Rating could not be sent.', outOf: 'out of 5 stars' },
        ja: { eyebrow: '訪問者の評価', title: 'ポートフォリオをご覧になった感想をお聞かせください', reviews: '件のレビュー', loading: '評価を読み込んでいます...', empty: 'まだ評価はありません。最初の感想をお寄せください。', formTitle: '感想を送る', formText: '評価とメッセージはすぐに表示されます。', stars: '星', name: 'お名前', namePlaceholder: 'お名前', origin: '所属・地域', originPlaceholder: '都市または組織（任意）', message: 'メッセージ', messagePlaceholder: '感想やご提案をご記入ください', sending: '送信中...', submit: '送信する', chooseStar: '星の数を選択してください。', success: 'ありがとうございます。評価が表示されました。', loadError: '評価を読み込めませんでした。', submitError: '評価を送信できませんでした。', outOf: '5つ星のうち' }
    }[language];
    const emptyForm = { rating: 0, name: '', origin: '', message: '' };
    const [ratings, setRatings] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [notice, setNotice] = useState({ type: '', text: '' });

    const loadRatings = async () => {
        try {
            if (window.portfolioSupabase?.configured) {
                const data = await window.portfolioSupabase.getRatings();
                setRatings(data);
            } else {
                const response = await fetch('api/ratings.php', {
                    headers: { Accept: 'application/json' },
                });
                const result = await response.json();
                if (!response.ok || !result.success) throw new Error(result.message || copy.loadError);
                setRatings(result.data);
            }
        } catch (error) {
            setNotice({ type: 'error', text: error.message });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadRatings();
    }, []);

    const updateField = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const submitRating = async (event) => {
        event.preventDefault();
        setNotice({ type: '', text: '' });

        if (form.rating < 1) {
            setNotice({ type: 'error', text: copy.chooseStar });
            return;
        }

        setSubmitting(true);

        try {
            let createdRating;
            if (window.portfolioSupabase?.configured) {
                createdRating = await window.portfolioSupabase.createRating(form);
            } else {
                const response = await fetch('api/ratings.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ ...form, rating: Number(form.rating) }),
                });
                const result = await response.json();
                if (!response.ok || !result.success) throw new Error(result.message || copy.submitError);
                createdRating = result.data;
            }
            setRatings((current) => [createdRating, ...current]);
            setForm(emptyForm);
            setNotice({ type: 'success', text: copy.success });
        } catch (error) {
            setNotice({ type: 'error', text: error.message });
        } finally {
            setSubmitting(false);
        }
    };

    const average = ratings.length
        ? (ratings.reduce((total, item) => total + Number(item.rating), 0) / ratings.length).toFixed(1)
        : '0.0';

    return (
        <section id="rating" className="section rating-section reveal" data-section>
            <div className="rating-heading">
                <div>
                    <p className="eyebrow">{copy.eyebrow}</p>
                    <h2 className="section-title">{copy.title}</h2>
                </div>
                <div className="rating-summary" aria-label={`${average} ${copy.outOf}`}>
                    <strong>{average}</strong>
                    <span className="summary-stars">★</span>
                    <small>{ratings.length} {copy.reviews}</small>
                </div>
            </div>

            <div className="rating-layout">
                <div className="rating-list" aria-live="polite">
                    {loading && <div className="rating-state">{copy.loading}</div>}
                    {!loading && ratings.length === 0 && (
                        <div className="rating-state">{copy.empty}</div>
                    )}
                    {ratings.map((item) => (
                        <article className="rating-card" key={item.id}>
                            <div className="rating-card-top">
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.origin ? `${item.origin} · ` : ''}{item.created_at}</p>
                                </div>
                                <div className="stars-display" aria-label={`${item.rating} ${copy.outOf}`}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span className={star <= item.rating ? 'filled' : ''} key={star}>★</span>
                                    ))}
                                </div>
                            </div>
                            <p className="rating-message">{item.message}</p>
                        </article>
                    ))}
                </div>

                <form className="rating-form" onSubmit={submitRating}>
                    <h3>{copy.formTitle}</h3>
                    <p>{copy.formText}</p>

                    <fieldset className="star-picker">
                        <legend>{copy.stars}</legend>
                        <div>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    className={star <= form.rating ? 'selected' : ''}
                                    key={star}
                                    onClick={() => setForm((current) => ({ ...current, rating: star }))}
                                    type="button"
                                    aria-label={`${star} ${copy.stars}`}
                                    aria-pressed={star === form.rating}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </fieldset>

                    <label>
                        <span>{copy.name}</span>
                        <input name="name" value={form.name} onChange={updateField} maxLength="80" placeholder={copy.namePlaceholder} required />
                    </label>
                    <label>
                        <span>{copy.origin}</span>
                        <input name="origin" value={form.origin} onChange={updateField} maxLength="100" placeholder={copy.originPlaceholder} />
                    </label>
                    <label>
                        <span>{copy.message}</span>
                        <textarea name="message" value={form.message} onChange={updateField} maxLength="500" rows="5" placeholder={copy.messagePlaceholder} required></textarea>
                    </label>

                    {notice.text && <div className={`form-notice ${notice.type}`}>{notice.text}</div>}

                    <button className="rating-submit" type="submit" disabled={submitting}>
                        {submitting ? copy.sending : copy.submit}
                    </button>
                </form>
            </div>
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

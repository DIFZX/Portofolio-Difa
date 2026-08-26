const { useEffect, useMemo, useRef, useState } = React;

const PROFILE = {
    name: 'Difa Alfaruq',
    email: 'alfaruqdifa1211@gmail.com',
    phone: '0817 7639 6965',
    location: 'Bekasi, Indonesia',
    address: 'Tambun Selatan, Kabupaten Bekasi',
    photo: 'assets/profile-difa.jpeg',
    campusLogo: 'assets/education/universitas-bani-saleh.png',
    cv: 'assets/CV_Difa_Alfaruq_EN.pdf',
    linkedin: 'https://www.linkedin.com/in/difa-alfaruq-45156b312/',
    instagram: 'https://www.instagram.com/difaalfaruqq?igsh=ZXZydzVpYmlvcGRm',
    whatsapp: 'https://wa.me/6281776396965'
};

const CONTENT = {
    id: {
        code: 'ID',
        documentTitle: 'Difa Alfaruq | Web Developer & IT Support',
        nav: [
            ['home', 'Beranda'],
            ['about', 'Tentang'],
            ['projects', 'Proyek'],
            ['experience', 'Pengalaman'],
            ['contact', 'Kontak']
        ],
        menu: { open: 'Buka menu', close: 'Tutup menu' },
        theme: { light: 'Aktifkan mode gelap', dark: 'Aktifkan mode terang' },
        hero: {
            tags: ['DIFA ✦', 'TEKNIK INFORMATIKA', 'WEB DEVELOPER', 'IT SUPPORT', 'IT INFRASTRUCTURE'],
            available: 'Terbuka untuk bekerja',
            based: 'Berbasis di Bekasi, ID',
            today: 'Hari ini',
            scroll: 'Gulir ke bawah',
            physicsA11y: 'Elemen interaktif. Seret, lempar, dan benturkan satu sama lain. Gunakan tombol panah atau spasi jika memakai keyboard.',
            physicsSymbolLabel: 'Objek bintang interaktif'
        },
        about: {
            title: 'Tentang Saya',
            greeting: 'Profil Singkat',
            description: 'Mahasiswa Teknik Informatika (IPK 3,74/4,00) bersertifikasi CCNA dan BNSP, dengan pengalaman lebih dari dua tahun di produksi, pergudangan, ritel, dan administrasi. Terbiasa menangani dokumentasi operasional, inventaris, proses produksi, dan kerja tim.',
            descriptionTwo: 'Memahami jaringan komputer, konfigurasi dan troubleshooting, perangkat keras, Windows/Linux, serta Microsoft Office. Adaptif, teliti, bertanggung jawab, dan berfokus pada karier di bidang IT Support, IT Infrastructure, serta Network Operations.',
            resumeDownload: 'Unduh CV',
            resumePreview: 'Lihat CV',
            handle: '@difaalfaruqq',
            online: 'Siap dihubungi',
            hire: 'Hubungi Saya',
            educationLabel: '2023 — Sekarang',
            educationStatus: 'Sedang ditempuh',
            campus: 'Universitas Bani Saleh',
            degree: 'S1 Teknik Informatika',
            gpaLabel: 'IPK',
            gpaValue: '3,74',
            gpaScale: '/ 4,00',
            courseworkLabel: 'Fokus Pembelajaran:',
            coursework: ['Pemrograman Web', 'Basis Data', 'Jaringan Komputer', 'Sistem Operasi', 'Rekayasa Perangkat Lunak'],
            stackTitle: 'Tech Stack',
            workflowTitle: 'Filosofi Kerja',
            workflow: 'Saya tidak sekadar menyelesaikan tugas; saya memetakan masalah, merapikan alur, lalu memilih alat yang paling sesuai. Bagi saya, solusi yang baik harus mudah digunakan, mudah dipelihara, dan benar-benar membantu pekerjaan sehari-hari.',
            workflowTags: ['Problem Mapping', 'Practical Solutions'],
            focusTitle: 'Fokus Saya',
            focus: 'Menggabungkan kemampuan teknis dan pengalaman operasional untuk membangun solusi web yang praktis sekaligus memberi dukungan IT yang responsif.',
            focusTags: ['Web Development', 'IT Operations']
        },
        stackGroups: [
            { title: 'Core Languages', icon: 'code', items: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL'] },
            { title: 'Frameworks & UI', icon: 'layout', items: ['React', 'Responsive Web Design'] },
            { title: 'Tools & Ecosystem', icon: 'tool', items: ['Git', 'GitHub', 'VS Code', 'Canva', 'Microsoft 365'] },
            { title: 'IT Infrastructure & Support', icon: 'network', items: ['Cisco IOS', 'MikroTik RouterOS', 'TCP/IP', 'LAN/WLAN', 'Cisco Packet Tracer', 'Windows', 'Linux', 'Hardware Troubleshooting'] }
        ],
        projects: {
            headingTop: 'Selected',
            headingBottom: 'Works',
            intro: 'Satu karya pilihan yang menunjukkan proses saya menyusun identitas, konten, interaksi, dan pengalaman pengguna dalam satu website.',
            category: 'Personal Web Portfolio',
            title: 'Portofolio Difa',
            description: 'Website portofolio satu halaman yang menampilkan profil, kemampuan web dan IT, karya pilihan, serta pengalaman kerja dalam tampilan monokrom yang responsif dan interaktif.',
            metrics: [
                ['02', 'Bahasa'],
                ['100%', 'Responsif'],
                ['01', 'Selected Work']
            ],
            tags: ['React 18', 'JSX', 'CSS3', 'Responsive UI', 'Client-side State'],
            caseStudy: 'Baca Studi Kasus',
            visit: 'Lihat Website',
            view: 'Lihat Studi Kasus',
            modalEyebrow: 'Studi Kasus / 01',
            modalIntro: 'Rombakan menyeluruh untuk mengubah portofolio lama menjadi pengalaman yang lebih fokus, modern, dan mudah dipindai oleh recruiter.',
            modalSections: [
                ['Tujuan', 'Menyatukan profil, kapabilitas web, IT infrastructure, IT support, dan pengalaman kerja ke dalam satu alur cerita yang jelas.'],
                ['Peran', 'Content structure, UI design, front-end implementation, responsive behavior, serta pengujian interaksi.'],
                ['Fitur Utama', 'Mode terang/gelap, dua bahasa, navigasi aktif, kartu interaktif, timeline pengalaman, studi kasus, dan formulir kontak berbasis email.']
            ]
        },
        experience: {
            title: 'Pengalaman Kerja',
            intro: 'Perjalanan profesional yang membentuk ketelitian, disiplin operasional, komunikasi, dan kemampuan menyelesaikan masalah.',
            archive: 'Arsip Pengalaman',
            open: 'Buka detail',
            responsibilities: 'Tanggung Jawab Utama'
        },
        jobs: [
            {
                year: '2025',
                category: 'Pengalaman Kerja',
                title: 'Helper Produksi',
                company: 'PT Prakarsa Alam Segar',
                period: 'Okt 2025 — Jan 2026',
                description: 'Mendukung proses produksi, pengemasan, pemindahan, dan penyusunan barang dengan tetap mengikuti SOP, target kerja, dan aturan keselamatan.',
                tags: ['SOP', 'K3', 'Packing', 'Teamwork'],
                image: 'assets/uploads/20260720-082534-05e6dc0432b5.webp',
                duties: [
                    'Membantu proses produksi mie instan sesuai prosedur kerja.',
                    'Memindahkan dan menyusun kardus ke pallet dengan rapi dan aman.',
                    'Membantu proses packing produk agar siap dikirim.',
                    'Menjaga kebersihan area kerja dan mematuhi aturan K3.',
                    'Berkoordinasi dengan tim produksi dan gudang untuk mencapai target harian.'
                ]
            },
            {
                year: '2024',
                category: 'Pengalaman Kerja',
                title: 'Crew Store Part Time',
                company: 'PT Sewu Segar Primatama (Re.juve)',
                period: 'Feb 2024 — Okt 2025',
                description: 'Menangani pelayanan pelanggan, transaksi pembayaran, laporan penjualan, pencatatan stok, dan kebutuhan operasional toko.',
                tags: ['Customer Service', 'POS & EDC', 'Stock Control', 'Reporting'],
                image: 'assets/uploads/20260720-082539-9be8e6f22c3d.png',
                duties: [
                    'Melayani pembayaran pelanggan melalui EDC, tunai, dan e-wallet.',
                    'Menangani opening dan closing serta program promosi toko.',
                    'Memastikan pekerjaan sesuai SOP dan membantu persiapan audit.',
                    'Membuat laporan penjualan harian, mingguan, dan bulanan.',
                    'Mencatat stok produk dan melaporkan kebutuhan restock.'
                ]
            },
            {
                year: '2022',
                category: 'Magang',
                title: 'Asisten Admin Produksi',
                company: 'Sumitomo Electric Wintec I.',
                period: 'Jun 2022 — Sep 2022',
                description: 'Mendukung administrasi produksi melalui pengelolaan, pemindaian, koordinasi, dan pengarsipan dokumen operasional pabrik.',
                tags: ['Production Admin', 'Document Control', 'Scanning', 'K3'],
                image: 'assets/experience/sumitomo-electric.jpg',
                duties: [
                    'Mengelola dokumen hasil produksi untuk mendukung administrasi pabrik.',
                    'Memindai dan membuat salinan lebih dari 200 data dokumen per hari.',
                    'Berkoordinasi dengan tim produksi agar dokumen sesuai standar perusahaan.',
                    'Menyusun dan memelihara arsip agar mudah ditemukan saat dibutuhkan.',
                    'Menerapkan standar keselamatan kerja selama berada di lingkungan pabrik.'
                ]
            }
        ],
        contact: {
            titleTop: 'Mari Mulai',
            titleBottom: 'Percakapan',
            intro: 'Saya terbuka untuk peluang kerja, kolaborasi proyek, dan diskusi seputar web development maupun IT support.',
            direct: 'Email Langsung',
            copied: 'Email disalin',
            social: 'Terhubung di Sosial Media',
            fields: { name: 'Nama Anda', email: 'Email Anda', subject: 'Subjek', message: 'Pesan' },
            placeholders: { name: 'Nama lengkap', email: 'nama@email.com', message: 'Ceritakan peluang atau kebutuhan Anda...' },
            subjects: ['Peluang Kerja', 'Kolaborasi Proyek', 'IT Support', 'Pertanyaan Umum'],
            send: 'Kirim Pesan',
            sending: 'Membuka aplikasi email...',
            rights: 'Hak cipta dilindungi.',
            remote: 'Tersedia untuk kerja onsite & remote'
        },
        modal: { close: 'Tutup dialog' },
        backTop: 'Kembali ke atas'
    },
    en: {
        code: 'EN',
        documentTitle: 'Difa Alfaruq | Web Developer & IT Support',
        nav: [
            ['home', 'Home'],
            ['about', 'About'],
            ['projects', 'Projects'],
            ['experience', 'Experience'],
            ['contact', 'Contact']
        ],
        menu: { open: 'Open menu', close: 'Close menu' },
        theme: { light: 'Enable dark mode', dark: 'Enable light mode' },
        hero: {
            tags: ['DIFA ✦', 'INFORMATICS', 'WEB DEVELOPER', 'IT SUPPORT', 'IT INFRASTRUCTURE'],
            available: 'Open to work',
            based: 'Based in Bekasi, ID',
            today: 'Today',
            scroll: 'Scroll down',
            physicsA11y: 'Interactive elements. Drag, throw, and collide them with each other. Use the arrow keys or space when using a keyboard.',
            physicsSymbolLabel: 'Interactive star object'
        },
        about: {
            title: 'About Me',
            greeting: 'Professional Profile',
            description: 'An Informatics Engineering student (GPA 3.74/4.00) with CCNA and BNSP certifications and more than two years of experience across production, warehousing, retail, and administration. Experienced in operational documentation, inventory reporting, production processes, and teamwork.',
            descriptionTwo: 'Skilled in computer networking, configuration and troubleshooting, hardware, Windows/Linux, and Microsoft Office. Adaptable, detail-oriented, responsible, and focused on IT Support, IT Infrastructure, and Network Operations.',
            resumeDownload: 'Download CV',
            resumePreview: 'View CV',
            handle: '@difaalfaruqq',
            online: 'Available',
            hire: 'Contact Me',
            educationLabel: '2023 — Present',
            educationStatus: 'In progress',
            campus: 'Universitas Bani Saleh',
            degree: 'B.Sc. Informatics Engineering',
            gpaLabel: 'GPA',
            gpaValue: '3.74',
            gpaScale: '/ 4.00',
            courseworkLabel: 'Learning Focus:',
            coursework: ['Web Programming', 'Databases', 'Computer Networks', 'Operating Systems', 'Software Engineering'],
            stackTitle: 'Tech Stack',
            workflowTitle: 'Workflow Philosophy',
            workflow: 'I do more than finish a task: I map the problem, simplify the workflow, and choose tools that fit. A good solution should be easy to use, easy to maintain, and genuinely helpful in daily work.',
            workflowTags: ['Problem Mapping', 'Practical Solutions'],
            focusTitle: 'My Focus',
            focus: 'Combining technical ability and operational experience to build practical web solutions while providing responsive IT support.',
            focusTags: ['Web Development', 'IT Operations']
        },
        stackGroups: [
            { title: 'Core Languages', icon: 'code', items: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL'] },
            { title: 'Frameworks & UI', icon: 'layout', items: ['React', 'Responsive Web Design'] },
            { title: 'Tools & Ecosystem', icon: 'tool', items: ['Git', 'GitHub', 'VS Code', 'Canva', 'Microsoft 365'] },
            { title: 'IT Infrastructure & Support', icon: 'network', items: ['Cisco IOS', 'MikroTik RouterOS', 'TCP/IP', 'LAN/WLAN', 'Cisco Packet Tracer', 'Windows', 'Linux', 'Hardware Troubleshooting'] }
        ],
        projects: {
            headingTop: 'Selected',
            headingBottom: 'Works',
            intro: 'One selected project showing how I shape identity, content, interaction, and user experience into a focused website.',
            category: 'Personal Web Portfolio',
            title: 'Difa Portfolio',
            description: 'A one-page portfolio presenting my profile, web and IT capabilities, selected work, and professional experience through a responsive, interactive monochrome interface.',
            metrics: [
                ['02', 'Languages'],
                ['100%', 'Responsive'],
                ['01', 'Selected Work']
            ],
            tags: ['React 18', 'JSX', 'CSS3', 'Responsive UI', 'Client-side State'],
            caseStudy: 'Read Case Study',
            visit: 'View Website',
            view: 'View Case Study',
            modalEyebrow: 'Case Study / 01',
            modalIntro: 'A complete redesign that turns the previous portfolio into a focused, modern experience that recruiters can scan quickly.',
            modalSections: [
                ['Objective', 'Bring my profile, web skills, IT infrastructure, IT support, and work history into one clear narrative.'],
                ['Role', 'Content structure, UI design, front-end implementation, responsive behavior, and interaction testing.'],
                ['Key Features', 'Light/dark themes, two languages, active navigation, interactive cards, an experience timeline, a case study, and an email-based contact form.']
            ]
        },
        experience: {
            title: 'Work Experience',
            intro: 'A professional journey that developed accuracy, operational discipline, communication, and practical problem-solving.',
            archive: 'Experience Archive',
            open: 'Open details',
            responsibilities: 'Key Responsibilities'
        },
        jobs: [
            {
                year: '2025',
                category: 'Work Experience',
                title: 'Production Helper',
                company: 'PT Prakarsa Alam Segar',
                period: 'Oct 2025 — Jan 2026',
                description: 'Supported production, packaging, movement, and arrangement of goods while following SOPs, work targets, and safety requirements.',
                tags: ['SOP', 'Safety', 'Packing', 'Teamwork'],
                image: 'assets/uploads/20260720-082534-05e6dc0432b5.webp',
                duties: [
                    'Supported instant noodle production according to work procedures.',
                    'Moved and arranged cartons neatly and safely on pallets.',
                    'Helped pack products so they were ready for shipment.',
                    'Maintained workspace cleanliness and followed safety rules.',
                    'Coordinated with production and warehouse teams to meet daily targets.'
                ]
            },
            {
                year: '2024',
                category: 'Work Experience',
                title: 'Part-Time Store Crew',
                company: 'PT Sewu Segar Primatama (Re.juve)',
                period: 'Feb 2024 — Oct 2025',
                description: 'Handled customer service, payment transactions, sales reports, stock records, and day-to-day store operations.',
                tags: ['Customer Service', 'POS & EDC', 'Stock Control', 'Reporting'],
                image: 'assets/uploads/20260720-082539-9be8e6f22c3d.png',
                duties: [
                    'Handled customer payments via EDC, cash, and e-wallet.',
                    'Managed store opening, closing, and promotional programs.',
                    'Ensured SOP compliance and supported audit preparation.',
                    'Prepared daily, weekly, and monthly sales reports.',
                    'Recorded stock and reported restocking requirements.'
                ]
            },
            {
                year: '2022',
                category: 'Internship',
                title: 'Production Admin Assistant',
                company: 'Sumitomo Electric Wintec I.',
                period: 'Jun 2022 — Sep 2022',
                description: 'Supported production administration through document management, scanning, coordination, and factory operational filing.',
                tags: ['Production Admin', 'Document Control', 'Scanning', 'Safety'],
                image: 'assets/experience/sumitomo-electric.jpg',
                duties: [
                    'Managed production documents to support factory administration.',
                    'Scanned and copied more than 200 document records per day.',
                    'Coordinated with production teams to meet company document standards.',
                    'Organized and maintained archives for fast retrieval.',
                    'Followed occupational safety standards in the factory environment.'
                ]
            }
        ],
        contact: {
            titleTop: "Let's Start",
            titleBottom: 'A Conversation',
            intro: 'I am open to job opportunities, project collaborations, and conversations about web development or IT support.',
            direct: 'Direct Email',
            copied: 'Email copied',
            social: 'Social Presence',
            fields: { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Message' },
            placeholders: { name: 'Full name', email: 'name@email.com', message: 'Tell me about the opportunity or your needs...' },
            subjects: ['Job Opportunity', 'Project Collaboration', 'IT Support', 'General Inquiry'],
            send: 'Send Message',
            sending: 'Opening your email app...',
            rights: 'All Rights Reserved.',
            remote: 'Available for onsite & remote work'
        },
        modal: { close: 'Close dialog' },
        backTop: 'Back to top'
    }
};

function Icon({ name, size = 20, className = '' }) {
    const paths = {
        sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
        moon: <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/>,
        menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
        close: <><path d="m6 6 12 12M18 6 6 18"/></>,
        down: <><path d="M12 5v14M5 12l7 7 7-7"/></>,
        up: <><path d="M12 19V5M5 12l7-7 7 7"/></>,
        arrow: <><path d="M7 17 17 7M7 7h10v10"/></>,
        asterisk: <><path d="M12 5v14M18 8.5 6 15.5M6 8.5l12 7"/></>,
        code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
        terminal: <><rect x="3" y="4" width="18" height="16" rx="3"/><path d="m7 9 3 3-3 3M13 15h4"/></>,
        eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>,
        layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/></>,
        tool: <><path d="M14.7 6.3a4 4 0 0 0-5-5L7.2 3.8l3 3 2.5-2.5a4 4 0 0 0 2 5L6 18l-3 3 3-1 8.7-8.7a4 4 0 0 0 0-5Z"/></>,
        network: <><rect x="3" y="3" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><path d="M6 8v4h12v4M6 12v4"/></>,
        support: <><circle cx="12" cy="12" r="9"/><path d="M8.5 10a3.5 3.5 0 0 1 7 0c0 2.5-3.5 2.2-3.5 5M12 18h.01"/></>,
        download: <><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></>,
        mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
        copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
        linkedin: <><path d="M6 9v9M6 6h.01M10 18v-5a4 4 0 0 1 8 0v5M10 9v9"/></>,
        instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
        whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M8.5 8.2c1.1 3.7 3.4 6 7 7"/></>,
        send: <><path d="m3 3 18 9-18 9 4-9-4-9Z"/><path d="M7 12h14"/></>,
        file: <><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/></>,
        pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
        briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></>
    };

    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {paths[name] || paths.asterisk}
        </svg>
    );
}

function Header({ copy, language, setLanguage, theme, setTheme, activeSection, menuOpen, setMenuOpen }) {
    return (
        <header className="site-header">
            <div className="nav-shell">
                <a className="brand-mark" href="#home" aria-label="difaalfaruqq. — Beranda" onClick={() => setMenuOpen(false)}>
                    <span>difaalfaruqq.</span>
                </a>

                <nav className="desktop-nav" aria-label="Navigasi utama">
                    {copy.nav.map(([id, label]) => (
                        <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`}>{label}</a>
                    ))}
                </nav>

                <div className="nav-actions">
                    <button
                        className="round-control"
                        type="button"
                        aria-label={copy.theme[theme]}
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        <Icon name={theme === 'light' ? 'moon' : 'sun'} size={18}/>
                    </button>
                    <button
                        className={`language-switch is-${language}`}
                        type="button"
                        aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                    >
                        <span className="language-knob" aria-hidden="true"></span>
                        <span className={language === 'id' ? 'selected' : ''}>ID</span>
                        <span className={language === 'en' ? 'selected' : ''}>EN</span>
                    </button>
                    <button
                        className="menu-control"
                        type="button"
                        aria-label={menuOpen ? copy.menu.close : copy.menu.open}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Icon name={menuOpen ? 'close' : 'menu'} size={26}/>
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
                <div className="mobile-menu-inner">
                    {copy.nav.map(([id, label], index) => (
                        <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            {label}
                        </a>
                    ))}
                    <div className="mobile-menu-footer">
                        <span>{PROFILE.email}</span>
                        <span>{PROFILE.location}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

function PhysicsTags({ content }) {
    const stageRef = useRef(null);

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return undefined;

        const allElements = Array.from(stage.querySelectorAll('[data-physics-chip]'));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const initialSlots = [
            { x: .10, y: .18, angle: -.10 },
            { x: .29, y: .08, angle: .07 },
            { x: .48, y: .16, angle: -.05 },
            { x: .66, y: .06, angle: .10 },
            { x: .84, y: .17, angle: -.08 },
            { x: .56, y: .01, angle: .03 }
        ];
        const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
        const boundaryPadding = 14;
        const maxAngularVelocity = .028;
        const normalizeAngle = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));
        let bodies = [];
        let stageWidth = 0;
        let stageHeight = 0;
        let animationFrame = 0;
        let lastFrame = performance.now();
        let activeDrag = null;
        let destroyed = false;
        let isStageVisible = true;

        const clearActiveDrag = (pointerId, stopMotion = false) => {
            if (!activeDrag || (pointerId !== undefined && activeDrag.pointerId !== pointerId)) return false;
            const drag = activeDrag;
            drag.body.dragging = false;
            drag.body.element.classList.remove('is-dragging');
            drag.body.element.style.zIndex = '';
            if (stopMotion || reduceMotion) {
                drag.body.vx = 0;
                drag.body.vy = 0;
                drag.body.angularVelocity = 0;
            }
            if (drag.body.element.hasPointerCapture?.(drag.pointerId)) {
                drag.body.element.releasePointerCapture(drag.pointerId);
            }
            activeDrag = null;
            return true;
        };

        const syncBody = (body) => {
            body.element.style.transform = `translate3d(${body.x - body.width / 2}px, ${body.y - body.height / 2}px, 0) rotate(${body.angle}rad)`;
        };

        const getBodyExtents = (body) => {
            const cosine = Math.abs(Math.cos(body.angle));
            const sine = Math.abs(Math.sin(body.angle));
            return {
                x: (body.width * cosine + body.height * sine) / 2,
                y: (body.width * sine + body.height * cosine) / 2
            };
        };

        const clampBodyCoordinate = (value, extent, stageSize) => {
            const minimum = extent + boundaryPadding;
            const maximum = stageSize - extent - boundaryPadding;
            return minimum <= maximum ? clamp(value, minimum, maximum) : stageSize / 2;
        };

        const buildBodies = () => {
            clearActiveDrag(undefined, true);
            const rect = stage.getBoundingClientRect();
            stageWidth = Math.max(1, rect.width);
            stageHeight = Math.max(1, rect.height);
            const visibleElements = allElements.filter((element) => getComputedStyle(element).display !== 'none');

            bodies = visibleElements.map((element, index) => {
                const width = element.offsetWidth;
                const height = element.offsetHeight;
                const slot = initialSlots[index % initialSlots.length];
                const body = {
                    element,
                    width,
                    height,
                    mass: clamp(width / 100, .7, 2.25),
                    x: 0,
                    y: 0,
                    vx: reduceMotion ? 0 : ((index % 3) - 1) * .45,
                    vy: reduceMotion ? 0 : -.15 * (index % 2),
                    angle: slot.angle,
                    angularVelocity: reduceMotion ? 0 : ((index % 2) ? .0025 : -.002),
                    dragging: false,
                    supported: false
                };
                const extents = getBodyExtents(body);
                body.x = clampBodyCoordinate(stageWidth * slot.x, extents.x, stageWidth);
                body.y = clampBodyCoordinate(stageHeight * slot.y + extents.y, extents.y, stageHeight);
                return body;
            });

            bodies.forEach(syncBody);
            stage.classList.add('physics-ready');
        };

        const resolveBoundaries = (body) => {
            const extents = getBodyExtents(body);
            const minimumX = extents.x + boundaryPadding;
            const maximumX = stageWidth - extents.x - boundaryPadding;
            const minimumY = extents.y + boundaryPadding;
            const maximumY = stageHeight - extents.y - boundaryPadding;
            const bounce = .32;

            if (minimumX > maximumX) {
                body.x = stageWidth / 2;
                body.vx = 0;
            } else if (body.x < minimumX) {
                const impact = Math.abs(body.vx);
                body.x = minimumX;
                body.vx = impact > .6 ? impact * bounce : 0;
                if (impact > 2) body.angularVelocity -= clamp(body.vy * .00035, -.004, .004);
            } else if (body.x > maximumX) {
                const impact = Math.abs(body.vx);
                body.x = maximumX;
                body.vx = impact > .6 ? -impact * bounce : 0;
                if (impact > 2) body.angularVelocity += clamp(body.vy * .00035, -.004, .004);
            }

            if (minimumY > maximumY) {
                body.y = stageHeight / 2;
                body.vy = 0;
                body.supported = true;
            } else if (body.y < minimumY) {
                const impact = Math.abs(body.vy);
                body.y = minimumY;
                body.vy = impact > .6 ? impact * bounce : 0;
            } else if (body.y > maximumY) {
                const impact = Math.abs(body.vy);
                body.y = maximumY;
                body.vy = impact > 1.1 ? -impact * bounce : 0;
                body.vx *= .88;
                body.angularVelocity *= .7;
                body.supported = true;
                if (Math.abs(body.vx) < .04) body.vx = 0;
                if (Math.abs(body.angularVelocity) < .0007) body.angularVelocity = 0;
            } else if (body.y >= maximumY - .4 && body.vy >= -.2) {
                body.supported = true;
            }

            body.angularVelocity = clamp(body.angularVelocity, -maxAngularVelocity, maxAngularVelocity);
        };

        const resolveCollision = (first, second) => {
            const firstExtents = getBodyExtents(first);
            const secondExtents = getBodyExtents(second);
            const deltaX = second.x - first.x;
            const deltaY = second.y - first.y;
            const overlapX = firstExtents.x + secondExtents.x - Math.abs(deltaX);
            const overlapY = firstExtents.y + secondExtents.y - Math.abs(deltaY);
            if (overlapX <= 0 || overlapY <= 0) return;

            const inverseFirst = first.dragging ? 0 : 1 / first.mass;
            const inverseSecond = second.dragging ? 0 : 1 / second.mass;
            const inverseTotal = inverseFirst + inverseSecond;
            if (!inverseTotal) return;

            if (overlapX < overlapY) {
                const normal = deltaX >= 0 ? 1 : -1;
                const correction = Math.max(0, overlapX - .12) * .78;
                first.x -= normal * correction * (inverseFirst / inverseTotal);
                second.x += normal * correction * (inverseSecond / inverseTotal);
                const relativeVelocity = (second.vx - first.vx) * normal;
                if (relativeVelocity < -.08) {
                    const restitution = Math.abs(relativeVelocity) > 4 ? .3 : .04;
                    const impulse = -(1 + restitution) * relativeVelocity / inverseTotal;
                    first.vx -= impulse * normal * inverseFirst;
                    second.vx += impulse * normal * inverseSecond;
                }
            } else {
                const normal = deltaY >= 0 ? 1 : -1;
                const correction = Math.max(0, overlapY - .12) * .78;
                first.y -= normal * correction * (inverseFirst / inverseTotal);
                second.y += normal * correction * (inverseSecond / inverseTotal);
                const relativeVelocity = (second.vy - first.vy) * normal;
                if (relativeVelocity < -.08) {
                    const restitution = Math.abs(relativeVelocity) > 4 ? .28 : .03;
                    const impulse = -(1 + restitution) * relativeVelocity / inverseTotal;
                    first.vy -= impulse * normal * inverseFirst;
                    second.vy += impulse * normal * inverseSecond;
                }

                const tangentVelocity = second.vx - first.vx;
                const frictionImpulse = clamp(tangentVelocity * .14 / inverseTotal, -1.2, 1.2);
                first.vx += frictionImpulse * inverseFirst;
                second.vx -= frictionImpulse * inverseSecond;

                if (normal > 0) first.supported = true;
                else second.supported = true;
            }

            first.angularVelocity = clamp(first.angularVelocity * .88, -maxAngularVelocity, maxAngularVelocity);
            second.angularVelocity = clamp(second.angularVelocity * .88, -maxAngularVelocity, maxAngularVelocity);
        };

        const settleSupportedRotation = (body, stepScale) => {
            const isPill = body.width > body.height * 1.3;
            if (body.dragging || !body.supported || !isPill) return;

            const angleError = -body.angle;
            body.angularVelocity += angleError * .06 * stepScale;
            body.angularVelocity *= Math.pow(.7, stepScale);
            body.angularVelocity = clamp(body.angularVelocity, -maxAngularVelocity, maxAngularVelocity);

            if (Math.abs(angleError) < .012 && Math.abs(body.angularVelocity) < .0018) {
                body.angle = 0;
                body.angularVelocity = 0;
            }
        };

        const animate = (timestamp) => {
            animationFrame = 0;
            if (destroyed || !isStageVisible) return;
            const frameScale = clamp((timestamp - lastFrame) / 16.667, .35, 2);
            const substeps = 3;
            const stepScale = frameScale / substeps;
            lastFrame = timestamp;

            for (let step = 0; step < substeps; step += 1) {
                bodies.forEach((body) => { body.supported = false; });
                bodies.forEach((body) => {
                    if (body.dragging) return;
                    body.vy += (reduceMotion ? 0 : .21) * stepScale;
                    body.vx *= Math.pow(.996, stepScale);
                    body.vy *= Math.pow(.999, stepScale);
                    body.angularVelocity = clamp(
                        body.angularVelocity * Math.pow(.985, stepScale),
                        -maxAngularVelocity,
                        maxAngularVelocity
                    );
                    body.x += body.vx * stepScale;
                    body.y += body.vy * stepScale;
                    body.angle = normalizeAngle(body.angle + body.angularVelocity * stepScale);
                    resolveBoundaries(body);
                });

                for (let solverPass = 0; solverPass < 4; solverPass += 1) {
                    for (let firstIndex = 0; firstIndex < bodies.length; firstIndex += 1) {
                        for (let secondIndex = firstIndex + 1; secondIndex < bodies.length; secondIndex += 1) {
                            resolveCollision(bodies[firstIndex], bodies[secondIndex]);
                        }
                    }
                    bodies.forEach(resolveBoundaries);
                }

                bodies.forEach((body) => {
                    settleSupportedRotation(body, stepScale);
                    resolveBoundaries(body);
                });
            }

            bodies.forEach(syncBody);
            animationFrame = requestAnimationFrame(animate);
        };

        const localPointer = (event) => {
            const rect = stage.getBoundingClientRect();
            return { x: event.clientX - rect.left, y: event.clientY - rect.top };
        };

        const pointerDownHandlers = allElements.map((element) => {
            const handler = (event) => {
                if (event.button !== undefined && event.button !== 0) return;
                if (activeDrag) return;
                const body = bodies.find((candidate) => candidate.element === element);
                if (!body) return;
                event.preventDefault();
                const point = localPointer(event);
                body.dragging = true;
                body.vx = 0;
                body.vy = 0;
                body.angularVelocity = 0;
                activeDrag = {
                    body,
                    pointerId: event.pointerId,
                    offsetX: point.x - body.x,
                    offsetY: point.y - body.y,
                    lastX: point.x,
                    lastY: point.y,
                    lastTime: event.timeStamp
                };
                element.classList.add('is-dragging');
                element.style.zIndex = '10';
                try {
                    element.setPointerCapture?.(event.pointerId);
                } catch {
                    // Global pointer listeners keep dragging functional without capture.
                }
            };
            element.addEventListener('pointerdown', handler);
            return handler;
        });

        const handlePointerMove = (event) => {
            if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;
            event.preventDefault();
            const point = localPointer(event);
            const { body } = activeDrag;
            const extents = getBodyExtents(body);
            const nextX = clampBodyCoordinate(point.x - activeDrag.offsetX, extents.x, stageWidth);
            const nextY = clampBodyCoordinate(point.y - activeDrag.offsetY, extents.y, stageHeight);
            const elapsed = Math.max(8, event.timeStamp - activeDrag.lastTime);
            body.vx = clamp((nextX - body.x) / elapsed * 16.667, -38, 38);
            body.vy = clamp((nextY - body.y) / elapsed * 16.667, -38, 38);
            body.angle = normalizeAngle(body.angle + clamp(body.vx * .0014, -.026, .026));
            body.angularVelocity = clamp(body.vx * .0011, -maxAngularVelocity, maxAngularVelocity);
            body.x = nextX;
            body.y = nextY;
            resolveBoundaries(body);
            activeDrag.lastX = point.x;
            activeDrag.lastY = point.y;
            activeDrag.lastTime = event.timeStamp;
        };

        const releasePointer = (event) => {
            if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;
            const pausedBeforeRelease = event.timeStamp - activeDrag.lastTime > 90;
            clearActiveDrag(event.pointerId, pausedBeforeRelease || event.type === 'pointercancel');
        };

        const keyboardHandlers = allElements.map((element) => {
            const handler = (event) => {
                const body = bodies.find((candidate) => candidate.element === element);
                if (!body) return;
                const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Enter'];
                if (!keys.includes(event.key)) return;
                event.preventDefault();

                if (reduceMotion) {
                    const distance = 18;
                    if (event.key === 'ArrowLeft') body.x -= distance;
                    if (event.key === 'ArrowRight') body.x += distance;
                    if (event.key === 'ArrowUp' || event.key === ' ' || event.key === 'Enter') body.y -= distance;
                    if (event.key === 'ArrowDown') body.y += distance;
                    body.vx = 0;
                    body.vy = 0;
                    body.angularVelocity = 0;
                    resolveBoundaries(body);
                    syncBody(body);
                    return;
                }

                const jump = () => { body.vx += (Math.random() - .5) * 14; body.vy -= 10; };
                const actions = {
                    ArrowLeft: () => { body.vx -= 7; body.angularVelocity -= .025; },
                    ArrowRight: () => { body.vx += 7; body.angularVelocity += .025; },
                    ArrowUp: () => { body.vy -= 9; },
                    ArrowDown: () => { body.vy += 6; },
                    ' ': jump,
                    Enter: jump
                };
                actions[event.key]();
            };
            element.addEventListener('keydown', handler);
            return handler;
        });

        const resizeObserver = new ResizeObserver(() => {
            if (!stage.classList.contains('physics-ready')) return;
            buildBodies();
        });
        const intersectionObserver = 'IntersectionObserver' in window
            ? new IntersectionObserver(([entry]) => {
                const nextVisibility = entry?.isIntersecting ?? true;
                if (nextVisibility === isStageVisible) return;
                isStageVisible = nextVisibility;
                if (isStageVisible && !animationFrame) {
                    lastFrame = performance.now();
                    animationFrame = requestAnimationFrame(animate);
                } else if (!isStageVisible && animationFrame) {
                    cancelAnimationFrame(animationFrame);
                    animationFrame = 0;
                }
            })
            : null;

        window.addEventListener('pointermove', handlePointerMove, { passive: false });
        window.addEventListener('pointerup', releasePointer);
        window.addEventListener('pointercancel', releasePointer);

        const start = () => {
            if (destroyed) return;
            buildBodies();
            resizeObserver.observe(stage);
            intersectionObserver?.observe(stage);
            lastFrame = performance.now();
            animationFrame = requestAnimationFrame(animate);
        };

        if (document.fonts?.ready) document.fonts.ready.then(start);
        else requestAnimationFrame(start);

        return () => {
            destroyed = true;
            cancelAnimationFrame(animationFrame);
            clearActiveDrag(undefined, true);
            resizeObserver.disconnect();
            intersectionObserver?.disconnect();
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', releasePointer);
            window.removeEventListener('pointercancel', releasePointer);
            allElements.forEach((element, index) => {
                element.removeEventListener('pointerdown', pointerDownHandlers[index]);
                element.removeEventListener('keydown', keyboardHandlers[index]);
            });
        };
    }, [content.tags]);

    return (
        <div className="hero-tags" ref={stageRef} role="group" aria-label={content.physicsA11y}>
            <span className="sr-only" id="physics-instructions">{content.physicsA11y}</span>
            {content.tags.map((tag, index) => (
                <button
                    type="button"
                    key={tag}
                    className={`hero-tag variant-${index % 3}`}
                    data-physics-chip
                    aria-describedby="physics-instructions"
                    title={content.physicsA11y}
                >
                    {index === 2 && <Icon name="code" size={17}/>} {tag}
                </button>
            ))}
            <button type="button" className="hero-symbol" data-physics-chip aria-label={content.physicsSymbolLabel} aria-describedby="physics-instructions" title={content.physicsA11y}>
                <Icon name="asterisk" size={24}/>
            </button>
        </div>
    );
}

function Hero({ copy, language }) {
    const today = useMemo(() => new Intl.DateTimeFormat(language === 'id' ? 'id-ID' : 'en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
    }).format(new Date()).toUpperCase(), [language]);

    return (
        <section id="home" className="hero-section" data-section>
            <PhysicsTags content={copy.hero}/>

            <h1 className="hero-name" aria-label={PROFILE.name}>
                <span>DIFA</span> <span>ALFARUQ</span>
            </h1>

            <div className="hero-statusbar">
                <div className="status-available"><span className="live-dot"><i></i></span><strong>{copy.hero.available}</strong></div>
                <div>{copy.hero.based}</div>
                <div><strong>{copy.hero.today}:</strong> {today}</div>
                <a href="#about">{copy.hero.scroll}<Icon name="down" size={16}/></a>
            </div>
        </section>
    );
}

function ProfileCard({ copy }) {
    const cardRef = useRef(null);

    const handleMove = (event) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const element = cardRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
        element.style.setProperty('--tilt-x', `${y}deg`);
        element.style.setProperty('--tilt-y', `${x}deg`);
        element.style.setProperty('--glow-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
        element.style.setProperty('--glow-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
    };

    const resetTilt = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty('--tilt-x', '0deg');
        cardRef.current.style.setProperty('--tilt-y', '0deg');
    };

    return (
        <div className="profile-stage reveal">
            <div className="profile-card" ref={cardRef} onPointerMove={handleMove} onPointerLeave={resetTilt}>
                <div className="profile-glare" aria-hidden="true"></div>
                <img src={PROFILE.photo} alt="Potret Difa Alfaruq"/>
                <div className="profile-card-info">
                    <div>
                        <strong>{copy.about.handle}</strong>
                        <span><i></i>{copy.about.online}</span>
                    </div>
                    <a href="#contact">{copy.about.hire}</a>
                </div>
            </div>
        </div>
    );
}

function About({ copy }) {
    return (
        <section id="about" className="about-section page-section" data-section>
            <div className="section-container">
                <h2 className="section-title reveal">{copy.about.title}</h2>

                <div className="bento-grid">
                    <article className="bento-card intro-card reveal">
                        <div>
                            <h3>{copy.about.greeting}</h3>
                            <p>{copy.about.description}</p>
                            <p>{copy.about.descriptionTwo}</p>
                        </div>
                        <div className="resume-actions">
                            <a className="pill-button dark-button" href={PROFILE.cv} download="CV_Difa_Alfaruq_EN.pdf">
                                <Icon name="download" size={16}/>{copy.about.resumeDownload}
                            </a>
                            <a className="resume-preview-button" href={PROFILE.cv} target="_blank" rel="noopener noreferrer" aria-label={copy.about.resumePreview} title={copy.about.resumePreview}>
                                <Icon name="eye" size={19}/>
                            </a>
                        </div>
                    </article>

                    <ProfileCard copy={copy}/>

                    <article className="bento-card education-card reveal">
                        <div className="education-topline">
                            <span>{copy.about.educationLabel}</span>
                            <small>{copy.about.educationStatus}</small>
                        </div>
                        <img src={PROFILE.campusLogo} alt="Logo Universitas Bani Saleh"/>
                        <div className="education-body">
                            <h3>{copy.about.campus}</h3>
                            <h4>{copy.about.degree}</h4>
                            <p>{copy.about.courseworkLabel}</p>
                            <div className="coursework-list">
                                {copy.about.coursework.map((item) => <span key={item}>{item}</span>)}
                            </div>
                            <div className="education-gpa">
                                <strong>{copy.about.gpaValue}</strong>
                                <span><b>{copy.about.gpaLabel}</b><small>{copy.about.gpaScale}</small></span>
                            </div>
                        </div>
                    </article>

                    <article className="bento-card tech-card reveal">
                        <div className="tech-card-heading">
                            <span aria-hidden="true"><Icon name="terminal" size={22}/></span>
                            <h3>{copy.about.stackTitle}</h3>
                        </div>
                        <div className="tech-groups">
                            {copy.stackGroups.map((group) => (
                                <div className="tech-group" key={group.title}>
                                    <div className="tech-group-title"><Icon name={group.icon} size={18}/><h4>{group.title}</h4></div>
                                    <div className="tech-items">
                                        {group.items.map((item) => <span key={item}>{item}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="bento-card inverse-card workflow-card reveal">
                        <div>
                            <h3>{copy.about.workflowTitle}</h3>
                            <p>{copy.about.workflow}</p>
                        </div>
                        <div className="focus-pills">
                            {copy.about.workflowTags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                    </article>

                    <article className="bento-card inverse-card focus-card reveal">
                        <h3>{copy.about.focusTitle}</h3>
                        <p>{copy.about.focus}</p>
                        <div className="focus-pills">
                            {copy.about.focusTags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

function ProjectVisual({ compact = false }) {
    return (
        <div className={`project-visual ${compact ? 'compact' : ''}`} aria-hidden="true">
            <div className="browser-bar">
                <div className="browser-dots"><i></i><i></i><i></i></div>
                <span>difaalfaruq.portfolio</span>
                <i className="browser-live"></i>
            </div>
            <div className="browser-page">
                <div className="mini-nav"><b>DA</b><span>HOME&nbsp;&nbsp; ABOUT&nbsp;&nbsp; WORK</span><i></i></div>
                <div className="mini-tags"><span>WEB DEVELOPER</span><span>IT SUPPORT</span><span>INFRASTRUCTURE</span></div>
                <strong>DIFA<br/><em>ALFARUQ</em></strong>
                <div className="mini-grid"><i></i><i></i><i></i></div>
            </div>
        </div>
    );
}

function Projects({ copy, onOpen }) {
    const project = copy.projects;
    return (
        <section id="projects" className="projects-section inverse-section page-section" data-section>
            <div className="section-container">
                <div className="projects-heading reveal">
                    <h2>{project.headingTop}<br/>{project.headingBottom}</h2>
                    <p>{project.intro}</p>
                </div>

                <article className="selected-project reveal">
                    <div className="project-copy">
                        <span className="project-category">{project.category}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className="project-metrics">
                            {project.metrics.map(([value, label]) => (
                                <div key={label}><strong>{value}</strong><span>{label}</span></div>
                            ))}
                        </div>

                        <div className="project-tags">
                            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>

                        <div className="project-actions">
                            <button type="button" className="text-link" onClick={onOpen}><Icon name="file" size={17}/>{project.caseStudy}</button>
                            <a className="project-visit" href="#home">{project.visit}<Icon name="arrow" size={16}/></a>
                        </div>
                    </div>

                    <button type="button" className="project-preview" onClick={onOpen} aria-label={project.view}>
                        <ProjectVisual/>
                        <span><Icon name="file" size={17}/>{project.view}</span>
                    </button>
                </article>
            </div>
        </section>
    );
}

function Experience({ copy, onOpen }) {
    const timelineRef = useRef(null);
    const markerRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const timeline = timelineRef.current;
        const marker = markerRef.current;
        const progressLine = progressRef.current;

        if (!timeline || !marker || !progressLine) return undefined;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const markerStart = 12;
        let currentY = markerStart;
        let targetY = markerStart;
        let animationFrame = 0;
        let measureFrame = 0;
        let initialized = false;
        let destroyed = false;
        let timelineHeight = 1;
        let markerHeight = marker.offsetHeight;

        const paint = () => {
            const progress = Math.min(1, Math.max(0, (currentY + markerHeight * 0.5) / timelineHeight));

            marker.style.transform = `translate3d(-50%, ${currentY}px, 0)`;
            progressLine.style.transform = `scaleY(${progress})`;
        };

        const animate = () => {
            animationFrame = 0;
            if (destroyed) return;

            currentY += (targetY - currentY) * 0.2;

            if (Math.abs(targetY - currentY) < 0.1) {
                currentY = targetY;
            }

            paint();

            if (currentY !== targetY) {
                animationFrame = window.requestAnimationFrame(animate);
            }
        };

        const updateTarget = () => {
            const timelineRect = timeline.getBoundingClientRect();
            const viewportAnchor = window.innerHeight * 0.5;
            timelineHeight = Math.max(1, timelineRect.height);
            markerHeight = marker.offsetHeight;
            const progress = Math.min(1, Math.max(0, (viewportAnchor - timelineRect.top) / timelineHeight));
            const travel = Math.max(0, timelineHeight - markerHeight - markerStart);

            targetY = markerStart + progress * travel;

            if (!initialized || reduceMotion) {
                initialized = true;
                currentY = targetY;
                paint();
                return;
            }

            if (!animationFrame) {
                animationFrame = window.requestAnimationFrame(animate);
            }
        };

        const scheduleUpdate = () => {
            if (destroyed || measureFrame) return;

            measureFrame = window.requestAnimationFrame(() => {
                measureFrame = 0;
                updateTarget();
            });
        };

        const resizeObserver = 'ResizeObserver' in window
            ? new ResizeObserver(scheduleUpdate)
            : null;

        resizeObserver?.observe(timeline);
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        document.fonts?.ready?.then(scheduleUpdate);
        scheduleUpdate();

        return () => {
            destroyed = true;
            window.cancelAnimationFrame(animationFrame);
            window.cancelAnimationFrame(measureFrame);
            resizeObserver?.disconnect();
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
        };
    }, [copy.jobs.length]);

    return (
        <section id="experience" className="experience-section page-section" data-section>
            <div className="experience-grid-pattern" aria-hidden="true"></div>
            <div className="section-container">
                <div className="experience-heading reveal">
                    <h2>{copy.experience.title}</h2>
                    <p>{copy.experience.intro}</p>
                </div>

                <div className="timeline" ref={timelineRef}>
                    <div className="timeline-line" aria-hidden="true">
                        <span className="timeline-scroll-progress" ref={progressRef}></span>
                        <span className="timeline-scroll-marker" ref={markerRef}></span>
                    </div>
                    {copy.jobs.map((job, index) => (
                        <article className={`timeline-item ${index % 2 ? 'reverse' : ''} reveal`} key={`${job.company}-${job.period}`}>
                            <div className="timeline-card">
                                <div className="timeline-card-top">
                                    <span>{job.category}</span>
                                    <time>{job.period}</time>
                                </div>
                                <h3>{job.title}</h3>
                                <h4><Icon name="pin" size={14}/>{job.company}</h4>
                                <p>{job.description}</p>
                                <div className="timeline-tags">
                                    {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
                                </div>
                            </div>

                            <span className="timeline-dot" aria-hidden="true"><i></i></span>

                            <button className="experience-archive" type="button" onClick={() => onOpen(job)} aria-label={`${copy.experience.open}: ${job.title}`}>
                                <span className="archive-year">{job.year}</span>
                                <span className="archive-image"><img src={job.image} alt=""/></span>
                                <strong>{copy.experience.archive}</strong>
                                <small>{copy.experience.open}</small>
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact({ copy }) {
    const [copied, setCopied] = useState(false);
    const [sending, setSending] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(PROFILE.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch (_) {
            window.location.href = `mailto:${PROFILE.email}`;
        }
    };

    const submitMessage = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = data.get('subject');
        const body = `${copy.contact.fields.name}: ${data.get('name')}\n${copy.contact.fields.email}: ${data.get('email')}\n\n${data.get('message')}`;
        setSending(true);
        window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.setTimeout(() => setSending(false), 1800);
    };

    return (
        <section id="contact" className="contact-section inverse-section page-section" data-section>
            <div className="section-container">
                <div className="contact-grid">
                    <div className="contact-copy reveal">
                        <h2>{copy.contact.titleTop}<br/>{copy.contact.titleBottom}</h2>
                        <p>{copy.contact.intro}</p>

                        <div className="contact-block">
                            <span>{copy.contact.direct}</span>
                            <button type="button" className="email-copy" onClick={copyEmail}>
                                <i><Icon name="mail" size={20}/></i>
                                <strong>{copied ? copy.contact.copied : PROFILE.email}</strong>
                                <Icon name="copy" size={20}/>
                            </button>
                        </div>

                        <div className="contact-block">
                            <span>{copy.contact.social}</span>
                            <div className="social-links">
                                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={22}/></a>
                                <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={22}/></a>
                                <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={22}/></a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-shell reveal">
                        <form onSubmit={submitMessage}>
                            <div className="form-row">
                                <label><span>{copy.contact.fields.name}</span><input name="name" type="text" placeholder={copy.contact.placeholders.name} required/></label>
                                <label><span>{copy.contact.fields.email}</span><input name="email" type="email" placeholder={copy.contact.placeholders.email} required/></label>
                            </div>
                            <label><span>{copy.contact.fields.subject}</span>
                                <select name="subject" defaultValue={copy.contact.subjects[0]}>
                                    {copy.contact.subjects.map((subject) => <option value={subject} key={subject}>{subject}</option>)}
                                </select>
                            </label>
                            <label><span>{copy.contact.fields.message}</span><textarea name="message" rows="6" placeholder={copy.contact.placeholders.message} required></textarea></label>
                            <button className="send-button" type="submit" disabled={sending}>
                                {sending ? copy.contact.sending : copy.contact.send}<Icon name="send" size={18}/>
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="site-footer">
                    <p>© {new Date().getFullYear()} {PROFILE.name}. {copy.contact.rights}</p>
                    <div><span>{PROFILE.location}</span><span>{copy.contact.remote}</span></div>
                </footer>
            </div>
        </section>
    );
}

function ProjectModal({ copy, onClose }) {
    const dialogRef = useRef(null);
    useEffect(() => dialogRef.current?.focus(), []);

    return (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <article className="modal-dialog case-study-dialog" role="dialog" aria-modal="true" aria-labelledby="case-study-title" tabIndex="-1" ref={dialogRef}>
                <button className="modal-close" type="button" aria-label={copy.modal.close} onClick={onClose}><Icon name="close" size={23}/></button>
                <span className="modal-eyebrow">{copy.projects.modalEyebrow}</span>
                <h2 id="case-study-title">{copy.projects.title}</h2>
                <p className="modal-lead">{copy.projects.modalIntro}</p>
                <ProjectVisual compact/>
                <div className="case-sections">
                    {copy.projects.modalSections.map(([title, text]) => (
                        <section key={title}><h3>{title}</h3><p>{text}</p></section>
                    ))}
                </div>
                <div className="project-tags modal-tags">
                    {copy.projects.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
            </article>
        </div>
    );
}

function JobModal({ copy, job, onClose }) {
    const dialogRef = useRef(null);
    useEffect(() => dialogRef.current?.focus(), []);

    return (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <article className="modal-dialog job-dialog" role="dialog" aria-modal="true" aria-labelledby="job-title" tabIndex="-1" ref={dialogRef}>
                <button className="modal-close" type="button" aria-label={copy.modal.close} onClick={onClose}><Icon name="close" size={23}/></button>
                <div className="job-modal-header">
                    <div className="job-modal-logo"><img src={job.image} alt=""/></div>
                    <div>
                        <span className="modal-eyebrow">{job.category} / {job.year}</span>
                        <h2 id="job-title">{job.title}</h2>
                        <h3>{job.company}</h3>
                        <time>{job.period}</time>
                    </div>
                </div>
                <p className="modal-lead">{job.description}</p>
                <div className="responsibility-list">
                    <h3>{copy.experience.responsibilities}</h3>
                    <ul>{job.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
                </div>
                <div className="timeline-tags modal-tags">
                    {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
            </article>
        </div>
    );
}

function App() {
    const [language, setLanguageState] = useState(() => {
        const stored = localStorage.getItem('difa-language');
        return stored === 'en' ? 'en' : 'id';
    });
    const [theme, setThemeState] = useState(() => localStorage.getItem('difa-theme') === 'dark' ? 'dark' : 'light');
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(false);
    const [activeJob, setActiveJob] = useState(null);
    const [showBackTop, setShowBackTop] = useState(false);
    const copy = CONTENT[language];

    const setLanguage = (value) => {
        localStorage.setItem('difa-language', value);
        setLanguageState(value);
    };

    const setTheme = (value) => {
        localStorage.setItem('difa-theme', value);
        setThemeState(value);
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.lang = language;
        document.title = copy.documentTitle;
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#050505' : '#ffffff');
    }, [theme, language, copy.documentTitle]);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        const resetToHero = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        resetToHero();
        const frame = window.requestAnimationFrame(resetToHero);
        const timer = window.setTimeout(resetToHero, 120);
        return () => {
            window.cancelAnimationFrame(frame);
            window.clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('[data-section]'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.reveal'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -50px' });
        elements.forEach((element, index) => {
            element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
            observer.observe(element);
        });
        return () => observer.disconnect();
    }, [language]);

    useEffect(() => {
        const onScroll = () => setShowBackTop(window.scrollY > 900);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const modalOpen = projectOpen || Boolean(activeJob);
        document.body.classList.toggle('no-scroll', menuOpen || modalOpen);
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                setProjectOpen(false);
                setActiveJob(null);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.classList.remove('no-scroll');
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [menuOpen, projectOpen, activeJob]);

    return (
        <>
            <Header
                copy={copy}
                language={language}
                setLanguage={setLanguage}
                theme={theme}
                setTheme={setTheme}
                activeSection={activeSection}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <main>
                <Hero copy={copy} language={language}/>
                <About copy={copy}/>
                <Projects copy={copy} onOpen={() => setProjectOpen(true)}/>
                <Experience copy={copy} onOpen={setActiveJob}/>
                <Contact copy={copy}/>
            </main>

            <button
                className={`back-to-top ${showBackTop ? 'visible' : ''}`}
                type="button"
                aria-label={copy.backTop}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <Icon name="up" size={18}/>
            </button>

            {projectOpen && <ProjectModal copy={copy} onClose={() => setProjectOpen(false)}/>}
            {activeJob && <JobModal copy={copy} job={activeJob} onClose={() => setActiveJob(null)}/>}
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

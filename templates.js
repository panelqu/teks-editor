// templates.js - Full Version Pro Template untuk Pro Code Studio
const PRO_CODE_TEMPLATES = {
    landingPage: {
        name: "Landing Page Full Version (Commercial Pro)",
        description: "Template web lengkap: Hero, Fitur, Spesifikasi, Testimoni, FAQ, dan Tombol WhatsApp.",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultimate Product - Solusi Bisnis Modern</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Top Notification Bar -->
    <div class="top-bar">
        🔥 Promo Spesial Hari Ini: Diskon 50% + Garansi Uang Kembali!
    </div>

    <!-- Header / Navbar -->
    <header class="navbar">
        <div class="logo">Pro<span>Studio</span></div>
        <nav class="nav-links">
            <a href="#fitur">Fitur</a>
            <a href="#spesifikasi">Spesifikasi</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">FAQ</a>
        </nav>
        <a href="#pesan" class="nav-cta">Pesan Sekarang</a>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <div class="hero-text">
                <span class="badge">Terlaris #1 di Indonesia</span>
                <h1>Tingkatkan Omset Bisnis Anda Tanpa Ribet</h1>
                <p>Platform digital pintar yang dirancang khusus untuk membantu pebisnis pemula hingga profesional melipatgandakan penjualan dalam hitungan hari.</p>
                <div class="hero-btns">
                    <a href="#pesan" class="btn-main">Pesan Sekarang Juga</a>
                    <a href="#fitur" class="btn-sub">Pelajari Fitur</a>
                </div>
                <div class="hero-stats">
                    <div><strong>10.000+</strong> Pengguna Aktif</div>
                    <div><strong>4.9/5.0</strong> Rating Kepuasan</div>
                </div>
            </div>
            <div class="hero-card-box">
                <div class="preview-mockup">
                    <h3>🚀 Live System Preview</h3>
                    <p>Performa super cepat, aman, dan siap pakai untuk semua jenis perangkat.</p>
                    <div class="mockup-badge">100% Responsive</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Fitur Utama -->
    <section id="fitur" class="section">
        <div class="section-title">
            <h2>Fitur Unggulan Kelas Dunia</h2>
            <p>Dirancang dengan teknologi modern untuk memberikan pengalaman terbaik.</p>
        </div>
        <div class="grid-3">
            <div class="card">
                <div class="icon">⚡</div>
                <h3>Super Cepat</h3>
                <p>Waktu muat halaman kurang dari 1 detik, membuat pelanggan tidak sabar meninggalkan website Anda.</p>
            </div>
            <div class="card">
                <div class="icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>Tampilan otomatis menyesuaikan secara sempurna di layar HP, tablet, maupun laptop.</p>
            </div>
            <div class="card">
                <div class="icon">🔒</div>
                <h3>Keamanan Tinggi</h3>
                <p>Dilindungi sistem enkripsi mutakhir untuk menjaga keamanan data transaksi dan privasi.</p>
            </div>
        </div>
    </section>

    <!-- Spesifikasi / Kelebihan -->
    <section id="spesifikasi" class="section bg-light">
        <div class="section-title">
            <h2>Kenapa Harus Memilih Kami?</h2>
            <p>Perbandingan keunggulan produk kami dibandingkan kompetitor di luar sana.</p>
        </div>
        <div class="spec-container">
            <div class="spec-item">✔️ Setup Mudah dalam 5 Menit Tanpa Coding</div>
            <div class="spec-item">✔️ Gratis Panduan & Modul Pembelajaran Lengkap</div>
            <div class="spec-item">✔️ Update Fitur Berkala Selamanya Tanpa Biaya Tambahan</div>
            <div class="spec-item">✔️ Layanan Bantuan Konsultasi via WhatsApp</div>
        </div>
    </section>

    <!-- Testimoni Pelanggan -->
    <section id="testimoni" class="section">
        <div class="section-title">
            <h2>Apa Kata Mereka yang Sudah Memakai?</h2>
            <p>Testimoni nyata dari para pelaku usaha yang sukses berkembang.</p>
        </div>
        <div class="grid-2">
            <div class="testi-card">
                <p>"Sangat luar biasa! Penjualan toko online saya naik 300% dalam bulan pertama menggunakan sistem ini. Sangat direkomendasikan!"</p>
                <h4>— Rian Pratama, Owner Fashion Store</h4>
            </div>
            <div class="testi-card">
                <p>"Dukungan pelayanannya sangat ramah dan responsif. Semua kendala dibantu sampai beres. Terbaik pokoknya!"</p>
                <h4>— Dewi Lestari, Digital Creator</h4>
            </div>
        </div>
    </section>

    <!-- FAQ (Pertanyaan yang Sering Diajukan) -->
    <section id="faq" class="section bg-light">
        <div class="section-title">
            <h2>Pertanyaan yang Sering Diajukan</h2>
            <p>Temukan jawaban cepat seputar produk dan layanan kami.</p>
        </div>
        <div class="faq-list">
            <div class="faq-item">
                <h4>Bagaimana cara pemesanannya?</h4>
                <p>Anda cukup mengklik tombol pesanan WhatsApp di bawah, lalu kirimkan format pemesanan kepada admin kami.</p>
            </div>
            <div class="faq-item">
                <h4>Apakah cocok untuk pemula?</h4>
                <p>Sangat cocok! Sistem dirancang agar bisa digunakan oleh siapa saja tanpa harus memiliki keahlian teknis.</p>
            </div>
        </div>
    </section>

    <!-- Call to Action / Pesan -->
    <section id="pesan" class="cta-section">
        <h2>Amankan Promo Diskon 50% Sekarang!</h2>
        <p>Jangan tunggu harga naik atau kehabisan slot kuota promo hari ini.</p>
        <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20ingin%20memesan%20produk%20full%20version%20ini." class="btn-whatsapp" target="_blank">
            💬 Pesan Cepat via WhatsApp
        </a>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2026 ProStudio. Hak Cipta Dilindungi Undang-Undang.</p>
    </footer>

</body>
</html>`,
            "style.css": `/* Global Reset */
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
body { background: #ffffff; color: #334155; line-height: 1.6; scroll-behavior: smooth; }

/* Top Bar */
.top-bar { background: #4f46e5; color: white; text-align: center; padding: 0.5rem; font-size: 0.85rem; font-weight: 600; }

/* Navbar */
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 7%; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000; }
.logo { font-size: 1.4rem; font-weight: bold; color: #0f172a; }
.logo span { color: #4f46e5; }
.nav-links { display: flex; gap: 2rem; }
.nav-links a { text-decoration: none; color: #64748b; font-weight: 500; font-size: 0.95rem; transition: color 0.2s; }
.nav-links a:hover { color: #4f46e5; }
.nav-cta { background: #4f46e5; color: white; padding: 0.5rem 1.2rem; border-radius: 6px; text-decoration: none; font-size: 0.9rem; font-weight: 600; }

/* Hero Section */
.hero { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 5rem 7%; }
.hero-container { display: flex; align-items: center; justify-content: space-between; gap: 3rem; flex-wrap: wrap; }
.hero-text { flex: 1; min-width: 300px; }
.badge { background: #334155; color: #38bdf8; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
.hero h1 { font-size: 2.8rem; margin: 1rem 0; line-height: 1.2; color: #f8fafc; }
.hero p { color: #94a3b8; font-size: 1.1rem; margin-bottom: 2rem; }
.hero-btns { display: flex; gap: 1rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
.btn-main { background: #10b981; color: white; padding: 0.8rem 1.8rem; border-radius: 8px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 14px rgba(16,185,129,0.4); }
.btn-main:hover { background: #059669; }
.btn-sub { background: rgba(255,255,255,0.1); color: white; padding: 0.8rem 1.8rem; border-radius: 8px; text-decoration: none; font-weight: bold; border: 1px solid rgba(255,255,255,0.2); }
.hero-stats { display: flex; gap: 2rem; font-size: 0.9rem; color: #cbd5e1; }
.hero-card-box { flex: 1; min-width: 280px; display: flex; justify-content: center; }
.preview-mockup { background: #334155; padding: 2.5rem; border-radius: 16px; border: 1px solid #475569; text-align: center; width: 100%; max-width: 380px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); }
.preview-mockup h3 { color: #38bdf8; margin-bottom: 1rem; }
.preview-mockup p { color: #cbd5e1; font-size: 0.9rem; margin-bottom: 1.5rem; }
.mockup-badge { background: #0f172a; color: #34d399; display: inline-block; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: bold; }

/* Sections */
.section { padding: 5rem 7%; }
.section.bg-light { background: #f8fafc; }
.section-title { text-align: center; max-width: 600px; margin: 0 auto 3rem; }
.section-title h2 { font-size: 2.2rem; color: #0f172a; margin-bottom: 0.5rem; }
.section-title p { color: #64748b; }

/* Grid Layouts */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 900px; margin: 0 auto; }

/* Cards */
.card { background: white; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.02); transition: transform 0.2s; }
.card:hover { transform: translateY(-5px); }
.card .icon { font-size: 2rem; margin-bottom: 1rem; }
.card h3 { color: #0f172a; margin-bottom: 0.5rem; }
.card p { color: #64748b; font-size: 0.95rem; }

/* Spec Container */
.spec-container { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
.spec-item { background: white; padding: 1.2rem 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; font-weight: 600; color: #1e293b; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }

/* Testimonials */
.testi-card { background: white; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.testi-card p { font-style: italic; color: #475569; margin-bottom: 1rem; }
.testi-card h4 { color: #0f172a; font-size: 0.9rem; }

/* FAQ */
.faq-list { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
.faq-item { background: white; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; }
.faq-item h4 { color: #0f172a; margin-bottom: 0.5rem; }
.faq-item p { color: #64748b; font-size: 0.95rem; }

/* CTA Section */
.cta-section { background: #4f46e5; color: white; text-align: center; padding: 5rem 1.5rem; }
.cta-section h2 { font-size: 2.5rem; margin-bottom: 1rem; }
.cta-section p { color: #e0e7ff; margin-bottom: 2rem; font-size: 1.1rem; }
.btn-whatsapp { display: inline-block; background: #22c55e; color: white; padding: 1rem 2.5rem; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 1.1rem; box-shadow: 0 10px 20px rgba(0,0,0,0.15); transition: background 0.2s; }
.btn-whatsapp:hover { background: #16a34a; }

/* Footer */
footer { text-align: center; padding: 2rem; background: #020617; color: #64748b; font-size: 0.9rem; }
`,
            "catatan.txt": "Panduan Penggunaan Full Version:\n1. Ubah nomor WhatsApp pada file index.html (cari teks wa.me/6281234567890).\n2. Sesuaikan teks penawaran atau judul produk sesuai kebutuhan.\n3. Klik tombol Unduh ZIP untuk mendapatkan seluruh file dan langsung upload ke hosting Anda!"
        }
    },
    portfolio: {
        name: "Portofolio Profesional (Full Version)",
        description: "Template profil diri lengkap dengan bagian About, Skills, Experience, dan Contact.",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Portofolio Profesional</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="portfolio-container">
        <h1>Alex Turner</h1>
        <p class="role">Senior Full-Stack Web Developer</p>
        <p class="bio">Berpengalaman lebih dari 5 tahun dalam membangun aplikasi web modern, responsif, dan berkinerja tinggi untuk berbagai klien internasional.</p>
        
        <div class="section-box">
            <h3>Keahlian Utama</h3>
            <div class="tags">
                <span>HTML5 / CSS3</span>
                <span>JavaScript (ES6+)</span>
                <span>Tailwind CSS</span>
                <span>Node.js & PHP</span>
            </div>
        </div>

        <div class="section-box">
            <h3>Pengalaman Kerja</h3>
            <p class="exp-desc"><strong>Lead Developer</strong> di TechCorp (2023 - Sekarang)<br>Memimpin tim pengembang dalam merancang sistem panel dashboard berbasis web.</p>
        </div>

        <a href="mailto:email@example.com" class="btn-contact">Hubungi Saya Sekarang</a>
    </div>
</body>
</html>`,
            "style.css": `body { background: #090d16; color: #f8fafc; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }
.portfolio-container { background: #111827; padding: 3rem; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); max-width: 550px; width: 100%; border: 1px solid #1f2937; text-align: center; }
h1 { margin-bottom: 0.3rem; font-size: 2.2rem; color: #38bdf8; }
.role { color: #94a3b8; font-weight: 600; margin-bottom: 1.5rem; font-size: 1rem; }
.bio { font-size: 0.95rem; color: #cbd5e1; margin-bottom: 2rem; line-height: 1.7; }
.section-box { text-align: left; background: #1f2937; padding: 1.2rem; border-radius: 12px; margin-bottom: 1.5rem; }
.section-box h3 { color: #f3f4f6; font-size: 1rem; margin-bottom: 0.8rem; }
.tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.tags span { background: #374151; color: #38bdf8; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
.exp-desc { font-size: 0.9rem; color: #94a3b8; line-height: 1.5; }
.btn-contact { display: inline-block; background: #38bdf8; color: #0f172a; padding: 0.8rem 2rem; border-radius: 10px; text-decoration: none; font-weight: bold; transition: background 0.2s; width: 100%; margin-top: 1rem; }
.btn-contact:hover { background: #7dd3fc; }
`,
            "catatan.txt": "Catatan: Ubah informasi profil sesuai data diri Anda."
        }
    }
};

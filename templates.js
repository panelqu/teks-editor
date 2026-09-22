// templates.js - Berisi daftar template profesional untuk Pro Code Studio
const PRO_CODE_TEMPLATES = {
    landingPage: {
        name: "Landing Page Produk Komersial (Pro)",
        description: "Template modern lengkap dengan header hero, fitur, testimoni, dan tombol WhatsApp.",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produk Hebat - Solusi Terbaik Anda</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigasi / Header -->
    <nav class="navbar">
        <div class="logo">Brand<span>Ku</span></div>
        <a href="#pesan" class="nav-btn">Pesan Sekarang</a>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-content">
            <span class="badge">Diskon 50% Hari Ini</span>
            <h1>Revolusi Cara Anda Berbisnis dengan Produk Kami</h1>
            <p>Tingkatkan omzet dan efisiensi kerja Anda secara instan. Terbukti ampuh dan digunakan oleh ribuan pebisnis di Indonesia.</p>
            <div class="hero-buttons">
                <a href="#pesan" class="btn primary">Beli Sekarang</a>
                <a href="#fitur" class="btn secondary">Pelajari Dulu</a>
            </div>
        </div>
    </header>

    <!-- Fitur Unggulan -->
    <section id="fitur" class="features">
        <h2>Kenapa Harus Memilih Kami?</h2>
        <div class="feature-grid">
            <div class="feature-card">
                <div class="icon">🚀</div>
                <h3>Super Cepat</h3>
                <p>Performa optimal tanpa lemot, siap mendongkrak produktivitas harian Anda.</p>
            </div>
            <div class="feature-card">
                <div class="icon">🔒</div>
                <h3>100% Aman</h3>
                <p>Dilengkapi sistem enkripsi modern untuk menjaga keamanan data privasi Anda.</p>
            </div>
            <div class="feature-card">
                <div class="icon">💬</div>
                <h3>Dukungan 24/7</h3>
                <p>Tim *customer service* kami siap membantu Anda kapan saja via WhatsApp.</p>
            </div>
        </div>
    </section>

    <!-- Testimoni -->
    <section class="testimonials">
        <h2>Apa Kata Mereka?</h2>
        <div class="testi-grid">
            <div class="testi-card">
                <p>"Sangat membantu! Penjualan produk saya langsung meningkat drastis setelah pakai ini."</p>
                <h4>— Budi Santoso, Pemilik UMKM</h4>
            </div>
            <div class="testi-card">
                <p>"Pelayanan cepat, produk berkualitas tinggi. Pokoknya *recommended* banget!"</p>
                <h4>— Siti Rahma, Pebisnis Online</h4>
            </div>
        </div>
    </section>

    <!-- Call to Action / Pesan -->
    <section id="pesan" class="cta-section">
        <h2>Siap Mengembangkan Bisnis Anda?</h2>
        <p>Jangan tunggu sampai keduluan kompetitor. Amankan slot diskon Anda sekarang juga!</p>
        <a href="https://wa.me/6281234567890?text= Halo, saya tertarik ingin memesan produk Anda." class="btn primary large" target="_blank">Chat WhatsApp Sekarang</a>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2026 BrandKu. All rights reserved.</p>
    </footer>
</body>
</html>`,
            "style.css": `/* Reset & Base Styles */
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
body { background-color: #f8fafc; color: #1e293b; line-height: 1.6; scroll-behavior: smooth; }

/* Navbar */
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 5%; background: #ffffff; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
.logo { font-size: 1.5rem; font-weight: bold; color: #0f172a; }
.logo span { color: #4f46e5; }
.nav-btn { background: #4f46e5; color: white; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: background 0.2s; }
.nav-btn:hover { background: #4338ca; }

/* Hero Section */
.hero { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; text-align: center; padding: 5rem 1.5rem; }
.badge { background: rgba(255, 255, 255, 0.2); padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
.hero h1 { font-size: 2.5rem; max-width: 800px; margin: 1.5rem auto; line-height: 1.2; }
.hero p { font-size: 1.1rem; max-width: 600px; margin: 0 auto 2rem; opacity: 0.9; }
.hero-buttons { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

/* Buttons */
.btn { display: inline-block; padding: 0.8rem 1.8rem; border-radius: 8px; text-decoration: none; font-weight: bold; transition: all 0.2s; }
.btn.primary { background: #10b981; color: white; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4); }
.btn.primary:hover { background: #059669; transform: translateY(-2px); }
.btn.secondary { background: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.3); }
.btn.secondary:hover { background: rgba(255,255,255,0.25); }
.btn.large { font-size: 1.1rem; padding: 1rem 2.5rem; }

/* Features */
.features { padding: 5rem 5%; text-align: center; background: #ffffff; }
.features h2 { font-size: 2rem; margin-bottom: 3rem; color: #0f172a; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
.feature-card { background: #f8fafc; padding: 2.5rem 2rem; border-radius: 12px; border: 1px solid #e2e8f0; transition: transform 0.2s; }
.feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.feature-card .icon { font-size: 2.5rem; margin-bottom: 1rem; }
.feature-card h3 { margin-bottom: 0.8rem; color: #1e293b; }

/* Testimonials */
.testimonials { padding: 5rem 5%; background: #f1f5f9; text-align: center; }
.testimonials h2 { font-size: 2rem; margin-bottom: 3rem; color: #0f172a; }
.testi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 900px; margin: 0 auto; }
.testi-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: left; }
.testi-card p { font-style: italic; color: #475569; margin-bottom: 1rem; }
.testi-card h4 { color: #0f172a; font-size: 0.95rem; }

/* CTA Section */
.cta-section { background: #0f172a; color: white; text-align: center; padding: 5rem 1.5rem; }
.cta-section h2 { font-size: 2.2rem; margin-bottom: 1rem; }
.cta-section p { color: #94a3b8; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }

/* Footer */
footer { text-align: center; padding: 2rem; background: #020617; color: #64748b; font-size: 0.9rem; }
`,
            "catatan.txt": "Panduan:\n1. Ganti nomor WhatsApp di file index.html pada bagian 'wa.me/6281234567890'.\n2. Sesuaikan teks penawaran sesuai produk Anda.\n3. Unduh ZIP dan upload ke hosting!"
        }
    },
    portfolio: {
        name: "Portofolio Kreatif & Modern",
        description: "Template profil diri berkelas dengan desain gelap (dark mode) elegan.",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Portofolio Profesional</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h1>Alex Turner</h1>
        <p class="role">Full Stack Web Developer</p>
        <p class="bio">Membantu bisnis membangun website yang cepat, interaktif, dan berstandar tinggi.</p>
        <div class="skills">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>Tailwind</span>
        </div>
        <a href="mailto:email@example.com" class="contact-btn">Hubungi Saya</a>
    </div>
</body>
</html>`,
            "style.css": `body { background: #0f172a; color: #f8fafc; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
.card { background: #1e293b; padding: 3rem; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); text-align: center; max-width: 400px; border: 1px solid #334155; }
h1 { margin-bottom: 0.5rem; font-size: 2rem; color: #38bdf8; }
.role { color: #94a3b8; font-weight: 600; margin-bottom: 1.5rem; }
.bio { font-size: 0.95rem; color: #cbd5e1; margin-bottom: 1.5rem; line-height: 1.6; }
.skills { display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
.skills span { background: #334155; color: #38bdf8; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.8rem; font-weight: 600; }
.contact-btn { display: inline-block; background: #38bdf8; color: #0f172a; padding: 0.7rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; }
.contact-btn:hover { background: #7dd3fc; }
`,
            "catatan.txt": "Catatan: Ubah nama dan keahlian sesuai profil Anda."
        }
    }
};

// templates.js - Berisi daftar template siap pakai untuk Pro Code Studio
const PRO_CODE_TEMPLATES = {
    landingPage: {
        name: "Landing Page Produk / Jasa",
        description: "Template responsif modern dengan header, fitur, dan tombol CTA.",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Keren</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="hero">
        <h1>Solusi Terbaik untuk Bisnis Anda</h1>
        <p>Tingkatkan produktivitas dan raih kesuksesan bersama produk kami.</p>
        <a href="#kontak" class="btn">Mulai Sekarang</a>
    </header>
    <section class="features">
        <div class="card">
            <h3>Cepat & Mudah</h3>
            <p>Setup dalam hitungan detik tanpa ribet.</p>
        </div>
        <div class="card">
            <h3>Aman & Terpercaya</h3>
            <p>Data Anda aman dengan teknologi modern.</p>
        </div>
    </section>
</body>
</html>`,
            "style.css": `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f6;
    color: #333;
}
.hero {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-align: center;
    padding: 80px 20px;
}
.btn {
    display: inline-block;
    background: #ff6b6b;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: bold;
}
.features {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 40px 20px;
}
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    width: 250px;
}
`,
            "catatan.txt": "Catatan: Jangan lupa ubah nomor WhatsApp atau link pembelian sebelum di-publish ke hosting!"
        }
    },
    portfolio: {
        name: "Portofolio Pribadi",
        description: "Template halaman profil diri, keahlian, dan kontak.",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Portofolio Saya</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-container">
        <h1>Halo, Saya Developer</h1>
        <p>Web Developer & Kreator Konten</p>
        <hr>
        <h2>Keahlian</h2>
        <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Landing Page Optimization</li>
            <li>Mobile UI Design</li>
        </ul>
    </div>
</body>
</html>`,
            "style.css": `body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #111;
    color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.profile-container {
    background: #222;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    width: 400px;
    text-align: center;
}
h1 { color: #4facfe; }
ul { list-style: none; padding: 0; }
li { background: #333; margin: 8px 0; padding: 10px; border-radius: 5px; }
`,
            "catatan.txt": "Catatan: Sesuaikan nama dan skill pada file index.html."
        }
    }
};
          

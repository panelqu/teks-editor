// Di dalam file templates.js

const linkBioTemplate = {
    name: "Link-in-Bio Minimalis",
    files: {
        "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarah Jenkins - Link in Bio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0f172a;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .container {
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        .profile-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 2px solid #38bdf8;
            object-fit: cover;
            margin-bottom: 15px;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }
        p {
            color: #94a3b8;
            font-size: 14px;
            margin-bottom: 25px;
        }
        .btn {
            display: block;
            background-color: #1e293b;
            color: #ffffff;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s;
        }
        .btn:hover {
            background-color: #334155;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #64748b;
        }
        .footer a {
            color: #38bdf8;
            text-decoration: none;
        }
    </style>

    <!-- Script Iklan (Tag / Popunder) -->
    <script>(function(s){s.dataset.zone='11851076',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
</head>
<body>

    <div class="container">
        <!-- Foto Profil -->
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Foto Profil" class="profile-img">
        
        <!-- Nama & Bio -->
        <h1>Sarah Jenkins</h1>
        <p>Digital Creator & UI/UX Enthusiast. Temukan semua tautan penting saya di sini!</p>

        <!-- Tombol Tautan -->
        <a href="https://whatsapp.com" target="_blank" class="btn">💬 Chat WhatsApp Admin</a>
        <a href="https://tokopedia.com" target="_blank" class="btn">🛒 Kunjungi Toko Online Saya</a>
        <a href="https://instagram.com" target="_blank" class="btn">📸 Instagram Terbaru</a>
        <a href="https://medium.com" target="_blank" class="btn">📚 Baca Artikel & Blog</a>

        <!-- Footer dengan Direct Link yang Dilindungi -->
        <div id="panelqu-credit" class="footer">
            &copy; 2026 Sarah Jenkins. All rights reserved.<br>
            Dibuat dengan <a href="https://omg10.com/4/9089458" target="_blank">PanelQu</a>
        </div>
    </div>

    <!-- Script Pengaman (Anti-Hapus Atribut Sistem) -->
    <script>
        window.addEventListener('DOMContentLoaded', (event) => {
            const creditElement = document.getElementById('panelqu-credit');
            if (!creditElement || creditElement.innerText.indexOf('PanelQu') === -1) {
                document.body.innerHTML = "<h2 style='text-align:center; margin-top:35vh; color:red; font-family:sans-serif;'>Error: Atribut Sistem PanelQu tidak boleh dihapus!</h2>";
            }
        });
    </script>
</body>
</html>`
    }
};

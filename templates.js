// templates.js - Template Link-in-Bio Minimalis Modern
const PRO_CODE_TEMPLATES = {
    linkBio: {
        name: "Link-in-Bio Minimalis Modern",
        description: "Template halaman profil tautan praktis ala Linktree untuk media sosial.",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link Bio Profesional</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        body {
            background-color: #0b0f19;
            color: #f3f4f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        .bio-container {
            width: 100%;
            max-width: 480px;
            text-align: center;
            padding: 2rem 1rem;
        }
        .profile-pic {
            width: 96px;
            height: 96px;
            margin: 0 auto 1rem auto;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #38bdf8;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
        }
        .profile-pic img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .profile-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 0.5rem;
        }
        .profile-bio {
            font-size: 0.95rem;
            color: #9ca3af;
            margin-bottom: 2.5rem;
            line-height: 1.5;
            padding: 0 1rem;
        }
        .link-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .link-btn {
            display: block;
            background-color: #1f2937;
            color: #ffffff;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 1px solid #374151;
            transition: all 0.25s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .link-btn:hover {
            background-color: #374151;
            border-color: #38bdf8;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px -2px rgba(56, 189, 248, 0.15);
        }
        .bio-footer {
            margin-top: 3rem;
            font-size: 0.8rem;
            color: #6b7280;
        }
        .bio-footer a {
            color: #38bdf8;
            text-decoration: none;
        }
        .guide-box {
            background: #1e293b;
            border: 1px dashed #475569;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            text-align: left;
            font-size: 0.85rem;
            color: #cbd5e1;
        }
        .guide-box h4 {
            color: #38bdf8;
            margin-bottom: 0.3rem;
        }
    </style>

    <!-- SCRIPT IKLAN (TAG / POPUNDER) -->
    <script>(function(s){s.dataset.zone='11851076',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))<\\/script>
</head>
<body>

    <div class="bio-container">
        <!-- KOTAK PANDUAN -->
        <div class="guide-box">
            <h4>💡 Panduan Edit Cepat:</h4>
            <p>1. Ganti link foto profil pada tag &lt;img src="..."&gt;.</p>
            <p>2. Ganti Nama dan Bio sesuai data diri Anda.</p>
            <p>3. Ganti link tujuan pada href="..." dan teks tombolnya.</p>
        </div>

        <!-- FOTO PROFIL -->
        <div class="profile-pic">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Foto Profil">
        </div>

        <!-- NAMA & BIO -->
        <h1 class="profile-name">Sarah Jenkins</h1>
        <p class="profile-bio">Digital Creator & UI/UX Enthusiast. Temukan semua tautan penting saya di sini!</p>

        <!-- DAFTAR TOMBOL TAUTAN -->
        <div class="link-list">
            <a href="https://wa.me/6281234567890" class="link-btn" target="_blank">
                <span>💬 Chat WhatsApp Admin</span>
            </a>
            <a href="https://example.com" class="link-btn" target="_blank">
                <span>🛍️ Kunjungi Toko Online Saya</span>
            </a>
            <a href="https://instagram.com" class="link-btn" target="_blank">
                <span>📸 Instagram Terbaru</span>
            </a>
            <a href="https://example.com" class="link-btn" target="_blank">
                <span>📚 Baca Artikel & Blog</span>
            </a>
        </div>

        <!-- FOOTER DENGAN DIRECT LINK YANG DILINDUNGI -->
        <footer id="panelqu-credit" class="bio-footer">
            <p>&copy; 2026 Sarah Jenkins. All rights reserved.</p>
            <p style="margin-top: 5px;">Dibuat dengan <a href="https://omg10.com/4/9089458" target="_blank">PanelQu</a></p>
        </footer>
    </div>

    <!-- SCRIPT PENGAMAN (ANTI-HAPUS ATRIBUT) -->
    <script>
        window.addEventListener('DOMContentLoaded', (event) => {
            const creditElement = document.getElementById('panelqu-credit');
            if (!creditElement || creditElement.innerText.indexOf('PanelQu') === -1) {
                document.body.innerHTML = "<h2 style='text-align:center; margin-top:35vh; color:red; font-family:sans-serif;'>Error: Atribut Sistem PanelQu tidak boleh dihapus!</h2>";
            }
        });
    </script>

</body>
</html>`,
            "catatan.txt": "Panduan: Cukup edit file index.html di atas untuk mengubah foto, nama, dan tautan sosial media Anda."
        }
    }
};

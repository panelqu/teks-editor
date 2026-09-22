// templates.js - Harus menggunakan nama PRO_CODE_TEMPLATES
const PRO_CODE_TEMPLATES = {
    "linkBio": {
        name: "Link Bio Profesional",
        files: {
            "index.html": `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link Bio Profesional</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; }
        body { background-color: #0b0f19; color: #f3f4f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
        .bio-container { width: 100%; max-width: 480px; text-align: center; padding: 2rem 1rem; }
        .profile-pic { width: 96px; height: 96px; margin: 0 auto 1rem auto; border-radius: 50%; overflow: hidden; border: 2px solid #38bdf8; }
        .profile-pic img { width: 100%; height: 100%; object-fit: cover; }
        .profile-name { font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: 0.5rem; }
        .profile-bio { font-size: 0.95rem; color: #9ca3af; margin-bottom: 2.5rem; line-height: 1.5; }
        .link-list { display: flex; flex-direction: column; gap: 1rem; }
        .link-btn { display: block; background-color: #1f2937; color: #ffffff; padding: 1rem; border-radius: 12px; text-decoration: none; font-weight: 600; border: 1px solid #374151; }
        .bio-footer { margin-top: 3rem; font-size: 0.8rem; color: #6b7280; }
    </style>
</head>
<body>
    <div class="bio-container">
        <div class="profile-pic">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Foto Profil">
        </div>
        <h1 class="profile-name">Sarah Jenkins</h1>
        <p class="profile-bio">Digital Creator & UI/UX Enthusiast</p>
        <div class="link-list">
            <a href="https://wa.me/6281234567890" class="link-btn" target="_blank">💬 Chat WhatsApp Admin</a>
            <a href="https://instagram.com" class="link-btn" target="_blank">📸 Instagram Terbaru</a>
        </div>
        <footer class="bio-footer">
            <p>&copy; 2026 Sarah Jenkins. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>`
        }
    }
};

# Prashantha K T — Portfolio

Personal portfolio website deployed at **[prashanthkt.github.io](https://prashanthkt.github.io)**

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← HTML shell (don't need to edit often)
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles & design tokens
│   ├── js/
│   │   ├── data.js         ← ⭐ ALL YOUR CONTENT LIVES HERE
│   │   └── main.js         ← Renders sections from data.js
│   └── images/             ← Place profile photo or project screenshots here
└── README.md
```

---

## ✏️ How to Update Content

**Everything you'd want to change is in `assets/js/data.js`.**

| What to change | Where |
|---|---|
| Name, email, phone, bio | `DATA.personal` |
| LinkedIn / GitHub URLs | `DATA.personal.linkedin` / `.github` |
| Job entries | `DATA.experience[]` |
| Education | `DATA.education[]` |
| Skills | `DATA.skills[]` |
| Projects | `DATA.projects[]` |
| Stats (hero numbers) | `DATA.stats[]` |

---

## 🎨 How to Customize Design

All design tokens (colors, fonts, spacing) are CSS variables at the top of `assets/css/style.css`:

```css
:root {
  --bg:     #050A12;   /* page background */
  --cyan:   #00E5FF;   /* primary accent */
  --gold:   #FFB800;   /* secondary accent */
  /* ... */
}
```

Change `--cyan` to any color to instantly retheme the whole site.

---

## 🚀 Deploy to GitHub Pages (step by step)

### First-time setup

1. **Create a repo named exactly:** `prashanthkt.github.io`
   - Go to github.com → New repository
   - Name: `prashanthkt.github.io`
   - Visibility: Public
   - Don't add README (you already have one)

2. **Push the code:**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:prashanthktgowda/prashanthkt.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo → Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
   - Click Save

4. **Wait 1–2 minutes**, then visit: **https://prashanthkt.github.io**

---

### Updating the site later

```bash
# Make your edits to data.js (or any file)
git add .
git commit -m "Update experience / skills / projects"
git push
```

GitHub Pages auto-deploys on every push. Changes live in ~30 seconds.

---

## 🛠 Open in IntelliJ IDEA

1. Unzip the project folder
2. **File → Open** → select the `portfolio/` folder
3. Right-click `index.html` → **Open In → Browser**
   - Or install the **Live Server** plugin for hot-reload

No build tools, no npm, no config needed. It's pure HTML/CSS/JS.

---

## 📦 Tech Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styling | Vanilla CSS (CSS Variables) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Playfair Display + JetBrains Mono) |
| Hosting | GitHub Pages |

Zero dependencies. Zero build steps. Just open and deploy.

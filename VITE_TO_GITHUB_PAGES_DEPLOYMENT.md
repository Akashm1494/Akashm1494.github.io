# 🚀 Vite Portfolio → GitHub Pages Deployment Guide

## 📋 Current Situation Analysis

**Old Portfolio (Create React App):**
- Location: `old/` folder
- Build tool: Create React App (react-scripts)
- Deployment: GitHub Pages via gh-pages package

**New Portfolio (Vite):**
- Location: `MySathi-Akash-1/` folder  
- Build tool: Vite
- Framework: React 18 + Vite + TailwindCSS + Shadcn UI
- Status: Not deployed yet

**Key Difference:** Vite builds differently than CRA, needs different configuration for GitHub Pages.

---

## 🎯 Deployment Strategy

Since new portfolio is **Vite-based**, we need to:
1. Configure Vite for GitHub Pages deployment
2. Replace old code with new code
3. Deploy using gh-pages package (compatible with Vite)

---

## 📝 Step-by-Step Deployment Process

### Phase 1: Configure New Portfolio for GitHub Pages

#### Step 1.1: Update vite.config.js
```bash
cd MySathi-Akash-1
```

Add `base` configuration to vite.config.js:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  // Add this line for GitHub Pages
  base: "/",  // For username.github.io repo
  
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
```

**Why `base: "/"`?**
- For `username.github.io` repos, base should be `/`
- For `username.github.io/repo-name`, base should be `/repo-name/`

---

#### Step 1.2: Update package.json

Add deployment scripts:

```json
{
  "name": "akash-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://Akashm1494.github.io/",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Key Changes:**
- Added `homepage` field
- Added `predeploy` script (runs build before deploy)
- Added `deploy` script (deploys `dist` folder, not `build`)
- **Important:** Vite outputs to `dist/`, not `build/`

---

#### Step 1.3: Install gh-pages

```bash
cd MySathi-Akash-1
npm install --save-dev gh-pages
```

---

#### Step 1.4: Test Build Locally

```bash
# Build the project
npm run build

# Check dist folder
ls -la dist/

# Preview the build
npm run preview
# Opens at http://localhost:4173
```

**Verify:**
- ✅ Build completes without errors
- ✅ `dist/` folder created
- ✅ Preview works correctly
- ✅ All routes working
- ✅ Images loading

---

### Phase 2: Backup Old Repository

```bash
cd ../old

# Create backup branch
git checkout -b backup-old-portfolio-$(date +%Y%m%d)
git add .
git commit -m "Backup: Old portfolio before Vite migration"
git push origin backup-old-portfolio-$(date +%Y%m%d)

# Return to main
git checkout main
```

---

### Phase 3: Clean Old Repository

```bash
cd old

# Remove old files (keep .git, .gitignore)
rm -rf src/
rm -rf public/
rm -rf node_modules/
rm -rf build/
rm package.json
rm package-lock.json
rm -f *.md  # Remove old documentation
```

**Keep these files:**
- `.git/` folder (NEVER delete!)
- `.gitignore` (will update later)

---

### Phase 4: Copy New Portfolio to Old Repository

```bash
# From old folder
cd old

# Copy all files from MySathi-Akash-1 (except .git)
cp -r ../MySathi-Akash-1/src ./
cp -r ../MySathi-Akash-1/public ./
cp -r ../MySathi-Akash-1/node_modules ./ # Optional, can npm install instead
cp ../MySathi-Akash-1/package.json ./
cp ../MySathi-Akash-1/package-lock.json ./
cp ../MySathi-Akash-1/vite.config.js ./
cp ../MySathi-Akash-1/tailwind.config.js ./
cp ../MySathi-Akash-1/postcss.config.js ./
cp ../MySathi-Akash-1/eslint.config.js ./
cp ../MySathi-Akash-1/index.html ./
cp ../MySathi-Akash-1/components.json ./
cp ../MySathi-Akash-1/.gitignore ./

# Copy other config files if needed
cp ../MySathi-Akash-1/tsconfig.json ./ 2>/dev/null || true
cp ../MySathi-Akash-1/vitest.config.js ./ 2>/dev/null || true
```

---

### Phase 5: Install Dependencies

```bash
cd old

# Install all dependencies
npm install

# Verify installation
npm list --depth=0
```

---

### Phase 6: Update Configuration Files

#### Update vite.config.js (if not already done)

```javascript
export default defineConfig(({ mode }) => ({
  base: "/",  // Important for GitHub Pages
  // ... rest of config
}));
```

#### Update package.json (if not already done)

```json
{
  "homepage": "https://Akashm1494.github.io/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

### Phase 7: Test Locally

```bash
cd old

# Start dev server
npm run dev
# Opens at http://localhost:8080

# Test build
npm run build

# Preview build
npm run preview
```

**Checklist:**
- [ ] Dev server runs without errors
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display
- [ ] Forms work
- [ ] Responsive design works
- [ ] Build completes successfully
- [ ] Preview shows correct content

---

### Phase 8: Git Commit

```bash
cd old

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Migrate to Vite portfolio

- Replaced Create React App with Vite
- Updated build configuration for GitHub Pages
- Added TailwindCSS and Shadcn UI
- Enhanced UI/UX with modern components
- Configured for deployment"

# Check commit
git log --oneline -1
```

---

### Phase 9: Push to GitHub

```bash
# Push to main branch
git push origin main
```

**If authentication fails:**

**Option A: Personal Access Token**
```bash
# Generate token: GitHub → Settings → Developer settings → Personal access tokens
# Permissions: repo (full control)

git push https://YOUR_TOKEN@github.com/Akashm1494/Akashm1494.github.io.git main
```

**Option B: SSH**
```bash
# Setup SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
# Add to GitHub → Settings → SSH keys

# Update remote
git remote set-url origin git@github.com:Akashm1494/Akashm1494.github.io.git

# Push
git push origin main
```

**Option C: GitHub CLI**
```bash
brew install gh
gh auth login
git push origin main
```

---

### Phase 10: Deploy to GitHub Pages

```bash
cd old

# Deploy (this will build and push to gh-pages branch)
npm run deploy
```

**What happens:**
1. `predeploy` runs → `npm run build` creates `dist/` folder
2. `gh-pages -d dist` pushes `dist/` contents to `gh-pages` branch
3. GitHub Pages automatically deploys from `gh-pages` branch

**Expected output:**
```
> predeploy
> npm run build

vite v5.4.19 building for production...
✓ 1234 modules transformed.
dist/index.html                   1.23 kB
dist/assets/index-abc123.css     45.67 kB
dist/assets/index-xyz789.js     234.56 kB
✓ built in 12.34s

> deploy
> gh-pages -d dist

Published
```

---

### Phase 11: Configure GitHub Pages Settings

1. Go to: `https://github.com/Akashm1494/Akashm1494.github.io`
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

---

### Phase 12: Verify Deployment

```bash
# Wait 2-5 minutes for deployment

# Open in browser
open https://Akashm1494.github.io/
```

**Test checklist:**
- [ ] Website loads
- [ ] New Vite portfolio visible
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Images load
- [ ] Forms work
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Fast loading (Vite optimization)

---

## 🔧 Troubleshooting

### Problem 1: Blank Page After Deployment

**Cause:** Incorrect `base` in vite.config.js

**Solution:**
```javascript
// vite.config.js
export default defineConfig({
  base: "/",  // For username.github.io
  // NOT base: "/repo-name/"
});
```

Rebuild and redeploy:
```bash
npm run build
npm run deploy
```

---

### Problem 2: 404 on Routes

**Cause:** GitHub Pages doesn't support client-side routing by default

**Solution:** Add `404.html` that redirects to `index.html`

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

Update `index.html` (add before closing `</head>`):
```html
<script>
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

Rebuild and redeploy:
```bash
npm run build
npm run deploy
```

---

### Problem 3: Images Not Loading

**Cause:** Incorrect image paths

**Solution:** Use correct paths in Vite

```javascript
// ✅ Correct - images in public folder
<img src="/images/photo.jpg" alt="Photo" />

// ✅ Correct - images imported
import photo from './assets/photo.jpg';
<img src={photo} alt="Photo" />

// ❌ Wrong
<img src="%PUBLIC_URL%/images/photo.jpg" />  // CRA syntax
```

---

### Problem 4: CSS Not Loading

**Cause:** TailwindCSS not configured properly

**Solution:** Verify tailwind.config.js:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

Rebuild:
```bash
npm run build
npm run deploy
```

---

### Problem 5: Deploy Command Fails

**Error:** `gh-pages not found`

**Solution:**
```bash
npm install --save-dev gh-pages
npm run deploy
```

**Error:** `dist folder not found`

**Solution:**
```bash
npm run build  # Create dist folder first
npm run deploy
```

---

## 📊 Complete Command Summary

```bash
# === PHASE 1: CONFIGURE NEW PORTFOLIO ===
cd MySathi-Akash-1
# Update vite.config.js (add base: "/")
# Update package.json (add homepage, deploy scripts)
npm install --save-dev gh-pages
npm run build  # Test build
npm run preview  # Test preview

# === PHASE 2: BACKUP OLD ===
cd ../old
git checkout -b backup-old-portfolio-$(date +%Y%m%d)
git add .
git commit -m "Backup old portfolio"
git push origin backup-old-portfolio-$(date +%Y%m%d)
git checkout main

# === PHASE 3: CLEAN OLD ===
rm -rf src/ public/ node_modules/ build/
rm package.json package-lock.json

# === PHASE 4: COPY NEW ===
cp -r ../MySathi-Akash-1/src ./
cp -r ../MySathi-Akash-1/public ./
cp ../MySathi-Akash-1/package.json ./
cp ../MySathi-Akash-1/package-lock.json ./
cp ../MySathi-Akash-1/vite.config.js ./
cp ../MySathi-Akash-1/tailwind.config.js ./
cp ../MySathi-Akash-1/postcss.config.js ./
cp ../MySathi-Akash-1/index.html ./
cp ../MySathi-Akash-1/.gitignore ./

# === PHASE 5: INSTALL ===
npm install

# === PHASE 6: TEST ===
npm run dev  # Test locally
npm run build  # Test build
npm run preview  # Test preview

# === PHASE 7: COMMIT ===
git add .
git commit -m "Migrate to Vite portfolio"
git push origin main

# === PHASE 8: DEPLOY ===
npm run deploy

# === PHASE 9: VERIFY ===
# Open: https://Akashm1494.github.io/
```

---

## ⚠️ Important Differences: Vite vs CRA

| Feature | Create React App | Vite |
|---------|-----------------|------|
| Build output | `build/` | `dist/` |
| Deploy command | `gh-pages -d build` | `gh-pages -d dist` |
| Config file | `package.json` | `vite.config.js` |
| Base URL | `homepage` in package.json | `base` in vite.config.js |
| Dev server | `npm start` | `npm run dev` |
| Build command | `npm run build` | `npm run build` |
| Preview | `npx serve -s build` | `npm run preview` |
| Port | 3000 | 8080 (configurable) |
| Hot reload | Fast | Faster (Vite HMR) |
| Build speed | Slower | Much faster |

---

## 🎯 Success Checklist

- [ ] Backup created successfully
- [ ] vite.config.js updated with `base: "/"`
- [ ] package.json updated with deploy scripts
- [ ] gh-pages package installed
- [ ] Local dev server works (`npm run dev`)
- [ ] Build completes (`npm run build`)
- [ ] Preview works (`npm run preview`)
- [ ] Old code cleaned from repository
- [ ] New code copied to old repository
- [ ] Dependencies installed
- [ ] Changes committed to main branch
- [ ] Changes pushed to GitHub
- [ ] Deployed to gh-pages branch (`npm run deploy`)
- [ ] GitHub Pages settings configured
- [ ] Live website accessible
- [ ] All features working
- [ ] No console errors
- [ ] Fast loading time

---

## 📞 Quick Help

```bash
# Check Vite version
npx vite --version

# Check build output
ls -la dist/

# Check gh-pages branch
git branch -a | grep gh-pages

# Force deploy
npm run deploy -- -f

# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
npm run deploy
```

---

## 🚀 Post-Deployment

1. **Test on multiple devices** (mobile, tablet, desktop)
2. **Check performance** (Lighthouse score)
3. **Update README.md** with new tech stack
4. **Share on social media**
5. **Monitor GitHub Actions** (if any)
6. **Setup custom domain** (optional)
7. **Add analytics** (optional)

---

**Created by:** Akash More  
**Date:** April 2026  
**Tech Stack:** Vite + React + TailwindCSS + Shadcn UI  
**Deployment:** GitHub Pages

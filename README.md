# 🚀 Akash More - Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**[Live Demo](https://Akashm1494.github.io/) • [View Code](https://github.com/Akashm1494/Akashm1494.github.io) • [Report Bug](https://github.com/Akashm1494/Akashm1494.github.io/issues)**

</div>

---

## 👨‍💻 About Me

Hi! I'm **Akash More**, a passionate **Full Stack Developer** with **2+ years** of hands-on experience in building dynamic web and mobile applications. I specialize in the **MERN Stack** and modern JavaScript frameworks.

- 🔭 Currently working at **MySathi** as Full Stack Developer
- 🌱 Expertise in **React.js, React Native, Node.js, Next.js**
- 💼 Previously at **Mayara Digital Technologies**
- 📍 Based in **Pune, India**
- 📫 Reach me: **more.akash0797@gmail.com**

---

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimized builds
- 🎨 **Modern UI** - Beautiful design with TailwindCSS and Shadcn UI
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ♿ **Accessible** - Built with Radix UI primitives for accessibility
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌙 **Dark Mode Ready** - Theme support with next-themes
- 🚀 **SEO Optimized** - Meta tags, sitemap, and robots.txt
- 📊 **Performance** - Optimized bundle size and lazy loading

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.19
- **Styling:** TailwindCSS 3.4.17
- **UI Components:** Shadcn UI (Radix UI)
- **Icons:** Lucide React
- **Animations:** Framer Motion 12.38.0
- **Routing:** React Router DOM 6.30.1

### Forms & Validation
- **Forms:** React Hook Form 7.61.1
- **Validation:** Zod 3.25.76
- **Resolvers:** @hookform/resolvers 3.10.0

### State Management
- **Query:** TanStack React Query 5.83.0

### Development Tools
- **Linting:** ESLint 9.32.0
- **Testing:** Vitest 3.2.4
- **E2E Testing:** Playwright 1.57.0
- **TypeScript:** Ready (5.8.3)

### Deployment
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (optional)
- **Package Manager:** npm

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Clone Repository
```bash
git clone https://github.com/Akashm1494/Akashm1494.github.io.git
cd Akashm1494.github.io
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint

# Deployment
npm run deploy           # Deploy to GitHub Pages

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
```

---

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── resume.docx
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Reusable components
│   │   ├── ui/            # Shadcn UI components
│   │   └── ...
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── test/              # Test files
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # TailwindCSS config
├── package.json           # Dependencies
└── README.md              # This file
```

---

## 🎨 UI Components

This project uses **Shadcn UI** - a collection of re-usable components built with:
- **Radix UI** - Unstyled, accessible components
- **TailwindCSS** - Utility-first CSS
- **Class Variance Authority** - Component variants

### Available Components
- Accordion, Alert Dialog, Avatar
- Button, Card, Checkbox
- Dialog, Dropdown Menu, Form
- Input, Label, Select
- Tabs, Toast, Tooltip
- And many more...

---

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Push the `dist/` folder to `gh-pages` branch
3. GitHub Pages will automatically deploy

### Manual Deployment

```bash
# Build
npm run build

# The dist/ folder is ready to deploy
```

---

## 📊 Performance

### Build Statistics
- **Build Time:** ~1.36 seconds
- **Bundle Size:** 615 kB (190 kB gzipped)
- **Modules:** 2,110 transformed
- **Lighthouse Score:** 95+ (Performance)

### Optimizations
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Lazy loading
- ✅ Image optimization
- ✅ Minification
- ✅ Gzip compression

---

## 🔧 Configuration

### Vite Config
```javascript
// vite.config.js
export default defineConfig({
  base: "/",  // For GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### TailwindCSS Config
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

---

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Watch Mode
```bash
npm run test:watch
```

### E2E Tests (Playwright)
```bash
npx playwright test
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Akash More**

- 📧 Email: more.akash0797@gmail.com
- 💼 LinkedIn: [code-with-akash](https://www.linkedin.com/in/code-with-akash/)
- 🐙 GitHub: [@Akashm1494](https://github.com/Akashm1494)
- 📱 Phone: +91 7741919219
- 📍 Location: Pune, India

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://react.dev/) - JavaScript Library for UI
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable Components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, Accessible Components
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lucide](https://lucide.dev/) - Beautiful Icons
- [GitHub Pages](https://pages.github.com/) - Free Hosting

---

## 📈 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/Akashm1494/Akashm1494.github.io?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Akashm1494/Akashm1494.github.io?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Akashm1494/Akashm1494.github.io)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Akashm1494/Akashm1494.github.io)

---

## 🎯 Roadmap

- [x] Migrate from CRA to Vite
- [x] Add TailwindCSS and Shadcn UI
- [x] Implement responsive design
- [x] Add animations
- [x] Deploy to GitHub Pages
- [ ] Add dark mode toggle
- [ ] Add blog section
- [ ] Add project case studies
- [ ] Implement i18n (internationalization)
- [ ] Add analytics
- [ ] SEO improvements

---

## 💡 Tips for Developers

### Adding New Components
```bash
# Add Shadcn UI component
npx shadcn-ui@latest add button
```

### Customizing Theme
Edit `tailwind.config.js` to customize colors, fonts, spacing, etc.

### Environment Variables
Create `.env` file:
```env
VITE_API_URL=your_api_url
VITE_GA_ID=your_google_analytics_id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🐛 Known Issues

- None at the moment! 🎉

If you find any bugs, please [report them here](https://github.com/Akashm1494/Akashm1494.github.io/issues).

---

## 📚 Documentation

For detailed documentation, see:
- [Complete Migration Documentation](./COMPLETE_MIGRATION_DOCUMENTATION.md)
- [Vite Deployment Guide](./VITE_TO_GITHUB_PAGES_DEPLOYMENT.md)
- [Deployment Status](./DEPLOYMENT_READY.md)

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on [GitHub](https://github.com/Akashm1494/Akashm1494.github.io)!

---

<div align="center">

**Made with ❤️ by [Akash More](https://github.com/Akashm1494)**

**© 2026 Akash More. All Rights Reserved.**

</div>

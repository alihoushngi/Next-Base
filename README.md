# 🚀 Next Base - Next.js Starter Project

Welcome to **Next Base**, a powerful and developer-friendly boilerplate to jumpstart your Next.js projects with everything already configured — just clone and start building.

> Built with [Next.js 13+](https://nextjs.org/), this starter includes all the essentials for a modern frontend workflow using TypeScript, TailwindCSS, Redux, Axios, and more.

---

## 🧰 Tech Stack

- ⚡ [Next.js](https://nextjs.org/)
- 🔷 [TypeScript](https://www.typescriptlang.org/)
- 🌈 [Tailwind CSS](https://tailwindcss.com/)
- 🧠 [Redux Toolkit](https://redux-toolkit.js.org/)
- 🌐 [Axios](https://axios-http.com/)
- 📄 [dotenv](https://www.npmjs.com/package/dotenv)
- 🔧 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- 🐶 [Husky](https://typicode.github.io/husky) + [Lint-Staged](https://github.com/okonet/lint-staged)
- 🔍 [next-seo](https://github.com/garmeeh/next-seo)
- 🧃 [React Toastify](https://fkhadra.github.io/react-toastify/)
- 🎨 [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Folder Structure

```bash
src/
├── app/                 # App router (Next 13+)
│   └── layout.tsx
│   └── page.tsx
│   └── api/
├── pages/               # Page router support
│   └── _app.tsx
│   └── _document.tsx
│   └── index.tsx
│   └── about.tsx
├── components/          # Reusable components
│   ├── ui/              # UI elements like Button, Input
│   ├── layout/          # Header, Footer, etc.
│   └── shared/          # Common components (Card, Avatar)
├── features/            # Feature-based structure
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── authSlice.ts
│   │   └── api.ts
│   └── profile/
│       ├── components/
│       ├── hooks/
│       ├── profileSlice.ts
│       └── api.ts
├── hooks/               # Custom hooks like useAxios, useDebounce
├── lib/                 # Shared configs (e.g. axios.ts, dayjs.ts)
├── store/               # Redux store and setup
│   └── index.ts
├── services/            # API service functions
├── types/               # Global TypeScript types
│   └── index.d.ts
│   └── api.d.ts
├── utils/               # Helper functions like formatDate, slugify
├── constants/           # Static values (e.g. roles, messages)
│   ├── roles.ts
│   ├── messages.ts
│   └── routes.ts
├── middleware.ts        # Middlewares (e.g. auth guards)
├── styles/              # Tailwind & global styles
│   ├── globals.css
│   └── tailwind.css
└── assets/              # Static assets (images, icons, fonts)
    ├── images/
    ├── icons/
    └── fonts/
```

---

## ✨ Features

- ✅ Pre configured and ready to use out of the box
- 📦 Feature-based architecture
- 🎯 SEO optimized with `next-seo`
- 📊 Responsive design with Tailwind
- 🧼 Linting, formatting, and commit quality enforced
- 🧃 Integrated toast system for UX feedback
- 🔌 Global axios instance with interceptors
- 🔁 Redux Toolkit with devtools enabled
- 🧠 Custom hook setup ready (e.g. `useAxios`, `useDebounce`)
- 🧱 Scalable for large apps or startups

---

## 🛠 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/next-base.git
cd next-base
npm install
npm run dev

```

## 🔭 Roadmap

- Add built-in Auth support 🔐
- Add dark mode switch 🌙
- Add unit & integration test samples 🧪
- Add i18n & multilingual setup 🌍
- Generate static pages (SSG) for SEO-critical content 📈

---

## 👨‍💻 Author

**Ali Hooshangi** – Frontend Developer  
📫 aliihooshangi@gmail.com  
🔗 [linkedin.com/in/alihoushangi](https://linkedin.com/in/alihoushangi)  
💻 [github.com/alihoushngi](https://github.com/alihoushngi)

---

> “Skip setup. Start building.” ✨  
> ⭐ If you like this project, give it a star!

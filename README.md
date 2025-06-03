# 🚀 Next Base - Next.js Starter Project

Welcome to **Next Base**, a powerful and developer-friendly boilerplate to jump start your Next.js projects with everything already configured — just clone and start building.

> Built with [Next.js 13+](https://nextjs.org/), this starter includes all the essentials for a modern frontend workflow using TypeScript, TailwindCSS, Redux, Axios, and more.

---

## 🧰 Tech Stack

- ⚡ [Next.js](https://nextjs.org/) – React framework for production
- 🔷 [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript
- 🌈 [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- 🌙 [next-themes](https://github.com/pacocoursey/next-themes) – Seamless dark/light mode support with Tailwind
- 🧠 [Redux Toolkit](https://redux-toolkit.js.org/) – Modern state management with Redux
- 🌐 [Axios](https://axios-http.com/) – Promise-based HTTP client
- 📄 [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable management
- 🔧 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) – Linting and code formatting
- 🐶 [Husky](https://typicode.github.io/husky) + [Lint-Staged](https://github.com/okonet/lint-staged) – Git hooks and pre-commit checks
- 🔍 [next-seo](https://github.com/garmeeh/next-seo) – SEO utilities for Next.js
- 🧃 [React Toastify](https://fkhadra.github.io/react-toastify/) – Notifications and toasts
- 🎨 [React Icons](https://react-icons.github.io/react-icons/) – Popular icons as React components

---

## 📁 Folder Structure

```bash

public/
├── images/
└── screenshots/                   # add for seo

src/
├── app/                           # App routes, layouts, and route handlers (App Router)
│   ├── layout.tsx                 # Root shared layout (e.g. header, footer, theme)
│   ├── page.tsx                   # Home page ("/")
│   ├── about/
│   │   └── page.tsx               # About page
│   ├── contact/
│   │   ├── page.tsx               # Contact page
│   ├── dashboard/                # Protected area with its own layout
│   │   ├── layout.tsx            # Dashboard layout (e.g. sidebar)
│   │   ├── page.tsx              # Dashboard landing page
│   │   └── settings/
│   │       ├── page.tsx          # Settings page
│   │       ├── error.tsx         # Error boundary for this section
│   │       └── not-found.tsx     # Custom 404 page only for this section
│   ├── api/                      # API routes using Next.js route handlers
│   │   ├── auth/
│   │   │   ├── login/route.ts    # Login API route
│   │   │   └── register/route.ts # Register API route
│   │   └── user/
│   │       └── route.ts          # User data API route

├── assets/                       # add fonts and logo and icon here
│   ├── fonts/
│   └── icons/

├── components/                   # Reusable UI components
│   ├── ui/                       # Buttons, inputs, forms, etc.
│   ├── layout/                   # Header, Footer, Sidebar, etc.
│   └── shared/                   # Shared components like Card, Avatar, Badge

├── features/                     # Feature-based folder structure
│   ├── auth/
│   │   ├── components/           # Auth-specific UI (e.g. LoginForm)
│   │   ├── hooks/                # Auth-specific custom hooks
│   │   ├── services/             # Auth API logic (e.g. login, register)
│   │   ├── types.ts              # Auth-related TypeScript types
│   │   └── validation.ts         # Form validation schema for auth
│   └── blog/                     # Blog feature module

├── hooks/                        # Global reusable custom React hooks

├── lib/                          # Low-level libraries and utilities
│   ├── base/                     # Axios requests base
│   │   ├── delete/
│   │   ├── get/
│   │   ├── patch/
│   │   ├── post/
│   │   └── put/
│   └── requestHelpers/           # helper functions

├── store/                        # Global state management
│   ├── index.ts                  # store file
│   ├── provider.tsx              # create provider in file for next 15 "use client"
│   └── slice/                    # folder for create slices

├── services/                     # External API interaction logic
│   └── userService.ts            # User-related API functions

├── types/                        # Global TypeScript types and interfaces
│   ├── api.d.ts                  # API-specific types
│   └── common.d.ts               # Shared/common types

├── utils/                        # General utility functions (e.g. formatPhone, validateEmail)

├── constants/                    # Constant values (e.g. roles, messages, routes)
│   ├── roles.ts
│   ├── messages.ts
│   └── routes.ts


├── styles/                       # Global CSS/Tailwind styles
│   ├── globals.css               # Global styles (e.g. resets, base styles)
│   └── tailwind.css              # Tailwind imports and customization
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
git clone https://github.com/alihoushngi/Next-Base.git
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
📫 [aliihooshangi@gmail.com](mailto:aliihooshangi@gmail.com)
🔗 [linkedin.com/in/alihoushangi](https://linkedin.com/in/alihoushangi)  
💻 [github.com/alihoushngi](https://github.com/alihoushngi)

---

> “Skip setup. Start building.” ✨  
> ⭐ If you like this project, give it a star!

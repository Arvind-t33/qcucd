## Overview

The Quantum Computing Club at Davis (QCUCD) website is a modern, responsive platform built to introduce newcomers to quantum computing and invite them to join the club. It showcases club information, team member profiles, upcoming workshops, and provides an easy sign‑up process. Under the hood, QCUCD leverages Next.js for its App Router and server‑side rendering capabilities, React for component-based UI construction, TypeScript for type safety, and Tailwind CSS for utility‑first styling. The site is deployed on Vercel for zero‑configuration hosting, offering seamless CI/CD and global CDN distribution.

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Technology Stack](#technology-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Building for Production](#building-for-production)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [Contact](#contact)  

---

## Demo

View the live site on Vercel:  
[https://qcucd.vercel.app](https://qcucd.vercel.app)

---

## Features

- **Home, About, Workshops, Contact & Join Pages** for intuitive navigation and information architecture  
- **Meet the Team** section with dynamic member cards pulled from React components  
- **Interactive Effects** such as typewriter animations, sparkles, and particle backgrounds powered by Framer Motion and tsparticles  
- **Responsive Design** via Tailwind CSS utility classes for mobile‑first layouts  
- **Custom Hooks** like `useIntersectionObserver` for lazy‑loading and scroll‑based animations  
- **Accessible UI** leveraging Radix UI primitives and heroicons/react for semantic, screen‑reader‑friendly components  

---

## Technology Stack

- **Next.js 15** – The React Framework for Production; enables hybrid SSG/SSR and the App Router  
- **React 18** – Component‑based library for building interactive user interfaces  
- **TypeScript** – Strong typing for reliable, maintainable code  
- **Tailwind CSS** – Utility‑first CSS framework for rapid styling without leaving HTML templates  
- **Framer Motion** – Animations and transitions for React components  
- **tsparticles** – Particle system engine for engaging backgrounds and effects  
- **Radix UI** – Primitives for accessible UI components  
- **Vercel** – Zero‑configuration deployment for Next.js with global CDN and preview URLs  

---

## Project Structure

```plaintext
├── public
│   └── images & svg assets
├── src
│   ├── app                  # Next.js App Router pages & layout
│   │   ├── about/page.tsx
│   │   ├── workshops/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── join/page.tsx
│   │   └── layout.tsx
│   ├── components           # Reusable UI components & demos
│   ├── hooks                # Custom React hooks (e.g., useIntersectionObserver)
│   └── lib                  # Utility functions
├── .eslintrc.json           # Linting rules
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies & scripts
└── README.md                # Project overview (this file)
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x.x  
- **npm**, **yarn**, or **pnpm**  
- **Vercel CLI** (optional, for local deployments)

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/Arvind-t33/qcucd.git
   cd qcucd
   ```
2. Install dependencies:  
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## Deployment

Deployment to Vercel is zero‑configuration:

1. Push your changes to GitHub.  
2. Vercel automatically builds and deploys the site on every commit.  

For manual deployment:

```bash
npm install -g vercel
vercel --prod
```

---

## Contributing

1. Fork the repo  
2. Create a new branch: `git checkout -b feature/YourFeature`  
3. Make your changes and commit: `git commit -m "Add feature"`  
4. Push to your fork and open a Pull Request  

Please adhere to existing coding conventions and include clear commit messages.

---

## Contact

For questions or feedback, open an issue on GitHub or contact the club admin.

---

*Built with ❤️ by the Quantum Computing Club at Davis*

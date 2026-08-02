# Aamir Majeed Khan Portfolio

A production-ready developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Premium dark developer portfolio design
- Responsive sections for hero, about, skills, projects, experience, engineering highlights, and contact
- Dynamic project detail pages
- SEO metadata, sitemap, robots, and Open Graph support
- Accessible contact form with validation and rate limiting
- Reusable data-driven content for easy customization

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form
- Zod
- Resend

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Updating content

- Edit profile and site details in data/site-config.ts
- Add or edit projects in data/projects.ts
- Update skills in data/skills.ts
- Modify experience entries in data/experience.ts
- Add your resume PDF to public/resume/aamir-majeed-resume.pdf

## Deployment

Deploy to Vercel by importing the repository and setting the environment variables from .env.example.

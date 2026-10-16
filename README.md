# walid.dev

Personal portfolio of **Walid Marghata**, Senior Software Engineer (C#, .NET, Azure). A dark, futuristic single-page site with an interactive 3D hero, animated metrics and a multilingual interface.

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/React-18-087EA4?style=for-the-badge&logo=react&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="Three.js" src="https://img.shields.io/badge/Three.js-0.165-000000?style=for-the-badge&logo=threedotjs&logoColor=white"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
</p>

## Highlights

- **3D hero and background** built with Three.js (wireframe geometry reacting to the scene).
- **Animated sections** with Framer Motion: metrics, about, skills, projects, experience, education and contact.
- **Multilingual UI** with a language switcher (EN, PT, AR with RTL, FR, RU).
- **Responsive and accessible** layout, dark theme with a cyan accent.
- **Static-friendly build**, ready to deploy on Vercel (see [DEPLOY.md](DEPLOY.md)).

## Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS, PostCSS |
| Motion and 3D | Framer Motion, Three.js |

## Project structure

```
app/          routes, layout and global styles
components/   page sections and UI pieces
lib/          content, translations and helpers
public/       static assets
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

## Deploy

The project deploys to Vercel with zero configuration. Step by step instructions are in [DEPLOY.md](DEPLOY.md).

## Author

**Walid Marghata**: [LinkedIn](https://www.linkedin.com/in/walid-marghata-615636173) · [ORCID](https://orcid.org/0009-0009-1456-9242) · [Lattes](https://lattes.cnpq.br/7568694202686117)

# Stacktech Consulting Site

Vite, React, TypeScript, and Tailwind CSS website for Stacktech Consulting LLP.

## Project Structure

```text
.
├── public/              # Static assets served directly by Vite
├── src/
│   ├── components/      # Reusable React views/components
│   ├── data/            # Local content and typed data objects
│   ├── App.tsx          # App state and top-level routing between views
│   ├── index.css        # Tailwind entrypoint
│   └── main.tsx         # React bootstrap
├── index.html
├── package.json
└── vite.config.ts
```

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

# MaddeArt

Portfolio för fotografen Madeleine Dalla, byggd med React, TypeScript och Vite. Sidan samlar utvalda projekt, ett projektarkiv och Limited Editions i en responsiv layout med tangentbordsstöd.

## Starta lokalt

```bash
npm install
npm run dev
```

## Kontrollera projektet

```bash
npm run build
npm run lint
```

## Sidor och innehåll

- `/` – startsida med utvalda projekt, Limited Editions och arkiv.
- `/projects` – översikt över alla projekt.
- `/project/:slug` – enskilt projekt med bilder och navigation till andra projekt.
- `/about` – kort presentation av Madeleine och länk till projekten.

Besökaren kan växla mellan ljust och mörkt läge; valet sparas i webbläsaren.

Projekt och bilder finns för närvarande i `src/data/projects.ts`; konsttrycket finns i `src/data/edition.ts`. Prismic-koppling är planerad men ännu inte implementerad. Mer bakgrund och aktuellt arbetsläge finns i [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

## Publicering

Netlify bygger med `npm run build` och publicerar mappen `dist`. Regeln i `public/_redirects` gör att projektsidor kan laddas direkt via sin adress.

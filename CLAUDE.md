# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
```

## Architecture

Next.js App Router app (TypeScript, Tailwind). Single-user AI-powered save app — paste a URL, Claude processes it, stores it, you retrieve it via natural language search.

**Three routes:**
- `/` — Save screen: URL input → triggers full pipeline
- `/feed` — Feed screen: saved items grouped by collection
- `/search` — Search screen: natural language query → Claude + pgvector results

**API routes** (`app/api/`):
- `POST /api/save` — content extraction → Claude enrichment → Supabase insert
- `POST /api/retrieve` — embed query → pgvector similarity search
- `GET /api/collections` — list all collections
- `GET /api/feed` — recent saves

**Shared component:** `app/components/BottomNav.tsx` — fixed bottom tab bar used by all three screens.

## Stack

- **Claude** (`claude-sonnet-4-20250514`) via Anthropic API — content enrichment + search
- **Supabase** (postgres + pgvector) — storage + vector search
- **Vercel** — deployment; lives at `khaledashraf.me/apps/saveplus` via a rewrite in the portfolio repo

## Claude's enrichment output shape

```ts
{
  title: string;
  description: string;      // 2–3 sentence summary
  collection: string;       // existing or new collection name
  tags: string[];
  content_type: "article" | "video" | "recipe" | "tweet" | "other";
}
```

## Content extraction routing

| URL pattern | Handler |
|---|---|
| youtube.com / youtu.be | YouTube Data API v3 |
| tiktok.com | oEmbed endpoint |
| instagram.com | Manual note fallback |
| Everything else | Generic fetch + Claude |

## PWA

`public/manifest.json` is linked in `app/layout.tsx`. Icons (`icon-192.png`, `icon-512.png`) still need to be added to `public/`.

## Design

Mobile-first, always dark (black `#000000` background), minimal. Max content width `max-w-lg`, centered. See `CONTEXT.md` for full product spec.

# Save+ — Project Context

## What it is

A single-user AI-powered save app. Throw any URL at it → Claude fetches and understands the content, assigns it to a collection, writes a description and tags, saves it to the database. Retrieve anything via natural language search.

## Deployment

- Repo: separate from main portfolio, deployed to Vercel as `saveplus.vercel.app`
- Accessible at `khaledashraf.me/apps/saveplus` via a rewrite in the portfolio repo's `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/apps/saveplus/:path*",
      "destination": "https://saveplus.vercel.app/:path*"
    }
  ]
}
```

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router, TypeScript, Tailwind) |
| Database | Supabase (postgres + pgvector) |
| AI | Claude API (`claude-sonnet-4-20250514`) |
| Hosting | Vercel |
| Mobile | PWA (manifest + add to home screen on iPhone) |

## App Screens

```
/           Save screen   — URL input, submit, shows Claude's result
/feed       Feed screen   — scrollable list grouped by collection
/search     Search screen — natural language search via Claude + embeddings
```

## API Routes

| Method | Route | Purpose |
|---|---|---|
| POST | `/api/save` | Full pipeline: extract → enrich → store |
| POST | `/api/retrieve` | NL search: embed → pgvector → return results |
| GET | `/api/collections` | All collections with counts |
| GET | `/api/feed` | Recent saves |

## Save Pipeline (to implement)

1. Detect URL type and route to the right extractor:
   - YouTube → YouTube Data API v3
   - TikTok → oEmbed endpoint
   - Instagram → manual note fallback
   - Everything else → generic fetch + Claude
2. Send extracted content to Claude, receive:
   ```json
   {
     "title": "...",
     "description": "2-3 sentence summary",
     "collection": "existing or suggested new collection",
     "tags": ["tag1", "tag2"],
     "content_type": "article | video | recipe | tweet | other"
   }
   ```
3. Generate embedding (for vector search)
4. Insert into Supabase with embedding

## Environment Variables

```
ANTHROPIC_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
YOUTUBE_API_KEY=
```

## Design Direction

Mobile-first, minimal, always dark. Black (`#000000`) background, white text. Utility tool — fast, no clutter. Max content width `max-w-lg` centered on screen.

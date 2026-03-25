import { NextRequest, NextResponse } from "next/server";

// POST /api/save
// Body: { url: string }
// Runs the full save pipeline: fetch content → Claude processes → store in Supabase
export async function POST(request: NextRequest) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  // TODO: route to content extractor (YouTube, TikTok, generic)
  // TODO: send to Claude for title, description, collection, tags, content_type
  // TODO: generate embedding and store in Supabase

  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

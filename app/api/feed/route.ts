import { NextResponse } from "next/server";

// GET /api/feed
// Returns recent saves, grouped by collection
export async function GET() {
  // TODO: fetch from Supabase, ordered by created_at desc

  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

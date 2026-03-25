import { NextResponse } from "next/server";

// GET /api/collections
// Returns all collections with save counts
export async function GET() {
  // TODO: fetch from Supabase

  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

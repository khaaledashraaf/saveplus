import { NextRequest, NextResponse } from "next/server";

// POST /api/retrieve
// Body: { query: string }
// Natural language search using embeddings (pgvector) + Claude reranking
export async function POST(request: NextRequest) {
  const { query } = await request.json();

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  // TODO: embed the query with Claude/OpenAI embeddings
  // TODO: vector similarity search in Supabase pgvector
  // TODO: optionally rerank or summarize results with Claude

  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

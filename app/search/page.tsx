"use client";

import { Button, Input } from "@heroui/react";
import BottomNav from "../components/BottomNav";

export default function SearchScreen() {
  return (
    <div className="flex flex-col min-h-full pb-16">
      <main className="flex flex-col flex-1 px-4 pt-14 max-w-lg mx-auto w-full">
        <h1 className="text-2xl font-semibold tracking-tight mb-8">Search</h1>

        {/* Natural language search input */}
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Ask anything you've saved..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          />
          <Button
            className="w-full bg-white text-black font-semibold"
          >
            Search
          </Button>
        </div>

        {/* Results area */}
        <div className="mt-8 flex flex-col gap-3">
          {/* Results rendered here */}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

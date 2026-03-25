"use client";

import { Button, Input, Card, CardContent } from "@heroui/react";
import BottomNav from "./components/BottomNav";

export default function SaveScreen() {
  return (
    <div className="flex flex-col min-h-full pb-16">
      <main className="flex flex-col flex-1 px-4 pt-14 max-w-lg mx-auto w-full">
        <h1 className="text-2xl font-semibold tracking-tight mb-8">Save+</h1>

        {/* URL input */}
        <div className="flex flex-col gap-3">
          <Input
            type="url"
            placeholder="Paste a URL..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          />
          <Button
            className="w-full bg-white text-black font-semibold"
          >
            Save
          </Button>
        </div>

        {/* Result area — shown after Claude processes */}
        <div className="mt-8 hidden">
          <Card className="bg-neutral-900 border border-neutral-800">
            <CardContent>
              <p className="text-sm text-neutral-400">Result will appear here</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

import Link from "next/link";
import { Button } from "@heroui/react";
import BottomNav from "../components/BottomNav";

export default function FeedScreen() {
  return (
    <div className="flex flex-col min-h-full pb-16">
      <main className="flex flex-col flex-1 px-4 pt-14 max-w-lg mx-auto w-full">
        <h1 className="text-2xl font-semibold tracking-tight mb-8">Feed</h1>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center flex-1 gap-3 text-center py-20">
          <p className="text-neutral-500 text-sm">Nothing saved yet.</p>
          <p className="text-neutral-600 text-xs">Tap the button below to save your first URL.</p>
        </div>

        {/* Saves grouped by collection — rendered here when data is available */}
      </main>

      {/* Add Item FAB — sits above the bottom nav */}
      <div className="fixed bottom-20 right-4 z-10">
        <Link href="/">
          <Button
            isIconOnly
            className="w-14 h-14 rounded-full bg-white text-black shadow-lg shadow-black/40 hover:bg-neutral-200 transition-colors text-xl font-light"
          >
            +
          </Button>
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}

import Image from "next/image";
import { getSellerByUsername } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function SendOfferPage() {
  const leftSeller = getSellerByUsername("hieronymous");
  const rightSeller = getSellerByUsername("shivvy");

  const leftItems = leftSeller?.products.slice(0, 3) ?? [];
  const rightItems = rightSeller?.products.slice(0, 2) ?? [];

  return (
    <div className="px-4 pb-6">
      <h1 className="mb-6 text-center text-2xl font-semibold">Send Offer</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Left column */}
        <div>
          <p className="mb-3 text-center text-base font-medium underline underline-offset-4">
            @{leftSeller?.username}
          </p>
          <div className="space-y-2">
            {leftItems.map((product) => (
              <div
                key={product.id}
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-width: 448px) 50vw, 200px"
                  className="object-contain"
                />
              </div>
            ))}
            <div className="flex justify-center pt-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground">
                <Plus className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div>
          <p className="mb-3 text-center text-base font-medium underline underline-offset-4">
            @{rightSeller?.username}
          </p>
          <div className="space-y-2">
            {rightItems.map((product) => (
              <div
                key={product.id}
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-width: 448px) 50vw, 200px"
                  className="object-contain"
                />
              </div>
            ))}
            <div className="flex justify-center pt-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground">
                <Plus className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <Button className="min-w-28 rounded-full px-8 py-3 text-base" size="lg">
          Offer
        </Button>
        <Button
          className="min-w-28 rounded-full px-8 py-3 text-base"
          variant="outline"
          size="lg"
        >
          Chat
        </Button>
      </div>
    </div>
  );
}

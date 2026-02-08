import Image from "next/image";
import { getSellerByUsername } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import type { Product, Seller } from "@/lib/data/products";

function OfferColumn({
  seller,
  items,
}: {
  seller: Seller;
  items: Product[];
}) {
  return (
    <div className="flex flex-col">
      <p className="mb-2 text-center text-sm font-medium">@{seller.username}</p>
      <div className="space-y-2">
        {items.map((product) => (
          <div
            key={product.id}
            className="relative aspect-square overflow-hidden border border-border"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              sizes="(max-width: 448px) 45vw, 200px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{seller.location}</p>
    </div>
  );
}

export default function ReviewOfferPage() {
  const leftSeller = getSellerByUsername("hieronymous");
  const rightSeller = getSellerByUsername("shivvy");

  const leftItems = leftSeller?.products.slice(0, 3) ?? [];
  const rightItems = rightSeller?.products.slice(0, 2) ?? [];

  return (
    <div className="px-4 pb-6">
      <h1 className="mb-6 text-center text-2xl font-semibold">Review Offer</h1>

      <div className="grid grid-cols-2 gap-0 border border-border">
        <div className="border-r border-border p-3">
          {leftSeller && (
            <OfferColumn seller={leftSeller} items={leftItems} />
          )}
        </div>
        <div className="p-3">
          {rightSeller && (
            <OfferColumn seller={rightSeller} items={rightItems} />
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Button className="min-w-24 rounded-full px-6 text-sm" size="sm">
          Accept
        </Button>
        <Button
          className="min-w-24 rounded-full px-6 text-sm"
          variant="outline"
          size="sm"
        >
          Counter
        </Button>
        <Button
          className="min-w-24 rounded-full px-6 text-sm"
          variant="outline"
          size="sm"
        >
          Decline
        </Button>
      </div>
      <div className="mt-2 flex justify-center">
        <Button
          className="min-w-24 rounded-full px-6 text-sm"
          variant="outline"
          size="sm"
        >
          Chat
        </Button>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data/products";

export function SellerItemsRow({
  products,
  currentProductId,
}: {
  products: Product[];
  currentProductId: string;
}) {
  return (
    <div className="flex gap-1 overflow-x-auto px-3 py-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className={`relative aspect-square w-16 shrink-0 overflow-hidden rounded-sm ${
            product.id === currentProductId
              ? "ring-2 ring-foreground"
              : ""
          }`}
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            sizes="64px"
            className="object-contain"
          />
        </Link>
      ))}
    </div>
  );
}

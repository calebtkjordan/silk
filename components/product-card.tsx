import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden">
      <Image
        src={product.imageUrl}
        alt={product.title}
        fill
        sizes="(max-width: 448px) 33vw, 150px"
        className="object-contain"
      />
      <Badge
        variant="secondary"
        className="absolute bottom-1 left-1 rounded-sm bg-background/80 px-1.5 py-0.5 text-[10px] font-medium backdrop-blur-sm"
      >
        {product.size}
      </Badge>
    </Link>
  );
}

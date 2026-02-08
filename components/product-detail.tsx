import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data/products";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="space-y-4 px-4 py-4">
      <div className="flex justify-center gap-3">
        <Button className="min-w-32 rounded-full px-8 py-3 text-lg" size="lg">
          Offer
        </Button>
        <Button className="min-w-32 rounded-full px-8 py-3 text-lg" variant="outline" size="lg">
          Chat
        </Button>
      </div>

      <div>
        <h1 className="text-center text-2xl font-semibold">{product.title}</h1>
        <p className="text-right text-base font-medium">
          Size: {product.size}
        </p>
      </div>

      <p className="whitespace-pre-line text-right text-base leading-relaxed">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-1">
        <span className="text-base">Tags:</span>
        {product.tags.map((tag, i) => (
          <span key={tag}>
            <span className="text-base underline underline-offset-2">{tag}</span>
            {i < product.tags.length - 1 && (
              <span className="text-base">,</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

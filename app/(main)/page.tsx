import { ProductGrid } from "@/components/product-grid";
import { getAllProducts } from "@/lib/data/products";

export default function ExplorePage() {
  const products = getAllProducts();

  return (
    <div className="pt-1">
      <ProductGrid products={products} />
    </div>
  );
}

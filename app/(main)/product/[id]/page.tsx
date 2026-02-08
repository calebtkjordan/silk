import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, getSellerProducts, getSellerById } from "@/lib/data/products";
import { SellerItemsRow } from "@/components/seller-items-row";
import { ProductDetail } from "@/components/product-detail";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const seller = getSellerById(product.sellerId);
  const sellerProducts = getSellerProducts(product.sellerId);

  return (
    <div>
      <SellerItemsRow products={sellerProducts} currentProductId={product.id} />

      <Link
        href={`/profile/${seller?.id}`}
        className="block py-3 text-center text-2xl font-medium underline underline-offset-4"
      >
        @{seller?.username}
      </Link>

      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 448px) 100vw, 448px"
          className="object-contain"
          priority
        />
      </div>

      <ProductDetail product={product} />
    </div>
  );
}

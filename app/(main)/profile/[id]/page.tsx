import Image from "next/image";
import { notFound } from "next/navigation";
import { getSellerById } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const seller = getSellerById(id);

  if (!seller) {
    notFound();
  }

  return (
    <div className="px-4 pb-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-muted" />
        <span className="text-lg font-semibold">@{seller.username}</span>
      </div>

      <p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-foreground">
        {seller.bio}
      </p>

      <div className="grid grid-cols-3 gap-2">
        {seller.products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group relative aspect-square overflow-hidden rounded-sm"
          >
            <div className="absolute left-1 top-1 z-10">
              <Plus className="h-3.5 w-3.5 text-foreground" strokeWidth={2.5} />
            </div>
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              sizes="(max-width: 448px) 33vw, 150px"
              className="object-contain"
            />
          </Link>
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 z-40 flex justify-center gap-3 bg-background py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <Button className="min-w-28 rounded-full px-8 py-3 text-base" size="lg" asChild>
          <Link href="/offer">Offer</Link>
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

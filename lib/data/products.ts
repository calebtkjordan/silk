export type Product = {
  id: string;
  title: string;
  size: string;
  description: string;
  tags: string[];
  imageUrl: string;
  sellerId: string;
};

export type Seller = {
  id: string;
  username: string;
  location: string;
  bio: string;
  products: Product[];
};

const products: Product[] = [
  {
    id: "1",
    title: "Yeezy Short Sleeve T-Shirt",
    size: "L",
    description:
      "Worn only once or twice\nFits baggy. Searching for leather jackets and size 36 denim.",
    tags: ["Madrid", "T-Shirts", "Streetwear"],
    imageUrl: "/placeholder/a422d23074615b9ae558c0c30d9126570c162f0a.png",
    sellerId: "s1",
  },
  {
    id: "2",
    title: "Vultures Drawstring Pants",
    size: "L",
    description:
      "White drawstring pants with Vultures crest patch. Wide leg, relaxed fit. Worn a handful of times.",
    tags: ["Madrid", "Pants", "Streetwear"],
    imageUrl: "/placeholder/7a73901c98554651bcb6f84dad266c4a6aec1d77 (2).png",
    sellerId: "s1",
  },
  {
    id: "3",
    title: "Vultures Short Shorts",
    size: "M",
    description:
      "White cotton shorts with Vultures crest patch. Elastic waistband, relaxed fit.",
    tags: ["Madrid", "Shorts", "Streetwear"],
    imageUrl: "/placeholder/fc95abb37a09df2814883927bb2153f305ae85f0.png",
    sellerId: "s1",
  },
  {
    id: "4",
    title: "Vultures Washed Tee",
    size: "XL",
    description:
      "White oversized tee with Vultures crest embroidery. Heavyweight cotton, boxy cut.",
    tags: ["Barcelona", "T-Shirts", "Streetwear"],
    imageUrl: "/placeholder/a3efb3b9fdcf5a0aa0c81413013f61385cd8ede3.png",
    sellerId: "s2",
  },
  {
    id: "5",
    title: "Vultures Fleece Pants",
    size: "M",
    description:
      "Charcoal fleece pants with tonal Vultures patch. Drawstring waist, straight leg.",
    tags: ["Paris", "Pants", "Streetwear"],
    imageUrl: "/placeholder/5b4122c319a0d77ba1e7ec55ea87ee63366b09ab.png",
    sellerId: "s2",
  },
  {
    id: "6",
    title: "Vultures Drawstring Pants",
    size: "M",
    description:
      "White drawstring pants with Vultures crest. Lightweight cotton, wide leg silhouette.",
    tags: ["London", "Pants", "Streetwear"],
    imageUrl: "/placeholder/7a73901c98554651bcb6f84dad266c4a6aec1d77 (3).png",
    sellerId: "s3",
  },
  {
    id: "7",
    title: "Vultures Short Shorts",
    size: "S",
    description:
      "White cotton shorts with Vultures emblem. Minimal, clean. Great condition.",
    tags: ["London", "Shorts", "Streetwear"],
    imageUrl: "/placeholder/fc95abb37a09df2814883927bb2153f305ae85f0 (1).png",
    sellerId: "s3",
  },
  {
    id: "8",
    title: "Yeezy Oversized Tee",
    size: "M",
    description:
      "Dark charcoal oversized tee with Vultures crest. Dropped shoulders, boxy fit.",
    tags: ["Tokyo", "T-Shirts", "Streetwear"],
    imageUrl: "/placeholder/a422d23074615b9ae558c0c30d9126570c162f0a.png",
    sellerId: "s4",
  },
  {
    id: "9",
    title: "Vultures White Tee",
    size: "L",
    description:
      "Clean white heavyweight tee with small Vultures patch. Barely worn.",
    tags: ["Berlin", "T-Shirts", "Streetwear"],
    imageUrl: "/placeholder/a3efb3b9fdcf5a0aa0c81413013f61385cd8ede3.png",
    sellerId: "s4",
  },
  {
    id: "10",
    title: "Vultures Charcoal Pants",
    size: "L",
    description:
      "Dark fleece drawstring pants. Tonal branding, relaxed through the leg.",
    tags: ["Berlin", "Pants", "Streetwear"],
    imageUrl: "/placeholder/5b4122c319a0d77ba1e7ec55ea87ee63366b09ab.png",
    sellerId: "s3",
  },
  {
    id: "11",
    title: "Vultures White Pants",
    size: "S",
    description:
      "White wide-leg drawstring pants. Vultures crest on hip. Never worn.",
    tags: ["Madrid", "Pants", "Streetwear"],
    imageUrl: "/placeholder/7a73901c98554651bcb6f84dad266c4a6aec1d77 (2).png",
    sellerId: "s4",
  },
  {
    id: "12",
    title: "Vultures Cotton Shorts",
    size: "L",
    description:
      "White shorts with embroidered Vultures patch. Worn twice, like new.",
    tags: ["Paris", "Shorts", "Streetwear"],
    imageUrl: "/placeholder/fc95abb37a09df2814883927bb2153f305ae85f0.png",
    sellerId: "s2",
  },
  {
    id: "13",
    title: "Vultures Dark Tee",
    size: "M",
    description:
      "Charcoal boxy tee with tonal Vultures crest. Washed once, like new.",
    tags: ["Tokyo", "T-Shirts", "Streetwear"],
    imageUrl: "/placeholder/a422d23074615b9ae558c0c30d9126570c162f0a.png",
    sellerId: "s3",
  },
  {
    id: "14",
    title: "Vultures White Drawstring",
    size: "XL",
    description:
      "White wide-leg drawstring pants. Vultures patch on hip. Brand new with tags.",
    tags: ["Madrid", "Pants", "Streetwear"],
    imageUrl: "/placeholder/7a73901c98554651bcb6f84dad266c4a6aec1d77 (3).png",
    sellerId: "s1",
  },
  {
    id: "15",
    title: "Vultures Fleece Pants",
    size: "L",
    description:
      "Dark fleece pants with drawstring waist. Tonal Vultures patch. Barely worn.",
    tags: ["Berlin", "Pants", "Streetwear"],
    imageUrl: "/placeholder/5b4122c319a0d77ba1e7ec55ea87ee63366b09ab.png",
    sellerId: "s4",
  },
  {
    id: "16",
    title: "Vultures Dark Crop Top",
    size: "S",
    description:
      "Black cropped tee with Vultures crest. Boxy cut, heavyweight cotton.",
    tags: ["London", "T-Shirts", "Streetwear"],
    imageUrl: "/placeholder/a422d23074615b9ae558c0c30d9126570c162f0a.png",
    sellerId: "s5",
  },
  {
    id: "17",
    title: "Vultures White Wide Pants",
    size: "S",
    description:
      "White wide-leg pants with Vultures patch. Light cotton, never worn.",
    tags: ["London", "Pants", "Streetwear"],
    imageUrl: "/placeholder/7a73901c98554651bcb6f84dad266c4a6aec1d77 (2).png",
    sellerId: "s5",
  },
];

const sellers: Seller[] = [
  {
    id: "s1",
    username: "hieronymous",
    location: "Madrid, ESP",
    bio: "Based in Madrid. Streetwear, punk, avant garde.\nOpen to shipping in the EU.",
    products: products.filter((p) => p.sellerId === "s1"),
  },
  {
    id: "s2",
    username: "vultures.archive",
    location: "Barcelona, ESP",
    bio: "Barcelona-based. Collecting and trading Vultures pieces.",
    products: products.filter((p) => p.sellerId === "s2"),
  },
  {
    id: "s3",
    username: "silk.trader",
    location: "London, UK",
    bio: "London. Curating streetwear and avant garde.",
    products: products.filter((p) => p.sellerId === "s3"),
  },
  {
    id: "s4",
    username: "daily.rotation",
    location: "Berlin, DE",
    bio: "Berlin. Rotating pieces weekly. Open to trades.",
    products: products.filter((p) => p.sellerId === "s4"),
  },
  {
    id: "s5",
    username: "shivvy",
    location: "London, UK",
    bio: "London-based. Into minimalist streetwear and dark aesthetics.",
    products: products.filter((p) => p.sellerId === "s5"),
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getSellerById(id: string): Seller | undefined {
  return sellers.find((s) => s.id === id);
}

export function getSellerByUsername(username: string): Seller | undefined {
  return sellers.find((s) => s.username === username);
}

export function getSellerProducts(sellerId: string): Product[] {
  return products.filter((p) => p.sellerId === sellerId);
}

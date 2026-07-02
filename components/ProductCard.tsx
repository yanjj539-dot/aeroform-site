import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card" data-product-card>
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 780px) 100vw, (max-width: 1180px) 50vw, 560px"
        />
      </div>
      <div className="product-copy">
        <span>{product.number}</span>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <small>{product.description}</small>
        <ArrowRight className="card-arrow" size={18} />
      </div>
    </article>
  );
}

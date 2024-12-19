import Image from "next/image";
import Link from "next/link";

export default function RelatedProducts({ filteredRatedProducts }) {
  return (
    <section className="mt-10">
      <h1 className="heading-text mb-3 text-lime-600 drop-shadow-md">
        Related Products
      </h1>
      <section className="productList-grid grid min-h-32 gap-2">
        {filteredRatedProducts.map((product) => (
          <Link key={product.id} href={`/menu/${product.id}`}>
            <Image
              src={product.srcUrl}
              alt={product.name}
              width={300}
              height={300}
              priority
              className="h-48 w-full rounded-sm object-cover"
            />
          </Link>
        ))}
      </section>
    </section>
  );
}

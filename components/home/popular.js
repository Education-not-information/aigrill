import Image from "next/image";

export default function Popular({ products, customers }) {
  const mostSold = products
    .map((product) => product.sold)
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(2, 3);

  const popularProducts = products.filter((product) =>
    product.sold >= mostSold[0] ? product : null,
  );

  return (
    <section>
      <h1 className="heading-text mb-2 text-lime-600 drop-shadow-md">
        Popular Products
      </h1>
      <section className="grid grid-cols-4 gap-2 sm:h-48 md:h-56 lg:h-64 xl:h-80 2xl:h-96">
        {popularProducts.map((product) => (
          <article
            key={product.id}
            className="popular relative rounded-sm border"
          >
            <Image
              src={product.srcUrl}
              alt={product.name}
              width={300}
              height={300}
              className="h-full w-full object-cover"
              priority
            />
            <section className="absolute right-1 top-1">
              <section className="flex -space-x-2">
                {customers.slice(0, 4).map((customer) => (
                  <Image
                    className="rounded-full ring-1 ring-white"
                    key={customer.id}
                    src={customer.imgSrc}
                    alt={customer.name}
                    width={32}
                    height={32}
                    priority
                  />
                ))}
              </section>
              <section className="mt-1 flex justify-between gap-[2px] rounded-full bg-gray-900 px-1 text-[0.74rem] font-light">
                <span>Loved By: </span>
                <span className="text-lime-600"> {product.sold}+</span>
              </section>
            </section>
            <section className="group absolute w-full cursor-pointer overflow-hidden bg-gray-900 bg-opacity-70 text-slate-200 transition-all">
              <p className="heading-text text-center text-lime-600 drop-shadow-md">
                {product.name}
              </p>
              <p className="p-text invisible absolute px-1 text-center group-hover:visible group-hover:delay-100">
                {product.title}
              </p>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function ProductList({ filteredProductList, customers }) {
  return (
    <section className="col-span-3 min-h-40 bg-slate-900">
      <section className="productList-grid grid gap-2">
        {filteredProductList.map((product) => (
          <article
            key={product.id}
            className="row-span-4 grid grid-rows-subgrid rounded-sm bg-slate-600"
          >
            <figure className="relative h-44 border-b-2 lg:h-48">
              <Image
                src={product.srcUrl}
                alt={product.name}
                width={250}
                height={250}
                priority
                className="h-full w-full object-cover"
              />
              <section className="absolute bottom-0 right-0">
                <section className="relative flex -space-x-2">
                  {customers.slice(0, 4).map((customer) => (
                    <Image
                      key={customer.id}
                      src={customer.imgSrc}
                      alt={customer.name}
                      width={32}
                      height={32}
                      priority
                      className="h-7 w-7 rounded-full object-cover ring-2 ring-white"
                    />
                  ))}
                </section>
                <section className="my-1 rounded-full bg-black text-[0.6rem]">
                  <span className="text-slate-200">Loved By: </span>
                  <span className="text-lime-400">{product.sold}+</span>
                </section>
              </section>
            </figure>
            <section className="row-span-3 grid grid-rows-subgrid gap-3">
              <h1 className="heading-text px-2 text-lime-500 drop-shadow-md">
                {product.name}
              </h1>
              <i className="text-p px-2">{product.title}</i>
              <div className="flex bg-black">
                <p className="w-1/2 bg-lime-600 py-2 text-center">
                  Price: £{product.price}
                </p>
                <Link
                  href={`/menu/${product.id}`}
                  className="w-1/2 py-2 text-center transition-all hover:bg-orange-500"
                >
                  Details
                </Link>
              </div>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}

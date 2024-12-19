import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ products, id, customers }) {
  return (
    <section className="grid grid-cols-2 gap-4">
      <figure className="relative row-span-7 grid grid-rows-subgrid rounded-sm">
        <Image
          src={products[id - 1].srcUrl}
          alt={products[id - 1].name}
          width={250}
          height={250}
          className="absolute h-full w-full rounded-sm object-cover"
          priority
        />
      </figure>
      <article className="p-text row-span-7 grid grid-rows-subgrid gap-4 bg-zinc-700 p-4">
        <h1 className="heading-text text-lime-500 drop-shadow-md">
          {products[id - 1].name}
        </h1>
        <p className="heading-text text-orange-500 drop-shadow-md">
          {products[id - 1].title}
        </p>
        <p className="">{products[id - 1].desc}</p>
        <p className="">
          Ingredient:{" "}
          <i className="text-slate-300">{products[id - 1].ingredients}</i>
        </p>
        <p className="text-lime-500">Price: £{products[id - 1].price}</p>
        <footer className="flex items-center justify-between rounded-full border bg-black p-2">
          <p>
            Loved By:{" "}
            <span className="text-lime-500">{products[id - 1].sold}+</span>
          </p>
          <section className="flex -space-x-3">
            {customers.map((customer) => (
              <Image
                key={customer.id}
                src={customer.imgSrc}
                alt={customer.name}
                width={32}
                height={32}
                className="h-full w-full rounded-full ring-2 ring-black"
              />
            ))}
          </section>
        </footer>
        <Link
          href="/reservation"
          className="rounded-sm bg-black p-2 text-center transition-all hover:bg-orange-500"
        >
          Reservation
        </Link>
      </article>
    </section>
  );
}

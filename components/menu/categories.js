import Image from "next/image";
import Link from "next/link";

export default function Categories({ filteredItems, query }) {
  return (
    <aside className="col-span-1 rounded-sm bg-zinc-800">
      <ul>
        {filteredItems.map((product) => (
          <li key={product.name}>
            <Link
              href={`?${new URLSearchParams({ q: product.category })}`}
              className={`flex border-b-2 hover:border-b-lime-500 hover:bg-slate-900 ${query === product.category && "border-b-lime-500 bg-slate-900"}`}
            >
              <figure className="h-28 sm:min-w-[9.5rem] sm:max-w-[9.5rem] md:min-w-[11.5rem] md:max-w-[11.5rem] lg:h-24 lg:min-w-20 lg:max-w-20">
                <Image
                  src={product.imgUrl}
                  alt={product.name}
                  width={150}
                  height={150}
                  priority
                  className="h-full w-full object-cover"
                />
              </figure>
              <section className="hidden px-2 lg:block">
                <p className="p-text text-lime-500 drop-shadow-md">
                  {product.name}
                </p>
                <p className="lg:p-text text-[0.6rem] drop-shadow-md">
                  {product.title}
                </p>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

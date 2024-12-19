import Image from "next/image";

export default function Marquee({ products }) {
  return (
    <section
      className="marquee flex h-64 w-full overflow-hidden border-y"
      style={{ "--width": "10rem", "--total": 9 }}
    >
      <ul className="relative flex items-center">
        {products.slice(0, 9).map((product, idx) => {
          return (
            <li
              key={product.id}
              className="item absolute left-[100dvw] flex h-44 w-32 cursor-pointer items-center rounded-sm border transition-all hover:scale-105 md:h-56 md:w-40"
              style={{ "--position": idx + 1 }}
            >
              <Image
                src={product.srcUrl}
                alt={product.name}
                width={250}
                height={250}
                priority
                className="h-full w-full object-cover"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

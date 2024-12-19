"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

export default function SlideShow({ products }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex < products.length - 1 ? index + 1 : 0,
      );
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [index, products.length]);

  return (
    <section className="grid grid-cols-4 gap-2 sm:h-72 md:h-80 lg:h-96 xl:h-[29rem] 2xl:h-[33rem]">
      <aside className="slider-mobile__text relative col-span-1 overflow-hidden rounded-sm border">
        <Image
          src="/charcoal.jpg"
          alt="charcoal"
          width={300}
          height={300}
          className={`h-full w-full object-cover opacity-30 ${index + 1 && "animate-pulse"}`}
          priority
        />
        <article className="absolute left-0 top-0 flex flex-col gap-2 p-2">
          <h1 className="heading-text text-lime-600 drop-shadow-md">
            {products[index].name}
          </h1>
          <p className="p-text drop-shadow-md">{products[index].desc}</p>
        </article>
      </aside>
      <figure className="slider-show__mobile relative border-4">
        <section className="flex h-64 overflow-hidden sm:h-72 md:h-80 lg:h-96 xl:h-[29rem] 2xl:h-[33rem]">
          {products.map((product) => (
            <Fragment key={product.id}>
              <Image
                src={product.srcUrl}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full flex-shrink-0 flex-grow-0 object-cover transition-all"
                style={{ translate: `${-100 * index}%` }}
                priority
              />
            </Fragment>
          ))}
        </section>
        <h1 className="slider-title heading-text absolute bottom-5 left-5 rounded-sm bg-gray-800 bg-opacity-85 p-2 text-lime-600">
          {products[index].title}
        </h1>
        <section className="slider-bullets absolute right-5 top-5">
          {products.map((_, idx) => (
            <p
              key={idx}
              onClick={() => setIndex(idx)}
              className={`mt-1 h-2 w-2 rounded-full bg-lime-600 drop-shadow-md transition-all ${index === idx ? "h-6 bg-orange-500" : "cursor-pointer hover:scale-150"}`}
            ></p>
          ))}
        </section>
      </figure>
    </section>
  );
}

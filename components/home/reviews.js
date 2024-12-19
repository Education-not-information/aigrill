import Image from "next/image";

export default function Reveiws({ customers }) {
  return (
    <section className="grid grid-cols-6 gap-2">
      {customers.slice(0, 4).map((customer) => (
        <article
          key={customer.id}
          className="comment-box row-span-3 grid grid-rows-subgrid p-4"
        >
          <section className="h-12 w-12 rounded-full ring-2 ring-white">
            <Image
              src={customer.imgSrc}
              alt={customer.name}
              width={32}
              height={32}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </section>
          <h1 className="heading-text border-b">{customer.name}</h1>
          <p className="p-text">{customer.comment}</p>
        </article>
      ))}
    </section>
  );
}

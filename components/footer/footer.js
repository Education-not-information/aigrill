import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="p-text container mx-auto my-12 grid grid-cols-3 gap-3 px-2 md:grid-cols-5">
        <article className="row-span-2 grid grid-rows-subgrid">
          <p>Give us a call</p>
          <h1 className="heading-text text-lime-500 drop-shadow-md">
            (+00) 123 456 7890
          </h1>
        </article>
        <article className="row-span-2 grid grid-rows-subgrid">
          <h1 className="heading-text text-lime-500 drop-shadow-md">
            Opening hours
          </h1>
          <section>
            <p>Monday - Thursday</p>
            <p className="mb-2">12:00 AM - 11:00 PM</p>
            <p>Friday - Sunday </p>
            <p>12:00 AM Till Late</p>
          </section>
        </article>
        <article className="row-span-2 grid grid-rows-subgrid">
          <h1 className="heading-text text-lime-500 drop-shadow-md">Adress</h1>
          <section>
            <p>00 Natural Road</p>
            <p>AA0 9ZZ London</p>
            <p>United Kingdom</p>
          </section>
        </article>
        <article className="row-span-2 grid grid-rows-subgrid">
          <h1 className="heading-text text-lime-500 drop-shadow-md">
            Contacts
          </h1>
          <section>
            <p>E-mail adress:</p>
            <p className="mb-2">message@aigrill.com</p>
            <p>Phone number:</p>
            <p>(+00) 123 456 7890</p>
          </section>
        </article>
        <article className="row-span-2 grid grid-rows-subgrid">
          <h1 className="heading-text text-lime-500 drop-shadow-md">Links</h1>
          <section className="z-10 flex flex-col gap-1">
            <Link className="hover:text-lime-600" href="/">
              Home
            </Link>
            <Link className="hover:text-lime-600" href="/menu">
              Menu
            </Link>
            <Link className="hover:text-lime-600" href="/reservation">
              Reservation
            </Link>
          </section>
        </article>
      </section>
      <section className="h-20 bg-orange-800 bg-opacity-75 pt-2 text-[0.74rem]">
        <section className="container mx-auto flex justify-between px-2">
          <p>
            &copy; {new Date().getFullYear()} Ai Grill Restaurant, all rights
            reserved
          </p>
          <section className="z-10 flex gap-1">
            <a
              href="https://#"
              className="flex h-7 w-7 items-center justify-center rounded-full border bg-gray-700 hover:bg-gray-950"
            >
              X
            </a>
            <a
              href="https://#"
              className="flex h-7 w-7 items-center justify-center rounded-full border bg-sky-400 hover:bg-sky-600"
            >
              in
            </a>
            <a
              href="https://#"
              className="flex h-7 w-7 items-center justify-center rounded-full border bg-red-500 hover:bg-red-700"
            >
              Y
            </a>
            <a
              href="https://#"
              className="flex h-7 w-7 items-center justify-center rounded-full border bg-blue-700 hover:bg-gray-800"
            >
              f
            </a>
          </section>
        </section>
      </section>
    </>
  );
}

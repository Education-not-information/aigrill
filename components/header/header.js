"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <nav className="container mx-auto flex h-14 items-center justify-between">
      <Link href="/" className="bg-lime-600 px-2 py-6">
        Ai Grill
      </Link>
      <ul className="flex gap-[1px]">
        <li>
          <Link
            href="/"
            className={`px-2 py-6 ${path === "/" ? "bg-lime-600" : "bg-orange-600"}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/menu"
            className={`px-2 py-6 ${path.startsWith("/menu") ? "bg-lime-600" : "bg-orange-600"}`}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="/reservation"
            className={`px-2 py-6 ${path === "/reservation" ? "bg-lime-600" : "bg-orange-600"}`}
          >
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
}

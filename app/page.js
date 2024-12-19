import Marquee from "@/components/home/marquee";
import Popular from "@/components/home/popular";
import Reveiws from "@/components/home/reviews";
import SlideShow from "@/components/home/slideShow";
import { getProducts, getCustomers } from "@/lib/database";

export default function Home() {
  const products = getProducts();
  const customers = getCustomers();

  return (
    <main className="grid gap-10 px-2">
      <SlideShow products={products} />
      <Popular products={products} customers={customers} />
      <Reveiws customers={customers} />
      <Marquee products={products} />
    </main>
  );
}

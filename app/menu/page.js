import Products from "@/components/menu/products";
import { getCustomers, getProducts } from "@/lib/database";
import { Suspense } from "react";

export default function Menu() {
  const products = getProducts();
  const customers = getCustomers();

  return (
    <section className="grid grid-cols-4 gap-2">
      <Suspense>
        <Products products={products} customers={customers} />
      </Suspense>
    </section>
  );
}

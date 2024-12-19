"use client";

import { useSearchParams } from "next/navigation";
import Categories from "./categories";
import ProductList from "./porductList";

export default function Products({ products, customers }) {
  const category = [...new Set(products.map((product) => product.category))];
  const name = [...new Set(products.map((product) => product.name))];
  const title = [...new Set(products.map((product) => product.title))];
  const imgUrl = [...new Set(products.map((product) => product.srcUrl))];

  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "steak";

  const filteredItems = category.map((category) => ({
    category,
    name: name.find((name) =>
      products.some((item) => item.category === category && item.name === name),
    ),
    title: title.find((title) =>
      products.some(
        (item) => item.category === category && item.title === title,
      ),
    ),
    imgUrl: imgUrl.find((imgUrl) =>
      products.some(
        (item) => item.category === category && item.srcUrl === imgUrl,
      ),
    ),
  }));

  const filteredProductList = products.filter((product) =>
    product.category === query ? product : null,
  );

  return (
    <>
      <Categories filteredItems={filteredItems} query={query} />
      <ProductList
        filteredProductList={filteredProductList}
        customers={customers}
      />
    </>
  );
}

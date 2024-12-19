import ProductDetail from "@/components/menu/productDetails/productDetail";
import RelatedProducts from "@/components/menu/productDetails/relatedProducts";
import { getCustomers, getProducts } from "@/lib/database";

export default async function Product({ params }) {
  const { id } = await params;

  const products = getProducts();
  const customers = getCustomers();

  const filteredRatedProducts = products.filter((product) =>
    product.category === products[id - 1].category ? product : null,
  );
  return (
    <section>
      <ProductDetail products={products} id={id} customers={customers} />
      <RelatedProducts filteredRatedProducts={filteredRatedProducts} />
    </section>
  );
}

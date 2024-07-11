import { useProducts } from "./useProducts";  // custom hook for fetching product data

import Loader from "../ui/Loader"

import Pagination from "../ui/Pagination";
import ProductList from "./ProductList";




function Products() {

  const { isLoading, products } = useProducts();

  if (isLoading)
    return <Loader />

  return (
    <>
      <ProductList products={products} />
      <Pagination count={products?.length} />
    </>
  )
}

export default Products

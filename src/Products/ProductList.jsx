import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import { PAGE_SIZE } from "../constants";

import Empty from "../ui/Empty";


export default function ProductList({ products }) {
  const [filteredItems, setFilteredItems] = useState(products);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const filterValue = !searchParams.get("searchQuery") ? "" : searchParams.get("searchQuery")

  const from = (page - 1) * PAGE_SIZE + 1;

  const to = page * PAGE_SIZE;


  useEffect(() => {

    setFilteredItems(products?.filter(product => product.title.includes(filterValue)))
    searchParams.set("count", filteredItems.length)

    setSearchParams(searchParams)

  }, [filterValue, products, filteredItems.length, searchParams, setSearchParams])

  if (filteredItems.length === 0)
    return <Empty />

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-4 my-auto p-4 md:grid-cols-[1fr_1fr_1fr]">
      {
        filteredItems?.slice(from - 1, to).map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  );
}

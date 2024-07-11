import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom"


export default function Search() {

  const [searchQuery, setSearchQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef(null);

  useEffect(() => {

    inputRef.current.focus();

  }, [])

  function handleSearchQueryChange(queryValue) {

    setSearchQuery(queryValue);

    searchParams.set("page", 1);
    searchParams.set("searchQuery", queryValue);

    setSearchParams(searchParams);
  }

  return (
    <input type="text" placeholder="Search products" ref={inputRef}
      className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400
    sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500
    focus:ring-opacity-50" value={searchQuery} onChange={(e) => handleSearchQueryChange(e.target.value)} />
  )
}

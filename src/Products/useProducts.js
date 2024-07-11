import { getProducts } from "../data-service"
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  const { isLoading, data: products } = useQuery({

    quernKey: ['products'],
    queryFn: getProducts

  })

  return { isLoading, products }
}

import { useParams } from "react-router-dom"

import { Content } from "../ui/Content"
import { Title } from "../ui/Title"
import { Price } from "../ui/Price"
import { Description } from "../ui/Description"
import Loader from '../ui/Loader'

import { useProducts } from "./useProducts"
import LinkButton from "../ui/LinkButton"

function DetailedProductInfo() {

  const { productId } = useParams()

  const { isLoading, products } = useProducts();

  const product = products?.find(product => Number(product.id) === Number(productId))

  if (isLoading)
    return <Loader />

  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] my-6 gap-10">
      <div className="p-28 sm:p-2">
        <img src={product?.image} alt={product?.title} />
      </div>

      <div className="p-4 mb-4 md:mt-28">
        <Content>
          <Title>{product?.title}</Title>
          <Description>{product?.description}</Description>
          <Price className="pt-5">&#8377; {product?.price}</Price>
          <LinkButton to="-1">Go Back</LinkButton>
        </Content>
      </div>
    </div>
  )
}

export default DetailedProductInfo

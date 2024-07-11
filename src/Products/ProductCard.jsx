

import { Card } from "../ui/Card";
import { Image } from "../ui/Image";
import { Content } from "../ui/Content";
import { Title } from "../ui/Title";
import { Price } from "../ui/Price";

import { Link } from "react-router-dom";
import LinkButton from "../ui/LinkButton";




function ProductCard({ product }) {

  return (
    <Card>
      <Link to={`/products/${product.id}`} ><Image src={product.image} alt={product.title} /></Link>

      <Content>
        <Title>{product.title}</Title>
        <Price>&#8377; {product.price}</Price>
        <LinkButton to={`/products/${product.id}`} >More Info</LinkButton>
      </Content>
    </Card>
  )
}

export default ProductCard

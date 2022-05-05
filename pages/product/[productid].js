import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router=useRouter();
  const productid=router.query.productid;
  return <h1>Product {productid}</h1>;
};

export default ProductDetails;

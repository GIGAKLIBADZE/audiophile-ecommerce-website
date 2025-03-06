import ProductDetails from "../components/product/ProductDetails";
import ProductDescription from "../components/product/ProductDescription";
import ProductPictures from "../components/product/ProductPictures";

const Product: React.FC = () => {
  return (
    <>
      <ProductDetails />
      <ProductDescription />
      <ProductPictures />
    </>
  );
};

export default Product;

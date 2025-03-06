import ProductDetails from "../components/product/ProductDetails";
import ProductDescription from "../components/product/ProductDescription";
import ProductPictures from "../components/product/ProductPictures";
import Suggestions from "../components/product/Suggestions";

const Product: React.FC = () => {
  return (
    <>
      <ProductDetails />
      <ProductDescription />
      <ProductPictures />
      <Suggestions />
    </>
  );
};

export default Product;

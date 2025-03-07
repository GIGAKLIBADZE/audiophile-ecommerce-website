import ProductDetails from "../components/product/ProductDetails";
import ProductDescription from "../components/product/ProductDescription";
import ProductPictures from "../components/product/ProductPictures";
import Suggestions from "../components/product/Suggestions";
import Category from "./Category";

const Product: React.FC = () => {
  return (
    <>
      <ProductDetails />
      <ProductDescription />
      <ProductPictures />
      <Suggestions />
      <Category />
    </>
  );
};

export default Product;

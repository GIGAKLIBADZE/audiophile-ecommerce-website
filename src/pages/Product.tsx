import ProductDetails from "../components/product/ProductDetails";
import ProductDescription from "../components/product/ProductDescription";
import ProductPictures from "../components/product/ProductPictures";
import Suggestions from "../components/product/Suggestions";
import HomeCategories from "../components/home/HomeCategories";

const Product: React.FC = () => {
  return (
    <>
      <ProductDetails />
      <ProductDescription />
      <ProductPictures />
      <Suggestions />
      <div style={{ marginTop: "17.2rem" }}>
        <HomeCategories />
      </div>
    </>
  );
};

export default Product;

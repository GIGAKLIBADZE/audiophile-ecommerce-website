import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { IItem } from "../../types/types";
import {
  ProductImageContainer,
  ProductImage,
  ProductInterfaceAndDetails,
  GoBack,
  TitleOfTheProduct,
  DescriptionOfTheProduct,
  Price,
  OperationsContainer,
  CounterAndBtnContainer,
  AddToCartBtn,
  OperationsText,
} from "./ProductDetailsStyles";
import { New } from "../categories/AvailableProductsStyles";

const ProductDetails: React.FC = () => {
  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );
  const { slug } = useParams();
  const product = data.find((item: IItem) => item.slug === slug);

  if (!data || !product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProductInterfaceAndDetails>
        <GoBack>Go Back</GoBack>
        <div key={product.id}>
          <ProductImageContainer>
            <ProductImage src={product.image.mobile} />
          </ProductImageContainer>
          <div>
            <New>NEW PRODUCT</New>
            <TitleOfTheProduct>{product.name.toUpperCase()}</TitleOfTheProduct>
            <DescriptionOfTheProduct>
              {product.description}
            </DescriptionOfTheProduct>
            <Price>${product.price}</Price>
            <CounterAndBtnContainer>
              <OperationsContainer>
                <OperationsText>
                  <span style={{ opacity: 0.25 }}>-</span>1
                  <span style={{ opacity: 0.25 }}>+</span>
                </OperationsText>
              </OperationsContainer>
              <AddToCartBtn>ADD TO CART</AddToCartBtn>
            </CounterAndBtnContainer>
          </div>
        </div>
      </ProductInterfaceAndDetails>
    </>
  );
};

export default ProductDetails;

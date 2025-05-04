import {
  SummaryProductContainer,
  SummaryImg,
  SummaryProductInnerContainer,
  SummaryProductTitle,
  SummaryProductPrice,
  SummaryProductAmount,
  ActionBtn,
} from "./CheckoutStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IItem } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  Appreciate,
  CheckMarkContainer,
  Confirmation,
  GrandTotalText,
  GrandTotalContainer,
  InnerContainer,
  OuterContainer,
  GrandTotalPrice,
} from "./SuccessfulOrderStyles";
import { useState } from "react";

const SuccessfulOrder: React.FC = () => {
  const amountOfProducts = useSelector(
    (store: RootState) => store.shop.amounts
  );
  const data = useSelector((store: RootState) => store.fetchedInformation.info);

  const filteredProducts = data.filter((item: IItem) =>
    amountOfProducts.hasOwnProperty(item.slug)
  );

  const firstProduct: IItem = filteredProducts[0];

  const totalPrice = filteredProducts.reduce((sum: number, item: IItem) => {
    return sum + item.price * amountOfProducts[item.slug];
  }, 0);

  const grandTotal = totalPrice + 50;

  const [showOtherProducts, setShowOtherProducts] = useState<boolean>(false);

  return (
    <OuterContainer>
      <InnerContainer>
        <CheckMarkContainer>
          <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
        </CheckMarkContainer>
        <Appreciate>THANK YOU FOR YOUR ORDER</Appreciate>
        <Confirmation>
          You will receive an email confirmation shortly.
        </Confirmation>
        <div>
          <div>
            <SummaryProductContainer>
              <SummaryImg src={firstProduct.image.mobile} alt="Product" />
              <SummaryProductInnerContainer>
                <div>
                  <SummaryProductTitle>{firstProduct.name}</SummaryProductTitle>
                  <SummaryProductPrice>
                    ${firstProduct.price.toLocaleString()}
                  </SummaryProductPrice>
                </div>
                <SummaryProductAmount>
                  x{amountOfProducts[firstProduct.slug]}
                </SummaryProductAmount>
              </SummaryProductInnerContainer>
            </SummaryProductContainer>
            <div onClick={() => setShowOtherProducts(!showOtherProducts)}>
              <p>and 2 other item(s)</p>
            </div>
            {showOtherProducts &&
              filteredProducts
                .filter((item: IItem) => item !== firstProduct)
                .map((item: IItem) => (
                  <SummaryProductContainer key={item.id}>
                    <SummaryImg src={item.image.mobile} alt="Product" />
                    <SummaryProductInnerContainer>
                      <div>
                        <SummaryProductTitle>{item.name}</SummaryProductTitle>
                        <SummaryProductPrice>
                          ${item.price.toLocaleString()}
                        </SummaryProductPrice>
                      </div>
                      <SummaryProductAmount>
                        x{amountOfProducts[item.slug]}
                      </SummaryProductAmount>
                    </SummaryProductInnerContainer>
                  </SummaryProductContainer>
                ))}
          </div>
          <GrandTotalContainer>
            <GrandTotalText>GRAND TOTAL</GrandTotalText>
            <GrandTotalPrice>${grandTotal.toLocaleString()}</GrandTotalPrice>
          </GrandTotalContainer>
        </div>
        <ActionBtn style={{ marginTop: "2.3rem" }}>BACK TO HOME</ActionBtn>
      </InnerContainer>
    </OuterContainer>
  );
};

export default SuccessfulOrder;

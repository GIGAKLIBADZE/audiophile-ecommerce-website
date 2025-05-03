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

const SuccessfulOrder: React.FC = () => {
  const amountOfProducts = useSelector(
    (store: RootState) => store.shop.amounts
  );
  const data = useSelector((store: RootState) => store.fetchedInformation.info);

  const filteredProducts = data.filter((item: IItem) =>
    amountOfProducts.hasOwnProperty(item.slug)
  );

  const totalPrice = filteredProducts.reduce((sum: number, item: IItem) => {
    return sum + item.price * amountOfProducts[item.slug];
  }, 0);

  const grandTotal = totalPrice + 50;

  return (
    <div>
      <div>
        <div>
          <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
        </div>
        <h6>THANK YOU FOR YOUR ORDER</h6>
        <p>You will receive an email confirmation shortly.</p>
        <div>
          <div>
            {filteredProducts.map((item: IItem) => (
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
          <div>
            <p>GRAND TOTAL</p>
            <p>${grandTotal.toLocaleString()}</p>
          </div>
          <ActionBtn>BACK TO HOME</ActionBtn>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrder;

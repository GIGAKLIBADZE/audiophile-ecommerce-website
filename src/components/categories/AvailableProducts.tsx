import { IItem } from "../../types/types";
import {
  HeadphonesImage,
  HeadphonesImageContainer,
  New,
  HeadphonesTitle,
  HeadphonesDescription,
  HeadphonesBtn,
  HeadphonesTextContainer,
  HeadphonesContainer,
  HeadphonesCategoriesContainer,
} from "./AvailableProductsStyles";
import HomeCategories from "../home/HomeCategories";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const AvailableProducts: React.FC = () => {
  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  const { name } = useParams();

  return (
    <div>
      <HeadphonesContainer>
        {data
          .filter((item: IItem) => item.category === name && item.new === true)
          .map((item: IItem) => (
            <div>
              <HeadphonesImageContainer>
                <HeadphonesImage src={item.categoryImage.mobile} />
              </HeadphonesImageContainer>
              <HeadphonesTextContainer>
                <New>NEW PRODUCT</New>
                <HeadphonesTitle style={{ marginTop: "2.4rem" }}>
                  {item.name}
                </HeadphonesTitle>
                <HeadphonesDescription>
                  {item.description}
                </HeadphonesDescription>
                <HeadphonesBtn>SEE PRODUCT</HeadphonesBtn>
              </HeadphonesTextContainer>
            </div>
          ))}
        {data
          .filter((item: IItem) => item.category === name && item.new === false)
          .map((item: IItem) => (
            <div>
              <HeadphonesImageContainer>
                <HeadphonesImage src={item.categoryImage.mobile} />
              </HeadphonesImageContainer>
              <HeadphonesTextContainer>
                <HeadphonesTitle>{item.name}</HeadphonesTitle>
                <HeadphonesDescription>
                  {item.description}
                </HeadphonesDescription>
                <HeadphonesBtn>SEE PRODUCT</HeadphonesBtn>
              </HeadphonesTextContainer>
            </div>
          ))}
      </HeadphonesContainer>
      <HeadphonesCategoriesContainer>
        <HomeCategories />
      </HeadphonesCategoriesContainer>
    </div>
  );
};

export default AvailableProducts;

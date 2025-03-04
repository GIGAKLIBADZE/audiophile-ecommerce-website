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
} from "./AvailableHeadphonesStyles";
import HomeCategories from "../home/HomeCategories";

const AvailableHeadphones: React.FC<{ data: any }> = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <HeadphonesContainer>
        {data
          .filter(
            (item: IItem) => item.category === "headphones" && item.new === true
          )
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
          .filter(
            (item: IItem) =>
              item.category === "headphones" && item.new === false
          )
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
        <HomeCategories data={data} />
      </HeadphonesCategoriesContainer>
    </div>
  );
};

export default AvailableHeadphones;

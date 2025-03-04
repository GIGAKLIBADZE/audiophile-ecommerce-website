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
} from "./AvailableHeadphonesStyles";

const AvailableHeadphones: React.FC<{ data: any }> = ({ data }) => {
  console.log(data);
  return (
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
              <HeadphonesDescription>{item.description}</HeadphonesDescription>
              <HeadphonesBtn>SEE PRODUCT</HeadphonesBtn>
            </HeadphonesTextContainer>
          </div>
        ))}
      {data
        .filter(
          (item: IItem) => item.category === "headphones" && item.new === false
        )
        .map((item: IItem) => (
          <div>
            <HeadphonesImageContainer>
              <HeadphonesImage src={item.categoryImage.mobile} />
            </HeadphonesImageContainer>
            <HeadphonesTextContainer>
              <HeadphonesTitle>{item.name}</HeadphonesTitle>
              <HeadphonesDescription>{item.description}</HeadphonesDescription>
              <HeadphonesBtn>SEE PRODUCT</HeadphonesBtn>
            </HeadphonesTextContainer>
          </div>
        ))}
    </HeadphonesContainer>
  );
};

export default AvailableHeadphones;

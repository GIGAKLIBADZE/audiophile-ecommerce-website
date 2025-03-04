import { IItem } from "../../types/types";
import {
  HeadphonesImage,
  HeadphonesImageContainer,
  New,
  HeadphonesTitle,
  HeadphonesDescription,
  HeadphonesBtn,
  HeadphonesTextContainer,
} from "./AvailableHeadphonesStyles";

const AvailableHeadphones: React.FC<{ data: any }> = ({ data }) => {
  console.log(data);
  return (
    <nav>
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
              <HeadphonesTitle>{item.name}</HeadphonesTitle>
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
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button>SEE PRODUCT</button>
          </div>
        ))}
    </nav>
  );
};

export default AvailableHeadphones;

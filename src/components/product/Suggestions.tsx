import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { IItem } from "../../types/types";
import { TOtherItem } from "../../types/types";
import {
  SeeProduct,
  SuggestedItem,
  SuggestionName,
  SuggestionsContainer,
  SuggestionsOuterContainer,
  YouMayLike,
} from "./SuggestionsStyles";
import { Image } from "../home/FooterLayoutStyles";
import { ImageContainer } from "../home/HomeHeaderStyles";

const Suggestions: React.FC = () => {
  const { slug } = useParams();
  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );

  const product = data.find((item: IItem) => item.slug === slug);

  if (!data || !product) {
    return <div>Loading...</div>;
  }

  return (
    <SuggestionsOuterContainer>
      <YouMayLike>YOU MAY ALSO LIKE</YouMayLike>
      <SuggestionsContainer>
        {product.others.map((item: TOtherItem) => (
          <SuggestedItem key={item.name}>
            <ImageContainer>
              <Image src={item.image.mobile} />
            </ImageContainer>
            <SuggestionName>{item.name}</SuggestionName>
            <SeeProduct>SEE PRODUCT</SeeProduct>
          </SuggestedItem>
        ))}
      </SuggestionsContainer>
    </SuggestionsOuterContainer>
  );
};

export default Suggestions;

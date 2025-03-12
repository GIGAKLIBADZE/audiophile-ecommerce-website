import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { IItem } from "../../types/types";
import { useParams } from "react-router-dom";
import { TIncludeItem } from "../../types/types";
import {
  BoxContainer,
  DescriptionContainer,
  DetailsHeadLine,
  Features,
  List,
  ListItem,
  ListItemAmount,
  Item,
} from "./ProductDescriptionStyles";

const ProductDescription: React.FC = () => {
  const { slug } = useParams();

  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );

  const product = data.find((item: IItem) => item.slug === slug);

  if (!data || !product) {
    return <div>Loading...</div>;
  }

  return (
    <DescriptionContainer>
      <div>
        <DetailsHeadLine>FEATURES</DetailsHeadLine>
        <Features>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
        </Features>
        <Features style={{ marginTop: "2.4rem" }}>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </Features>
      </div>
      <BoxContainer>
        <DetailsHeadLine>IN THE BOX</DetailsHeadLine>
        <List>
          {product.includes.map((i: TIncludeItem) => (
            <ListItem key={i.item}>
              <ListItemAmount>{i.quantity}x</ListItemAmount>
              <Item>
                {i.item
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Item>
            </ListItem>
          ))}
        </List>
      </BoxContainer>
    </DescriptionContainer>
  );
};

export default ProductDescription;

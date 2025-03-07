import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { IItem } from "../../types/types";
import {
  FirstImagesContainer,
  Image,
  PicturesContainer,
  SecondImageContainer,
} from "./ProductPicturesStyles";

const ProductPictures: React.FC = () => {
  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );
  const { slug } = useParams();

  const product = data.find((item: IItem) => item.slug === slug);

  if (!data || !product) {
    return <div>Loading...</div>;
  }

  return (
    <PicturesContainer>
      <div>
        <FirstImagesContainer>
          <Image src={product.gallery.first.mobile} />
          <Image src={product.gallery.second.mobile} />
        </FirstImagesContainer>
        <SecondImageContainer>
          <Image src={product.gallery.third.mobile} />
        </SecondImageContainer>
      </div>
    </PicturesContainer>
  );
};

export default ProductPictures;

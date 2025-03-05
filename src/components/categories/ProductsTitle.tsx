import { Title, TitleContainer } from "./ProductsTitleStyles";
import { useParams } from "react-router-dom";

const ProductsTitle: React.FC = () => {
  const { name } = useParams();

  return (
    <>
      <TitleContainer>
        <Title>{name?.toUpperCase()}</Title>
      </TitleContainer>
    </>
  );
};

export default ProductsTitle;

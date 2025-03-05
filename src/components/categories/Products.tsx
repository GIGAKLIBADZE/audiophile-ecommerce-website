import { Title, TitleContainer } from "./ProductsTitleStyles";
import { useParams } from "react-router-dom";

const HeadphonesTitle: React.FC = () => {
  const { name } = useParams();

  return (
    <>
      <TitleContainer>
        <Title>{name?.toUpperCase()}</Title>
      </TitleContainer>
    </>
  );
};

export default HeadphonesTitle;

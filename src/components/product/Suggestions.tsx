import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { IItem } from "../../types/types";
import { TOtherItem } from "../../types/types";
import { YouMayLike } from "./SuggestionsStyles";

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
    <div>
      <YouMayLike>YOU MAY ALSO LIKE</YouMayLike>
      <nav>
        {product.others.map((item: TOtherItem) => (
          <div key={item.name}>
            <img src={item.image.mobile} />
            <h3>{item.name}</h3>
            <button>SEE PRODUCT</button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Suggestions;

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { IItem } from "../../types/types";

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
    <section>
      <div>
        <div>
          <img src={product.gallery.first.mobile} style={{ width: "4rem" }} />
          <img src={product.gallery.second.mobile} style={{ width: "4rem" }} />
        </div>
        <div>
          <img src={product.gallery.third.mobile} style={{ width: "4rem" }} />
        </div>
      </div>
    </section>
  );
};

export default ProductPictures;

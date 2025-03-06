import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { IItem } from "../../types/types";

const ProductDetails: React.FC = () => {
  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );
  const { slug } = useParams();
  const product = data.find((item: IItem) => item.slug === slug);

  if (!data || !product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <p>Go Back</p>
        <div key={product.id}>
          <div>
            <img src={product.image.mobile} />
          </div>
          <div>
            <p>NEW PRODUCT</p>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <div>
              <div>
                <p>
                  <span>-</span>1<span>+</span>
                </p>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

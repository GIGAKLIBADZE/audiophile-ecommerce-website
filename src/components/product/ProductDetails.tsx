import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";
import { IItem } from "../../types/types";

const ProductDetails: React.FC = () => {
  console.log("ProductDetails component rendered!");

  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );
  const { slug } = useParams();

  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <p>Go Back</p>
        {data
          .filter((item: IItem) => item.slug === slug && item.new === true)
          .map((item: IItem) => (
            <div key={item.id}>
              <div>
                <img src={item.image.toString()} />
              </div>
              <div>
                <p>NEW PRODUCT</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
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
          ))}
      </div>
    </>
  );
};

export default ProductDetails;

import { IItem } from "../../types/types";

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
            <img src={item.categoryImage.mobile} />
            <p>NEW PRODUCT</p>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button>SEE PRODUCT</button>
          </div>
        ))}
      {data
        .filter(
          (item: IItem) => item.category === "headphones" && item.new === false
        )
        .map((item: IItem) => (
          <div>
            <img src={item.categoryImage.mobile} />
            <p>NEW PRODUCT</p>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button>SEE PRODUCT</button>
          </div>
        ))}
    </nav>
  );
};

export default AvailableHeadphones;

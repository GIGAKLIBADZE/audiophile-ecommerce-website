import { ReactNode } from "react";

const AvailableHeadphones: React.FC<{ data: any }> = ({ data }) => {
  console.log(data);
  return (
    <nav>
      {data
        .filter(
          (item: { new: boolean; category: string }) =>
            item.category === "headphones" && item.new === true
        )
        .map(
          (item: {
            description: ReactNode;
            name: ReactNode;
            categoryImage: { mobile: any };
          }) => (
            <div>
              <img src={item.categoryImage.mobile} />
              <p>NEW PRODUCT</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button>SEE PRODUCT</button>
            </div>
          )
        )}
      {data
        .filter(
          (item: { new: boolean; category: string }) =>
            item.category === "headphones" && item.new === false
        )
        .map((item: { categoryImage: { mobile: any } }) => (
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

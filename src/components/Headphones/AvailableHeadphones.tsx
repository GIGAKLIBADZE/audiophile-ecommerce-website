const AvailableHeadphones: React.FC<{ data: any }> = ({ data }) => {
  console.log(data);
  return (
    <nav>
      {data
        .filter(
          (item: { new: boolean; category: string }) =>
            item.category === "headphones" && item.new === true
        )
        .map((item: { categoryImage: { mobile: any } }) => (
          <img src={item.categoryImage.mobile} />
        ))}
      {data
        .filter(
          (item: { new: boolean; category: string }) =>
            item.category === "headphones" && item.new === false
        )
        .map((item: { categoryImage: { mobile: any } }) => (
          <img src={item.categoryImage.mobile} />
        ))}
    </nav>
  );
};

export default AvailableHeadphones;

const AvailableHeadphones: React.FC<{ data: any }> = ({ data }) => {
  console.log(data);
  return (
    <nav>
      {data
        .filter((item: { category: string }) => item.category === "headphones")
        .map((item: { categoryImage: { mobile: any } }) => (
          <img src={item.categoryImage.mobile} />
        ))}
    </nav>
  );
};

export default AvailableHeadphones;

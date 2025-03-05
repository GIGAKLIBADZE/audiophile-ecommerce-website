import HomeHeader from "../components/home/HomeHeader";
import HomeProducts from "../components/home/HomeProducts";
import HomeCategories from "../components/home/HomeCategories";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHeader />
      <div style={{ marginTop: "9.2rem" }}>
        <HomeCategories />
      </div>
      <HomeProducts />/
    </div>
  );
};

export default Home;

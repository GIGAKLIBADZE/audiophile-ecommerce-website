import HomeHeader from "../components/home/HomeHeader";
import { useDispatch } from "react-redux";
import { fetchInformation } from "../features/data/dataSlice";
import { AppDispatch } from "../store";
import { useEffect } from "react";
import HomeProducts from "../components/home/HomeProducts";
import HomeCategories from "../components/home/HomeCategories";

const Home: React.FC = () => {
  // const data = useSelector((store: RootState) => store.fetchedInformation.info);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchInformation());
  }, [dispatch]);

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

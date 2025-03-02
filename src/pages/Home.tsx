import HomeHeader from "../components/home/HomeHeader";
// import HomeCategories from "../components/home/HomeCategories";
// import HomeCategories from "../components/HomeCategories";
import { useDispatch, useSelector } from "react-redux";
import { fetchInformation } from "../features/data/dataSlice";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import HomeProducts from "../components/home/HomeProducts";
import HomeFooter from "../components/home/HomeFooter";
import HomeCategories from "../components/home/HomeCategories";

const Home: React.FC = () => {
  const data = useSelector((store: RootState) => store.fetchedInformation.info);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchInformation());
  }, [dispatch]);

  return (
    <div>
      <HomeHeader />
      <HomeCategories data={data} />
      <HomeProducts data={data} />/
      <HomeFooter />
    </div>
  );
};

export default Home;

import HomeHeader from "../components/HomeHeader";
import HomeCategories from "../components/HomeCategories";
import { useDispatch, useSelector } from "react-redux";
import { fetchInformation } from "../features/data/dataSlice";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import HomeProducts from "../components/HomeProducts";
import HomeFooter from "../components/HomeFooter";

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
      <HomeProducts data={data} />
      <HomeFooter />
    </div>
  );
};

export default Home;

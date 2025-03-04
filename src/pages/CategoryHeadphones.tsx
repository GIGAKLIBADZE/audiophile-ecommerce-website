import HeadphonesTitle from "../components/Headphones/HeadphonesTitle";
import AvailableHeadphoness from "../components/Headphones/AvailableHeadphones";
import { fetchInformation } from "../features/data/dataSlice";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoriesHeadPhones: React.FC = () => {
  const data = useSelector((store: RootState) => store.fetchedInformation.info);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchInformation());
  }, [dispatch]);

  return (
    <>
      <HeadphonesTitle />
      <AvailableHeadphoness data={data} />
    </>
  );
};

export default CategoriesHeadPhones;

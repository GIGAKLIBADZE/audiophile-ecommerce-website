import React from "react";
import { HeaderContainer, HeaderImage } from "./HomeStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchInformation } from "../features/data/dataSlice";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";

const HomeHeader: React.FC = () => {
  const data = useSelector((store: RootState) => store.fetchedInformation.info);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchInformation());
  }, [dispatch]);

  return (
    <>
      <HeaderContainer>
        <HeaderImage src="/images/home/mobile/image-header.jpg" alt="test" />
      </HeaderContainer>
    </>
  );
};

export default HomeHeader;

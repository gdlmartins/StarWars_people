import React from "react";
import { Typography } from "@material-ui/core";
import CardMui from "../../components/Card";
import BackToTop from '../../components/header';

import useGetData from "../../hooks/useGetData";
import { StyledGrid, StyledCard } from "./style";

const Home = () => {
  const [searchData,setSearchData ] = React.useState('');
  const data = useGetData("all");


  const dataToHome = (dataFromHeader) => { 
    setSearchData(dataFromHeader)
  }

  console.log(data);
  const dataToScreen =
    data &&
    data.length &&
    data.filter((item) => {
        if (
          // removed the item without a real pic
          item.name === "Lobot" ||
          item.name === "Mon Mothma" ||
          item.name === "Roos Tarpals" ||
          item.name === "Lobot" ||
          item.name === "Shmi Skywalker" ||
          item.name === "Ratts Tyerell" ||
          item.name === "Gasgano" ||
          item.name === "Saesee Tiin" ||
          item.name === "Yarael Poof" ||
          item.name === "Cordé" ||
          item.name === "Luminara Unduli" ||
          item.name === "San Hill" ||
          item.name === "Sly Moore"
        ) {
          return false;
        } else return true;
      })
      .filter(item => { 
        return (item.name).toLowerCase().includes(searchData.toLowerCase())
      })

      .map((character) => {
        return (
          <StyledCard key={character.id}>
            <CardMui character={character} />
          </StyledCard>
        );
      });

  return<> 
   <BackToTop
   dataToHome={dataToHome}
  dataToScreen={dataToScreen}
   />
   
  </>;
};

export default Home;

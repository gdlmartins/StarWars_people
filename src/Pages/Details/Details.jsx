import React, { useEffect } from "react";
// import useGetData from "../../hooks/useGetData";
import GetData from "../../service/GetData";
import { useParams } from "react-router";
import { Card, Typography } from "@material-ui/core";
import CardMui from "../../components/Card";
import { StyledContainer, StyledCard, CardContainer } from "./style";
import BackToTop from "../../components/header";

const Details = () => {
  const [detailCharacter, setDetailCharacter] = React.useState({});
  const { id } = useParams();

  console.log(detailCharacter);

  const { name, species, height, mass, gender, age, homeworld } =
    detailCharacter;
  useEffect(() => {
    GetData(`id/${id}`, setDetailCharacter);
  }, []);

  const detailToScreen = (
    <>
      <StyledContainer>
        <CardContainer>
          <CardMui isDetail={true} character={detailCharacter} />
          <StyledCard>
            <Typography color='primary' variant='h5' component='h2'>
              {name}
            </Typography>
            {species && (
              <Typography>
                {species && species.charAt(0).toUpperCase() + species.slice(1)}
              </Typography>
            )}
            {homeworld &&  (  typeof homeworld === "object" ? homeworld.map(item => <Typography>
           {item.charAt(0).toUpperCase() + item.slice(1)}
         </Typography> ) :
              <Typography>
                
                {homeworld.charAt(0).toUpperCase() + homeworld.slice(1)}
              </Typography>
            )}

            {species && <Typography>{species}</Typography>}

            <Typography>{gender}</Typography>
            <Typography>{height}ft</Typography>
            <Typography>{mass}Kg</Typography>
          </StyledCard>
        </CardContainer>
      </StyledContainer>
    </>
  );

  return <BackToTop isDetail={true} dataToScreen={detailToScreen} />;
};

export default Details;

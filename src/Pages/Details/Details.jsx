import React, { useEffect } from "react";
// import useGetData from "../../hooks/useGetData";
import GetData from "../../service/GetData";
import { useParams } from "react-router";
import { Card, Typography } from "@material-ui/core";
import CardMui from "../../components/Card";
import { StyledContainer, StyledCard , CardContainer } from "./style";
import BackToTop from "../../components/header";

const Details = () => {
  const [detailCharacter, setDetailCharacter] = React.useState({});
  const { id } = useParams();

  console.log(detailCharacter);

  const { name, species, height, mass, gender,age , homeworld } = detailCharacter;
  useEffect(() => {
    GetData(`id/${id}`, setDetailCharacter);
  }, []);

  const detailToScreen = (<>
    <StyledContainer>
       
      <CardContainer>
       

      <CardMui isDetail={true} character={detailCharacter} />
     

        <StyledCard>
    
          <Typography color="primary" variant="h5" component= "h2">{name}</Typography> 
          {species && <Typography>{species.charAt(0).toUpperCase() + species.slice(1) } </Typography> }
          {homeworld &&  <Typography> Homeworld: { homeworld.charAt(0).toUpperCase()+ homeworld.slice(1)} </Typography>}
          {age && <Typography>{age}</Typography> }
       
         
          {species && <Typography>{ species}</Typography>}
   
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

// {
//   "id": 1,

// wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
// image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
// born": -19,
// bornLocation": "polis massa",
// died": 34,
// diedLocation": "ahch-to",
//   species": "human",
//   hairColor": "blond",
//   eyeColor": "blue",
//   skinColor": "light",
//   cybernetics": "Prosthetic right hand",
//   "affiliations": [
//     "Alliance to Restore the Republic",
//     "Red Squadron",
//     "Rogue Squadron",
//     "Massassi Group",
//     "Leia Organa's team",
//     "Endor strike team",
//     "Jedi Order",
//     "Bright Tree tribe",
//     "New Republic",
//     "Resistance"
//   ],
//   "masters": [
//     "Obi-Wan Kenobi",
//     "Yoda"
//   ],
//   "apprentices": [
//     "Leia Organa",
//     "Ben Solo (along with a dozen apprentices)",
//     "Rey"
//   ],
//   "formerAffiliations": []
// }

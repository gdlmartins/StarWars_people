import React, { useEffect } from "react";
// import useGetData from "../../hooks/useGetData";
import GetData from "../../service/GetData";
import { useParams } from "react-router";
import { Card } from "@material-ui/core";
import CardMui from '../../components/Card';

const Details = () => {
  const [detailCharacter, setDetailCharacter] = React.useState({});
  const { id } = useParams();

  console.log(detailCharacter);


  const {name, height, mass, gender, homeworld} = detailCharacter;
  useEffect(() => {
    GetData(`id/${id}`, setDetailCharacter);
  }, []);

  return (<>

    <CardMui 
    isDetail={true}
    character={detailCharacter} />
    
      <Card>
name:{name}, height: {height}, mass: {mass}, gender: {gender}, homeworld:{homeworld} 
      </Card>
      </>
          );
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

import React from "react";
import { useNavigate } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import { goToDetail } from "../Router/coordenation";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
    background: "black",
    color: "#D1B000",
  },

  carddiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
  },
}));

export default function RecipeReviewCard({ character , isDetail  }) {
  const navigate = useNavigate();
  const classes = useStyles();


  const onClick =(id)=> { 

    goToDetail(navigate , id)
  }
  

  return (
    <Card className={classes.root}>
      <CardContent className={classes.carddiv}>
       {  isDetail ? <img
          src={character.image}
          style={{
            width: "400px",
            height: "450px",
            objectFit: "cover",
            objectPosition: "100% 10%",
          }}
        /> :
        <img
          src={character.image}
          style={{
            width: "280px",
            height: "290px",
            objectFit: "cover",
            objectPosition: "100% 10%",
          }}
        /> }
      </CardContent>
      <CardActions disableSpacing>
       {isDetail ?   ""  : 
        <Button 
        onClick={()=>onClick(character.id)}
        color='inherit'>{character.name}</Button>
        }

      </CardActions>
    </Card>
  );
}

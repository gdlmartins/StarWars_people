import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import GetData from "../service/GetData";

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

export default function RecipeReviewCard({ character  }) {
  const classes = useStyles();
  const [detailCharacter, setDetailCharacter] = React.useState({});

  const saveGetData = ( data)=> { 
    setDetailCharacter(data)
    console.log(data)
  }

  const onClick =(id)=> { 
    GetData(`id/${id}`,saveGetData )
    
  }
  

  return (
    <Card className={classes.root}>
      <CardContent className={classes.carddiv}>
        <img
          src={character.image}
          style={{
            width: "280px",
            height: "290px",
            objectFit: "cover",
            objectPosition: "100% 10%",
          }}
        />
      </CardContent>
      <CardActions disableSpacing>
        <Button 
        onClick={()=>onClick(character.id)}
        color='inherit'>{character.name}</Button>
      </CardActions>
    </Card>
  );
}

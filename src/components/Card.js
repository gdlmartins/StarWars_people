import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Typography , Button} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
    // marginTop: 10,
    background:"black",
    color: "#D1B000",
  },

  carddiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:"black",

  },
 
}));

export default function RecipeReviewCard({character}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.carddiv} >
      <img  
       src={character.image}  
      style={{ width: "280px" ,
      height: "290px", 
      objectFit: "cover", 
      objectPosition: "100% 10%"}}
      />
          </CardContent>
          <CardActions disableSpacing>
      <Button
      color="inherit"
      >{character.name}</Button>
      
          </CardActions>

    </Card>
  );
}

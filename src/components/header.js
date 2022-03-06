import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { IconButton, TextField } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Home from "../Pages/home/Home";
import { useNavigate } from "react-router";
import { goToHome } from "../Router/coordenation";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "rgb(5, 5, 5)",
  },
  search: {
    display: "flex",
    background: "white",
    paddingLeft: " 1%",
  },
  containerGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    width: "100%",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop({ props, dataToScreen, dataToHome }) {
  const [search, setSearch] = React.useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearch(e.target.value);
    dataToHome(e.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
          color: "goldenrod",
          backgroundColor: "rgba(30,30, 20, 0.378)",
        }}
      >
        <Toolbar>
          <IconButton 
          color="inherit"
          onClick={()=> goToHome(navigate) ,()=> console.log('clicked ') }>
          <Typography 
          
          variant='h4'>StarWars</Typography>
          </IconButton>
        </Toolbar>
        <TextField
          value={search}
          className={classes.search}
          onChange={onChange}
          variant='standard'
          placeholder='Search by name'
        />
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
      <Container>
        <Box my={2} className={classes.containerGrid}>
          {dataToScreen}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

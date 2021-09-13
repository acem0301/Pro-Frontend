import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
//import Header from "./components/Custom/Header";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import PlaceToVisit from "./components/Custom/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/teacher.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  //const { ...rest } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        brand="Pro"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        // {...rest}
      />
      <PlaceToVisit />
    </div>
  );
}

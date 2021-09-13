import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import PlaceToVisit from "../../components/Custom/PlaceToVisit.js";
import { CssBaseline } from "@material-ui/core";

function HomePage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/teacher.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));

  const classes = useStyles();
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
        showHomeHeader="true"
        // {...rest}
      />
      <PlaceToVisit />
    </div>
  );
}

export default HomePage;

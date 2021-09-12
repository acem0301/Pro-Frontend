import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Buscador from "./Buscador";
import places from "../../static/places.js";
import useWindowPosition from "../../hook/useWindowPosition.js";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <Buscador place={places[1]} checked={checked} />
    </div>
  );
}

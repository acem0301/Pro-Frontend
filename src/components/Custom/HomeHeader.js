import React, { useEffect, useState } from "react";
import { Collapse } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const searchStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontSize: "1.5rem",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#00acee",
  },
  container: {
    textAlign: "center",
    marginTop: "200px",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#00acee",
    fontSize: "4rem",
  },
}));
function HomeHeader() {
  const [checked, setChecked] = useState(false);
  const searchClasses = searchStyles();
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
    >
      <div className={searchClasses.container}>
        <h1 className={searchClasses.title}>
          Los mejores{" "}
          <span className={searchClasses.colorText}>profesionales</span>
          <br />
          en un solo lugar<span className={searchClasses.colorText}>...</span>
        </h1>
        <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={searchClasses.goDown} />
          </IconButton>
        </Scroll>
      </div>
    </Collapse>
  );
}

export default HomeHeader;

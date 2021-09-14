import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

import CustomInput from "../CustomInput/CustomInput.js";
import "../styles/Buscador.css";

const useStyles = makeStyles({
  root: {
    minWidth: 645,
    backgroundColor: "#fff",
    margin: "20px",
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    flex: "1 0 auto",
    width: "100%",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
});

export default function Buscador({ place, checked }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    ciudad: "",
    servicio: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.container}>
              <form className={classes.form} noValidate>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                      <Select
                        value={state.ciudad}
                        onChange={handleChange}
                        displayEmpty
                        name="ciudad"
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>Ciudad</em>
                        </MenuItem>
                        <MenuItem value={10}>Villa Elisa</MenuItem>
                        <MenuItem value={20}>Lambaré</MenuItem>
                        <MenuItem value={30}>Asunción</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                      <Select
                        value={state.servicio}
                        onChange={handleChange}
                        displayEmpty
                        name="servicio"
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>Servicio</em>
                        </MenuItem>
                        <MenuItem value={10}>Personal Training</MenuItem>
                        <MenuItem value={20}>Enseñanza de inglés</MenuItem>
                        <MenuItem value={30}>Peluquería</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Buscar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </div>
          </CardContent>
        </div>
      </Card>
    </Collapse>
  );
}

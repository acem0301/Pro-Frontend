import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles/Buscador.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  prueba: {
    margin: "auto",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={12} md={12} className={classes.image}>
        <Grid
          className={classes.prueba}
          item
          xs={12}
          sm={12}
          md={8}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Empiece la búsqueda..."
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Grid xs={12} sm={12} md={12}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  md={6}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Ciudad
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Age"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Asunción</option>
                    <option value={2}>Villa Elisa</option>
                    <option value={3}>Lambaré</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={6} sm={6} md={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  md={6}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Ciudad
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Age"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Asunción</option>
                    <option value={2}>Villa Elisa</option>
                    <option value={3}>Lambaré</option>
                  </Select>
                </FormControl>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Buscar
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

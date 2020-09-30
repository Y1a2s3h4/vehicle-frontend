import React, { useState } from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ResultCard from "./ResultCard";
import Preloader from "./Preloader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    letterSpacing: "2px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Search() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchDetails = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`https://vehicle-details.herokuapp.com/${input}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            Vehicle Registration Details
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={searchDetails}>
              <InputBase
                placeholder="E.g: GJ14"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => setInput(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
      {loading && <Preloader />}
      <ResultCard data={data} />
    </div>
  );
}

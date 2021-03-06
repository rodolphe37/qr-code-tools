import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Logo from "./assets/qr-code.svg";
import PwaLogo from "./assets/pwa-pass-3.svg";
import "./App.css";
import ReactGA from "react-ga";
import Tabs from "./tabs/Tabs";
import FloatingButton from "./components/githubFloatingButton/FloatingButton";

const TRACKING_ID = `${process.env.REACT_APP_TRACKING_GA}`;
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <div className="ribbon ribbon-top-right">
        <span>
          <img className="picture-ribbon" src={PwaLogo} alt="ribbon" />
        </span>
      </div>
      <div className={classes.headerApp}>
        <div className={classes.titleContainer}>
          <img src={Logo} alt="logo" width="50" />
          <strong className={classes.title}>QR Code Tools</strong>
        </div>
        <sub className={classes.sub}>
          Generate - Download - Scan - Import - Decode
        </sub>
      </div>
      <Container className={classes.conatiner}>
        <Tabs />
      </Container>
      <FloatingButton />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
  },
  conatiner: {
    marginTop: "6em",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: 8,
    fontSize: 22,
  },
  headerApp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(85, 4, 135)",
    color: "#fff",
    padding: 15,
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sub: {
    marginTop: 4,
  },
}));
export default App;

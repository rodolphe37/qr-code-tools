/* eslint-disable no-unused-vars */
import { Card, makeStyles } from "@material-ui/core";
import { useState } from "react";
import GenerateQRCode from "../components/GenerateQRCode";
import ScanFromPicture from "../components/ScanFromPicture";
import ScanQRCode from "../components/ScanQRCode";
import "./tabs.css";

const Tabs = () => {
  const classes = useStyles();
  const [generateTab, setGenerateTab] = useState(true);
  const [webcanTab, setWebcamTab] = useState(false);
  const [pictureTab, setPictureTab] = useState(false);

  const handleClickGenerate = () => {
    setGenerateTab((generateTab) => !generateTab);
    setWebcamTab(false);
    setPictureTab(false);
  };
  const handleClickScan = () => {
    setWebcamTab((webcanTab) => !webcanTab);
    setGenerateTab(false);
    setPictureTab(false);
  };
  const handleClickImport = () => {
    setPictureTab((pictureTab) => !pictureTab);
    setWebcamTab(false);
    setGenerateTab(false);
  };
  return (
    <Card className="appContainer">
      <div className="tabset">
        <input
          onClick={handleClickGenerate}
          readOnly
          checked={generateTab ? true : false}
          type="radio"
          name="tabset"
          id="tab1"
          aria-controls="generate"
        />
        <label htmlFor="tab1">Generate</label>

        <input
          onClick={handleClickScan}
          type="radio"
          name="tabset"
          id="tab2"
          aria-controls="scan"
        />
        <label for="tab2">Webcam</label>
        <input
          onClick={handleClickImport}
          type="radio"
          name="tabset"
          id="tab3"
          aria-controls="fromPicture"
        />
        <label for="tab3">Picture</label>

        <div className="tab-panels">
          <section id="generate" className="tab-panel">
            <GenerateQRCode />
          </section>
          <section id="scan" className="tab-panel">
            <ScanQRCode />
          </section>
          <section id="fromPicture" className="tab-panel">
            <ScanFromPicture />
          </section>
        </div>
      </div>

      <p className={classes.copyright}>
        <small>
          Created by :{" "}
          <cite>
            <a href="https://rodolphe-augusto.fr" target="new">
              Rodolphe AUGUSTO
            </a>
          </cite>
        </small>
      </p>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#a5a4a5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#550487 !important",
    color: "#fff",
  },
  qrContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  subQRcode: {
    marginTop: 10,
    color: "darkred",
    fontWeight: 400,
  },
  copyright: {
    textAlign: "center",
  },
}));

export default Tabs;

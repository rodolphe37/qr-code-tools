import { Card, CardContent, makeStyles, Grid } from "@material-ui/core";
import { Fragment } from "react";
import QrReader from "react-qr-reader";
import useQRCode from "../hooks/useQRCode";
import ResetButton from "./resetButton/ResetButton";

const ScanQRCode = () => {
  const classes = useStyles();
  const { scanResultWebCam, handleScanWebCam, handleErrorWebCam } = useQRCode();

  return (
    <Card style={{ padding: 5, position: "relative" }}>
      <h2 className={classes.title}>Scan & Decode</h2>
      <CardContent>
        {scanResultWebCam ? <ResetButton /> : null}
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            {scanResultWebCam ? (
              <Fragment>
                <h3>Content: </h3>
                <h4 className={classes.textResult}>{scanResultWebCam}</h4>
              </Fragment>
            ) : null}
            <h3>Scan by Web Cam</h3>
            <QrReader
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#a5a4a5",
    color: "#fff",
    padding: 20,
    boxShadow: "0 0px 4px #3f3838",
  },
  textResult: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 400,
  },
}));

export default ScanQRCode;

import React, { Fragment } from "react";
import QrReader from "react-qr-reader";
import { makeStyles, Grid, Button, Card } from "@material-ui/core";
import useQRCode from "../hooks/useQRCode";

const ScanFromPicture = () => {
  const classes = useStyles();
  const { qrRef, handleErrorFile, handleScanFile, scanResultFile, onScanFile } =
    useQRCode();

  return (
    <Card style={{ padding: 5 }}>
      <h2 className={classes.title}>Import & decode</h2>
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        {scanResultFile ? (
          <Fragment>
            <h3>Scanned Code: </h3>
            <h4 className={classes.textResult}>{scanResultFile}</h4>
          </Fragment>
        ) : null}
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={onScanFile}
        >
          Import Qr Code
        </Button>
        <QrReader
          ref={qrRef}
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorFile}
          onScan={handleScanFile}
          legacyMode
        />
      </Grid>
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
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
  textResult: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 500,
  },
}));

export default ScanFromPicture;
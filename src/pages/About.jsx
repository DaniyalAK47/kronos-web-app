import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Lottie from "react-lottie";

import animationData from "../lotties/godzillaBlue";
import nameLogo from "../assets/Kaijunka.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

const AboutPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );
  console.log(errorMessage);

  const navigate = useNavigate();
//   const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window?.ethereum);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const connectwalletHandler = () => {
    if (window.ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        // await checkNetwork();
        // await accountChangedHandler(provider.getSigner());

        const signer = provider.getSigner();
        signer.getAddress().then((res) => {
          setUserAddress(res);
          localStorage.setItem("userAddress", res);
        });
      });
    } else {
      setErrorMessage("Please Install MetaMask!!!");
    }
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "#ff9935", paddingTop: "25px", paddingX: "15px" }}
          elevation={0}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
            <Box>
              <img src={nameLogo} alt="name" />
            </Box>
            <Box display={"flex"} columnGap={10}>
              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
                onClick={() => navigate("/")}
              >
                Home
              </Typography>

              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
                onClick={() => navigate("/about")}
              >
                About
              </Typography>

              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
              >
                <Tooltip title="Coming Soon">More</Tooltip>
              </Typography>

              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
              >
                <Tooltip title="Coming Soon">Lore</Tooltip>
              </Typography>

              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
              >
                <Tooltip title="Coming Soon">Socials</Tooltip>
              </Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "white",
                padding: "10px",
                "&:hover": {
                  background: "white",
                },
              }}
              onClick={() => (userAddress ? {} : connectwalletHandler())}
            >
              <Typography
                color={"black"}
                fontWeight={700}
                maxWidth={userAddress ? "400px" : "120px"}
                fontSize={userAddress ? "14px" : "16px"}
                overflow={""}
              >
                {userAddress ? userAddress : "Connect"}
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"99.2vw"}
        height={"90.6vh"}
        //   alignItems={"center"}
        justifyContent={"center"}
        // alignItems={"center"}
        // sx={{ background: "#ff9935" }}
      >
        <Box>
          <Lottie options={defaultOptions} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;

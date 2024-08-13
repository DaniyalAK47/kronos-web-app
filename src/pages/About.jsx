import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Lottie from "react-lottie";

import animationData from "../lotties/godzillaBlue";
import nameLogo from "../assets/Kaijunka.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSDK } from "@metamask/sdk-react";

import MenuIcon from "@mui/icons-material/Menu";
import Char1 from "../assets/character1.png";
import Char2 from "../assets/character2.png";
import Char3 from "../assets/character3.png";
import Char4 from "../assets/character4.png";

const AboutPage = () => {
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  const [size, setSize] = useState([0, 0]);
  //   const [errorMessage, setErrorMessage] = useState("");
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );
  //   console.log(errorMessage);

  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    // return (): void => window.removeEventListener('resize', updateSize);
  }, []);
  console.log(size, "isMobile");

  const navigate = useNavigate();
  let providerWeb;

  try {
    providerWeb = new ethers.providers.Web3Provider(window?.ethereum);
    //   const provider = new ethers.BrowserProvider(ethereum);
  } catch (err) {}

  //   const { ethereum } = window;
  // const provider = new ethers.providers.Web3Provider(window?.ethereum);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const connectwalletHandler = async () => {
    if (size[0] < 500) {
      const accounts = await sdk?.connect();
      setUserAddress(accounts?.[0]);
    } else {
      if (window.ethereum) {
        providerWeb.send("eth_requestAccounts", []).then(async () => {
          // await checkNetwork();
          // await accountChangedHandler(provider.getSigner());
          const signer = providerWeb.getSigner();
          signer.getAddress().then((res) => {
            setUserAddress(res);
            localStorage.setItem("userAddress", res);
          });
        });
      } else {
        // setErrorMessage("Please Install MetaMask!!!");
      }
    }
  };

  return (
    <Box height={"100vh"}>
      <Box marginBottom={"10px"}>
        <AppBar
          position="static"
          sx={{ background: "#ff9935", paddingTop: "25px", paddingX: "15px" }}
          elevation={0}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box display={"flex"} alignContent={"center"}>
              {size[0] < 800 && (
                <>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        setAnchorEl(null);
                        navigate("/");
                      }}
                    >
                      Home
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setAnchorEl(null);
                        navigate("/about");
                      }}
                    >
                      About
                    </MenuItem>
                    <MenuItem>
                      <Tooltip title="Coming Soon">More</Tooltip>
                    </MenuItem>
                    <MenuItem>
                      <Tooltip title="Coming Soon">Lore</Tooltip>
                    </MenuItem>
                    <MenuItem>
                      <Tooltip title="Coming Soon">Socials</Tooltip>
                    </MenuItem>
                  </Menu>
                </>
              )}
              <img
                src={nameLogo}
                alt="name"
                width={size[0] < 700 ? "120px" : "100%"}
                height={size[0] < 700 ? "40px" : "100%"}
              />
            </Box>
            {size?.[0] > 800 && (
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
            )}
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
                maxWidth={userAddress ? "200px" : "120px"}
                fontSize={userAddress ? "14px" : "16px"}
                textOverflow={"ellipsis"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
              >
                <Tooltip title={userAddress}>
                  {userAddress ? userAddress : "Connect"}
                </Tooltip>
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={size[0] < 800 ?"85%":"100%"}
        //   alignItems={"center"}
        justifyContent={"center"}
        // alignItems={"center"}
        // sx={{ background: "#ff9935" }}
        // marginTop={"50px"}
      >
        <Box>
          <Lottie options={defaultOptions} />
        </Box>

        <Box
          display={"flex"}
          width={"98.5%"}
          justifyContent={"space-between"}
          columnGap={2}
          rowGap={2}
          marginLeft={"5px"}
          marginTop={"30px"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          <Box>
            <Box
              sx={{
                background: "lightblue",
                paddingTop: size[0] < 800 ? "20px" : "40px",
                paddingLeft: size[0] < 800 ? "14px" : "20px",
                paddingRight: size[0] < 800 ? "10px" : "20px",
                borderRadius: "15px",
              }}
            >
              <img
                src={Char4}
                width={size[0] < 800 ? "50px" : "220px"}
                height={size[0] < 800 ? "50px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Kiki
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                background: "#d1ffbd",
                paddingTop: size[0] < 800 ? "20px" : "40px",
                paddingLeft: size[0] < 800 ? "14px" : "20px",
                paddingRight: size[0] < 800 ? "10px" : "20px",
                borderRadius: "15px",
              }}
            >
              <img
                src={Char2}
                width={size[0] < 800 ? "50px" : "220px"}
                height={size[0] < 800 ? "50px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Koko
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                background: "#ffcccb",
                paddingTop: size[0] < 800 ? "20px" : "40px",
                paddingLeft: size[0] < 800 ? "14px" : "20px",
                paddingRight: size[0] < 800 ? "10px" : "20px",
                borderRadius: "15px",
              }}
            >
              <img
                src={Char3}
                width={size[0] < 800 ? "50px" : "220px"}
                height={size[0] < 800 ? "50px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Kiku
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                background: "#dfc5fe",
                paddingTop: size[0] < 800 ? "20px" : "40px",
                paddingLeft: size[0] < 800 ? "14px" : "20px",
                paddingRight: size[0] < 800 ? "10px" : "20px",
                borderRadius: "15px",
              }}
            >
              <img
                src={Char1}
                width={size[0] < 800 ? "50px" : "220px"}
                height={size[0] < 800 ? "50px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Cheeru
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;

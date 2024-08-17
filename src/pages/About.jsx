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

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSDK } from "@metamask/sdk-react";

import MenuIcon from "@mui/icons-material/Menu";
import Char1 from "../assets/character1.png";

import Char2 from "../assets/character2.png";
import Char3 from "../assets/character3.png";
import Char4 from "../assets/character4.png";

import TwitterIcon from "../assets/twitter.png";

import InstagramIcon from "../assets/Instagram_icon.png.webp";
import RedditIcon from "../assets/reddit.png";

import TiktokLogo from "../assets/tiktok.png";

const AboutPage = () => {
  const { sdk } = useSDK();
  const [size, setSize] = useState([0, 0]);
  //   const [errorMessage, setErrorMessage] = useState("");
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );
  //   console.log(errorMessage);

  const [anchorEl, setAnchorEl] = useState();
  const [anchorElSocial, setAnchorElSocial] = useState();
  const open = Boolean(anchorEl);
  const openSocial = Boolean(anchorElSocial);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickSocial = (event) => {
    setAnchorElSocial(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseSocial = () => {
    setAnchorElSocial(null);
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
                    <MenuItem onClick={handleClickSocial}>Socials</MenuItem>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElSocial}
                      open={openSocial}
                      onClose={handleCloseSocial}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      sx={{ borderRadius: "5px" }}
                    >
                      <MenuItem
                        onClick={() => {
                          setAnchorEl(null);
                          navigate("/");
                        }}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <img
                            src={TwitterIcon}
                            height={"20px"}
                            width={"20px"}
                            style={{
                              borderRadius: "50px",
                              marginRight: "10px",
                            }}
                          />
                          Twitter
                        </Box>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setAnchorEl(null);
                          navigate("/about");
                        }}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <img
                            src={InstagramIcon}
                            height={"20px"}
                            width={"20px"}
                            style={{
                              borderRadius: "50px",
                              marginRight: "10px",
                            }}
                          />
                          Instagram
                        </Box>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setAnchorEl(null);
                          navigate("/about");
                        }}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <img
                            src={RedditIcon}
                            height={"20px"}
                            width={"20px"}
                            style={{
                              borderRadius: "50px",
                              marginRight: "10px",
                            }}
                          />
                          Reddit
                        </Box>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setAnchorEl(null);
                          navigate("/");
                        }}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <img
                            src={TiktokLogo}
                            height={"20px"}
                            width={"20px"}
                            style={{
                              borderRadius: "50px",
                              marginRight: "10px",
                            }}
                          />
                          Tiktok
                        </Box>
                      </MenuItem>
                    </Menu>
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
                  fontFamily={"Light"}
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
                  fontFamily={"Light"}
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
                  fontFamily={"Light"}
                  variant="h6"
                  fontWeight={800}
                  component="div"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                  textTransform={"uppercase"}
                >
                  <Tooltip title="Coming Soon">More</Tooltip>
                </Typography>

                <Typography
                  fontFamily={"Light"}
                  variant="h6"
                  fontWeight={800}
                  component="div"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                  textTransform={"uppercase"}
                >
                  <Tooltip title="Coming Soon">Lore</Tooltip>
                </Typography>

                <Typography
                  fontFamily={"Light"}
                  variant="h6"
                  fontWeight={800}
                  component="div"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                  textTransform={"uppercase"}
                  onClick={handleClickSocial}
                >
                  Socials
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElSocial}
                  open={openSocial}
                  onClose={handleCloseSocial}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{ borderRadius: "5px" }}
                >
                  <MenuItem>
                    <Link
                      to={"https://x.com/kaijunka"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <img
                          src={TwitterIcon}
                          height={"20px"}
                          width={"20px"}
                          style={{ borderRadius: "50px", marginRight: "10px" }}
                        />
                        <Typography fontFamily={"Light"} variant="h6">
                          Twitter
                        </Typography>
                      </Box>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={
                        "https://www.instagram.com/kaijunka_hq?igsh=YWNwM2huYnhzZnQ3&utm_source=qr"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <img
                          src={InstagramIcon}
                          height={"20px"}
                          width={"20px"}
                          style={{ borderRadius: "50px", marginRight: "10px" }}
                        />
                        <Typography fontFamily={"Light"} variant="h6">
                          Instagram
                        </Typography>
                      </Box>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"https://www.reddit.com/r/Kaijunka/s/uHOsiD8GmK"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <img
                          src={RedditIcon}
                          height={"20px"}
                          width={"20px"}
                          style={{ borderRadius: "50px", marginRight: "10px" }}
                        />
                        <Typography fontFamily={"Light"} variant="h6">
                          Reddit
                        </Typography>
                      </Box>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      navigate("/about");
                    }}
                  >
                    <Link
                      to={"http://www.tiktok.com/@kaijunka_hq"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <img
                          src={TiktokLogo}
                          height={"20px"}
                          width={"20px"}
                          style={{ borderRadius: "50px", marginRight: "10px" }}
                        />
                        <Typography fontFamily={"Light"} variant="h6">
                          Tiktok
                        </Typography>
                      </Box>
                    </Link>
                  </MenuItem>
                </Menu>
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
                fontFamily={"Light"}
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
        marginTop={"60px"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        //   alignItems={"center"}
        justifyContent={"center"}
        // alignItems={"start"}
        // sx={{ background: "#ff9935" }}
        marginBottom={"50px"}
      >
        <Box>
          <Lottie options={defaultOptions} />
        </Box>

        <Typography
          fontFamily={"Light"}
          marginTop={"30px"}
          // fontFamily={"Visage"}
          fontSize={"59px"}
          fontWeight={700}
        >
          About
        </Typography>

        <Typography fontFamily={"Light"} marginX={"20px"} variant="h6">
          Kaijunka creatures are unique and whimsical digital beings that
          inhabit the Kaijunka universe. They are inspired by memes and pop
          culture references, each possessing its own distinct personality,
          appearance, and traits. These creatures come to life as NFTs, serving
          as digital collectibles and characters within the Kaijunka metaverse.
          From adorable to awe-inspiring, Kaijunka creatures come in different
          shapes, sizes, and colors, reflecting the diverse and imaginative
          nature of the meme culture they originate from. Whether they're
          reimagined versions of iconic internet memes or entirely new
          creations, Kaijunka creatures capture the essence of internet culture
          and bring it into the digital realm. As digital collectibles, Kaijunka
          creatures can be owned, traded, and showcased by their respective
          owners, providing a unique and personalized experience for collectors
          and enthusiasts. With their vibrant designs and rich lore, Kaijunka
          creatures add depth and excitement to the Kaijunka ecosystem, inviting
          users to explore, interact, and immerse themselves in a world where
          memes and monsters collide.
        </Typography>

        <Typography
          fontFamily={"Light"}
          marginTop={"30px"}
          // fontFamily={"Visage"}
          fontSize={"59px"}
          fontWeight={700}
        >
          Meet the characters
        </Typography>

        <Box
          display={"flex"}
          width={"98.5%"}
          justifyContent={"space-between"}
          columnGap={2}
          rowGap={2}
          marginLeft={"5px"}
          // marginTop={"30px"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          <Box>
            <Box>
              <img
                src={Char4}
                width={size[0] < 800 ? "100px" : "220px"}
                height={size[0] < 800 ? "100px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontFamily={"Light"}
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Kiki
            </Typography>
          </Box>

          <Box>
            <Box>
              <img
                src={Char2}
                width={size[0] < 800 ? "100px" : "220px"}
                height={size[0] < 800 ? "100px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontFamily={"Light"}
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Koko
            </Typography>
          </Box>

          <Box>
            <Box>
              <img
                src={Char3}
                width={size[0] < 800 ? "100px" : "220px"}
                height={size[0] < 800 ? "100px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontFamily={"Light"}
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Kiku
            </Typography>
          </Box>

          <Box>
            <Box>
              <img
                src={Char1}
                width={size[0] < 800 ? "100px" : "220px"}
                height={size[0] < 800 ? "100px" : "220px"}
                style={{ position: "relative", bottom: "-3px" }}
              />
            </Box>
            <Typography
              fontFamily={"Light"}
              fontSize={size[0] < 800 ? "15px" : "38px"}
              fontWeight={800}
              marginTop={"10px"}
            >
              Cheeru
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "relative", bottom: "5px" }}>
        © 2024 | kaijunka Project. All rights reserved.
      </Box>
    </Box>
  );
};

export default AboutPage;

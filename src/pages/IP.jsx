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
import HomeImg from "../assets/home.png";

import animationData from "../lotties/godzillaLatestJsonLottie .json";
import nameLogo from "../assets/Kaijunka.png";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import { useSDK } from "@metamask/sdk-react";

import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "../assets/twitter.png";

import InstagramIcon from "../assets/Instagram_icon.png.webp";
import RedditIcon from "../assets/reddit.png";

import TiktokLogo from "../assets/tiktok.png";
import ceoImage from "../assets/ceoimg.jpg";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const IP = () => {
  const { sdk } = useSDK();
  const [size, setSize] = useState([0, 0]);
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );

  const [anchorEl, setAnchorEl] = useState();
  const [anchorElSocial, setAnchorElSocial] = useState();
  const [anchorElChar, setAnchorElChar] = useState();
  const open = Boolean(anchorEl);
  const openSocial = Boolean(anchorElSocial);
  const openChar = Boolean(anchorElChar);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickSocial = (event) => {
    setAnchorElSocial(event.currentTarget);
  };
  const handleClickChar = (event) => {
    setAnchorElChar(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseSocial = () => {
    setAnchorElSocial(null);
  };
  const handleCloseChar = () => {
    setAnchorElChar(null);
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
  //   const { ethereum } = window;
  try {
    providerWeb = new ethers.providers.Web3Provider(window?.ethereum);
    //   const provider = new ethers.BrowserProvider(ethereum);
  } catch (err) {}

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handlePreview = (url) => {
    window.open(url, "_blank");
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
    <Box maxWidth={"100vw"}>
      <Box sx={{ flexGrow: 1 }} maxWidth={"100vw"}>
        <AppBar
          position="static"
          sx={{ background: "#fad121", paddingY: "15px", paddingX: "15px" }}
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
                    sx={{ borderRadius: "5px" }}
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
                    <MenuItem onClick={handleClickChar}>More</MenuItem>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElChar}
                      open={openChar}
                      onClose={handleCloseChar}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      sx={{ borderRadius: "5px" }}
                    >
                      <MenuItem>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          onClick={() => navigate("/more")}
                        >
                          <Typography
                            fontFamily={"Comic Neue"}
                            fontFamily={"Comic Neue"}
                          >
                            Our Mission
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          onClick={() => navigate("/teams")}
                        >
                          <Typography
                            fontFamily={"Comic Neue"}
                            fontFamily={"Comic Neue"}
                          >
                            Team
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          onClick={() => navigate("/more")}
                        >
                          <Typography
                            fontFamily={"Comic Neue"}
                            fontFamily={"Comic Neue"}
                          >
                            Episodes
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          onClick={() => navigate("/more")}
                        >
                          <Typography
                            fontFamily={"Comic Neue"}
                            fontFamily={"Comic Neue"}
                          >
                            <Tooltip title="Coming Soon">News</Tooltip>
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          onClick={() => navigate("/ip")}
                        >
                          <Typography
                            fontFamily={"Comic Neue"}
                            fontFamily={"Comic Neue"}
                          >
                            <Tooltip>IP</Tooltip>
                          </Typography>
                        </Box>
                      </MenuItem>
                    </Menu>
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
                              style={{
                                borderRadius: "50px",
                                marginRight: "10px",
                              }}
                            />
                            <Typography
                              fontFamily={"Comic Neue"}
                              fontFamily={"Comic Neue"}
                            >
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
                              style={{
                                borderRadius: "50px",
                                marginRight: "10px",
                              }}
                            />
                            <Typography
                              fontFamily={"Comic Neue"}
                              fontFamily={"Comic Neue"}
                            >
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
                              style={{
                                borderRadius: "50px",
                                marginRight: "10px",
                              }}
                            />
                            <Typography
                              fontFamily={"Comic Neue"}
                              fontFamily={"Comic Neue"}
                            >
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
                              style={{
                                borderRadius: "50px",
                                marginRight: "10px",
                              }}
                            />
                            <Typography
                              fontFamily={"Comic Neue"}
                              fontFamily={"Comic Neue"}
                            >
                              Tiktok
                            </Typography>
                          </Box>
                        </Link>
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
                  fontFamily={"Comic Neue"}
                  fontFamily={"Comic Neue"}
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
                  fontFamily={"Comic Neue"}
                  fontFamily={"Comic Neue"}
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
                  fontFamily={"Comic Neue"}
                  fontFamily={"Comic Neue"}
                  variant="h6"
                  fontWeight={800}
                  component="div"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                  textTransform={"uppercase"}
                  onClick={handleClickChar}
                >
                  More
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElChar}
                  open={openChar}
                  onClose={handleCloseChar}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{ borderRadius: "5px" }}
                >
                  <MenuItem>
                    {/* <Link
                        to={"https://x.com/kaijunka"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      > */}
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      onClick={() => navigate("/more")}
                    >
                      <Typography
                        fontFamily={"Comic Neue"}
                        fontFamily={"Comic Neue"}
                      >
                        Our Mission
                      </Typography>
                    </Box>
                    {/* </Link> */}
                  </MenuItem>
                  <MenuItem>
                    {/* <Link
                        to={
                          "https://www.instagram.com/kaijunka_hq?igsh=YWNwM2huYnhzZnQ3&utm_source=qr"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      > */}
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      onClick={() => navigate("/team")}
                    >
                      <Typography
                        fontFamily={"Comic Neue"}
                        fontFamily={"Comic Neue"}
                      >
                        Team
                      </Typography>
                    </Box>
                    {/* </Link> */}
                  </MenuItem>
                  <MenuItem>
                    {/* <Link
                        to={"https://www.reddit.com/r/Kaijunka/s/uHOsiD8GmK"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      > */}
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography fontFamily={"Comic Neue"}>
                        Episodes
                      </Typography>
                    </Box>
                    {/* </Link> */}
                  </MenuItem>
                  <MenuItem>
                    {/* <Link
                        to={"http://www.tiktok.com/@kaijunka_hq"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      > */}
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography
                        fontFamily={"Comic Neue"}
                        fontFamily={"Comic Neue"}
                      >
                        <Tooltip title="Coming Soon">News</Tooltip>
                      </Typography>
                    </Box>
                    {/* </Link> */}
                  </MenuItem>
                  <MenuItem>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      onClick={() => navigate("/ip")}
                    >
                      <Typography
                        fontFamily={"Comic Neue"}
                        fontFamily={"Comic Neue"}
                      >
                        <Tooltip>IP</Tooltip>
                      </Typography>
                    </Box>
                  </MenuItem>
                </Menu>

                {/* <Typography fontFamily={"Comic Neue"}
                    fontFamily={"Comic Neue"}
                    variant="h6"
                    fontWeight={800}
                    component="div"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    textTransform={"uppercase"}
                  >
                    <Tooltip title="Coming Soon">More</Tooltip>
                  </Typography> */}

                <Typography
                  fontFamily={"Comic Neue"}
                  variant="h6"
                  fontWeight={800}
                  component="div"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                  textTransform={"uppercase"}
                >
                  <Tooltip title="Coming Soon">Lore</Tooltip>
                </Typography>

                <Typography
                  fontFamily={"Comic Neue"}
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
                        <Typography fontFamily={"Comic Neue"} variant="h6">
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
                        <Typography fontFamily={"Comic Neue"} variant="h6">
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
                        <Typography fontFamily={"Comic Neue"} variant="h6">
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
                        <Typography fontFamily={"Comic Neue"} variant="h6">
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
                fontFamily={"Comic Neue"}
                fontFamily={"Comic Neue"}
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
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        pt={5}
        sx={{ background: "#fef6db" }}
        height={"100%"}
        minHeight={"75vh"}
        px={2}
      >
        <Box width={{ xs: "100%", xl: "70%" }}>
          <Typography
            fontFamily={"Comic Neue"}
            fontSize={"30px"}
            fontWeight={700}
            mb={2}
          >
            IP Rights: A Sneak Peek into Kaijunka's Future
          </Typography>
          <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
            At Kaijunka, we are not just creating a brand, we are building a
            world. A world where creativity, storytelling, and characters come
            to life in ways that inspire and spark joy. Protecting the integrity
            of this world is our top priority, and that's why intellectual
            property (IP) rights are at the heart of what we do.
          </Typography>
          <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
            We are working diligently behind the scenes to secure trademarks and
            designs for our characters, ensuring that Kaijunka stays true to its
            vision and remains a unique, vibrant universe. Our upcoming
            trademarks and IP protections will not only safeguard Kaijunka's
            unique art and narrative but will also lay the foundation for
            exciting partnerships and product launches.
          </Typography>
          <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
            Stay tuned as we embark on this journey to protect the future of
            Kaijunka, giving our community confidence that everything we build
            will remain authentic, original, and protected. This is just the
            beginning.
          </Typography>
          <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
            For more details, please send a mail to vinod@nyewresearch.com
          </Typography>
        </Box>
      </Box>

      <Box sx={{ position: "relative", bottom: "5px", mt: 10 }}>
        <Typography fontFamily={"Comic Neue"}>
          © 2024 | kaijunka Project. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default IP;

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

import evolutionImg from "../assets/evolution.png";
import design from "../assets/design1.jpg";
import animation from "../assets/animation.gif";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import beg1 from "../assets/beg1.jpg";
import beg2 from "../assets/beg2.png";
import beg3 from "../assets/beg3.png";

const Story = () => {
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
                          onClick={() => navigate("/team")}
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
                      onClick={() => navigate("/team")}
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
                        <Typography
                          fontFamily={"Comic Neue"}
                          fontFamily={"Comic Neue"}
                          variant="h6"
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
                          style={{ borderRadius: "50px", marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily={"Comic Neue"}
                          fontFamily={"Comic Neue"}
                          variant="h6"
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
                          style={{ borderRadius: "50px", marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily={"Comic Neue"}
                          fontFamily={"Comic Neue"}
                          variant="h6"
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
                          style={{ borderRadius: "50px", marginRight: "10px" }}
                        />
                        <Typography
                          fontFamily={"Comic Neue"}
                          fontFamily={"Comic Neue"}
                          variant="h6"
                        >
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
        flexDirection={"column"}
        alignItems={"center"}
        pt={5}
        px={1}
        sx={{ background: "#fef6db" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ xs: "100%", lg: "60%" }}
          columnGap={2}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              fontFamily={"Comic Neue"}
              fontSize={"30px"}
              fontWeight={700}
              mb={2}
            >
              The Beginning
            </Typography>
            <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
              Vinod Vijay wasn’t an artist by profession. As a consultant with a
              background in Engineering and Data Analytics, his daily work
              revolved around numbers and systems. However, deep down, Vinod had
              a passion for creativity and a strong desire to make a positive
              impact on the world. The main motivation behind starting Kaijunka
              was to spread positivity and teach important morals to kids,
              especially about the environment.
            </Typography>
          </Box>

          <Box>
            <img src={beg1} width={"100%"} height={"280px"} />
            <img src={beg3} width={"400px"} height={"100%"} />
            <img src={beg2} width={"400px"} height={"100%"} />
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ xs: "100%", lg: "60%" }}
          columnGap={2}
          mt={10}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              fontFamily={"Comic Neue"}
              fontSize={"30px"}
              fontWeight={700}
              mb={2}
            >
              Unreleased work
            </Typography>
            <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
              Inspired by the art of Tyler Hobbs, known for his work on Fidenza,
              Vinod decided to channel his engineering skills into creating art.
              He took the concept of flow fields and added a collision detection
              algorithm to craft vivid landscapes. These landscapes weren’t just
              random; they were designed to flow harmoniously around buildings,
              creating a unique visual style that became the hallmark of
              Kaijunka. Despite his deep interest in algorithmic art, Vinod
              initially didn't believe his creations were worthy of becoming
              proper art. However, driven by a desire to spread positivity and
              teach important values to the next generation, he persevered.
            </Typography>
          </Box>

          <Box>
            <img src={work1} width={"100%"} height={"380px"} />
            <img src={work2} width={"400px"} height={"280px"} />
            <img src={work3} width={"400px"} height={"280px"} />
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ xs: "100%", lg: "60%" }}
          columnGap={2}
          mt={10}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              fontFamily={"Comic Neue"}
              fontSize={"30px"}
              fontWeight={700}
              mb={2}
            >
              From Designs to Animation
            </Typography>
            <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
              Once the flow field landscapes were perfected, they became the
              foundation for the first set of gifs. These gifs, rich in detail
              and movement, were then used to create the introduction video for
              Kaijunka's two short animation movies. These movies now serve as a
              crucial part of Kaijunka's mission—spreading positivity and
              environmental awareness to a young audience.
            </Typography>
          </Box>

          <Box>
            <img
              src={design}
              width={"400px"}
              height={"280px"}
              style={{ marginRight: "15px" }}
            />
            <img src={animation} width={"400px"} height={"280px"} />
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ xs: "100%", lg: "60%" }}
          columnGap={2}
          mt={10}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              fontFamily={"Comic Neue"}
              fontSize={"30px"}
              fontWeight={700}
              mb={2}
            >
              The Evolution: From Idea to Impact
            </Typography>
            <Typography fontFamily={"Comic Neue"} fontSize={"18px"} mb={2}>
              Vinod's journey from an Engineer to the creator of Kaijunka is a
              testament to the power of combining technical expertise with
              creative passion.Kaijunka is not just a project; it’s a movement
              aimed at teaching the next generation about the importance of
              positivity, caring for the environment, and embracing creativity
              through memes. As memes have become a universal language, Kaijunka
              taps into this cultural phenomenon to spread its message far and
              wide. By encouraging the community to create and share their own
              Kaijunka-inspired memes, the project fosters a sense of belonging
              and creativity, making it a truly community-driven initiative.
            </Typography>

            <Typography fontFamily={"Comic Neue"}>
              Join us in this journey and be part of the Kaijunka story.
            </Typography>
          </Box>

          <Box mb={5}>
            <img src={evolutionImg} width={"400px"} height={"280px"} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "relative", bottom: "5px" }} mt={10}>
        <Typography fontFamily={"Comic Neue"}>
          © 2024 | kaijunka Project. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Story;

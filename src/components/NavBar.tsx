import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import nameLogo from "../assets/Kaijunka.png";
import { useNavigate } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "#ff9935", paddingTop: "25px", paddingX: "15px" }}
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

            <Tooltip title="Coming Soon">
              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
              >
                More
              </Typography>
            </Tooltip>

            <Tooltip title="Coming Soon">
              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
              >
                Lore
              </Typography>
            </Tooltip>

            <Tooltip title="Coming Soon">
              <Typography
                variant="h6"
                fontWeight={800}
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                textTransform={"uppercase"}
              >
                Socials
              </Typography>
            </Tooltip>
          </Box>
          <Button sx={{ backgroundColor: "white", padding: "10px" }}>
            <Typography color={"black"} fontWeight={700}>
              Connect
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

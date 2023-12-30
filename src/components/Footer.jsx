import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import FooterIcons from "./FooterIcons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      className="footer-container"
      sx={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Divider
        variant="middle"
        sx={{ borderColor: "##F2F2F2", margin: "5em" }}
      ></Divider>
      <FooterLinks/> */}
      <Divider
        variant="middle"
        sx={{ borderColor: "##F2F2F2", margin: "3em" }}
      ></Divider>

      <Box
        className="footer-social-container"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1.5em"}
      >
        <Box
          className={"illustration-container"}
          sx={{
            // backgroundColor: "#F2F2F2",
            display:"flex",
            height: "5vh",
            width: "30vw",
            margin: "1.5em",
            borderRadius: "5%",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center"
          }}
        >
          <Typography
            variant="h1"
            fontWeight={"bold"}
            sx={{
              fontSize: {
                xs: "1.4em",
                sm: "2em",
                md: "2.5em",
                lg: "3em",
                xl: "4em",
              },
              color:"#000000"
            }}
          >
            JOBSYNC
          </Typography>
        </Box>

       <FooterIcons/>
      </Box>
      <Box className="marginBottom" sx={{height:"10vh"}} >

      </Box>
    </Box>
  );
};

export default Footer;

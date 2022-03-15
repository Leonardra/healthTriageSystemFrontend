import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack backgroundColor="#4D2BB9">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="5rem"
        >
          <Typography fontWeight="500" fontSize="20px" color="white">
            UzuriHealth
          </Typography>
          <Stack direction="row" spacing="5">
            <FacebookIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;

import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import Logo from "../assets/Oculus.png";
const Partners = () => {
  return (
    <Stack bgcolor="#F6F8FC" height="30rem">
      <Container sx={{ mt: "56px" }}>
        <Stack direction="column" spacing="45" alignItems="center">
          <Typography fontWeight="500" fontSize="40px" color="#000">
            Our Partners
          </Typography>
          <Stack direction="row" spacing="15" marginnTop="5rem">
            <img src={Logo} alt="logo" width="300px" />
            <img src={Logo} alt="logo" width="300px" />
            <img src={Logo} alt="logo" width="300px" />
            <img src={Logo} alt="logo" width="300px" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Partners;

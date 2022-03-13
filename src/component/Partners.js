import React from "react";
import { Container, Stack, Typography } from "@mui/material";
const Partners = () => {
  return (
    <Stack bgcolor="#F6F8FC" height="15rem">
      <Container>
        <Stack direction="column" spacing="8" alignItems="center">
          <Typography fontWeight="500" fontSize="40px" color="#000">
            Our Partners
          </Typography>
          <Stack direction="row" spacing="5"></Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Partners;

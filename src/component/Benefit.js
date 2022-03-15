import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";

const Benefit = () => {
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing="10"
        height="49rem"
      >
        <Stack direction="column" spacing="50px" width="30rem">
          <Typography fontWeight="700" fontSize="50px" color="#000">
            Our Benefits
          </Typography>
          <Typography fontWeight="300" fontSize="23px" color="#000">
            Join thousands of health practiotioners all over the world who are
            using our A.I powered patient management tool. We provide diagnosis
            and adequate prognosis through patient symptoms.
          </Typography>
        </Stack>
        <Stack direction="row">
          <Stack direction="column" spacing="2rem" marginTop="7rem">
            <Box
              width="15rem"
              height="15rem"
              backgroundColor="#701466"
              borderRadius="5px"
            ></Box>
            <Box
              width="15rem"
              height="15rem"
              backgroundColor="#ECE5E5"
              borderRadius="5px"
            ></Box>
          </Stack>
          <Stack
            direction="column"
            paddingLeft="1rem"
            spacing="2rem"
            marginTop="5rem"
          >
            <Box
              width="15rem"
              height="15rem"
              backgroundColor="#5B973E"
              borderRadius="5px"
            ></Box>
            <Box
              width="15rem"
              height="15rem"
              backgroundColor="#4D2BB9"
              borderRadius="5px"
            ></Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Benefit;

import { Container, Stack, Typography, Box, Button } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box bgcolor="#ECE5E5" height="60rem" marginTop="-8rem">
      <Stack direction="row">
        <Container>
          <Stack
            direction="column"
            paddingTop="20rem"
            spacing="50px"
            width="40rem"
            marginLeft="21rem"
          >
            <Typography fontWeight="700" fontSize="50px" color="#000">
              Manage Patients Without Stress, Powered by A.I
            </Typography>
            <Typography fontWeight="300" fontSize="23px" color="#000">
              Join thousands of health practiotioners all over the world who are
              using our A.I powered patient management tool. We provide
              diagnosis and adequate prognosis through patient symptoms.
            </Typography>

            <Button
              variant="contained"
              fullWidth
              type="button"
              sx={{ background: "#6E8264", height: 50, width: 170 }}
            >
              Join the train
            </Button>
          </Stack>
        </Container>
        <Box bgcolor="#9653E5" height="60rem" width="42rem"></Box>
      </Stack>
    </Box>
  );
};

export default Hero;

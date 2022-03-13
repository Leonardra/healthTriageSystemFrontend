import React from "react";
import { Button, Container, Stack, Typography, Link } from "@mui/material";

const Nav = () => {
  return (
    <Container sx={{ mt: "56px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
          <Typography fontWeight="500" fontSize="40px" color="#000">
            UzuriHealth
          </Typography>
        </Link>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing="20px"
        >
          <Button
            variant="outlined"
            sx={{
              height: 50,
              width: 120,
              borderColor: "white",
              color: "white",
            }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            fullWidth
            type="button"
            sx={{ background: "#000", height: 50, width: 120 }}
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Nav;

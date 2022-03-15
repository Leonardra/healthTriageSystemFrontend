import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Stack,
  Link,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your firstname")
    .required("Firstname is required"),
  lastName: yup.string("Enter your lastname").required("Lastname is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const navigate = useNavigate();
  return (
    <Box bgcolor="#ECE5E5" height="63rem" marginTop="-8rem">
      <Container>
        <Stack
          justifyContent="center"
          direction="column"
          alignItems="center"
          paddingTop="10rem"
        >
          <Stack textAlign="center" marginTop={10}>
            <Typography
              fontSize="50px"
              fontWeight="700"
              lineHeight="105px"
              color="#000"
            >
              Sign Up
            </Typography>
            <Stack direction="row" marginTop={3}>
              <Typography
                fontWeight="400"
                color="rgba(0, 0, 0, 0.5)"
                fontSize="18px"
              >
                Already Have An Account ? &nbsp;
              </Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                <Typography fontWeight="400" color="#000" fontSize="18px">
                  Log In
                </Typography>
              </Link>
            </Stack>
          </Stack>
          <form onSubmit={formik.handleSubmit}>
            <Grid container marginTop={10}>
              <Grid Item lg={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  placeholder="enter firstname (ex. John)"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid Item lg={12} marginTop={5}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  placeholder="enter lastname (ex. Doe)"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid Item lg={12} marginTop={5}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="enter email address (ex. mail@send.com)"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item lg={12} marginTop={5}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="enter password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item lg={12} marginTop={5}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{ background: "#6E8264", height: 60 }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Stack>
      </Container>
    </Box>
  );
};

export default RegisterPage;

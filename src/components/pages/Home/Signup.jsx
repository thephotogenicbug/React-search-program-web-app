import React from "react";
import { Grid, Typography, Box, Button, TextField } from "@material-ui/core";
import Banner from "./banner.png";
import "./login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Grid spacing={10} container>
      <Grid md={6} item>
        <img
          src={Banner}
          style={{ height: "615px", width: "800px", marginTop: "-1px" }}
        />
      </Grid>
      <Grid md={6} item>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            marginRight: "140px",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            SIGNUP
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            flexDirection: "column",
            width: "50%",
            marginLeft: "100px",
          }}
        >
          <TextField
            helperText=""
            label="Name"
            color="secondary"
            style={{ marginBottom: "10px" }}
          />
          <TextField
            helperText=""
            label="Email"
            color="secondary"
            style={{ marginBottom: "10px" }}
          />
          <TextField
            helperText=""
            label="Password"
            color="secondary"
            style={{ marginBottom: "10px" }}
          />
          <TextField
            helperText=""
            label="Confirm Password"
            color="secondary"
            style={{ marginBottom: "20px" }}
          />
          <Button color="primary" variant="contained">
            Signup
          </Button>
          <Typography style={{ marginTop: "20px" }}>
            New User ?{" "}
            <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;

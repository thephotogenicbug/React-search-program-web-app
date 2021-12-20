import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Button, TextField } from "@material-ui/core";
import Banner from "./banner.png";
import "./login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../actions/userActions";
import { useNavigate } from "react-router-dom";
import LinearProgressBar from "../../common/LinearProgressBar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  login: {
    overflowY: "hidden !important",
    height: '658px'
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/searchprogram");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };
  const classes = useStyles();
  return (
    <Grid spacing={10} container className={classes.login}>
      <Grid md={6} item>
        <img
          src={Banner}
          style={{  width: "800px", marginTop: "-1px" }}
        />
      </Grid>
      <Grid md={6} item>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "170px",
            marginRight: "140px",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            LOGIN
          </Typography>
        </Box>
        {loading && <LinearProgressBar />}
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
            label="Email"
            color="secondary"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ marginTop: "10px", marginBottom: "20px" }}
            helperText=""
            label="Password"
            color="secondary"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="primary" variant="contained" onClick={submitHandler}>
            Login
          </Button>
          <Typography style={{ marginTop: "20px" }}>
            New User ?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Signup
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

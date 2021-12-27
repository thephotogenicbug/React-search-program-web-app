import React,{useState, useEffect} from "react";
import { Grid, Typography, Box, Button, TextField } from "@material-ui/core";
import Banner from "./banner.png";
import "./login.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userActions";
import LinearProgressBar from "../../common/LinearProgressBar";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  signup: {
    overflowY: "hidden !important",
    height: "658px",
  },
});

const Signup = () => {
  const classes = useStyles();
  const [name, pickName] = useState("");
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");
  const [confirmpassword, pickConfirmPassword] = useState("");
  const [message, updateMessage] = useState("")

  const dispatch = useDispatch();

      const userRegister = useSelector((state) => state.userRegister);
      const { loading, error, userInfo } = userRegister;

  const Signup = async (e) => {
    e.preventDefault();
    if(password !== confirmpassword){
      updateMessage("Password does not match");
    }
     dispatch(register(name, email, password));
     updateMessage("Registration success")
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/searchprogram");
    }
  }, [navigate, userInfo]);

  return (
    <Grid spacing={10} container className={classes.signup}>
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
        {loading && <LinearProgressBar />}
        <p>{message}</p>
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
            value={name}
            onChange={(e) => pickName(e.target.value)}
          />
          <TextField
            helperText=""
            label="Email"
            color="secondary"
            style={{ marginBottom: "10px" }}
            value={email}
            onChange={(e) => pickEmail(e.target.value)}
          />
          <TextField
            helperText=""
            label="Password"
            color="secondary"
            style={{ marginBottom: "10px" }}
            value={password}
            onChange={(e) => pickPassword(e.target.value)}
          />
          <TextField
            helperText=""
            label="Confirm Password"
            color="secondary"
            style={{ marginBottom: "20px" }}
            value={confirmpassword}
            onChange={(e) => pickConfirmPassword(e.target.value)}
          />
          <Button color="primary" variant="contained" onClick={Signup}>
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

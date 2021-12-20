import React from 'react'
import { Grid, Typography, Box, Button, TextField,  } from '@material-ui/core'
import Banner from './banner.png'
import './login.css'
import {Link} from 'react-router-dom'

const Login = () => {
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
              marginTop: "170px",
              marginRight: "140px",
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              LOGIN
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
            <TextField helperText="" label="Name" color="secondary" />
            <TextField
              style={{ marginTop: "10px", marginBottom: "20px" }}
              helperText=""
              label="Password"
              color="secondary"
            />
            <Button color="primary" variant="contained">
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
}

export default Login

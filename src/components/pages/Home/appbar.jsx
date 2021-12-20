import React, { useState } from 'react'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Avatar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#1D5AD4",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {
    fontSize: "0.9rem",
    fontFamily: `"Raleway", sans-serif`,
    fontWeight: "600",
  },
  logo: {
    flexGrow: "1",
  },
  avatar:{
      marginLeft:'16px',
      height: '40px',
  }
});

const Bar = () => {

    const [auth, setAuth] = useState(true);
     const [anchorEl, setAnchorEl] = useState(null);

     const open = Boolean(anchorEl);

     const handleChange = (event) => {
       setAuth(event.target.checked);
     };

     const handleMenu = (event) => {
       setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
       setAnchorEl(null);
     };

    const classes = useStyles();
    return (
      <div>
        <AppBar color="inherit">
          <Toolbar>
            <Typography className={classes.logo}>Logo</Typography>
            <Typography>Mario</Typography>
            {/* <Avatar src="mario.png" className={classes.avatar}/> */}
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Bar

import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

/** import from materail ui */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import "./PopUp.css";

function Login({ toggleModal }) {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/users/login", myData)
      .then((response) => {
        // return  response;
        localStorage.setItem("auth", JSON.stringify(response.data));
        const token = localStorage.getItem("token");
        history.push(`/home`);
      })
      .catch((error) => {
        //return  error;
        history.push(`/`);
      });
  };

  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <CssBaseline />
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link variant="body2">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Login;

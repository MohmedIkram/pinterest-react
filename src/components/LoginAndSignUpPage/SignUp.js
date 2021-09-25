import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

/** import from materail ui */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Facebook } from "@material-ui/icons";

/** local files import */
import "./PopUp.css";
import google from "../../assets/google.png"


function SignUp({ toggleSiginUpModal }) {
  let History = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleLogin = () => {
    const myData = {
      email,
      password,
      age,
    };
    axios.post("https://pinterest-guvi.herokuapp.com/users/signup", myData);
    History.push("/");
  };

  return (
    <div className="modal" style={{ textAlign: "center", borderRadius: "25px" }}>
      <div onClick={toggleSiginUpModal} className="overlay"></div>
      <div className="modal-content" style={{ borderRadius: "25px" }}>
        <Avatar sx={{ m: 1, bgcolor: "crimson" }}>
          <PinterestIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{
            color: " rgb(51, 51, 51)",
            fontSize: "36px",
            fontWeight: 600,
            webkitFontSmoothing: "antialiased",
            letterSpacing: "-1.2px",
            wordBreak: " break-word",
          }}
        >
          Welcome to Pinterest
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          style={{
            color: " rgb(51, 51, 51)",
            fontSize: "16px",

            webkitFontSmoothing: "antialiased",
            letterSpacing: "-1.2px",
            wordBreak: " break-word",
          }}
        >
          Find new ideas to try
        </Typography>
        <CssBaseline />
        <Box
          component="form"
          noValidate
          sx={{ mt: 2 }}
          style={{ textAlign: "center" }}
        >
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              style={{ width: "268px", height: "48px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Create a Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{ width: "268px", height: "48px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              fullWidth
              name="age"
              label="Age"
              type="text"
              id="age"

              style={{ width: "268px", height: "48px" }}
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                width: "268px",
                height: "48px",
                backgroundColor: "crimson",
                borderRadius: "25px",
              }}
              onClick={handleLogin}
            >
              Continue
            </Button>
            <Typography>or</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                width: "268px",
                height: "48px",
                backgroundColor: "dodgerblue",
                borderRadius: "25px",
              }}
            >
              <Facebook />
              Continue with Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                width: "268px",
                height: "48px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "25px",
              }}
            >
              Continue with Google
              <img src={google} alt="google" style={{ height: "18px", width: "18px" }}></img>
            </Button>
          </Grid>
          <Grid item xs={12}><Typography style={{ fontSize: "11px" }} >By continuing, you agree to Pinterest's Terms of <br />Service and acknowledge that you've read our Privacy<br /> Policy
          </Typography></Grid>
          <Grid item xs={12} ><Link className="links">Not on Pinterest yet? Sign-up</Link></Grid>
          <Grid item xs={12}><Link className="links">Are you a business? Get started here!</Link></Grid>
        </Box>
      </div>
    </div >
  );
}

export default SignUp;

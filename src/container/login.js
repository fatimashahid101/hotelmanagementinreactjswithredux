import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paper, Stack, Typography, TextField, Button, Avatar, SvgIcon, Box } from "@mui/material";
// import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router";
import { BsDashLg } from 'react-icons/bs';
import CircularProgress from '@mui/material/CircularProgress';


import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../config/firebaseconfig/index";
import { useSelector } from "react-redux";
// import { FcGoogle } from 'react-icons/fc';
import SmallSpinner from "../assets/SmallSpinner";



export default function LoginPage() {
  const navigate = useNavigate();

  const [submitLoading, setSubmitLoading] = useState(false)

  const [loading, setLoading] = useState()
  let state = useSelector(state => state)

  const [userDetails, setUserDetails] = useState({});
  const [err, setErr] = useState();

  let login = (e) => {
    e.preventDefault();

    setSubmitLoading(true)
    if (!userDetails.email || !userDetails.password) {
      setErr("Please fill the fields first!");
      setSubmitLoading(false)
    }
    else {
      signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then((success) => {
          // Signed in
          console.log("User successfully login", success);
          setSubmitLoading(false)
          navigate('/')
          // ...
        })
        .catch((error) => {
          console.log("User not login", error);
          setSubmitLoading(false)
        });
      e.target.reset();
    }
  };


  useEffect(() => {
    setLoading(state.userAuthReducer.isLoading)
    if (state.userAuthReducer.userAuth) {
      navigate('/')
    }

  }, [state.userAuthReducer.userAuth])


  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", height: "90vh", backgroundColor: '#1a1b3a9a' }}
    >
      {loading ? <SmallSpinner /> : <Paper
        square={false}
        elevation={0}
        sx={{
          py: "35px",
          px: 3,
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
        }}
        children={
          <Stack
            alignItems="center"
            spacing={4}
            direction="column"
            component="form"
            sx={{
              "& > :not(style)": { width: "30ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => login(e)}
          >
            <Stack>
              <Box>
                <Stack direction='column' spacing={0}>
                  <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0, color: 'var(--primary)' }}>Login</Typography>
                  <SvgIcon sx={{ color: 'var(--primary)' }}><BsDashLg /></SvgIcon>
                </Stack>
              </Box>
            </Stack>

            {err && <Stack>
              <Typography align='center' variant='body2' sx={{ color: 'red' }}>{err}</Typography></Stack>
            }

            <Stack spacing={2}>
              <TextField
                // id="outlined-basic"
                type="email"
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                label="Email"
                variant="outlined"
                color='info'
              />
              <TextField
                // id="outlined-basic"
                type="password"
                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                label="Password"
                variant="outlined"
                color='info'
              />


              <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='center' alignItems='center'>
                <Button type='submit' fullWidth sx={{ width: '100%', height: '3rem', color: 'white' }} variant={submitLoading ? 'outlined' : 'contained'} color='primary' size='large'>{submitLoading ? '' : 'Login'}</Button>
                {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
              </Stack>

              {/* <Button type="submit" fullWidth size="large" color="primary" sx={{ color: 'white' }} variant="contained">
                Login
              </Button> */}
            </Stack>

            <Stack>
              <Typography
                align="center"
                variant="body2"
                sx={{ color: "#cccccc" }}
              >
                or
              </Typography>
              <Typography align="center" sx={{ color: "#343437" }}>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: 'var(--primary)',
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Stack>
          </Stack>
        }
      />

      }

    </Stack>
  );
}

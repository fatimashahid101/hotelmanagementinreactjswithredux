import React, { useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";
import { BsDashLg } from 'react-icons/bs';
import CircularProgress from '@mui/material/CircularProgress';


import {
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
  SvgIcon
} from "@mui/material";
// import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router";
import {
  auth,
  createUserWithEmailAndPassword,
  database,
  set,
  ref,
} from "../config/firebaseconfig/index";
import SmallSpinner from "../assets/SmallSpinner";
// import { FcGoogle } from 'react-icons/fc';

export default function CreateAccount() {

  const [loading, setLoading] = useState()
  let state = useSelector(state => state)

  const [submitLoading, setSubmitLoading] = useState(false)

  const navigate = useNavigate();
  const [err, setErr] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [cnic, setCnic] = useState();
  const [gender, setGender] = useState();
  const [usercategory, setUsercategory] = useState();

  let signup = (e) => {
    e.preventDefault();

    setSubmitLoading(true)

    if (!userName || !email || !password || !phoneNumber || !country || !cnic || !usercategory === 'Select User Category') {
      setErr("Please fill the fields first!");
      setSubmitLoading(false)
    } else {
      let obj = {
        userName,
        email,
        password,
        phoneNumber,
        country,
        cnic,
        gender,
        userType: usercategory
      };

      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((success) => {
          // Signed in
          let userUid = success.user.uid;
          let reference = ref(database, `users/${userUid}/profile`)
          setSubmitLoading(false)
          obj.address = ''
          set(reference, obj)
          e.target.reset();
        })
        .catch((error) => {
          setErr(error.message);
          setSubmitLoading(false)
        });

    }
  };



  useEffect(() => {
    setLoading(state.userAuthReducer.isLoading)
    if (state.userAuthReducer.userAuth) {
      navigate('/')
    }

  }, [state.userAuthReducer.userAuth])


  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       let userUid = user.uid
  //       const reference = ref(database, `users/${userUid}/profile`)
  //       //  reference = ref(database, "users/" + userUid);
  //       onValue(reference, (snapshot) => {
  //         changeUserAuth(dispatch, true, snapshot.val())
  //         navigate('/')
  //       });
  //     }
  //   })

  // }, [])

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", minHeight: "100vh", backgroundColor: '#1a1b3a9a',py:4 }}
    >
      {loading ? <SmallSpinner /> :
        <Paper
          square={false}
          elevation={0}
          sx={{
            py: "25px",
            px: 3,
            border: "1px solid #d3d3d3",
            borderRadius: "10px",
          }}
          children={
            <Stack
              alignItems="center"
              spacing={2}
              direction="column"
              component="form"
              sx={{
                "& > :not(style)": { width: "30ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={(e) => signup(e)}
            >
              <Stack>
                <Box>
                  <Stack direction='column' spacing={0}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0, color: 'var(--primary)' }}>Signup</Typography>
                    <SvgIcon sx={{ color: 'var(--primary)' }}><BsDashLg /></SvgIcon>
                  </Stack>
                </Box>
              </Stack>

              {err && (
                <Stack>
                  <Typography
                    align="center"
                    variant="body2"
                    sx={{ color: "red" }}
                  >
                    {err}
                  </Typography>
                </Stack>
              )}

              <Stack spacing={2}>
                <TextField
                  // id="outlined-basic"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  label="Username"
                  variant="outlined"
                  color='info'
                />
                <TextField
                  // id="outlined-basic"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  variant="outlined"
                  color='info'
                />
                <TextField
                  // id="outlined-basic"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  variant="outlined"
                  color='info'
                />


                <Stack direction='row' alignItems='center' ><FormLabel sx={{ my: 0 }} component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" color='info' name="row-radio-buttons-group" onChange={(e) => setGender(e.target.value)} sx={{ display: 'flex' }}>
                    <Stack direction='row'>
                      <FormControlLabel value="male" control={<Radio color="info" size="small" />} label="Male" />
                      <FormControlLabel value="female" control={<Radio color="info" size="small" />} label="Female" />
                    </Stack>
                  </RadioGroup>
                </Stack>


                <Stack>
                  {/* <label className="text-muted" htmlFor="usercategory"></label> */}
                  <select onChange={(e) => setUsercategory(e.target.value)} className="py-3 px-2 SelectOption" id='usercategory'>
                    <option selected disabled value="Select User Category">Select User Category</option>
                    <option value="customer">Customer</option>
                    <option value="client">Client</option>
                  </select>

                </Stack>


                <TextField
                  // id="outlined-basic"
                  type="number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  label="Phone Numer"
                  variant="outlined"
                  color="info"
                />
                <TextField
                  // id="outlined-basic"
                  type="number"
                  onChange={(e) => setCnic(e.target.value)}
                  label="CNIC number"
                  variant="outlined"
                  color="info"
                />
                <TextField
                  // id="outlined-basic"
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  label="country"
                  variant="outlined"
                  color="info"
                />

                <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='center' alignItems='center'>
                  <Button type='submit' fullWidth sx={{ width: '100%', height: '3rem', color: 'white' }} variant={submitLoading ? 'outlined' : 'contained'} color='primary' size='large'>{submitLoading ? '' : 'Signup'}</Button>
                  {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
                </Stack>
              </Stack>

              <Stack>
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ color: "#cccccc" }}
                >
                  Already Have Account
                </Typography>
                <Typography align="center" sx={{ color: "#343437" }}>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "#343437",
                      fontWeight: "bold",
                      color: 'var(--primary)'
                    }}
                  >
                    Login
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          }
        />}
    </Stack>
  );
}

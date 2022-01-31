import React, { useState } from 'react'
import { Typography, Box, Container, SvgIcon, Stack, FormControlLabel, FormLabel, RadioGroup, Radio, Button, Hidden } from '@mui/material'
import { BsDashLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useRef } from 'react';
import { updateUserProfile } from '../../config/redux/action/index';
import { useNavigate } from 'react-router-dom';
import { database, ref, update } from '../../config/firebaseconfig/index'


export default function EditProfile() {
    let labelsx = {
        fontSize: '13px',
        margin: '0 0 5px 0',
        color: 'gray'
    }

    let inputStyle = {
        padding: '10px 8px',
        width: '100%'
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()




    const userProfile = useSelector(state => state.userAuthReducer.userProfile)



    const { userName, cnic, country, email, phoneNumber, address, gender } = userProfile

    const [submitLoading, setSubmitLoading] = useState(false)

    const username = useRef()
    const userEmail = useRef()
    const [userGender, setUserGender] = useState(gender)
    const userContactNumber = useRef()
    const userCnicNumber = useRef()
    const userCountry = useRef()
    const userAddress = useRef()



    let handleSubmit = (e) => {
        e.preventDefault()

        setSubmitLoading(true)

        let userData = {
            ...userProfile,
            userName: username.current.value,
            email: userEmail.current.value,
            gender: userGender,
            phoneNumber: userContactNumber.current.value,
            cnic: userCnicNumber.current.value,
            country: userCountry.current.value,
            address: userAddress.current.value

        }

        let reference = ref(database, `users/${userProfile.useruid}/profile`)
        update(reference, userData)
            .then((success) => {
                updateUserProfile(dispatch, userData)
                console.log(success);
                setSubmitLoading(false)
                navigate('/myaccount/')
            })




    }













    return (

        <Container>
            <Box>
                <Stack direction='column' spacing={0}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', px: 0 }}>Edit Profile</Typography>
                    <SvgIcon><BsDashLg /></SvgIcon>

                </Stack>
            </Box>

            <Stack sx={{ my: 2 }}>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <Box sx={{ mb: 2 }}>
                        <label htmlFor="username" style={labelsx} >User Name: </label>
                        <input type='text' className='editProfileInput' id='username' ref={username} defaultValue={userName} placeholder='User Name' style={inputStyle} />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <label htmlFor="userEmail" style={labelsx} >Email: </label>
                        <input type='email' className='editProfileInput' id='userEmail' disabled ref={userEmail} defaultValue={email} placeholder='Email' style={inputStyle} />
                    </Box>

                    <Stack sx={{ mb: 2 }} direction='column' justifyContent='flex-start' ><FormLabel sx={{ my: 0, ...labelsx }} component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" defaultValue={gender} name="row-radio-buttons-group" onChange={(e) => setUserGender(e.target.value)}>
                            <Stack direction='row' justifyContent='flex-start'>
                                <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                                <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                            </Stack>
                        </RadioGroup>
                    </Stack>

                    <Box sx={{ mb: 2 }}>
                        <label htmlFor="userContactNumber" style={labelsx} >Contact Number: </label>
                        <input type='number' className='editProfileInput' id='userContactNumber' ref={userContactNumber} defaultValue={phoneNumber} placeholder='Contact Number' style={inputStyle} />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <label htmlFor="userCnicNumber" style={labelsx} >CNIC Number: </label>
                        <input type='number' className='editProfileInput' id='userCnicNumber' ref={userCnicNumber} defaultValue={cnic} placeholder='CNIC Number' style={inputStyle} />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <label htmlFor="username" style={labelsx} >Country: </label>
                        <input type='text' className='editProfileInput' id='username' ref={userCountry} defaultValue={country} placeholder='Country' style={inputStyle} />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <label htmlFor="username" style={labelsx} >Address: </label>
                        <input type='text' className='editProfileInput' id='username' ref={userAddress} defaultValue={address} placeholder='Address' style={inputStyle} />
                    </Box>


                    {/* <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                        <Stack justifyContent='center' alignItems='center'><Button sx={{width:'15rem', height:'3rem'}} variant='contained' disabled color='primary' size='large'>Submit Details</Button>
                        <Stack sx={{position: 'absolute'}}> <CircularProgress size={20} disableShrink /></Stack></Stack>

                    </Stack> */}

                    <Hidden smUp={true} >
                        <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                           <Button type='submit' fullWidth sx={{ width: '100%', height: '3rem' }} variant={submitLoading ? 'outlined' : 'contained'} color='primary' size='large'>{submitLoading ? '' : 'Submit Details'}</Button>
                                {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
                        </Stack>
                    </Hidden>

                    <Hidden smDown={true} >
                        <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                            <Stack justifyContent='center' alignItems='center'><Button type='submit' sx={{ width: '15rem', height: '3rem' }} variant={submitLoading ? 'outlined' : 'contained'} color='primary' size='large'>{submitLoading ? '' : 'Submit Details'}</Button>
                                {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
                            </Stack>
                        </Stack>
                    </Hidden>


                </form>







            </Stack>


        </Container>
    )
}

import React, { useState, useRef } from 'react'
import { Typography, Box, Grid, SvgIcon, Stack, FormControlLabel, FormLabel, RadioGroup, Radio, Button, Hidden } from '@mui/material'
import { BsDashLg } from 'react-icons/bs';
import CircularProgress from '@mui/material/CircularProgress';
import {
    database,
    onChildAdded,
    child,
    ref,
    push,
    update,
    set,
    onValue,
    remove
} from '../../config/firebaseconfig/index'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function AddHotel() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [submitLoading, setSubmitLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    let labelsx = {
        fontSize: '13px',
        margin: '0 0 5px 0',
        color: 'gray'
    }

    let inputStyle = {
        padding: '10px 8px',
        width: '100%'
    }
    const imgLink = useRef()
    const title = useRef()
    const hotelName = useRef()
    const description = useRef()
    const price = useRef()
    const city = useRef()
    const location = useRef()

    const userProfile = useSelector(state => state.userAuthReducer.userProfile)
    const state = useSelector(state => state)

    let handleSubmit = (e) => {
        e.preventDefault()

        setSubmitLoading(true)

        setErrMsg(false)
        const d = new Date();
        let postDate = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

        let hotelData = {
            imageLink: imgLink.current.value,
            title: title.current.value,
            hotelName: hotelName.current.value,
            description: description.current.value,
            clientuid: userProfile.useruid,
            price: price.current.value,
            city: city.current.value,
            location: location.current.value,
            postDate: postDate
        }

        if (!hotelData.imageLink || !hotelData.title || !hotelData.hotelName || !hotelData.description || !hotelData.price || !hotelData.city || !hotelData.location) {
            setErrMsg(true)
        }
        else {

            const newKey = push(child(ref(database), 'hotels')).key
            let reference = ref(database, `hotels/${newKey}`)


            hotelData.key = newKey



            set(reference, hotelData)
                .then((success) => {
                    // updateUserProfile(dispatch, hotelData)
                    console.log(success);
                    setSubmitLoading(false)
                    navigate('to-admin/all-hotels/')
                })
        }
    }

    return (
        <div>
            <Stack>

                <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0 }}>Add Hotel</Typography>
                <SvgIcon><BsDashLg /></SvgIcon>

            </Stack>

            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                    {errMsg && <Stack><Typography align='left' variant='body2' sx={{ color: 'red' }}>Please fill the required fileds </Typography></Stack>}



                    <form onSubmit={(e) => handleSubmit(e)}>
                        <Stack>
                            <Stack>
                                <Box sx={{ mb: 2 }}>
                                    <label htmlFor="ImageLink" style={labelsx} >Image Preview Link</label>
                                    <input type='text' className='editProfileInput' id='ImageLink'

                                        ref={imgLink}

                                        // defaultValue={userName}

                                        placeholder='Paste link here' style={inputStyle} />
                                </Box>
                            </Stack>
                            <Stack>
                                <Box sx={{ mb: 2 }}>
                                    <label htmlFor="title" style={labelsx} >Title</label>
                                    <input type='text' className='editProfileInput' id='title'

                                        ref={title}

                                        // defaultValue={userName}

                                        placeholder='Title' style={inputStyle} />
                                </Box>
                            </Stack>
                            <Stack>
                                <Box sx={{ mb: 2 }}>
                                    <label htmlFor="hotelname" style={labelsx} >Hotel Name</label>
                                    <input type='text' className='editProfileInput' id='hotelname'

                                        ref={hotelName}

                                        // defaultValue={userName}

                                        placeholder='Hotel Name' style={inputStyle} />
                                </Box>
                            </Stack>

                            <Stack>
                                <Box sx={{ mb: 2 }}>
                                    <label htmlFor="city" style={labelsx} >City</label>
                                    <input type='text' className='editProfileInput' id='city'

                                        ref={city}

                                        // defaultValue={userName}

                                        placeholder='Enter City' style={inputStyle} />
                                </Box>
                            </Stack>

                            <Stack>
                                <Box sx={{ mb: 2 }}>
                                    <label htmlFor="location" style={labelsx} >Location</label>
                                    <input type='text' className='editProfileInput' id='location'

                                        ref={location}

                                        // defaultValue={userName}

                                        placeholder='Enter location' style={inputStyle} />
                                </Box>
                            </Stack>

                            <Stack>
                                <Box sx={{ mb: 2 }}>
                                    <label htmlFor="rate" style={labelsx} >Price/Day  </label>
                                    <input type='number' className='editProfileInput' id='rate'

                                        ref={price}

                                        // defaultValue={userName}

                                        placeholder='Enter Price' style={inputStyle} />
                                </Box>
                            </Stack>

                            <Stack>
                                <Box sx={{ mb: 2 }}>
                                    <label htmlFor="description" style={labelsx} >Description:</label>
                                    <textarea row='3' type='text' className='editProfileInput' id='description'

                                        ref={description}

                                        // defaultValue={userName}

                                        placeholder='Description' style={inputStyle} />
                                </Box>
                            </Stack>
                        </Stack>

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

                </Grid>

            </Grid>

        </div>
    )
}
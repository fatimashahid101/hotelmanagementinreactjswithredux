import React from 'react'
import { Typography, Box, Container, SvgIcon, Stack } from '@mui/material'
import { BsDashLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';


export default function Profile() {

    const userProfile = useSelector(state => state.userAuthReducer.userProfile)
    let styleObj = {
        px: 0,
        fontWeight: '600',
    }

    const {userName, cnic, country, email, phoneNumber, address, gender } = userProfile


    return (

        <Container>
            <Box>
                <Stack direction='column' spacing={0}>

                    <Typography variant='h6' sx={{ fontWeight: 'bold', px: 0 }}>Profile</Typography>
                    <SvgIcon><BsDashLg /></SvgIcon>
                </Stack>


                <Stack direction='column' spacing={3} sx={{ my: 2 }}>
                    <Stack direction='column' spacing={0}>
                        <Typography sx={styleObj}>User Name: </Typography>
                        <Typography sx={{ px: 0 }}> {userName && userName }</Typography>
                    </Stack>

                    <Stack direction='column' spacing={0}>
                        <Typography sx={styleObj}>Email: </Typography>
                        <Typography sx={{ px: 0 }}> {email && email }</Typography>
                    </Stack>

                    <Stack direction='column' spacing={0}>
                        <Typography sx={styleObj}>Gender:</Typography>
                        <Typography sx={{ px: 0 }}>{gender && gender }</Typography>
                    </Stack>

                    <Stack direction='column' spacing={0}>
                        <Typography sx={styleObj}>Phone Number: </Typography>
                        <Typography sx={{ px: 0 }}> {phoneNumber && phoneNumber }</Typography>
                    </Stack>

                    <Stack direction='column' spacing={0}>
                        <Typography sx={styleObj}>CNIC Number:</Typography>
                        <Typography sx={{ px: 0 }}> {cnic && cnic }</Typography>
                    </Stack>

                    <Stack direction='column' spacing={0}>
                        <Typography sx={styleObj}>Country: </Typography>
                        <Typography sx={{ px: 0 }}> {country && country }</Typography>
                    </Stack>
                </Stack>

                    <Stack direction='column' spacing={0}>
                        <Typography sx={styleObj}>Address: </Typography>
                        <Typography sx={{ px: 0 }}> {address && address }</Typography>
                    </Stack>



            </Box>

        </Container>
    )
}

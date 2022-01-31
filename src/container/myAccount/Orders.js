import React from 'react'
import { Typography, Box, Container, SvgIcon, Stack } from '@mui/material'
import { BsDashLg } from 'react-icons/bs';


export default function Orders() {


    return (

        <Container>
            <Box>
                <Stack direction='column' spacing={0}>

                    <Typography variant='h6' sx={{ fontWeight: 'bold', px:0 }}>My Orders</Typography>
                    <SvgIcon><BsDashLg /></SvgIcon>

                </Stack>
            </Box>


        </Container>
    )
}

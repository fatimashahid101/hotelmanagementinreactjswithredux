import { Stack, ButtonGroup, Box, Button, Typography, Container } from '@mui/material'
import React from 'react'

export default function PageTitleBackground(props) {
    const pages = [
        {
            page: 'Profile',
            link: ''
        },
        {
            page: 'Cart',
            link: 'my-cart'
        },
        {
            page: 'Orders',
            link: 'orders'
        },
        {
            page: 'Edit Profile',
            link: 'edit-profile'
        },
    ]



    // const pages = ["Profile", "My Cart", "Orders", "About"]
    // const linkTo = ["/", "/my-cart", "orders", "About"]





    const { navigate } = props
    return (
        <Stack spacing={3} justifyContent='center' alignItems='center' sx={{ backgroundColor: 'var(--secondary)', width: '100%', height: '25vh' }}>

            <Typography variant='h4' align='center' sx={{ my: 2 }} >My Account</Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 0,
                    },
                }}
            >

                <ButtonGroup variant="text" size="large" color="primary" aria-label="medium primary button group">

                    {pages.map((page) => (
                        <Button sx={{ fontSize: '13px' }} onClick={() => navigate(`/myaccount/${page.link}`)}>{page.page}</Button>
                    ))}
                </ButtonGroup>
            </Box>



        </Stack>
    )
}

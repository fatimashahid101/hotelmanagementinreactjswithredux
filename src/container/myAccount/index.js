import { Stack, Hidden, Box, Button, Typography, Container, Grid, SvgIcon } from '@mui/material'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Bookings, Profile, Orders, EditProfile } from '../../config/router/AppRouter'
import { useNavigate } from 'react-router-dom'
import PageTitleBackground from '../../components/PageTitleBackground'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GoListUnordered } from 'react-icons/go';
import { RiEdit2Line } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { auth, signOut } from '../../config/firebaseconfig/index'
import { useDispatch } from 'react-redux'
import { changeUserAuth, getCartData } from '../../config/redux/action/index'
import { useSelector } from 'react-redux'



export default function MyAccount() {
    const dispatch = useDispatch()
    const navigate = useNavigate();





    let logout = () => {
        signOut(auth)
            .then((success) => {
                console.log(success);
                changeUserAuth(dispatch, false, {}) 
                getCartData(dispatch, [])
                navigate('/login')
            })
       
    }

    const userAuth = useSelector(state => state.userAuthReducer.userAuth)

    useEffect(() => {

        if (!userAuth) {
            navigate('/login')
        }

    }, [])




    const pages = [
        {
            page: 'Profile',
            link: '',
            icon: <CgProfile />
        },
        {
            page: 'Bookings',
            link: 'Bookings',
            icon: <AiOutlineShoppingCart />
        },
        // {
        //     page: 'Orders',
        //     link: 'orders',
        //     icon: <GoListUnordered />

        // },
        {
            page: 'Edit Profile',
            link: 'edit-profile',
            icon: <RiEdit2Line />
        },
    ]

    return (
        <Box sx={{backgroundColor:'#fff',minHeight:'86vh'}}>

            {/* <PageTitleBackground navigate={navigate} /> */}

            <Typography align='center' variant='h4' sx={{ py: 3 }} >My Account</Typography>

            <Container>

                <Grid container>
                    <Hidden mdDown={true} >
                        <Grid item xl={3} lg={3} md={4}>
                            <Stack sx={{ p: 3, my: 3, border: '1px solid var(--secondary)', width: '100%' }}>
                                <Stack direction='column' spacing={2}>
                                    {pages.map((e, i) => {
                                        return <Stack key={i} onClick={() => navigate(`/myaccount/${e.link}`)} spacing={2} direction='row' alignItems='center' sx={{ pointerEvents: 'auto', cursor: 'pointer' }}>
                                            <SvgIcon sx={{ fontSize: '20px' }}>{e.icon}</SvgIcon>
                                            <Typography  >{e.page}</Typography>
                                        </Stack>
                                    })}

                                    <Button onClick={logout} variant='contained'>Logout</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Hidden>

                    <Hidden mdUp={true} >
                        <Grid item sm={12} xs={12}>
                            <Stack sx={{ p: 3, my: 3, border: '1px solid var(--secondary)', width: '100%' }}>
                                <Stack direction='row' justifyContent='space-between' spacing={2}>
                                    {pages.map((e, i) => {
                                        return <Stack key={i} onClick={() => navigate(`/myaccount/${e.link}`)} spacing={2} direction='row' alignItems='center' sx={{ pointerEvents: 'auto', cursor: 'pointer' }}>
                                            <SvgIcon sx={{ fontSize: '25px' }}>{e.icon}</SvgIcon>
                                            {/* <Typography  >{e.page}</Typography> */}
                                        </Stack>
                                    })}
                                    <SvgIcon sx={{ fontSize: '25px' }}><MdLogout /></SvgIcon>

                                    {/* <Button onClick={logout} variant='contained'>Logout</Button> */}

                                </Stack>
                            </Stack>
                        </Grid>
                    </Hidden>


                    <Grid item xl={9} lg={9} md={8} sm={12} xs={12} sx={{ my: 3 }}>
                        <Routes  >
                            <Route path='' element={<Profile />} />
                            <Route path='bookings' element={<Bookings />} />
                            <Route path='orders' element={<Orders />} />
                            <Route path='edit-profile' element={<EditProfile />} />
                        </Routes >
                    </Grid>



                </Grid>









            </Container>











            <Container>
                {/* <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >

                    <ButtonGroup variant="text" size="large" color="primary" aria-label="medium primary button group">
                        <Button onClick={() => navigate('/myaccount')}>Profile</Button>
                        <Button onClick={() => navigate('/myaccount/my-cart')}>Cart</Button>
                        <Button onClick={() => navigate('/myaccount/orders')}>Orders</Button>
                    </ButtonGroup>
                </Box> */}


            </Container>


        </Box>
    )
}

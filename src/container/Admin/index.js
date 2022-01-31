import { Stack, Hidden, Box, Button, Typography, Container, Grid, SvgIcon, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiGrid } from 'react-icons/fi';
import { GoListUnordered } from 'react-icons/go';
import { RiDashboardFill } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';
import { auth, signOut } from '../../config/firebaseconfig/index'
import { useDispatch } from 'react-redux'
import { adminState, changeUserAuth, getCartData } from '../../config/redux/action/index'
import { useSelector } from 'react-redux'
import { Overview, Messages, AllHotels, Users, CustomerBooking, AddHotel } from '../../config/router/AppRouter'
import Spinner from '../../assets/Spinner';




export default function Admin() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const stateAdmin = useSelector(state => state.AdminStateReducer.admin)
    const authStateLoading = useSelector(state => state.AdminStateReducer.isLoading)


    let logout = () => {
        signOut(auth)
            .then((success) => {
                console.log(success);
                changeUserAuth(dispatch, false, {})
                getCartData(dispatch, [])
                navigate('/login')
            })

    }




    const pages = [
        // {
        //     page: 'Overview',
        //     link: '',
        //     icon: <RiDashboardFill />
        // },
        {
            page: 'Customer Bookings',
            link: '',
            icon: <GoListUnordered />
        },
        // {
        //     page: 'Users',
        //     link: 'users',
        //     icon: <FiUsers />

        // },
        // {
        //     page: 'Messages',
        //     link: 'messages',
        //     icon: <RiMessage2Line />

        // },
        {
            page: 'All Hotels',
            link: 'all-hotels',
            icon: <FiGrid />
        },
        {
            page: 'Add Hotel',
            link: 'add-hotel',
            icon: <AiOutlineAppstoreAdd />

        },
    ]


    useEffect(() => {
        // adminState(dispatch, true)

        if(!stateAdmin){
            navigate('/')
          }


    }, [stateAdmin])


    return (
        <Box sx={{backgroundColor:'#fff',minHeight:'100vh'}}>
            {authStateLoading ? <Spinner /> : <Box>
                <Grid container spacing={0}>
                    <Hidden mdDown={true} >
                        <Grid item xl={3} lg={3} md={3}>
                            <Stack sx={{ p: 3, backgroundColor: 'var(--primary)', width: '100%', height: '100vh' }}>
                                <Stack sx={{ color: '#fff', py: 3 }}>

                                    <Typography variant='h5'>Client Portal</Typography>

                                </Stack>

                                <Divider variant='fullWidth' sx={{ color: '#fff' }} />
                                <Stack direction='column' spacing={2} sx={{ py: 3 }}>
                                    {pages.map((e, i) => {
                                        return <Stack key={i} onClick={() => navigate(`/to-admin/${e.link}`)} spacing={2} direction='row' alignItems='center' sx={{ pointerEvents: 'auto', cursor: 'pointer', color: '#fff' }}>
                                            <SvgIcon sx={{ fontSize: '20px' }}>{e.icon}</SvgIcon>
                                            <Typography  >{e.page}</Typography>
                                        </Stack>
                                    })}

                                    <Stack onClick={()=>signOut(auth)} spacing={2} direction='row' alignItems='center' sx={{ pointerEvents: 'auto', cursor: 'pointer', color: '#fff' }}>
                                        <SvgIcon sx={{ fontSize: '20px' }}><MdLogout /></SvgIcon>
                                        <Typography  >Logout</Typography>
                                    </Stack>
                                </Stack>

                            </Stack>
                        </Grid>
                    </Hidden>

                    <Hidden mdUp={true} >
                        <Grid item sm={12} xs={12}>
                            <Box justifyContent='center' alignItems='center' > <Typography sx={{ py: 3, fontWeight: '500', backgroundColor: 'var(--primary)', color: '#fff' }} align='center' variant='h5' >Dashboard</Typography></Box>
                            <Stack sx={{ p: 3, border: '1px solid var(--secondary)', width: '100%' }}>
                                <Stack direction='row' justifyContent='space-between' spacing={2}>
                                    {pages.map((e, i) => {
                                        return <Stack key={i} onClick={() => navigate(`/to-admin/${e.link}`)} spacing={2} direction='row' alignItems='center' sx={{ pointerEvents: 'auto', cursor: 'pointer' }}>
                                            <SvgIcon sx={{ fontSize: '22px' }}>{e.icon}</SvgIcon>
                                            {/* <Typography  >{e.page}</Typography> */}
                                        </Stack>
                                    })}
                                    <SvgIcon onClick={()=>signOut(auth)} sx={{ fontSize: '22px' }}><MdLogout /></SvgIcon>

                                    {/* <Button onClick={logout} variant='contained'>Logout</Button> */}

                                </Stack>
                            </Stack>
                        </Grid>
                    </Hidden>


                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} >
                        <Hidden mdDown={true} > <Box justifyContent='center' alignItems='center' sx={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;' }} > <Typography sx={{ py: 2, fontWeight: '500' }} align='center' variant='h5' >Dashboard</Typography></Box></Hidden>
                        <Stack sx={{ mx: 2, my: 3 }}>
                            <Routes  >
                                {/* <Route path='' element={<Overview />} /> */}
                                <Route path='' element={<CustomerBooking />} />
                                {/* <Route path='messages' element={<Messages />} />
                                <Route path='users' element={<Users />} /> */}
                                <Route path='all-hotels' element={<AllHotels />} />
                                <Route path='add-hotel' element={<AddHotel />} />
                            </Routes >
                        </Stack>
                    </Grid>



                </Grid>
            </Box>}
        </Box>
    )
}

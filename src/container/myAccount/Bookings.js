import React, { useState } from 'react'
import { Typography, Box, Container, SvgIcon, Stack, Paper, Button } from '@mui/material'
import { auth, onAuthStateChanged, ref, database, set } from '../../config/firebaseconfig/index'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserCart } from '../../config/redux/action/index';
import { BsDashLg } from 'react-icons/bs';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({




    // const [state, setstate] = useState()


    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function Bookings() {

    const dispatch = useDispatch()

    const userBookings = useSelector((a) => a.bookingReducer.cart);
    const loading = useSelector((a) => a.productsReducer.isLoading)
    const userProfile = useSelector(state => state.userAuthReducer.userProfile)







    const [renderProduct, setRenderProduct] = useState()


    // let removeItem = (item) => {

    //     let newarr = userCart.filter(x => x.id !== item.id)
    //     let cartReference = ref(database, `users/${userProfile.useruid}/cart`)
    //     set(cartReference, newarr)
    //         .then((success) => {
    //             updateUserCart(dispatch, newarr)
    //         })

    // }


    return (

        <Box sx={{backgroundColor: '#fff'}}>
            <Container>
                <Box>
                    <Stack direction='column' spacing={0}>

                        <Typography variant='h6' sx={{ fontWeight: 'bold', px: 0 }}>My Bookings</Typography>
                        <SvgIcon><BsDashLg /></SvgIcon>

                    </Stack>
                </Box>

                <TableContainer component={Paper}>
                    <Table sx={{ Width: '100%' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell align="left">Title</StyledTableCell>
                                <StyledTableCell align="left">Hotel Name</StyledTableCell>
                                <StyledTableCell align="left">Price</StyledTableCell>
                                <StyledTableCell align="left">City</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userBookings.map((row, i) => (
                                <StyledTableRow key={i}>

                                    {/* const {title, image, price, category} = row */}

                                    <StyledTableCell align="left"><Stack direction='row' sx={{ maxWidth: '35px', minWidth: '25px' }}><img width='100%' src={row.bookingData.imageLink} alt="" /></Stack></StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.bookingData.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.bookingData.hotelName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.bookingData.price}</StyledTableCell>
                                    <StyledTableCell align="left">{row.bookingData.city}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <Stack>


                </Stack>


            </Container>
        </Box>
    )
}



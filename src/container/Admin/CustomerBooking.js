import { useNavigate } from "react-router-dom"
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

export default function CustomerBooking() {

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


    const allBookings = useSelector(state => state.bookingReducer.cart)
    const state = useSelector(state => state)





    // {
    //     "UserUid": "J03sYcWvqENScddX8HALFVz1Klh2",
    //     "bookingData": {
    //         "city": "Karachi",
    //         "clientuid": "P4Up13xxoZSNYrOWhEKQOcD7qve2",
    //         "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    //         "hotelName": "Pearl Continental",
    //         "imageLink": "https://preview.colorlib.com/theme/unwind/images/xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp",
    //         "key": "-MqyYuxxAle1o_wZ7qbK",
    //         "location": "Club Road, Civil Lines, Karachi,",
    //         "postDate": "15/12/2021 19:47:7",
    //         "price": "12999",
    //         "title": "Deluxe Room"
    //     },
    //     "bookingkey": "-MqzKOMWNStP91EcWVJQ",
    //     "clientUid": "P4Up13xxoZSNYrOWhEKQOcD7qve2",
    //     "customerData": {
    //         "address": "cxcxvxv",
    //         "bookingTime": "15/12/2021 23:18:17",
    //         "cnicnumber": "4654645",
    //         "contactnumber": "4564645654",
    //         "country": "PK",
    //         "email": "sdfsfsdf@mail.com",
    //         "name": "dsfds",
    //         "numberofdays": "3324",
    //         "numberofpersons": "23234234",
    //         "numberofrooms": "34343"
    //     },
    //     "hotelKey": "-MqyYuxxAle1o_wZ7qbK",
    //     "paymentDetails": {
    //         "cardNumber": "2342323",
    //         "cvvNumber": "3452455",
    //         "dateOfExpiry": "2021-12-07",
    //         "fullName": "342333"
    //     }
    // }








    return (
        <div>
            <Stack>

                <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0 }}>Customer Booking</Typography>
                <SvgIcon><BsDashLg /></SvgIcon>
            </Stack>

            <Stack sx={{ my: 2 }}>


                <TableContainer component={Paper}>
                    <Table sx={{ Width: '100%' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Title</StyledTableCell>
                                <StyledTableCell align="left">Hotel City</StyledTableCell>
                                <StyledTableCell align="left">Customer name</StyledTableCell>
                                <StyledTableCell align="left">Booking Time</StyledTableCell>
                                <StyledTableCell align="left">No of Days</StyledTableCell>
                                <StyledTableCell align="left">No of Persons</StyledTableCell>
                                <StyledTableCell align="left">No of Rooms</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allBookings.map((row, i) => (
                                <StyledTableRow key={i}>

                                    {/* <StyledTableCell align="left"><Stack direction='row' sx={{ maxWidth: '80px' }}><img width='100%' src={row.imageLink} alt="" /></Stack></StyledTableCell> */}
                                    <StyledTableCell component="th" scope="row">
                                        {row.bookingData.title}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.bookingData.city}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.customerData.name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.customerData.bookingTime}</StyledTableCell>
                                    <StyledTableCell align="left">{row.customerData.numberofdays}</StyledTableCell>
                                    <StyledTableCell align="left">{row.customerData.numberofpersons}</StyledTableCell>
                                    <StyledTableCell align="left">{row.customerData.numberofrooms}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>







            </Stack>

        </div>
    )
}
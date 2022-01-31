// import React from 'react'
// import { Typography, Box, Container, SvgIcon, Stack, FormControlLabel, FormLabel, RadioGroup, Radio, Button, Hidden } from '@mui/material'
// import { BsDashLg } from 'react-icons/bs';
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




export default function AllHotels() {

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


    const allProducts = useSelector(state => state.productsReducer.products)

    return (
        <div>
            <Stack>

                <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0 }}>All Hotels</Typography>
                <SvgIcon><BsDashLg /></SvgIcon>

            </Stack>

            <Stack sx={{ my: 2 }}>


                <TableContainer component={Paper}>
                    <Table sx={{ Width: '100%' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell align="left">Title</StyledTableCell>
                                <StyledTableCell align="left">Hotel Name</StyledTableCell>
                                <StyledTableCell align="left">City</StyledTableCell>
                                <StyledTableCell align="left">Price</StyledTableCell>
                                <StyledTableCell align="left">Publish Time</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allProducts.map((row, i) => (
                                <StyledTableRow key={i}>

                                    <StyledTableCell align="left"><Stack direction='row' sx={{ maxWidth: '80px'}}><img width='100%' src={row.imageLink} alt="" /></Stack></StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.hotelName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.city}</StyledTableCell>
                                    <StyledTableCell align="left">{new Intl.NumberFormat().format(row.price)} / Day</StyledTableCell>
                                    <StyledTableCell align="left">{row.postDate?row.postDate:'nt'}</StyledTableCell>
                                    <StyledTableCell align="left"><Stack><Button 
                                    // onClick={() => removeItem(row)} 
                                    variant='text' color='primary'>X</Button></Stack></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>







                 </Stack>

             </div>
    )

}

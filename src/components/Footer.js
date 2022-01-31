import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Stack alignItems='center' sx={{
           backgroundColor: 'var(--primary)'}}>

                <Typography align='center' sx={{color:'#fff',fontSize:'14px', py:2}}>©copyright 2021 - All Rights Reserved</Typography>

        </Stack>
    )
}
 
import React from 'react'
import { Typography,SvgIcon, Stack} from '@mui/material'
import { BsDashLg } from 'react-icons/bs';

export default function Users() {
    return (
        <div>
            <Stack>

                <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0 }}>Users</Typography>
                <SvgIcon><BsDashLg /></SvgIcon>

            </Stack>

        </div>
    )
}
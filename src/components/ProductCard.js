import { Grid, Stack, Typography,Button } from "@mui/material";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {

    const { title, imageLink, price, description, city } = data

    const navigate = useNavigate()

    let handleBooking = () => {
        navigate('/BookingForm', { state: data })
    }

    return (


        <Grid xl={4} lg={4} md={4} sm={6} xs={12} item >
            <Stack direction='column' 
            // sx={{ border: '1px solid gray' }}
             className="productCard">
                <Stack direction='column' className="cardImage">
                    <img src={imageLink} alt="" width='100%' />
                </Stack>

                <Stack direction='column' sx={{ py: 4, px: 2 }} spacing={2}>

                    <Stack>
                        <Typography noWrap variant='h5' align='center' sx={{ color: 'var(--primary)', fontFamily: 'var(--headingFont)',fontWeight:'400'}}>{title}</Typography>
                    </Stack>

                    <Stack>
                        <Typography variant="body2" sx={{color:'var(--lightGray)',fontWeight:'400'}} align='center'>{description}</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="body2" sx={{color:'var(--lightGray)',fontWeight:'500'}} align='center'>Location: {city}</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={2} >
                        <Typography variant="body1" sx={{color:'var(--secondary)',fontWeight:'500'}} align='center'>Rs. {new Intl.NumberFormat().format(price)} / Day</Typography>
                        <Button variant='text' sx={{border:'0.5px solid #e5e5e5',px:2}} onClick={()=>handleBooking()}>Book Now</Button>
                    </Stack>

                </Stack>


            </Stack>




        </Grid>


    )
}

import { Typography, Box, Container, SvgIcon, Stack, Button, Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { useRef } from 'react';
import { BsDashLg } from 'react-icons/bs';
import { database, ref, set, push, child } from '../config/firebaseconfig/index'

export default function Contact() {

    let labelsx = {
        fontSize: '13px',
        margin: '0 0 5px 0',
        color: 'gray'
    }

    let inputStyle = {
        padding: '10px 8px',
        width: '100%'
    }

    const name = useRef()
    const email = useRef()
    const message = useRef()

    let handleSubmit = (e) => {
        e.preventDefault()
        const d = new Date();
        let postDate = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`


        let newMessage = {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value,
            dateAndTime: postDate
        }


        const newMsgKey = push(child(ref(database), 'messages/')).key;
        let reference = ref(database, `messages/${newMsgKey}`)
        set(reference, newMessage)
            .then((success) => {
                console.log('success', success);
            })



    }

    return (<Box sx={{ backgroundColor: '#fff', minHeight: '86vh' }}>


        <Container >
            <Grid container justifyContent='center'>
                <Grid item xl={8} lg={8} md={10} sm={12} xs={12}>
                    <Stack direction='column' sx={{ my: 5, maxWidth: '800px' }} spacing={0}>
                        <Stack>

                            <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0 }}>Contact us</Typography>
                            <SvgIcon><BsDashLg /></SvgIcon>

                        </Stack>



                        <Box sx={{ marginTop: 3 }}>

                            <form onSubmit={(e) => handleSubmit(e)}>
                                <Box sx={{ mb: 2 }}>
                                    <input type='text' ref={name} className='editProfileInput' placeholder='Name' style={inputStyle} />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <input type='email' ref={email} className='editProfileInput' placeholder='Email address' style={inputStyle} />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <textarea type='text' ref={message} className='editProfileInput' rows="4" cols="50" placeholder='Type your message here' style={inputStyle} />
                                </Box>

                                <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                                    <Button type='submit' variant='contained' color='primary' size='large'>Submit Details</Button>
                                    <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack>
                                </Stack>




                                {/* <Hidden smUp={true} >
                            <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                                <Button type='submit' fullWidth sx={{ width: '100%', height: '3rem' }} variant={submitLoading ? 'outlined' : 'contained'} color='primary' size='large'>{submitLoading ? '' : 'Submit Details'}</Button>
                                {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
                            </Stack>
                        </Hidden>

                        <Hidden smDown={true} >
                            <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                                <Stack justifyContent='center' alignItems='center'><Button type='submit' sx={{ width: '15rem', height: '3rem' }} variant={submitLoading ? 'outlined' : 'contained'} color='primary' size='large'>{submitLoading ? '' : 'Submit Details'}</Button>
                                    {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
                                </Stack>
                            </Stack>
                        </Hidden> */}


                            </form>







                        </Box>
                    </Stack>
                </Grid>

            </Grid>

        </Container>
    </Box>
    )
}

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../assets/Spinner";
import { Grid, Box, Typography, Container, Hidden, Stack } from "@mui/material";
// import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Slider from "../components/Slider";



export default function Home() {
  const dispatch = useDispatch();


  const allProducts = useSelector((a) => a.productsReducer.products)
  const loading = useSelector((a) => a.productsReducer.isLoading)
  const userData = useSelector((a) => a.userAuthReducer.userData)

  const stateAdmin = useSelector(state => state.AdminStateReducer.admin)
  const authStateLoading = useSelector(state => state.AdminStateReducer.isLoading)
  const navigate = useNavigate()

  const [productState, setProductState] = useState()

  let uniqueValues = [...new Map(allProducts.map((item) => [item['city'], item])).values()]


  let filterProducts = (e) => {
    // console.log(e.target.value);
    let val = e.target.value
    if (val === 'All Cities') {
      setProductState(allProducts)
    }
    else {
      let newArr = allProducts.filter(x => x.city === val)
      setProductState(newArr)
    }
  }





  useEffect(() => {

    if (stateAdmin) {
      navigate('/to-admin')
    }
    else {
      navigate('/')

    }

  }, [stateAdmin])

  useEffect(() => {

    setProductState(allProducts)

  }, [allProducts])

  // useEffect(() => {

  //   setProductState(allProducts)

  // }, [])



  return (
    <Box>


      {authStateLoading ? <Spinner /> : <Box >
        {/* <Slider /> */}

        <Stack justifyContent='center' alignItems='center' sx={{ height: "75vh", backgroundColor: '#1a1b3a9a' }}>
          <Stack direction='column' spacing={2}>
            <Typography align="center" variant="body2" sx={{ color: '#fff', fontWeight: '500' }}>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!</Typography>
            <Typography align="center" variant="h2" sx={{ color: '#fff', fontFamily: 'var(--headingFont)', fontWeight: '700' }}>Most Relaxing Place</Typography>
          </Stack>
        </Stack>


        <Box sx={{ backgroundColor: '#fff', py: 4 }}>
          <Container >
            <Stack direction='column'
              sx={{ pb: 3 }}
            >

              <Typography align='center' variant='body2' sx={{ color: 'var(--secondary)', fontWeight: '500' }}>AVAILABLE ROOMS</Typography>
              <Typography align='center' variant='h2' sx={{ fontFamily: 'var(--headingFont)', fontWeight: '400' }}>Featured Rooms</Typography>


            </Stack>

            {productState ? <Grid container justifyContent='center' spacing={3}
            // spacing={{ xs: 2, md: 3 }}
            >

              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Hidden mdUp={true}>
                  <Stack alignItems='center' justifyContent='center' direction='row' spacing={2}> {/* Product Categories Section  */}

                    <Stack>
                      <Typography>Select City</Typography>
                    </Stack>

                    <Stack><select name="" id="" className='px-4 py-2 rounded-2 my-3'
                      onChange={(e) => filterProducts(e)}
                    >
                      <option value="All Cities">All Cities</option>
                      {
                        uniqueValues.map((x, index) => {
                          return <option key={index} value={x.city}>{x.city}</option>
                        })
                      }
                    </select></Stack>
                  </Stack>
                </Hidden>
                <Hidden mdDown={true}>
                  <Stack alignItems='center' justifyContent='flex-end' direction='row' spacing={2}> {/* Product Categories Section  */}

                    <Stack>
                      <Typography>Select City</Typography>
                    </Stack>

                    <Stack><select name="" id="" className='px-4 py-2 rounded-2 my-3'
                      onChange={(e) => filterProducts(e)}
                    >
                      <option value="All Cities">All Cities</option>
                      {
                        uniqueValues.map((x, index) => {
                          return <option key={index} value={x.city}>{x.city}</option>
                        })
                      }
                    </select></Stack>
                  </Stack>
                </Hidden>
              </Grid>





              {productState.map((e, i) => {
                return <ProductCard key={i} data={e} />;
              })}
            </Grid> : <Spinner />}
          </Container>
        </Box>




      </Box>}
    </Box>
  );
}

{
  /* <h1 style={{ textAlign: 'center' }}>Home Page</h1> */
}


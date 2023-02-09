import React from 'react';
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import colorSharp from '../assets/img/color-sharp.png'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {FreeMode} from "swiper";
const Skills = () => {

    return (
        <Box  id="Skills" sx={{marginTop:{xs: '35%', sm: '15%', md: 0}}}>
            <Container sx={{
                backgroundColor: '#151515',
                borderRadius: '64px',
                textAlign: 'center',
                padding: '60px 50px',
                marginTop: '-60px',

            }}>
                <Stack  sx={{display: 'flex', justifyContent: 'center', width: {xs:'100%', sm:'60%'},
                    marginLeft: {lg:30, md: 22, sm:15, xs:0 }}}>
                    <Typography variant={'h2'} component={'h2'}>
                        Skills
                    </Typography>
                    <Typography variant={'h6'} sx={{color: '#B8B8B8'}}>
                        React JS / TS + Redux <br/>
                        HTML 5 / CSS 3 / JS ES5-ES6 <br/>
                        MUI / tailwind.css / bootstrap
                    </Typography>
                    <Stack mt={2} direction={'row'} spacing={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={3} >
                                <img src={meter1} alt="meter1"/>
                                <Typography sx={{fontSize: {sx: '14px', sm: '16px', md:'18px'}}}>
                                    Web Development
                                </Typography>
                            </Grid>

                            <Grid item xs={6} md={3}>
                                <img src={meter1} alt="meter1"/>
                                <Typography sx={{fontSize: {sx: '14px', sm: '16px', md:'18px'}}}>
                                    Soft Skills
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <img src={meter2} alt="meter1"/>
                                <Typography sx={{fontSize: {sx: '14px', sm: '16px', md:'18px'}}}>
                                    Brand Identity
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <img src={meter3} alt="meter1"/>
                                <Typography sx={{fontSize: {sx: '14px', sm: '16px', md:'18px'}}}>
                                    Web Design
                                </Typography>
                            </Grid>
                        </Grid>

                    </Stack>

                </Stack>
            </Container>

            <img className="background-image-left" src={colorSharp} alt="Image" />
        </Box>
    );
};

export default Skills;

import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import colorSharp from '../assets/img/color-sharp.png'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {FreeMode} from "swiper";
const Skills = () => {

    return (
        <Box id="Skills" sx={{marginTop: '-10%'}}>
            <Container sx={{
                backgroundColor: '#151515',
                borderRadius: '64px',
                textAlign: 'center',
                padding: '60px 50px',
                marginTop: '-60px',

            }}>
                <Stack  sx={{display: 'flex', justifyContent: 'center', width: '60%', marginLeft: {lg:30, md: 22, sm:15, xs:10 }}}>
                    <Typography variant={'h2'} component={'h2'}>
                        Skills
                    </Typography>
                    <Typography variant={'h6'} sx={{color: '#B8B8B8'}}>
                        React JS / TS + Redux <br/>
                        HTML 5 / CSS 3 / JS ES5-ES6 <br/>
                        MUI / tailwind.css / bootstrap
                    </Typography>
                    <Box>
                        <Swiper
                            slidesPerView={3}
                            width={"100%"}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            centeredSlides


                            className="mySwiper"
                            style={{marginTop: '20px'}}

                        >
                            <SwiperSlide style={{width: '25%'}}>
                                <img src={meter1} alt="meter1"/>
                                <Typography variant={'h6'}>
                                    Web Development
                                </Typography>
                            </SwiperSlide>
                            <SwiperSlide style={{width: '25%'}}>
                                <img src={meter2} alt="meter2"/>
                                <Typography variant={'h6'}>
                                    Web Design
                                </Typography>
                            </SwiperSlide>
                            <SwiperSlide style={{width: '25%'}}>
                                <img src={meter3} alt="meter3"/>
                                <Typography variant={'h6'}>
                                    Brand Identity
                                </Typography>
                            </SwiperSlide>
                            <SwiperSlide style={{width: '25%'}}>
                                <img src={meter1} alt="meter1"/>
                                <Typography variant={'h6'}>
                                    Soft Skills
                                </Typography>
                            </SwiperSlide>
                        </Swiper>
                    </Box>

                </Stack>
            </Container>

            <img className="background-image-left" src={colorSharp} alt="Image" />
        </Box>
    );
};

export default Skills;

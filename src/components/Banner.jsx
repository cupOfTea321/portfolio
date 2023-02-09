import React from 'react';
import {Box, IconButton, Stack, Typography} from "@mui/material";
import headerImg from '../assets/img/header-img.svg'
import bannerBg from '../assets/img/banner-bg.png'
import './components.css'
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'animate.css';
import TrackVisibility from "react-on-screen";
const Banner = () => {
    return (
        <Stack  className={`banner`}  direction={{ sm: 'column', md: 'row' }} id={'Home'} sx={{display: 'flex', alignItems: 'center', padding: '160px 0 100px 0', backgroundImage: bannerBg, color: 'white' }}>
            <Stack width={{xs: '80%',sm:'60%'}}>
                <Typography
                variant={'h5'}

                sx={{
                    fontWeight: 700,
                    padding: '8px 10px',
                    background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)',
                    display: 'inline-block',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    fontSize: '20px',
                    marginBottom: '16px',
                    width: {xs: '100%', sm:'65%'}

                }}
                >
                    Welcome to my Portfolio
                </Typography>
                <Typography

                    component={"h1"}
                    sx={{
                        fontSize: {xs:'22px',sm:'32px', md: '48px'}
                    }}
                >
                    Hi! I`m Alex, Experienced Web Developer
                </Typography>
                <Typography sx={{fontSize: {xs: '20px',sm:'18px'}}}>
                    <p style={{color: '#B8B8B8'}}>
                        I make adaptive cross-platform web applications such as video
                        or music platforms, landing pages, etc. I have about 0.5
                        years of web development experience.
                    </p>
                </Typography>

                <Typography mt={2} sx={{fontSize: '20px',}} ml={-1}>
                    <IconButton className={`linkArrow`} sx={{display: 'flex', alignItems: 'center'}}
                    >
                            <a href={'https://github.com/cupOfTea321'}  style={{color: 'white'}}>Show more on GitHub! </a>
                            <ArrowForwardIcon  fontSize={'25px'}/>
                    </IconButton>

                </Typography>

            </Stack>

            <TrackVisibility>
                {({ isVisible }) =>
                <Box ml={2}  className={ isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img  src={headerImg} alt=""/>
                        </Box>}
            </TrackVisibility>


        </Stack>
    );
};

export default Banner;

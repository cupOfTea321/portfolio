import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import headerImg from '../assets/img/header-img.svg'
import bannerBg from '../assets/img/banner-bg.png'
import './components.css'
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'animate.css';
import TrackVisibility from "react-on-screen";
const Banner = () => {
    return (
        <Box className={`banner`} id={'Home'} sx={{display: 'flex', alignItems: 'center', padding: '160px 0 100px 0', backgroundImage: bannerBg, color: 'white' }}>
            <Stack width={'60%'}>
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
                        fontSize: {sm:'32px', md: '48px'}
                    }}
                >
                    Hi! I`m Alex Web Developer
                </Typography>
                <Typography sx={{fontSize: {xs: '14px',sm:'18px'}}}>
                    <p style={{color: '#B8B8B8'}}>
                        I make adaptive cross-platform web applications such as video
                        or music platforms, landing pages and others. Web development
                        experience about 1.5 years.
                    </p>
                </Typography>

                <Typography mt={2} sx={{fontSize: '20px', }}>
                    <Link className={`linkArrow`} to={`/` } style={{display: 'flex', alignItems: 'center'}}>
                        <span  style={{color: 'white'}}>Let`s connect! </span>
                        <ArrowForwardIcon  fontSize={'25px'}/>
                    </Link>
                </Typography>

            </Stack>

            <TrackVisibility>
                {({ isVisible }) =>
                <Box ml={2}  className={ isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img  src={headerImg} alt=""/>
                        </Box>}
            </TrackVisibility>


        </Box>
    );
};

export default Banner;

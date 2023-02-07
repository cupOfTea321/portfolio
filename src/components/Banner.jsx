import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import headerImg from '../assets/img/header-img.svg'
import bannerBg from '../assets/img/banner-bg.png'
import './components.css'
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Banner = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', padding: '160px 0 100px 0', backgroundImage: bannerBg, color: 'white' }}>
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
                    width: '65%'
                }}
                >
                    Welcome to my Portfolio
                </Typography>
                <Typography
                    variant={'h2'}
                    component={"h1"}
                >
                    Hi! I`m Alex Web Developer
                </Typography>
                <Typography sx={{fontSize: '18px'}}>
                    <p style={{color: '#B8B8B8'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Typography>

                <Typography mt={2} sx={{fontSize: '20px', }}>
                    <Link className={`linkArrow`} to={`/` } style={{display: 'flex', alignItems: 'center'}}>
                        <span  style={{color: 'white'}}>Let`s connect! </span>
                        <ArrowForwardIcon  fontSize={'25px'}/>
                    </Link>
                </Typography>

            </Stack>

            <Box ml={2} className={`banner`}>
                <img sx={{}} src={headerImg} alt=""/>
            </Box>
        </Box>
    );
};

export default Banner;

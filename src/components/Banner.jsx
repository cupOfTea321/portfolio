import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import headerImg from '../assets/img/header-img.svg'
import bannerBg from '../assets/img/banner-bg.png'
const Banner = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', padding: '160px 0 100px 0', backgroundImage: bannerBg, color: 'white' }}>
            <Stack width={'60%'}>
                <Typography
                variant={'h5'}

                >
                    Welcome to my Portfolio
                </Typography>
                <Typography
                    variant={'h3'}
                    component={"h1"}
                >
                    Hi! I`m Alex Web Developer
                </Typography>
                <Typography>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Typography>
            </Stack>
            <Box ml={2}>
                <img sx={{}} src={headerImg} alt=""/>
            </Box>
        </Box>
    );
};

export default Banner;

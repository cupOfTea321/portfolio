import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import Navicons from "./Header/Navicons";
import bgImg from  '../assets/img/footer-bg.png'
const Footer = () => {
    return (
        <Stack height={'150px'} sx={{
            backgroundImage: `url(${bgImg})`,
            height: '250px',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
            <Container  sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
                <Box pt={15 }>
                    <Typography sx={{fontSize: {xs: '24px', sm: '32px', md: '48px'}}}>
                        AlexK
                    </Typography>

                </Box>
                <Box pt={15 }>
                    <Navicons/>
                    <Typography sx={{fontSize: {xs: '12px', sm: '16px'}}}>
                        Copyright 2023. All Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </Stack>
    );
};

export default Footer;

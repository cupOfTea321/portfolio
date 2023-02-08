import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import Navicons from "./Header/Navicons";
import bgImg from  '../assets/img/footer-bg.png'
const Footer = () => {
    return (
        <Stack pt={5} height={'150px'} sx={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
            <Container  sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
                <Box>
                    <Typography sx={{fontSize: {xs: '24px', sm: '32px', md: '48px'}}}>
                        AlexK
                    </Typography>

                </Box>
                <Box>
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

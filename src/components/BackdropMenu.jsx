import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const BackdropMenu = () => {
    return (
        <Box bgcolor={'#151515'} sx={{
            padding: {xs: '20px', sm:'20px', md:'100px'},
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'centre',
            textAlign: 'centre',
            borderRadius: '20px',
            color: 'white',
        }}>
            <Stack direction={'row'}>
                <Typography sx={{
                    fontSize: {xs: '24px', md: '32px', lg: '48px'}
                }}>
                    Telegram: @GDEua
                </Typography>
            </Stack>
            <Stack direction={'row'}>
                <Typography sx={{
                    fontSize: {xs: '24px', md: '32px', lg: '48px'}
                }} >
                    Vkontakte: @alexk1703
                </Typography>

            </Stack>
        </Box>
    );
};

export default BackdropMenu;

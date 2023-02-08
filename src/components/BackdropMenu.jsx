import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const BackdropMenu = () => {
    return (
        <Box bgcolor={'white'} sx={{
            padding: {sm:'20px', md:'100px'},
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'centre',
            textAlign: 'centre',
            borderRadius: '20px'
        }}>
            <Stack direction={'row'}>
                <Typography variant={'h3'}>
                    Telegram: @GDEua
                </Typography>
            </Stack>
            <Stack direction={'row'}>
                <Typography variant={'h3'}>
                    Vkontakte: @alexk1703
                </Typography>

            </Stack>
        </Box>
    );
};

export default BackdropMenu;

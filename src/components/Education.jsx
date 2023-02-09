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
        <Box  id="Skills" sx={{marginTop:{xs: '35%', sm: '15%', md: 0},
        display: 'flex', justifyContent: 'center'}}>
            <Container  sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '64px',
                textAlign: 'center',
                padding: '40px 50px',
                marginTop: '-60px',
                position: 'absolute',
                width: '80%',
                // left: {sx:0, sm:'12%', md:'15%', lg:'18%'},
                bottom: '4.5%'
            }}>
                <Stack    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: {xs:'100%', sm:'60%'},
                    marginLeft: {lg:30, md: 22, sm:15, xs:0 }}}>
                    <Typography variant={'h2'} component={'h2'}>
                        Education
                    </Typography>
                    <Typography variant={'h6'} sx={{color: '#B8B8B8'}}>
                        Национальный исследовательский университет "МЭИ" <br/>
                        Прикладная информатика в экономике <br/>
                    </Typography>


                </Stack>
            </Container>


        </Box>
    );
};

export default Skills;

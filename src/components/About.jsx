import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
const About = () => {
    return (
        <Stack pt={5} mt={5}  sx={{
            background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',


        }} >
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', sm:'column', md: 'row'},}}>
                <Box ml={-13}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                        }
                    </TrackVisibility>
                </Box>
                <Box sx={{width: {sm: '100%', md: '45%'}}}>
                    <Typography variant={'h2'} component={'h2'}>
                        About me
                    </Typography>
                    <Typography variant={'h5'}>
                        I am actively involved in web development. I manage the front-end development department of my institute. I have experience in the technical support department, where I was responsible for interacting with the API
                    </Typography>
                </Box>
            </Container>

        </Stack>
    );
};

export default About;

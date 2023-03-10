import React from 'react';
import {Box, Button, Container, Grid, Link, Paper, Typography} from "@mui/material";
import projImg1 from "../assets/img/yout2.png";
import projImg2 from "../assets/img/musicApp.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "Videos App",
            description: "React JS / MUI",
            imgUrl: projImg1,
            href: 'https://cupoftea321.github.io/youtube2-app/'
        },
        {
            title: "Music App",
            description: "React JS/ Redux / tailwind.css",
            imgUrl: projImg2,
            href: 'https://alexk-lyriks-app.netlify.app/'
        },

    ];
    const tabs = [
        {
            id: 'Apps',
            href: '#projects'
        },
        {
            id: 'About',
            href: '#about'
        }
    ]
    return (
        <Box display={'flex'} mt={10} id={'Projects'}>
            <Container >
                <Box width={'60%'} textAlign={'center'} sx={{
                    marginLeft: {lg:30, md: 22, sm:15, xs:0 },
                    width: {xs: '100%', sm: '60%'}
                }} >
                    <Typography variant={'h2'} component={'h2'}>
                        Projects
                    </Typography>
                    <Typography variant={'h6'} component={'h5'} sx={{color: '#B8B8B8'}}>
                        Responsive cross-platform web applications based on React
                    </Typography>
                </Box>

                <Grid ml={{xs: -2, sm: -2, md:0}} mt={5} sx={{ flexGrow: 1 }} container mb={10} >
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={2}>
                            {tabs.map((value) => (
                                <Grid key={value} item >
                                    <Button href={value.href} >
                                        <Paper

                                            className={`pills`}
                                            sx={{
                                                height: 60,
                                                width: 200,
                                                backgroundColor: 'transparent',
                                                color: '#fff',
                                                border: '2px solid gray',
                                                borderRadius: '20px',

                                            }}
                                        >
                                            <Typography variant={'h4'} sx={{textAlign: 'center'}} mt={1}>
                                                <Link sx={{color: 'white', textDecoration: 'none'}} >
                                                    {value.id}</Link>
                                            </Typography>

                                        </Paper>
                                    </Button>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>

                <Box sx={{ flexGrow: 1 }} id={'projects'}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project}/>
                    ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;

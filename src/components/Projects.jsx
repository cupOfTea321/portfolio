import React from 'react';
import {Box, Container, Grid, Paper, Stack, Typography} from "@mui/material";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";
const Projects = () => {
    const projects = [
        {
            title: "Music App",
            description: "React/Redux JS",
            imgUrl: projImg1,
        },
        {
            title: "Videos App",
            description: "React JS",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];
    return (
        <Box display={'flex'} mt={10} id={'Projects'}>
            <Container >
                <Box width={'60%'} textAlign={'center'} sx={{
                    marginLeft: {lg:30, md: 22, sm:15, xs:12 }
                }} >
                    <Typography variant={'h2'} component={'h2'}>
                        Projects
                    </Typography>
                    <Typography variant={'h6'} component={'h5'} sx={{color: '#B8B8B8'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </Box>

                <Grid mt={5} sx={{ flexGrow: 1 }} container mb={10} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={2}>
                            {[0, 1, 2].map((value) => (
                                <Grid key={value} item>
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
                                            Tab {value + 1}
                                        </Typography>

                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>

                <Box sx={{ flexGrow: 1 }}>
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

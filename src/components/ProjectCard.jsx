import React from 'react';
import {Box, Button, Grid, Stack, Typography} from "@mui/material";

const ProjectCard = ({ title, description, imgUrl, href }) => {
    return (
        <Grid item xs={6} sm={8} md={6} >
            <Button href={href}>
                <Box sx={{marginLeft: {sm:0}}} className={`proj-imgbx`}>
                    <img src={imgUrl} />
                    <Box className={`proj-txtx`} sx={{color: 'white'}}>
                        <Typography variant={'h6'}>
                            {title}
                        </Typography>
                        <span>{description}</span>
                    </Box>
                </Box>
            </Button>

        </Grid>
    );
};

export default ProjectCard;

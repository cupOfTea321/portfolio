import React from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Grid item xs={6} sm={8} md={6} >
            <Box sx={{marginLeft: {sm:0}}} className={`proj-imgbx`}>
                <img src={imgUrl} />
                <Box className={`proj-txtx`}>
                    <Typography variant={'h6'}>
                        {title}
                    </Typography>
                    <span>{description}</span>
                </Box>
            </Box>
        </Grid>
    );
};

export default ProjectCard;

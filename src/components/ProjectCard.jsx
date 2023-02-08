import React from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Grid item xs={2} sm={4} md={4} >
            <Box className={`proj-imgbx`}>
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

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import Navicons from "./Navicons";
import {useState} from "react";
import {Backdrop, CircularProgress, Link} from "@mui/material";
import BackdropMenu from "../BackdropMenu";

const pages = ['Home', 'Skills', 'Projects'];

function Navbar() {

    //for backdrop
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar  color={'primary'} sx={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            <Container>
                <Toolbar disableGutters>

                    {/*Logo*/}
                    <AcUnitRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,

                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AlexK
                    </Typography>

                    {/*Menu*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"

                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Button href={`#${page}`} textAlign="center"
                                    sx={{color: 'black'}}>
                                            {page}


                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*В мобильном формате*/}
                    <AcUnitRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AlexK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                className={`pills`}
                                key={page}
                                href={`#${page}`}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Navicons/>
                    <Button color="inherit" sx={{border: '1px solid white'}} className={`pills`}
                    onClick={handleToggle}>Let`s Connect</Button>
                    <Backdrop
                        sx={{ color: 'black',backgroundColor: 'rgba(255,255,255,0.1)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <BackdropMenu/>
                    </Backdrop>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;

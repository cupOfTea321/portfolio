import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Stack,
    Typography
} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function Navicons() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,
            color: 'white', backgroundColor: '#151515', }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography variant={'h5'} mx={2}>
                For any questions you can write here
            </Typography>
            <Divider color={'white'} sx={{margin: '10px 0px'}}/>
            <List >
                {['Telegram'].map((text, index) => (
                    <ListItem  key={text} disablePadding>
                        <ListItemButton href={'https://web.telegram.org/k/'}>
                            <ListItemIcon >
                                {index % 2 === 1 ? <InboxIcon  color={'white'}/> :
                                    <MailIcon color={'white'} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Typography variant={'h6'} fontSize={'16px'} mx={9}>
                    @GDEua
                </Typography>
            </List>
            <Divider color={'white'} sx={{margin: '10px 0px'}}/>
            <List sx={{color: 'white', backgroundColor: '#151515', paddingBottom: '320%'}}>
                {['Vkontakte'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton href={'https://vk.com/alexk1703'}>
                            <ListItemIcon color={'white'}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (

            <Box sx={{ flexGrow: 1}}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ }}>
                        <Stack ml={{xs: - 12, sm:0}} direction={{sx: 'column', sm:'row'}}>
                            <IconButton
                                className={`social-icon`}  size="large" color="inherit"
                                href={'https://github.com/cupOfTea321'}>
                                <GitHubIcon />
                            </IconButton>


                            {/*открытие боковой панели с контактами*/}
                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <IconButton
                                        className={`social-icon`}
                                        size="large"
                                        color="inherit"
                                        onClick={toggleDrawer(anchor, true)}
                                    >
                                        <MailIcon />
                                    </IconButton>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </Stack>

                    </Box>

                </Toolbar>
            </Box>


    );
}

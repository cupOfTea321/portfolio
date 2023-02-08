import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography variant={'h5'} mx={2}>
                For any questions you can write here
            </Typography>
            <Divider />
            <List>
                {['Telegram'].map((text, index) => (
                    <ListItem  key={text} disablePadding>
                        <ListItemButton href={'https://web.telegram.org/k/'}>
                            <ListItemIcon>
                                {index % 2 === 1 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Typography variant={'h6'} fontSize={'16px'} mx={9}>
                    @GDEua
                </Typography>
            </List>
            <Divider />
            <List>
                {['Vkontakte'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton href={'https://vk.com/alexk1703'}>
                            <ListItemIcon>
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
        <Box sx={{ flexGrow: 1 }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: {  md: 'flex' } }}>
                        {['right'].map((anchor) => (
                        <IconButton
                            onClick={toggleDrawer(anchor, true)}
                            className={`social-icon`}  size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge  color="error" >
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        ))}
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                        <IconButton
                            className={`social-icon`}
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={toggleDrawer(anchor, true)}
                            key={anchor}

                        >

                            <Badge badgeContent={1} color="error">
                                <NotificationsIcon />
                            </Badge>
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
                    </Box>

                </Toolbar>
        </Box>
    );
}

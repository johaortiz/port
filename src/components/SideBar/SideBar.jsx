import { useState } from 'react';
import { Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material/';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const sideOptions = [{ name: 'Home', icon: <HomeRoundedIcon />, path: '/' },
{ name: 'Experience', icon: <WorkRoundedIcon />, path: '/experience' },
{ name: 'divider' },
{ name: 'About Me', icon: <AccountCircleRoundedIcon />, path: '/about' },
// { name: 'Hobbies', icon: <AutoStoriesRoundedIcon /> },
{ name: 'Contact Me', icon: <MailIcon />, path: '/contact' }
];

function SideBar(props) {
    const { window, contextTheme } = props;
    const [mobileOpen, setMobileOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const colorText = contextTheme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)';

    const drawer = (
        <Box
            height='100vh'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Toolbar />
            <List>
                {sideOptions.map((element, i) => (
                    element.name !== 'divider' ?
                        <ListItem key={i}>
                            <Link to={element.path} style={{ textDecoration: 'none', color: colorText }} >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {element.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={element.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        : <Divider key={i} />
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, position: 'absolute', top: 20, left: 30, backgroundColor: 'background.default' }}
            >
                <MenuIcon />
            </IconButton>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{
                        sx: {
                            backgroundColor: 'background.default',
                            color: 'text.primary'
                        }
                    }
                    }
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            backgroundColor: 'background.default',
                            color: 'text.primary'
                        }
                    }
                    }
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}


export default SideBar;
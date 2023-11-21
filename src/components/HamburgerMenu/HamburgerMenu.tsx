import React, { useState } from 'react';
import { Drawer, List, ListItemButton, IconButton, useMediaQuery, useTheme, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const HamburgerMenu = () => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isMobile && (
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={toggleDrawer}
                        style={{zIndex: 1300}}
                    >
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
            )}
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
                <List sx={{paddingTop: 10}}>
                    <ListItemButton component={RouterLink} to="/" onClick={toggleDrawer}>Emissions By Country</ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton component={RouterLink} to="/coordinate" onClick={toggleDrawer}>Emission By Coordinates</ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton component={RouterLink} to="/educational" onClick={toggleDrawer}>Educational Content</ListItemButton>
                    <Divider variant='middle'/>
                </List>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;
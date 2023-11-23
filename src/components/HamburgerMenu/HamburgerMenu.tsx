import React, { useState } from 'react';
import { Drawer, List, ListItemButton, IconButton, useMediaQuery, useTheme, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

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
                    style={{ zIndex: 1300 }}
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            )}
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
                <List sx={{ paddingTop: 10}}>
                        <Link href="/" passHref>
                            <ListItemButton onClick={toggleDrawer}>Emissions By Country</ListItemButton>
                        </Link>
                    <Divider variant='middle'/>
                        <Link href="/coordinate" passHref>
                            <ListItemButton onClick={toggleDrawer}>Emission By Coordinates</ListItemButton>
                        </Link>
                    <Divider variant='middle'/>
                        <Link href="/educational" passHref>
                            <ListItemButton onClick={toggleDrawer}>Educational Content</ListItemButton>
                        </Link>
                    <Divider variant='middle'/>
                </List>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;
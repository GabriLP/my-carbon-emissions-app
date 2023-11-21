import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static">
            <Toolbar>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        '& .logo': {
                            marginRight: theme.spacing(1),
                            width: 56,
                            height: 56
                        }
                    }}
                >
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
                    <Typography variant="h6">GlobalEmissions</Typography>
                </Box>
                {!isMobile && (
                    <>
                        <Button color="inherit" component={RouterLink} to="/">Country Selection</Button>
                        <Button color="inherit" component={RouterLink} to="/coordinate">Coordinate Check</Button>
                        <Button color="inherit" component={RouterLink} to="/educational">Educational Content</Button>
                    </>
                )}
                {isMobile && <HamburgerMenu />}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
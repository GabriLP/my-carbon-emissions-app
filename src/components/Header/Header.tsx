import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        // marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static">
            <Toolbar>
                <Box className={classes.title}>
                    <img src="%PUBLIC_URL%/logo.png" alt="Logo" className={classes.logo} />
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
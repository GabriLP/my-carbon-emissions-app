import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        //marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Box className={classes.title}>
                    <img src="path/to/logo.png" alt="Logo" className={classes.logo} />
                    <Typography variant="h6">My Carbon Emissions App</Typography>
                </Box>
                <Button color="inherit" component={RouterLink} to="/">Dashboard</Button>
                <Button color="inherit" component={RouterLink} to="/country">Country Selection</Button>
                <Button color="inherit" component={RouterLink} to="/coordinate">Coordinate Check</Button>
                <Button color="inherit" component={RouterLink} to="/educational">Educational Content</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
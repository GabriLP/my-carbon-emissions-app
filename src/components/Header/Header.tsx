import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <div className="logo">
                <img src="path/to/logo.png" alt="Logo" />
                <h1 className={classes.title}>My Carbon Emissions App</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/country">Country Selection</Link></li>
                    <li><Link to="/coordinate">Coordinate Check</Link></li>
                    <li><Link to="/historical">Historical Graph</Link></li>
                    <li><Link to="/educational">Educational Content</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
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
                        '& .logo-container': {
                            marginRight: theme.spacing(1),
                            width: 56,
                            height: 56,
                            position: 'relative'
                        }
                    }}
                >

                    <Box className="logo-container">
                        <Image src="/logo.png" alt="Logo" width={56} height={56} />
                    </Box>
                    <Typography variant="h6">GlobalEmissions</Typography>
                </Box>
                {!isMobile && (
                    <>
                        <Link href="/" passHref>
                            <Button color="inherit">Country Selection</Button>
                        </Link>
                        <Link href="/coordinate" passHref>
                            <Button color="inherit">Coordinate Check</Button>
                        </Link>
                        <Link href="/educational" passHref>
                            <Button color="inherit">Educational Content</Button>
                        </Link>
                    </>
                )}
                {isMobile && <HamburgerMenu />}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
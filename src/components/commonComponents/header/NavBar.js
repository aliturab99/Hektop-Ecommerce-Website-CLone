import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../../../static/images/logo.png";
import MenuLink from '../menu/MenuLink';
import { Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { themeStyles } from '../../../themeStyles';


const data = [
    {
        id: 'home',
        label: 'Home',
        options: [{ to: '/', option: 'Home 1' }, { to: '/home2', option: 'Home 2' }, { to: '/home3', option: 'Home 3' }],
        anchorEl: null,
        open: false
    },
    {
        id: 'pages',
        label: 'Pages',
        to: "/test",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'products',
        label: 'Products',
        to: "/products",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'blog',
        label: 'Blog',
        to: "/test",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'shop',
        label: 'Shop',
        to: "/test",
        options: null,
        anchorEl: null,
        open: false
    },
    {
        id: 'contact',
        label: 'Contact',
        to: "/test",
        options: null,
        anchorEl: null,
        open: false
    }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
            <AppBar sx={{ background: "var(--bg-color)" }} position="static">
                <Grid container sx={{justifyContent: "left", alignItems:"center"}}>
                    <Grid item md={1}></Grid>
                    <Grid item md={2}>
                    <Toolbar disableGutters>
                        <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <img src={logo} />
                            </Typography>
                            

                            <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={logo} />

                        </Typography>

                    </Toolbar>
                    </Grid>
                    <Grid item md={5} >
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                            <MenuLink data={data} styleObj={{ color: "#000" }} menuStyle={{ display: "flex", flexDirection: "column" }} />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuLink data={data} styleObj={{ color: "#000" }} />
                            </Menu>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <TextField
                            type="search"
                            size="small"
                            label="search"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: {
                                    borderRadius: 0,
                                    border: "transparent"
                                },
                            }}
                            sx={{...themeStyles.headerSearchInput}}
                            />
                            <Button variant="contained" size="large" sx={{...themeStyles.searchInputBtn}}><SearchIcon /> </Button>

                        </Box>
                    </Grid>
                </Grid>
                
                
                
               
            </AppBar>
    );
}
export default NavBar;
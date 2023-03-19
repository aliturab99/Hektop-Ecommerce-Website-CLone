import { Box, Grid, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import styles from "./header.module.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { themeStyles } from '../../../themeStyles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';






function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header>

            {/* top bar started */}
            <Box fontFamily={"var(--josefin)"} >
                <Grid container sx={{ ...themeStyles.topBar }} >
                    <Grid lg={1}></Grid>
                    <Grid item lg={5} alignItems={"center"} display={"flex"} justifyContent={"space-evenly"} >
                        <Box>
                            <Typography className='text' variant='body1'><MailOutlineIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />mhhasanul@gmail.com</Typography>
                        </Box>
                        <Box>
                            <Typography fontFamily={"var(--josefin)"} variant='body1'><PhoneInTalkIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />(12345)67890</Typography>
                        </Box>
                    </Grid>
                    <Grid lg={1}></Grid>

                    <Grid item md={5} display={"flex"} >
                        <Box>
                            <Button
                                endIcon={<KeyboardArrowDownIcon sx={{ ...themeStyles.topbarIcon }} />}
                                sx={{ ...themeStyles.btnMenu }}
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                English
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleClose}>Urdu</MenuItem>
                                <MenuItem onClick={handleClose}>Hindi</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Box>

                        <Box>
                            <Button
                                endIcon={<KeyboardArrowDownIcon sx={{ ...themeStyles.topbarIcon }} />}
                                sx={{ ...themeStyles.btnMenu }}
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                USD
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleClose}>$Dollar</MenuItem>
                                <MenuItem onClick={handleClose}>Pkr</MenuItem>
                                <MenuItem onClick={handleClose}>Youn</MenuItem>
                            </Menu>
                        </Box>
                        <Button
                            endIcon={<PersonOutlineIcon sx={{ ...themeStyles.topbarIcon }} />}
                            sx={{ ...themeStyles.btnMenu }}>
                            Login
                        </Button>
                        <Button
                            endIcon={<FavoriteBorderIcon sx={{ ...themeStyles.topbarIcon }} />}
                            sx={{ ...themeStyles.btnMenu }}>
                            Wishlist
                        </Button>
                        <IconButton
                            sx={{ ...themeStyles.btnMenu, "marginLeft": "20px" }}
                        >
                            <AddShoppingCartIcon />
                        </IconButton>

                    </Grid>

                </Grid>
            </Box>
            {/* top bar ended */}
        </header>
    )
}

export default Header;
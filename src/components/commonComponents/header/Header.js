import { Box, Grid, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { themeStyles } from '../../../themeStyles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuLink from '../menu/MenuLink';
import NavBar from './NavBar';






function Header() {
    const data = [
        {
          id: 'english',
          label: 'English',
          to: "/test",
          options: [
            {to: "/English", option: "English"},
            {to: "/urdu", option: "Urdu"},
            {to: "/hindi", option: "Hindi"},
          ],
          anchorEl: null,
          open: false
        },
        {
          id: 'currency',
          label: 'USD',
          to: "/test",
          options: [
            {to: "/usd", option: "USD"},
            {to: "/urdu", option: "Urdu"},
            {to: "/hindi", option: "Hindi"},
          ],
          anchorEl: null,
          open: false
        }
      ];
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
                    <Grid md={1}></Grid>
                    <Grid item md={5} alignItems={"center"} display={"flex"} justifyContent={"space-evenly"} >
                        <Box>
                            <Typography className='text' variant='body1'><MailOutlineIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />syedyawaraliturab@gmail.com</Typography>
                        </Box>
                        <Box>
                            <Typography fontFamily={"var(--josefin)"} variant='body1'><PhoneInTalkIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />(12345)67890</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={1}></Grid>

                    <Grid item md={5} display={"flex"} >
                            <MenuLink data={data} />
                            
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

            {/* Navbar is started */}
                <NavBar />
            {/* Navbar is Ended */}
        </header>
    )
}

export default Header;
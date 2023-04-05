import { Link } from 'react-router-dom';
import { Typography, TextField, Button, Grid, OutlinedInput, InputAdornment, FormControl, InputLabel, useMediaQuery, Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';
import { themeStyles } from '../../../themeStyles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const useStyles = makeStyles((theme) => ({



    logo: {
        fontFamily: 'Josefin Sans',
        fontSize: '38px !important',
        lineHeight: '45px',
        color: '#000000',
        marginBottom: '20px',
        fontWeight: "700 !important",
        marginBottom: "20px !important"
    },
    input: {
        background: '#FFFFFF',
        borderRadius: '3px',
        marginRight: '10px',
    },
    button: {
        backgroundColor: 'var(--pink) !important',
        borderRadius: '3px',
        '&:hover': {
            background: 'var(--pink)',
        },
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#EEEFFB',
    },
    address: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#8A8FB9',
    },
    section: {
        marginBottom: '20px',
    },
    heading: {
        fontFamily: 'Josefin Sans',
        fontSize: '22px !important',
        lineHeight: '26px',
        color: '#000000',
        marginBottom: '10px',
        fontWeight: "700 !important",
        marginBottom: "20px !important"
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '35px',
        color: '#8A8FB9',
        marginBottom: '5px',
        textDecoration: 'none',
        '&:hover': {
            color: '#FB2E86',
        },
    },
}));


function Footer() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();
    return (
        <>
            <Box sx={{
                backgroundColor: '#F4F6F8',
                padding: '40px 20px 0 20px', margin: "20px 0 0 0"
            }}>
                <Container maxWidth={"md"} disableGutters>
                    <Grid container className={classes.root} justifyContent={isMobile ? "center" : "start"} >
                        <Grid item md={5} marginBottom={isMobile ? 5 : 0} textAlign={isMobile ? "center" : "start"}>
                            <Typography variant="h1" className={classes.logo}>
                                Hekto
                            </Typography>

                            <FormControl sx={{ margin: "5px 0", width: isMobile ? '100%' : '80%' }} variant="outlined">
                                <OutlinedInput
                                    className={classes.input}
                                    sx={{
                                        paddingRight: "0",
                                        "& fieldset": {
                                            border: "none !important",
                                            borderColor: "transparent !important"
                                        }
                                    }}
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button disableElevation variant="contained" className={classes.button}>
                                                <Typography className={classes.buttonText}>Subscribe</Typography>
                                            </Button>
                                        </InputAdornment>
                                    }
                                    placeholder="Enter Email"
                                    size='small'
                                    fullWidth={isMobile ? true : false}
                                />
                            </FormControl>
                            <Typography className={classes.address}>
                                123 Main Street, New York, NY 10001
                            </Typography>
                        </Grid>
                        <Grid container item md={7} justifyContent={isMobile ? "center" : "start"} spacing={2}>
                            <Grid item xs={6} sm={6} md={4} className={classes.section}>
                                <Typography variant="h2" className={classes.heading}>
                                    Categories
                                </Typography>
                                <div className={classes.links}>
                                    <Link to="/" className={classes.link}>
                                        Laptops & Computers
                                    </Link>
                                    <Link to="/" className={classes.link}>
                                        Cameras & Photography
                                    </Link>
                                    <Link to="/" className={classes.link}>
                                        Smart Phones & Tablets
                                    </Link>
                                    <Link to="/" className={classes.link}>
                                        Video Games & Consoles
                                    </Link>
                                    <Link to="/" className={classes.link}>
                                        Waterproof Headphones
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} className={classes.section}>
                                <Typography variant="h2" className={classes.heading}>
                                    Customer Care
                                </Typography>
                                <div className={classes.links}>
                                    <Link to="/" className={classes.link}>
                                        My Account                        </Link>
                                    <Link to="/" className={classes.link}>
                                        Discount                        </Link>
                                    <Link to="/" className={classes.link}>
                                        Returns                        </Link>
                                    <Link to="/" className={classes.link}>
                                        Orders History                        </Link>
                                    <Link to="/" className={classes.link}>
                                        Order Tracking                        </Link>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} display={isMobile ? "none" : "block"} className={classes.section}>
                                <Typography variant="h2" className={classes.heading}>
                                    Pages
                                </Typography>
                                <div className={classes.links}>
                                    <Link to="/" className={classes.link}>
                                        Blog
                                    </Link>
                                    <Link to="/" className={classes.link}>
                                        Browse the Shop</Link>
                                    <Link to="/" className={classes.link}>
                                        Category
                                    </Link>
                                    <Link to="/" className={classes.link}>
                                        Pre-Built Pages</Link>
                                    <Link to="/" className={classes.link}>
                                        Visual Composer Elements
                                    </Link>

                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
            <Box sx={{ background: "#E7E4F8" }} py={isMobile ? 0 : 1}>
                <Container maxWidth={"md"} disableGutters>
                    <Grid container alignItems={"center"}>
                        <Grid item md={6} xs={12} mt={isMobile ? 2 : 0} textAlign={isMobile ? "center" : "start"}>
                            <Typography sx={{...themeStyles.footerCopyRightText}}>
                                &copy; Hekto - All Rights Reserved
                            </Typography>
                        </Grid>
                        <Grid item md={6}  xs={12} my={isMobile ? 1 : 0}  textAlign={isMobile ? "center" : "end"}>
                            <FacebookIcon sx={{...themeStyles.footerSocialIcon}} />
                            <InstagramIcon sx={{...themeStyles.footerSocialIcon}}  />
                            <TwitterIcon sx={{...themeStyles.footerSocialIcon}}  />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
export default Footer;
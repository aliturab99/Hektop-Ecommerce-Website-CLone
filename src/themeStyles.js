
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'var(--lato)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});


export const themeStyles = {
    topBar: {
        "backgroundColor": "var(--violet)",
        "fontSize": "16px",
        "color": "var(--white)",
        "fontFamily": "var(--josefin)",
        "fontWeight": "600",
        "height":"44px",
        "alignItems": "center",
    },
    btnMenu : {
        "color": "#fff",
        "textTransform": "capitalize",
        "fontFamily": "var(--josefin)",
        "fontSize": "16px",
        "fontWeight": "600",
        "textDecoration": "none",
    },
    topbarIcon: {
        "marginLeft": "-8px"
    },
    menuLink:{
        "color": "black",
        "fontFamily": "var(--josefin)",
        "textDecoration": "none",
        display: "block"
    },
    searchInputBtn: {
        borderRadius: 0,
        backgroundColor: 'var(--pink)',
        '&:hover': {
          backgroundColor: 'var(--pink)',
        },
        '&:focus': {
          backgroundColor: 'var(--pink)',
        },
    },
    mainHeading : {
        fontFamily: 'var(--josefin)',
        fontSize: "42px",
        lineHeight: "49px",
        color: "var(--heading-color)",
        fontWeight: 700
    },
    productTitle: {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '22px',
        color: 'var(--pink)',
      },
    productCode: {
        fontFamily: 'Lato',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: "var(--off-blue)",
    },
    singleTab: {
      fontFamily: "var(--lato)",
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '22px',
      textTransform: 'capitalize',
      padding: "0 30px"
    }
}
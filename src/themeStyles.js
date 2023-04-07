
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
    },
    uniqueFeature: {
      fontFamily: 'Josefin Sans',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing:" 0.02em",
      color: '#151875',

    },
    uniqueFeaturePrice: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#151875',
    },
    discountItemHeading: {
      fontFamily: 'Josefin Sans',
      fontSize: "30px",
      lineHeight: "132%",
      letterSpacing: "0.015em",
      color: "var(--off-blue)",
      margin: "10px 0 ",
      fontWeight: "bold"
    },
    discountedItemSubHeading: {
      fontFamily: 'Josefin Sans',
      fontSize: "21px",
      lineHeight: "30px",
      letterSpacing: "0.015em",
      color: "var(--pink)",
      margin: "10px 0 ",
    },
    discountedItemDescription: {
      fontFamily: 'Lato',
      fontStyle: "normal",
      fontHeight: 400,
      fontSize: "16px",
      lineHeight: "30px",
      letterSpacing: "0.02em",
      color: "var(--light-gray)",
    },
    discountedItemDescriptionPoints: {
      fontFamily: 'Lato',
      fontStyle: "normal",
      fontHeight: 400,
      fontSize: "15px",
      lineHeight: "30px",
      letterSpacing: "0.02em",
      color: "var(--light-gray)",
    },
    Btn: {
        borderRadius: 0,
        color: "var(--white)",
        padding: "15px 48px",
        marginTop: "20px",
        backgroundColor: 'var(--pink)',
        '&:hover': {
          backgroundColor: 'var(--pink)',
        },
        '&:focus': {
          backgroundColor: 'var(--pink)',
        },
    },
    btnText: {
      fontFamily: 'var(--josefin)',
      fontSize: '17px',
      lineHeight: '20px',
      letterSpacing: '0.02em',
      color: '#FFFFFF',
    },
    latestBlogsHeading: {
      fontFamily: 'Josefin Sans',
      fontSize: '18px',
      color: '#151875',
      fontStyle: "600",
      margin: "20px 0"
    },
    latestBlogDescription: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontHeight: 400,
      fontSize: '16px',
    },
    latestBlogAuthor: {
      fontFamily: 'Josefin Sans',
      fontSize: '14px',
      lineHeight: '16px',
      color: '#151875',
    },
    latestBlogButton: {
      fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '30px',
  textDecoration:' underline',
  marginBottom: "20px"
},
footerCopyRightText: {
  fontFamily: 'Lato',
  fontStyle: "normal",
  fontHeight: 600,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#9DA0AE",
},
footerSocialIcon: {
  color: "var(--off-blue)",
  margin: "0 5px"
},
footerLogo: {
  fontFamily: 'Josefin Sans',
  fontSize: '38px !important',
  lineHeight: '45px',
  color: '#000000',
  marginBottom: '20px',
  fontWeight: "700 !important",
  marginBottom: "20px !important"
},
footerInput: {
  background: '#FFFFFF',
  borderRadius: '3px',
  marginRight: '10px',
},
footerButton: {
  backgroundColor: 'var(--pink) !important',
  borderRadius: '3px',
  '&:hover': {
      background: 'var(--pink)',
  },
},
footerButtonText: {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#EEEFFB',
},
footerAddress: {
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#8A8FB9',
},
footerSection: {
  marginBottom: '20px',
},
footerHeading: {
  fontFamily: 'Josefin Sans',
  fontSize: '22px !important',
  lineHeight: '26px',
  color: '#000000',
  marginBottom: '10px',
  fontWeight: "700 !important",
  marginBottom: "20px !important"
},
footerLinks: {
  display: 'flex',
  flexDirection: 'column',
},
footerLink: {
  fontFamily: 'Lato',
  fontStyle: 'normal',
  textDecoration: "none",
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
productListProductTitle: {
  fontFamily: 'Josefin Sans',
  fontStyle: 'normal',
  fontHeight: 700,
  fontSize: '18px',
  lineHeight: '18px',
  textAlign: 'center',
  color: '#151875',
  fontWeight: "bold"
},
breaCrumbsHeading: {
  "fontFamily": 'var(--josefin)',
  "fontSize": {xs : "28px" , md : '36px'},
  "lineHeight": "42px",
  "color": "#101750",
  "fontWeight": "600",
  
},
breaCrumbsLink: {
  "my": 2,
  "color": 'var(--pink)',
  "display": 'block',
  'fontSize': '16px',
  "fontFamily": "var(--lato)",
  'fontWeight': '500',
  'textDecoration': 'none',
},
breadcrumbsBox : {
  "padding" : { md : "72px" } ,
  "paddingTop" : {xs : "40px"},
  "paddingBottom" : { xs :"40px"}
},

// horizontal filters
filterResults: {
  color: "var(--soft-blue)",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "center",
},
filterPerPageContainer: {
  display: "flex",
  alignItems: "center",
  justifyContent: { xs: "space-around", md: "space-between" },
},
filterPerPageText: {
  color: "var(--off-blue-blue)",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
},
filterSortText: {
  color: "var(--off-blue-blue)",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
},
filterSearchInputContainer: {
  display: "flex",
  alignItems: "center",
  justifyContent: { xs: "center" },
  marginTop: { xs: "20px", md: "0" },
},
filterViewText: {
  color: "var(--off-blue)",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
  marginRight: "10px",
},
filterWindowIcon: {
  color: "var(--off-blue)",
  fontSize: "20px",
  marginRight: "5px",
},
filterSearchInput: {
  marginLeft: "20px",
  padding: "0",
  borderWidth: "1px",
  borderRadius: 0,
  borderColor: "#E7E6EF",
  "& input": {
    padding: "6px 14px",
    borderColor: "var(--off-blue)",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#E7E6EF",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#E7E6EF",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#E7E6EF !important",
    borderWidth: "1px",
  },
},
// horizontal filters
}
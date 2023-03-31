import { themeStyles,theme } from '../../themeStyles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';


function ShopProductCard({
  productImg,
  isMobile,
  columnNumber,
  paperStyle,
  imgHoverStyle,
  iconHoverStyle,
  paperHoverStyle,
  saleTagHoverStyle,
  imgBoxStyle,
  imgStyle,
  saleTagStyle,
  saleBoxStyle,
  iconsStyle,
  detailsBoxStyle,
  titleStyle,
  priceStyle,
  discountStyle,
  title,
  price,
  discount,
  saleText
}) {

  
  return (
    <Grid item md={columnNumber || 4} xs={12}>
      <Box m={!isMobile ? 1 : 2}>
      <Paper square elevation={3} sx={{
        ...paperStyle,
        borderTopRightRadius: '5px', borderTopLeftRadius: '5px',
        '&:hover .imageBox': {
          backgroundColor: 'var(--white)',
          ...imgHoverStyle,
        },
        '&:hover .iconsContainer': {
          visibility: 'visible',
          ...iconHoverStyle
        },
        ':hover': {
          border: '2px solid #F701A8',
          borderRadius: 0,
          boxShadow: 0,
          ...paperHoverStyle
        },
        '&:hover .saleTagBox': {
          visibility: 'visible',
          ...saleTagHoverStyle
      }
        
      }}>
        <Box className="imageBox" display="flex" justifyContent="center" alignItems="center" sx={{
            width: '100%',
            height: '236px',
            backgroundColor: 'var(--product-background-hover)',
            position: 'relative',
            ...imgBoxStyle
        }}>
            <img
            style={{
              maxWidth: '100%',
              height: 'auto',
              ...imgStyle,
            }}
            src={productImg} />
              {/* Top Left Sale Tag */}
              <Box className="saleTagBox" sx={{ visibility: 'hidden', ...saleBoxStyle }}>
                    <span className="saleTag" style={{
                        position: 'absolute',
                        top: 15,
                        left: 10,
                        fontFamily: 'var(--josefin)',
                        backgroundColor: 'var(--off-navy-blue)',
                        color: '#ffffff',
                        fontSize: '14px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        width: '60px',
                        textAlign: 'center',
                        transform: 'rotate(-20deg) skew(-10deg) translateX(-5px)',
                        ...saleTagStyle
                    }}>{saleText}</span>
                </Box>
            <Box className="iconsContainer" sx={{
              position: 'absolute',
              bottom: 7,
              left: 10,
              visibility: 'hidden',
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 2,
              ...iconsStyle
            }}>
              <AddShoppingCartIcon className="productHoverIcons" sx={{  color: '#2F1AC4', padding: '10px', '&:hover': {  backgroundColor: '#EEEFFB', borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.05)' } }} />
              <FavoriteBorderIcon className="productHoverIcons" sx={{ padding: '10px', color: '#2F1AC4', '&:hover': {  backgroundColor: '#EEEFFB', borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.05)' } }} />
              <ZoomInIcon className="productHoverIcons"  sx={{ padding: '10px', color: '#2F1AC4', '&:hover': {  backgroundColor: '#EEEFFB', borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.05)' } }}/>
            </Box>

        </Box>
        <Box display="flex" alignItems="baseline" pt={3} px={1} justifyContent='space-between' className="detailsBox" paddingBottom={1} sx={{...detailsBoxStyle}}>
                <Typography className="productTitle" sx={{ ...themeStyles.productTitle, color: 'var(--off-blue)', fontSize: '16px', fontFamily: "var(--josefin)", fontWeight: "normal", ...titleStyle }}>{title}</Typography>
                <Typography className="productOtherDetails" sx={{...themeStyles.productPrice, fontFamily: 'var(--josefin)', ...priceStyle}}>{price}</Typography>
                <Typography className="productOtherDetails" sx={{...themeStyles.productPrice, fontFamily: 'var(--josefin)', textDecorationLine: 'line-through', color: 'var(--pink)', fontSize: '12px', lineHeight: '14px', ...discountStyle}}>{discount}</Typography>
            </Box>
      </Paper>
    </Box>
    </Grid>
  )
}

export default ShopProductCard
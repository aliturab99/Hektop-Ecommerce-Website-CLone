import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { themeStyles } from "../../../themeStyles"

function LatestProducts() {
  return (
        <Box  mt={12} >
            <Typography sx={{...themeStyles.mainHeading,textAlign: "center"}}>Featured Products</Typography>
        </Box>
  )
}

export default LatestProducts
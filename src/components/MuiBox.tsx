import { Box } from "@mui/material"

const MuiBox = () => {
  return (
    <>
    <Box sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        height: '100px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'primary.light',
            
        }
    }}>
      Codevolution
    </Box>
    <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>Box</Box>
    </>
  )
}

export default MuiBox

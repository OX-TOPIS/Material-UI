import {Typography} from '@mui/material'
const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1' gutterBottom>h1 heading</Typography>
      <Typography variant='h2'>h2 heading</Typography>
      <Typography variant='h3'>h3 heading</Typography>
      <Typography variant='h4' component='h1'>h4 heading</Typography>
      <Typography variant='h5'>h5 heading</Typography>
      <Typography variant='h6'>h6 heading</Typography>

      <Typography variant='subtitle1'>Sub title1</Typography>
      <Typography variant='subtitle2'>Sub title2</Typography>

      <Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, dolorem!</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem!</Typography>
    </div>
  )
}

export default MuiTypography

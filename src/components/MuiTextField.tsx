import {Stack ,TextField, InputAdornment} from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant="outlined" />
        <TextField label='Name' variant="filled" />
        <TextField label='Name' variant="standard" />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small Secondary' size="small" color="secondary" />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Form Input' size="small" color="secondary" required value={value} onChange={(e)=>setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share youe password with anyone'} />
        <TextField label='Password' type="password" disabled helperText='Do not share your password with anyone' />
        <TextField label='Read Only' InputProps={{readOnly: true}} />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Amount' InputProps={{
            startAdornment: <InputAdornment position="start" >$</InputAdornment>
        }} />
        <TextField label='Weight' InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>
        }} />
      </Stack>
    </Stack>
  )
}

export default MuiTextField

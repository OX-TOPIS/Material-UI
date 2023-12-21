import {Box, FormControlLabel, Checkbox,
FormControl, FormLabel, FormGroup} from "@mui/material"
import React, { useState } from "react"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const MuiCheckbox = () => {
  const [acceptInC, setAcceptInC] = useState(false)
  const [skills, setSkills] = useState<String[]>([])
  console.log({skills})
  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
    setAcceptInC(event.target.checked)
  }
  const handleSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value))
    }
  }
  return (
    <Box>



      <Box>
        <FormControlLabel
        label="I accept terms conditions"
        control={<Checkbox checked={acceptInC} onChange={handleChange} />} />
      </Box>


      <Box>
        <Checkbox icon={<BookmarkIcon/>} 
        checkedIcon={<BookmarkBorderIcon/>}
        checked={acceptInC}
        onChange={handleChange}
        />
      </Box>


      <Box>
        <FormControl>
          <FormLabel error>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
            label="HTML"
            control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkills} color="secondary" />} />

<FormControlLabel
            label="CSS"
            control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkills} />} />

<FormControlLabel
            label="JS"
            control={<Checkbox value="js" checked={skills.includes('js')} onChange={handleSkills} />} />
          </FormGroup>
        </FormControl>
      </Box>



    </Box>
  )
}

export default MuiCheckbox

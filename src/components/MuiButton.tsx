import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from "react";

const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    const handleFormatChange = (_even: React.MouseEvent<HTMLElement>, updateFormats: string | null) => {
        setFormats(updateFormats);
    }
    console.log(formats);
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text" color="secondary" href="https://google.com">
                    Text
                </Button>
                <Button variant="contained" color="secondary">
                    contained
                </Button>
                <Button variant="outlined" color="secondary">
                    outlined
                </Button>
            </Stack>

            <Stack spacing={6} direction='row'>
                <Button variant="contained" color="primary" startIcon={<SendIcon/>} disableRipple onClick={()=>alert("clicked")}>Send</Button>
                <Button variant="contained" color="primary" endIcon={<SendIcon/>} disableElevation>Send</Button>
                <IconButton aria-label='send' color='success' size="small"><SendIcon/></IconButton>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="error">error</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="success">success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction="row">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant="outlined" orientation="vertical" size='small' disableRipple
                aria-label='alignment button group'>
                    <Button onClick={()=>alert("Left Clicked")}>Left</Button>
                    <Button onClick={()=>alert("Center Clicked")}>Center</Button>
                    <Button onClick={()=>alert("Right Clicked")}>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange}
                size="small"
                color="success"
                orientation="vertical"
                exclusive>
                    <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label="italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

export default MuiButton;

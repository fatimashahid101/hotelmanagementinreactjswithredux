import logo from './logo.gif'
import { Stack } from "@mui/material";

export default function SmallSpinner({height}) {
    return (
        <Stack>
             <img src={logo} className="App-logo" alt="logo" height={`${height}vmin`} />
        </Stack>
    )
}

SmallSpinner.defaultProps = {
    height:'30'
}




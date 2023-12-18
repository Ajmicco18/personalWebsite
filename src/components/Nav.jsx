import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material/'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Nav() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "rgb(63, 63, 63)" }}>
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Anthony Micco
                        </Typography>
                        <Button size="large" color="inherit">Projects</Button>
                        <Button size="large" color="inherit">Resume</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}
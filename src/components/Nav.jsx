import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material/';


export default function Nav() {

    const handleResume = () => {
        window.open("../images/anthony-micco-resume.pdf")
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "rgb(63, 63, 63)" }}>
                    <Toolbar>
                        <Typography href="/Home"
                            variant="h4"
                            component="a"
                            sx={{ flexGrow: 1, color: "skyblue", textDecoration: "none" }}>
                            &lt;Anthony Micco/&gt;
                        </Typography>
                        <a href='/Projects'>
                            <Button sx={{ fontSize: "xl", color: "skyblue" }}>Projects</Button>
                        </a>
                        <Button onClick={handleResume} sx={{ fontSize: "xl", color: "skyblue" }}>Resume</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}
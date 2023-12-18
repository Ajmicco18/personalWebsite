import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material/'


export default function Nav() {

    const handleProjects = () => {

    };

    const handleResume = () => {
        window.open("../images/anthony-micco-resume.pdf")
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "rgb(63, 63, 63)" }}>
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "skyblue" }}>
                            &lt;Anthony Micco/&gt;
                        </Typography>
                        <Button onClick={handleProjects} sx={{ fontSize: "xl", color: "skyblue" }}>Projects</Button>
                        <Button onClick={handleResume} sx={{ fontSize: "xl", color: "skyblue" }}>Resume</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}
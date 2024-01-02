import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Card, CardContent, CardMedia, IconButton, Typography, Box } from "@mui/material";
import Typewriter from "./Typewriter";

export default function Header() {
    return (
        <Card sx={{ margin: "10vh 20vh 0 20vh", display: "flex", backgroundColor: "rgb(63, 63, 63)" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography color="white" component="div" variant="h1">
                        Hi, I'm <br></br> Anthony Micco
                    </Typography>
                    <Typewriter></Typewriter>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 5 }}>
                    <IconButton href="https://github.com/Ajmicco18" aria-label="GitHub">
                        <GitHub sx={{ height: 60, width: 60, color: "white", '&:hover': { color: "skyblue" } }} />
                    </IconButton>
                    <IconButton href='https://linkedin.com/in/anthony-micco' aria-label="LinkedIn">
                        <LinkedIn sx={{ height: 60, width: 60, color: "white", '&:hover': { color: "skyblue" } }} />
                    </IconButton>
                    <IconButton aria-label="email">
                        <Email sx={{ height: 60, width: 60, color: "white", '&:hover': { color: "skyblue" } }}></Email>
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ maxWidth: "40%", position: "sticky" }}
                image="../images/portrait.jpg"
                alt="Self-portait"
            />
        </Card>
    )
}
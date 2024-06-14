import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Card, CardContent, CardMedia, IconButton, Typography, Box, Container } from "@mui/material";
import Typewriter from "./Typewriter";

export default function Header() {
    return (
        <Box marginTop={10} marginBottom={2} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Container >
                <Box display={"flex"} justifyContent={"center"} maxWidth={"100%"}>
                    <Card sx={{ display: "flex", maxWidth: "100%", backgroundColor: "rgb(63, 63, 63)" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "2000px", padding: "50px" }}>
                            <CardContent sx={{ maxWidth: "100%", flex: "1 0 auto" }}>
                                <Typography color="white" component="div" variant="h1" sx={{ textAlign: { xs: "center", sm: "left" }, fontSize: { xs: "4rem", md: "70px" } }}>
                                    Hi, I'm <br></br> Anthony Micco
                                </Typography>
                                <Typewriter></Typewriter>
                            </CardContent>
                            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                                <IconButton href="https://github.com/Ajmicco18" aria-label="GitHub">
                                    <GitHub sx={{ height: 60, width: 60, color: "white", '&:hover': { color: "skyblue" } }} />
                                </IconButton>
                                <IconButton href='https://linkedin.com/in/anthony-micco' aria-label="LinkedIn">
                                    <LinkedIn sx={{ height: 60, width: 60, color: "white", '&:hover': { color: "skyblue" } }} />
                                </IconButton>
                                <IconButton href="mailto:anthonymicco2003@gmail.com" aria-label="email">
                                    <Email sx={{ height: 60, width: 60, color: "white", '&:hover': { color: "skyblue" } }}></Email>
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ maxWidth: "40%", position: "sticky", opacity: { xs: "0%", sm: "100%" } }}
                            image="../images/portrait.jpg"
                            alt="Self-portait"
                        />
                    </Card>
                </Box>
            </Container>
        </Box>
    )
}
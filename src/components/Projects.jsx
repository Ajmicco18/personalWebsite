import {
    Container,
    Stack,
    Typography,
    Box,
    IconButton,
    Grid
} from "@mui/material"
import { GitHub } from "@mui/icons-material"

export default function Projects() {
    return (
        <>
            <Box marginTop={10} marginBottom={10} sx={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Container sx={{ maxWidth: "2000px" }}>
                    <Typography variant="h3"
                        component="div"
                        color="white"
                        sx={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textDecorationColor: "skyblue",
                            textAlign: "center",
                            fontSize: { xs: "35px", sm: "3rem" }
                        }}>
                        Featured Projects <br></br><br></br>
                    </Typography>
                    <Box marginTop={1} marginBottom={1}>
                        <Container
                            sx={{
                                maxWidth: "1000px"
                            }}>
                            <Grid container spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                        <img src="../images/ffi.png" alt="Fantasy Football Project" style={{ maxWidth: "100%", height: "auto" }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box borderRadius="10px" sx={{
                                        backgroundColor: "red",
                                        padding: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }}>
                                        <Typography variant="h4" component="header" sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "34px" } }}>Fantasy Football Insights</Typography>
                                        <Typography variant="h5" component="header" sx={{ fontSize: { xs: "20px", md: "30px" } }}>Personal Project<br></br><br></br></Typography>
                                        <Typography variant="h6" component="p" sx={{ fontSize: { xs: "18px", md: "28px" } }}>
                                            Fantasy Football Insights is an idea based largely on existing fantasy football apps such as ESPN Fantasy Football,
                                            Sleeper, and Yahoo! Fantasy Football, among others, along with a passion for football.
                                            The idea is to improve upon ideas from these existing applications to create the best possible fantasy football assistance
                                            software as well as help users win their leagues.
                                        </Typography>
                                        <IconButton href="https://github.com/Fantasy-Football-Insights" aria-label="GitHub">
                                            <GitHub sx={{ height: 60, width: 60, color: "black", '&:hover': { color: "white" } }} />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Stack marginTop={10} spacing={6} direction={{ xs: "column", md: "row" }} sx={{ justifyContent: "center", alignItems: "center" }}>
                        <Box borderRadius="10px"
                            sx={{ backgroundColor: "gray", maxWidth: 300, height: "100%" }}>
                            <Typography variant="h4" component="header" sx={{ fontWeight: "bold", fontSize: { xs: "20px", md: "30px" } }}>
                                Portfolio Website
                            </Typography>
                            <Typography variant="h5" component="header" sx={{ fontSize: { xs: "15px", md: "20px" } }}>
                                A personal website designed and developed by myself using a React framework. <br></br><br></br>
                            </Typography>
                            <IconButton href="https://github.com/Ajmicco18/calculator" aria-label="GitHub">
                                <GitHub sx={{ height: 60, width: 60, color: "black", '&:hover': { color: "white" } }} />
                            </IconButton>
                        </Box>
                        <Box borderRadius="10px"
                            sx={{ backgroundColor: "gray", maxWidth: 300, height: "100%" }}>
                            <Typography variant="h4" component="header" sx={{ fontWeight: "bold", fontSize: { xs: "20px", md: "30px" } }}>
                                JavaScript Calculator
                            </Typography>
                            <Typography variant="h5" component="header" sx={{ fontSize: { xs: "15px", md: "20px" } }}>
                                A simple calculator that performs all arithmetic operations.<br></br><br></br>
                            </Typography>
                            <IconButton href="https://github.com/Ajmicco18/calculator" aria-label="GitHub">
                                <GitHub sx={{ height: 60, width: 60, color: "black", '&:hover': { color: "white" } }} />
                            </IconButton>
                        </Box>
                        <Box borderRadius="10px"
                            sx={{ backgroundColor: "gray", maxWidth: 300, height: "100%" }}>
                            <Typography variant="h4" component="header" sx={{ fontWeight: "bold", fontSize: { xs: "20px", md: "30px" } }}>
                                Practice Program Repository
                            </Typography>
                            <Typography variant="h5" component="header" sx={{ fontSize: { xs: "15px", md: "20px" } }}>
                                A collection of practice programs, including a Super Bowl Block Generator,
                                and a React Pokedex.
                            </Typography>
                            <IconButton href="https://github.com/Ajmicco18/Practice-Programs" aria-label="GitHub">
                                <GitHub sx={{ height: 60, width: 60, color: "black", '&:hover': { color: "white" } }} />
                            </IconButton>
                        </Box>
                    </Stack>
                </Container>
            </Box >
        </>
    )
}
import {
    Container,
    Stack,
    Card,
    CardMedia,
    Typography,
    Box,
    IconButton
} from "@mui/material"
import { GitHub } from "@mui/icons-material"
import Nav from "./Nav"

export default function Projects() {
    return (
        <>
            <Nav></Nav>
            <Typography variant="h2"
                component="div"
                textAlign="center"
                color="white"
                sx={{
                    textDecoration: "underline",
                    textDecorationColor: "skyblue",
                    margin: "15vh 10vh 0 15vh"
                }}>
                Featured Projects <br></br><br></br>
            </Typography>
            <Container maxWidth="lg" sx={{ spacing: "4", alignItems: "center", display: "flex", flexDirection: "row" }}>
                <Card sx={{ minWidth: 475, minHeight: 600, backgroundColor: "red" }}>
                    <CardMedia
                        sx={{ height: 600 }}
                        image="../images/ffi.png"
                        title="Fantasy Football Project" />
                </Card>
                <Box borderRadius="10px" sx={{
                    backgroundColor: "red",
                    alignContent: "right",
                    margin: "0 0 0 100px",
                    minWidth: 500
                }}>
                    <Typography variant="h4" component="header" sx={{ fontWeight: "bold" }}>Fantasy Football Insights</Typography>
                    <Typography variant="h5" component="header">Personal Project<br></br><br></br></Typography>
                    < Typography variant="h6" component="p" >
                        Fantasy Football Insights is an idea based largely on existing fantasy football apps such as ESPN Fantasy Football,
                        Sleeper, and Yahoo! Fantasy Football, among others, along with a passion for football.
                        The idea is to improve upon ideas from these existed applications to create the best possible fantasy football assistance
                        software as well as help users win their leagues.
                    </Typography>
                    <IconButton href="https://github.com/Fantasy-Football-Insights" aria-label="GitHub">
                        <GitHub sx={{ height: 60, width: 60, color: "black", '&:hover': { color: "white" } }} />
                    </IconButton>
                </Box>
            </Container >
            <Stack direction="row" spacing={20} margin="15vh 0 15vh 45vh">
                <Box borderRadius="10px"
                    sx={{ backgroundColor: "gray", maxWidth: 500 }}>
                    <Typography variant="h4" component="header" sx={{ fontWeight: "bold" }}>
                        JavaScript Calculator
                    </Typography>
                    <Typography variant="h5" component="header">
                        A simple calculator that performs all arithmetic operations.<br></br><br></br>
                    </Typography>
                    <IconButton href="https://github.com/Ajmicco18/calculator" aria-label="GitHub">
                        <GitHub sx={{ height: 60, width: 60, color: "black", '&:hover': { color: "white" } }} />
                    </IconButton>
                </Box>
                <Box borderRadius="10px"
                    sx={{ backgroundColor: "gray", maxWidth: 500 }}>
                    <Typography variant="h4" component="header" sx={{ fontWeight: "bold" }}>
                        Practice Program Repository
                    </Typography>
                    <Typography variant="h5" component="header">
                        A collection of practice programs, including a Super Bowl Block Generator,
                        and a React Pokedex.
                    </Typography>
                    <IconButton href="https://github.com/Ajmicco18/Practice-Programs" aria-label="GitHub">
                        <GitHub sx={{ height: 60, width: 60, color: "black", '&:hover': { color: "white" } }} />
                    </IconButton>
                </Box>
            </Stack>
        </>

    )
}
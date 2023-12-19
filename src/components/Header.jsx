import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Card, CardContent, CardMedia, IconButton, Typography, Box } from "@mui/material";

export default function Header() {
    return (
        <Card sx={{ display: "flex", backgroundColor: "rgb(63, 63, 63)" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography color="white" component="div" variant="h5">
                        I am Anthony Micco, and I am an aspiring software engineer pursuing a computer
                        science degree at Youngstown State University
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                    <IconButton href="https://github.com/Ajmicco18" aria-label="GitHub">
                        <GitHub sx={{ height: 38, width: 38, color: "white" }} />
                    </IconButton>
                    <IconButton href='https://linkedin.com/in/anthony-micco' aria-label="LinkedIn">
                        <LinkedIn sx={{ height: 38, width: 38, color: "white" }} />
                    </IconButton>
                    <IconButton aria-label="email">
                        <Email sx={{ height: 38, width: 38, color: "white" }}></Email>
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151, position: "sticky" }}
                image="../images/portrait.jpg"
                alt="Self-portait"
            />
        </Card>
    )
}
import React from 'react';
import {
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Box
} from "@mui/material";

export default function Skills() {
    return (
        <>
            <Box
                marginTop={10}
                marginBottom={10}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Container
                    sx={{
                        maxWidth: "1000px"
                    }}
                >
                    <Typography
                        variant="h3"
                        component="div"
                        color="white"
                        sx={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textDecorationColor: "skyblue",
                            textAlign: { xs: "center", sm: "center" },
                            fontSize: { xs: "35px", sm: "3rem" }
                        }}
                    >
                        Skills <br></br><br></br>
                    </Typography>
                    <Box marginTop={1} marginBottom={1}>
                        <Container
                            sx={{
                                maxWidth: "1000px"
                            }}
                        >
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={6} sm={6}>
                                    <List>
                                        {["Java", "Python", "CSS", "JavaScript", "React", "Git"].map(skill => (
                                            <ListItem key={skill} disablePadding>
                                                <ListItemText
                                                    primary={skill}
                                                    primaryTypographyProps={{
                                                        fontSize: { xs: "20px", sm: "30px" },
                                                        color: "white",
                                                        fontWeight: 'medium',
                                                        lineHeight: { xs: "20px", sm: "35px" },
                                                        mb: '2px',
                                                        textAlign: "center"
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <List>
                                        {["C++", "SQL", "HTML", "TypeScript", "R", "VS Code"].map(skill => (
                                            <ListItem key={skill} disablePadding>
                                                <ListItemText
                                                    primary={skill}
                                                    primaryTypographyProps={{
                                                        fontSize: { xs: "20px", sm: "30px" },
                                                        color: "white",
                                                        fontWeight: 'medium',
                                                        lineHeight: { xs: "20px", sm: "35px" },
                                                        mb: '2px',
                                                        textAlign: "center"
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

/*import React from 'react'
import {
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Box
} from "@mui/material"

export default function Skills() {
    return (
        <>
            <Box marginTop={4} marginBottom={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Container maxWidth={"fixed"} sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h3"
                        component="div"
                        color="white"
                        sx={{
                            textDecoration: "underline",
                            textDecorationColor: "skyblue",
                            textAlign: { xs: "center", sm: "right" },
                            fontSize: { xs: "35px", sm: "3rem" }
                        }}>
                        Skills <br></br><br></br>
                    </Typography>
                    <Box marginTop={4} marginBottom={4}>
                        <Container maxWidth="fixed">
                            <Grid container spacing={2} justifyContent={"center"}>
                                <Grid item xs={12} sm={6}>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Java"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "center"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Python"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "center"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="CSS"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "center"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="JavaScript"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "center"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="React"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "center"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Git"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "center"
                                                }} />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <List >
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="C++"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "right"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="SQL"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "right"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="HTML"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "right"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="TypeScript"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "right"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="R"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "right"
                                                }} />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="VS Code"
                                                primaryTypographyProps={{
                                                    fontSize: 30,
                                                    color: "white",
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                    align: "right"
                                                }} />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </>
    )
}*/


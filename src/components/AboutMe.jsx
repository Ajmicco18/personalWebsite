import {
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Box
} from "@mui/material"

export default function AboutMe() {

    return (
        <Box marginTop={4} marginBottom={4}>
            <Container maxWidth="fixed" >
                <Typography variant="h3" component="div" color="white" sx={{ textDecoration: "underline", textDecorationColor: "skyblue", textAlign: "center" }}>
                    About Me
                </Typography>
                <Typography variant="h6" component="p" color="white">
                    <br></br>Hello! I am Anthony Micco. I was inspired to pursue a career in the
                    computer science field after taking a computer science course during
                    my sophomore year of high school. Since that time, I have devloped a passion
                    for coding and devloping software and look forward to continuing to learn
                    and grow as a devloper.<br></br><br></br>
                    I am currently going into my third year of school at Youngstown State University.
                    I am working towards earning Bachelor of Science degree in computer science
                    with an expected graduation of May 2025. I'm aspiring to forge a career
                    in the broad field of computer science, I am eager to leverage my proficiency in
                    programming languages and algorithm design to contribute to modern technological
                    advancements. With a commitment to continuous learning and problem-solving prowess,
                    I seek to excel as a versatile software engineer and make a meaningful impact in the industry.<br></br><br></br>
                    I currently work as a middle school football coach in the Boardman Local School District in
                    Boardman, Ohio.
                </Typography>
                <Typography variant="h3"
                    component="div"
                    color="white"
                    sx={{ textDecoration: "underline", textDecorationColor: "skyblue", textAlign: "center" }}>
                    Skills <br></br><br></br>
                </Typography>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
            </Container>
        </Box>
    )
}
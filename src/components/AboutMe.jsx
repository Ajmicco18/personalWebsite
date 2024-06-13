import {
    Container,
    Typography,
    Box
} from "@mui/material"

export default function AboutMe() {

    return (
        <Box marginTop={10} marginBottom={10} sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }} >
            <Container sx={{ maxWidth: "2000px" }} >
                <Typography
                    variant="h3"
                    component="div"
                    color="white"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: { xs: "35px", sm: "3rem" },
                        textDecoration: "underline",
                        textDecorationColor: "skyblue"
                    }}>
                    About Me
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    color="white"
                    sx={{
                        textAlign: { xs: "center", sm: "left" },
                        fontSize: { xs: "20px", sm: "30px" }
                    }}>
                    <br></br>Hello! I am Anthony Micco. I was inspired to pursue a career in the
                    computer science field after taking a computer science course during
                    my sophomore year of high school. Since that time, I have devloped a passion
                    for coding and devloping software and look forward to continuing to learn
                    and grow as a devloper.<br></br><br></br>
                    I am currently going into my fourth year of school at Youngstown State University.
                    I am working towards earning Bachelor of Science degree in computer science
                    with an expected graduation of December 2025. I'm aspiring to forge a career
                    in the broad field of computer science, I am eager to leverage my proficiency in
                    programming languages and algorithm design to contribute to modern technological
                    advancements. With a commitment to continuous learning and problem-solving prowess,
                    I seek to excel as a versatile software engineer and make a meaningful impact in the industry.<br></br><br></br>
                    I currently work as a software developer intern at Tailored Alloys in Youngstown, Ohio, as well as a student
                    web developer at Youngstown State University.
                </Typography>
            </Container>
        </Box>
    )
}
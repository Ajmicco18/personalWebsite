import {
    Container,
    Grid,
    Typography
} from "@mui/material"

export default function Experience() {
    const jobs = [
        {
            id: 1,
            jobTitle: "Middle School Football Coach",
            Company: "Boardman Local School District",
            duration: "June 2022-October 2023",
            text: ["As a middle school football coach, I was responsible",
                "for coaching the offensive lineman. I would demonstrate and explain",
                "basic techniques and ideas to the players to ensure they had a better",
                "understanding of football, specifically the offensive line. In addition,",
                "I would contribute to the gameplan preparation to ensure the athletes were",
                "prepared to play their game."]
        },

        {
            id: 2,
            jobTitle: "Computer Technology Intern",
            Company: "Boardman Local School District",
            duration: "January 2023-August 2023",
            text: ["In my role as a Computer Technology Intern for the Boardman Local School District,",
                "I was largely responsible for responding to help-desk tickets from teachers and",
                "staff throughout the district. In addition, I was in charge of maintaining the",
                "inventory of the district's devices as well as repairing damaged Chromebooks.",
                "Furthermore, my role included ensuring that each classroom in the district had updated",
                "and operating devices."]
        },

        {
            id: 3,
            jobTitle: "Landscaper",
            Company: "Clear Cut Stump Grinding",
            duration: "March 2019-August 2022",
            text: ["In my role as a landscaper for Clear Cut Stump Grinding,",
                "I was largely responsible for clearing away excess wood",
                "chips from the work area to ensure the entire stump was clear.",
                "In addition, I would haul wheelbarrows of topsoil and landscape",
                "rock to the work site. Furthermore, I laid landscape fabric and",
                "spread grass seed in contribution to the project we were working on."]

        }
    ]

    return (

        <Container maxWidth="xl" sx={{ margin: "25vh 10vh 0 30vh" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Typography variant="h3" component="div" color="white" sx={{ textDecoration: "underline", textDecorationColor: "skyblue" }}>
                        Work Experience
                    </Typography>

                </Grid>

            </Grid>

        </Container>

    )
}
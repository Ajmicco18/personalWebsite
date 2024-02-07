import {
    Container,
    Grid,
    Typography,
    styled
} from "@mui/material"
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useState } from "react";


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />

))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: "none",
    },
    "&:hover": {
        color: "skyblue"
    },
    backgroundColor: "rgb(63, 63, 63)",
    color: "white",
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "skyblue" }} />}
        {...props} />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    color: "skyblue"
}));

export default function Experience() {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <Container maxWidth="xl" sx={{ margin: "25vh 10vh 25vh 30vh" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Typography variant="h3" component="div" color="white" sx={{ textDecoration: "underline", textDecorationColor: "skyblue" }}>
                        Work Experience <br></br><br></br>
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8} margin="0 0 0 25vh">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography variant="h4" component="header">Tailored Alloys</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h4" component="header">
                                Software Developer
                            </Typography>
                            <Typography variant="h6" component="div">
                                <br></br> As a software developer at Tailored Alloys, I utilize my problem-solving skills
                                and knowledge of the python programming language to contribute to the development of Laser
                                Powder Bed Fusion machine software.
                            </Typography>
                            <Typography variant="h6" component="header">
                                <br></br>January 2024-Present
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography variant="h4" component="header">Youngstown State University</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h4" component="header">
                                Software Developer
                            </Typography>
                            <Typography variant="h6" component="div">
                                <br></br> As a student software developer at Youngstown State University,
                                I utilize my skills in HTML5, JavaScript and CSS to respond to revision tickets
                                and provide the appropriate changes to the Youngstown State University website.
                            </Typography>
                            <Typography variant="h6" component="header">
                                <br></br>January 2024-Present
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography variant="h4" component="header">Boardman Local School District</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h4" component="header">
                                Middle School Football Coach
                            </Typography>
                            <Typography variant="h6" component="div">
                                <br></br>As a middle school football coach, I was responsible
                                for coaching the offensive lineman. I would demonstrate and explain
                                basic techniques and ideas to the players to ensure they had a better
                                understanding of football, specifically the offensive line. In addition,
                                I would contribute to the gameplan preparation to ensure the athletes were
                                prepared to play their game.
                            </Typography>
                            <Typography variant="h6" component="header">
                                <br></br>June 2022-October 2023
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography variant="h4" component="header">Boardman Local School District</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h4" component="header">
                                Computer Technology Intern
                            </Typography>
                            <Typography variant="h6" component="div">
                                <br></br>In my role as a Computer Technology Intern for the Boardman Local School District,
                                I was largely responsible for responding to help-desk tickets from teachers and
                                staff throughout the district. In addition, I was in charge of maintaining the
                                inventory of the district's devices as well as repairing damaged Chromebooks.
                                Furthermore, my role included ensuring that each classroom in the district had updated
                                and operating devices.
                            </Typography>
                            <Typography variant="h6" component="header">
                                <br></br>January 2023-August 2023
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            <Typography variant="h4" component="header">Clear Cut Stump Grinding</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h4" component="header">
                                Landscaper
                            </Typography>
                            <Typography variant="h6" component="div">
                                <br></br>In my role as a landscaper for Clear Cut Stump Grinding,
                                I was largely responsible for clearing away excess wood
                                chips from the work area to ensure the entire stump was clear.
                                In addition, I would haul wheelbarrows of topsoil and landscape
                                rock to the work site. Furthermore, I laid landscape fabric and
                                spread grass seed in contribution to the project we were working on.
                            </Typography>
                            <Typography variant="h6" component="header">
                                <br></br>March 2019-August 2022
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>

    )
}
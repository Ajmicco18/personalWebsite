import { AppBar, Box, Toolbar, Typography, Button, useScrollTrigger } from '@mui/material/';
import React from 'react';
import PropTypes from "prop-types"

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Nav(props) {



    const handleResume = () => {
        window.open("../images/anthony-micco-resume.pdf")
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {/*<ElevationScroll {...props}>*/}
                <AppBar position="static" sx={{ backgroundColor: "rgb(63, 63, 63)" }}>
                    <Toolbar>
                        <Typography href="/Home"
                            variant="h3"
                            component="a"
                            sx={{ flexGrow: 1, color: "skyblue", textDecoration: "none" }}>
                            &lt;Anthony Micco/&gt;
                        </Typography>
                        <a href='/Projects'>
                            <Button sx={{ fontSize: "xl", color: "skyblue" }}>Projects</Button>
                        </a>
                        <Button onClick={handleResume} sx={{ fontSize: "xl", color: "skyblue" }}>Resume</Button>
                    </Toolbar>
                </AppBar>
                {/*</ElevationScroll>*/}
            </Box>
        </>

    )
}
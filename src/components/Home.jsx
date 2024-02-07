import Header from './Header.jsx'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Nav from './Nav.jsx'

const Wrapper = styled(Container)(({ theme }) => ({
    maxWidth: "xl",
    margin: "25vh 10vh 25vh 30vh",
    [theme.breakpoints.down("lg")]: {
        margin: "25vh 20vh 25vh 20vh",
        fontSize: "10px"

    },
    [theme.breakpoints.down("md")]: {
        margin: "25vh 25vh 25vh 0vh",

    },
    [theme.breakpoints.down("sm")]: {
        margin: "25vh 25vh 25vh 0vh",

    }
}))

export default function Home() {
    return (
        <>
            <Wrapper>
                <Nav></Nav>
                <Header></Header>
                <AboutMe></AboutMe>
                <Experience></Experience>
            </Wrapper>

        </>
    )
}
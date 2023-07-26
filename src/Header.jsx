import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
    return (
        <section className="header">
            <h1 className="name">Anthony Micco</h1>
            <p className="about">I'm an aspiring software engineer pursuing a computer<br></br>science degree at Youngstown State University </p>
            <img src="../images/portrait.jpg" alt="self portrait" />
            <ul className="socials">
                <li className="socialLink">
                    <a className="github" href='https://github.com/Ajmicco18' target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className="socialLink">
                    <a className="linkedin" href='https://linkedin.com/in/anthony-micco' target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className="socialLink">
                    <a className="insta" href='https://www.instagram.com/anthony.micco/' target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className="socialLink">
                    <a href='../images/anthony_micco_resume.pdf' target="_blank">
                        <button className="resume">Resume</button>
                    </a>

                </li>
            </ul>
        </section>

    )
}
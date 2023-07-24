import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
    return (
        <section>
            <h1 className="name">Anthony Micco</h1>
            <p className="about">I'm an aspiring software engineer pursuing a computer<br></br>science degree at Youngstown State University </p>
            <img src="../portrait.jpg" alt="self portrait" />
            <a className='github' href='https://github.com/Ajmicco18'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className='linkedin' href='https://linkedin.com/in/anthony-micco'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className='insta' href='https://www.instagram.com/anthony.micco/'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>

        </section>

    )
}
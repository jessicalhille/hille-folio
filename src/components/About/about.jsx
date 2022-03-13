import "./about.css";
import Me from "../../images/me.JPG";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={Me} alt="Jessica Hille smiling" className="about-image" />
                </div>
            </div>

            <div className="about-right">
                <h1 className="about-title">about me</h1>
                <p className="about-subtitle">
                I have spent most of my life immersed in the world of fine arts, and I am absolutely thrilled 
                to bring my passion and unique perspective into the world of web development and design. 
                I am a current student in the Southern Methodist University’s Coding Bootcamp and I have 
                a Bachelors in Music Education from the University of Oklahoma.
                </p>
                <p className="about-description">
                I cannot wait to make the leap and continue refining my skills. If you’re interested in working together, you can contact me below!
                </p>
            </div>
        </div>
    )
}

export default About;
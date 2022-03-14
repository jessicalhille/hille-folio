import "./intro.css";
import Stars from "../../images/6885578.png";

const Intro = () => {
    return (
        <div className="intro" style={{ backgroundImage: `url(${Stars})`}}>
            <div className="intro-text-wrapper">
                <h2 className="intro-text">hi, my name is</h2>
                <h1 className="intro-name">Jessica Hille</h1>
                <h2 className="intro-text">and I'm a</h2>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-item">Full-Stack Web Developer.</div>
                        <div className="intro-item">Web Designer.</div>
                        <div className="intro-item">Content Creator.</div>
                        <div className="intro-item">Musician.</div>
                    </div>
                </div>
                <h2 className="intro-text-small">I believe it takes both halves of the brain to create something truly spectacular.</h2>
            </div>
        </div>
    )
}

export default Intro;
import { useContext, useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import GitHub from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";
import Email from "../../images/email.png";

const Contact = () => {
    const formRef = useRef();

    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_gzst5yf', 
            'template_lyq6kmb', 
            formRef.current, 
            'UGdkkVMY1eazYTflB'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">contact me</h1>
                    <div className="contact-info">
                        <p className="contact-description">
                            <b>What's your story?</b> I would love to hear it! Please reach out by using the form below.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: "#333"}} type="text" placeholder="your name" name="user_name" />
                            <input style={{backgroundColor: "#333"}} type="text" placeholder="subject" name="user_subject" />
                            <input style={{backgroundColor: "#333"}} type="text" placeholder="your email" name="user_email" />
                            <textarea style={{backgroundColor: "#333"}} rows="5" placeholder="message" name="message"></textarea>
                            <button>get in touch</button>
                            {done && " -- Thank you! --"}
                        </form>
                        <div className="contact-buttons">
                            <div className="contact-info-item">
                                <a href="mailto:jessicalhille@gmail.com" target="_blank" rel="noreferrer">
                                    <img src={Email} alt ="" className="contact-photo"/>
                                </a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://github.com/jessicalhille" target="_blank" rel="noreferrer">
                                    <img src={GitHub} alt ="" className="contact-photo"/>
                                </a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://www.linkedin.com/in/jessica-hille-1086a0221/" target="_blank" rel="noreferrer">
                                    <img src={LinkedIn} alt="" className="contact-photo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
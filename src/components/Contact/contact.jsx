import { useContext, useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

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
                        <div className="contact-info-item">
                            972-658-0485
                        </div>
                        <div className="contact-info-item">
                            jessicalhille@gmail.com
                        </div>
                        <div className="contact-info-item">
                            Address
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>What's your story?</b> Please reach out.
                        I'd love to work together!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
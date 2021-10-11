import React from 'react'
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>
                   Choose the appropriate category from the menu and your request will be directed to the right person.
                </p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>76 rue des marabouts sfax medina <br/> 3001 </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>boudayakhaled@gmail.com </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+216 55427146 </p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"></textarea>
                            <span>Tpe your message ...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="" value="Send"/>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

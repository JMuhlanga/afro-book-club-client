import React from "react";
import '../Styles/About.css';


function About(){
    return(
        <div id="about-page" className = "container">
            <div className="about-container">   
                <h2>What is Afro-Book-Club all About?</h2>
                <div className = "text-Container">
                    <p>
                        We have many people authors and people who want to join into the craft of writing books but in
                        order to gain the recognition to sharing what their mind hold , they would have to move heaven and
                        earth in order to do so. At the same time we miss gaining on what others may have to say about
                        particular issues while also missing out on the entertainment value that may arise from that.
                        As Mentioned in the introduction, those Authors had to move heaven and earth in an industry that
                        society does not give much interest in . But there are also those purists that want to be involved in
                        that community and want their work to be seen. While doing so they aim to be corrected in the
                        process of their literal journey.
                        This is where Afro-Book_club KE comes in whereby we seek to offer a platform for authors to post
                        their work and for occasional readers or even other authors can read the books available via the link
                        provided by the author but also get a review of the same books. The platform could have a section
                        where book reading events can be marketed .
                    </p>
                </div>

                <h3>When was it founded?</h3>
                <div className = "text-Container-2">
                    <p>
                        It was borne out of the interest of making literatures available to all, especially those up and coming authors who want their literature works showcased
                    </p>
                </div>

                <h3>How to Contact us</h3>
                <div className = "text-container-2">
                    <p><b>Email us at :</b> afrobook@gmail.com</p>
                    <p><b>Call us at:</b> 06161109</p>
                    <p>Or</p>
                    <p><b>Visit us: </b> Basilica Towers, Nairobi CBD </p>
                </div>
                
            </div>
        </div>
        
    );
}

export default About;
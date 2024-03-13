// JavaScript source code

import React from "react";

const About = () => {
    return (
        <div>

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <p
                style={{
                fontSize: 50,
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#343a40",
                margin: "50px 0px 0px 0px"   
                }}
            >Nishit Nagpal
            </p>
            
            <p
                style={{
                    margin: "0px 0px 50px 0px"
                }}
            >Poststrasse 46c, 44809 Bochum, Germany | (+49)17637365466 |
                <a href="mailto:nshtngpl@gmail.com" rel='noopener noreferrer' target='_blank' style={{ textDecoration: "none", color: "" }}> nshtngpl@gmail.com </a>
            </p>
            
            <pre>
                <p
                    style={{
                        fontFamily: "sans-serif",
                        fontSize: 20
                        
                    }}
                    >Entry-level UI/UX designer and Frontend Developer{"\n"}HTML &amp; CSS, WordPress, and React.js{"\n"}C++, Java, and Python
                </p>
            </pre>

            <p
                style={{
                    fontSize: "1.1 rem",
                    fontWeight: 400,
                    marginTop: "40px",
                    marginBottom: "40px",
                    marginRight: "120px",
                    textAlign: "justify"
                }}
                >An enthusiastic and detail-oriented engineer aiming to maximize technical proficiency and
                creativity to develop engaging user experiences and advance in professional career.
                Seeking to utilize my skills and expertise to provide value to the employer
                and contribute to successful projects both today and in the future. Aiming to take on
                new challenges and utilize my coding and debugging skills for developing new features
                and enhance the overall user experience.
            </p>

            <a
                href="cv.pdf" rel='noopener noreferrer' target='_blank'>
                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "1px solid ",
                        padding: "0.375rem 0.75rem",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        borderRadius: "0.25rem",
                        marginBottom: "20px"
                    }}
                > <i class="fa fa-download"></i> Download My Resume
                </button>
            </a>
            <p>
          
                <a class="social-icons" href="http://www.linkedin.com/in/nishitnagpal">
                    <i class= "fa fa-linkedin"></i>
                </a>
                <a class="social-icons" href="https://github.com/nishitnagpal/ideas">
                    <i class="fa fa-github"></i>
                </a>
            </p>
            <a class="button_bottom" href="./Education">
                <i class="fa fa-arrow-down" > <span class="tooltiptext">Education</span></i>
            </a>
        </div>
    );
};

export default About;
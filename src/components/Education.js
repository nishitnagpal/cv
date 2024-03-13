// JavaScript source code
import React from "react";

const Education = () => {
    return (
        <div>
            <p
                style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#343a40"
                }}
                >Education
            </p>
                
            <p
                style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#343a40"
                }}
            > Master of Science in Mechatronics, <br / > University of Siegen, Germany <br />
                <p
                    style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#343a40"
                    }}
                >Oct 2018 - December 2022
                </p>
            </p>
            <p
                style={{
                    fontSize: "1.1 rem",
                    fontWeight: 400,
                    
                    marginRight: "120px",
                    textAlign: "justify"
                }}
                >Thesis: A study on the Learning Ability and Adaptivity of the Digital Consulting Assistant and Content Management System of LOKAL-Digital Project.
                <br></br>
                {/* <br></br>
                Thesis Presentation Video: <a href="Thesis_Presentation.mp4" rel='noopener noreferrer' target='_blank'
                    style={{
                        textDecoration: "none"
                    }}
                > LOKAL-digital - Smart knowledge management for housing, care, and health </a>
                <br></br>*/}
                <br></br>
                A knowledge base aimed at assisting elderly, disabled and vulnerable group was built using WordPress as Content Management System for the city of Netphen in collaboration with the University of Siegen. Resources in form of advertisements and listings throught this knowledge bank were made available in the fields of housing facility providers, caregivers, nursing homes, and other healthcare facilities.
                <br></br>
                Thesis investigates ways in which plugins can be used to train the website to learn and adapt to user interactions. A plugin for managing taxonomies was installed that can auto-suggest terms after indexing content, making it easier to categorize posts on basis of different categories and tags. A chatbot integrated with the Natural Language Understanding platform was added to the website to interact with users, understand their intent, and guide them to relevant content on the website. 
                
            </p>
            <p
                style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#343a40"
                }}
            > Bachelor of Technology in Mechanical Engineering, <br />Institute of Engineering &amp; Management, Kolkata, India <br />
                <p
                    style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#343a40"
                    }}
                >2013-2017
                </p>
            </p>    
            <p
                style={{
                    fontSize: "1.1 rem",
                    fontWeight: 400,

                    marginRight: "120px",
                    textAlign: "justify"
                }}
                >Project: Performance Measurement Of Green Supply Chains In The Indian
                Manufacturing Sector Using The Analytical Network Process
                <br></br>
                <br></br>
                Developed a performance measurement system for a green supply
                chain using a green balanced scorecard and Analytical Network Process (ANP) with companies in Indian manufacturing sector as
                case study. This study modified the balanced scorecard by adding a fifth
                environmental perspective under which green activities were listed as performance metrics. The critical success factors
                of the green supply chain management (GSCM) were studied to understand the performance metrics of the balanced scorecard perspectives and develop the ANP network model. The model was used to find how green the companies in case study were considering the different sustainable constructs. Further scope inlcuded expanding model framework
                to provide the key constructs or area upon which the manufacturing sector in India needs to work to make the system green.
            </p>
            <br></br>
            <br></br>
            <a class="button_bottom" href="./Experience">
                <i class="fa fa-arrow-down" > <span class="tooltiptext">Experience</span></i>
            </a>
        </div>
    );
};

export default Education;

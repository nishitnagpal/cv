// JavaScript source code
import React from "react";

const Skills = () => {
    return (
        <div>
            <p
                style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#343a40"
                }}
            >Skills
            </p>
           
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
            />

            <p
                style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#343a40"
                }}
            >Programming Languages and Tools
            </p>
                <ul class="dev-icons">
                    <li class="inline_item">
                        <i className="devicon-python-plain-wordmark" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-wordpress-plain-wordmark" />
                    </li>   
                    <li class="inline_item">
                        <i className="devicon-java-plain-wordmark" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-c-plain-wordmark" />
                    </li>    
                    <li class="inline_item">
                        <i className="devicon-react-plain-wordmark" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-csharp-plain-wordmark" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-css3-plain-wordmark" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-html5-plain-wordmark" />
                    </li>
                    <li class="inline_item">   
                        <i className="devicon-javascript-plain" />
                    </li>
                    <li class="inline_item">
                         <i className="devicon-git-plain-wordmark" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-mysql-plain-wordmark" />
                    </li>
                    <li class="inline_item">        
                        <i className="devicon-php-plain" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-matlab-plain" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-visualstudio-plain" />
                    </li>
                    <li class="inline_item">
                        <i className="devicon-anaconda-plain-wordmark" />
                    </li>
                </ul>
            <p
                style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#343a40"
                }}
                >competencies
            </p>
            <div 
                 class="content_columns">
                 <pre>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            marginTop: "-16px",
                            fontSize: "1rem",
                            fontWeight: 400,
                            lineHeight: "1.5rem"
                         }}
                    >Responsive Design{"\n"}UI/UX Design{"\n"}UI Framework{"\n"}Debugging and Testing{"\n"}Microsoft Office{"\n"}Team Collaboration{"\n"}Adaptability{"\n"}Continuous Learning
                     </p>
                </pre>
            </div>
            <p
                style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#343a40"
                }}
            >languages
            </p>
            <pre>
                <p
                    style={{
                        fontFamily: "sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 400
                    }}
                    >English{"\n"}
                    <p
                        style={{
                            fontSize: "0.8rem"
                        }}
                    >Fluent in Speaking, Reading and Writing{"\n"}
                    </p>
                    German{"\n"}
                    <p
                        style={{
                            fontSize: "0.8rem"
                        }}
                    >Intermediate Proficiency with B1 level of expertise{"\n"}
                    </p>
                </p>
            </pre>
            <a class="button_bottom" href="./About">
                <i class="fa fa-arrow-up"> <span class="tooltiptext">About</span></i>
            </a>
        </div>
    );
};

export default Skills;
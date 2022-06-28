import React from "react";
import coverImage from "../../assets/cover/portfolio-picture.jpg"
function About (){
    return (
        <section className="my-5">
            
            <img src ={coverImage} className = "my-2" style={{width:"50%"}} alt = "cover"/>
            <h1> About Me</h1>
        <p>
        Hi, I am Christopher Chubb, a new software devloper. I know a little about each step in the process
        to create a complete website. I have front end experience using languages like html, css, javascript, handlebars ,and react.js.
        I have backend experience creating api calls and setting up databases using node.js,express.js,mongoose,sql,nosql,and  sequilized. I also have experience using npm packages.
        With everthing that I have learned so far I feel confident I could at least create a website but I also feel I could use what is already learned to create much more.
        I an egear to expand my knowledge and gain new experience. The way I learned to code in such a short time i learned that with each project you will become better. 
        </p>
        </section>
    );}
    export default About;
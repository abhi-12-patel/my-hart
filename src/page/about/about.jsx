import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <><section className="about" id="about">

    <h1 className="heading"> <span>about</span> me </h1>

    <div className="row">

        <div className="box-container">
            <div className="box">
                <h3>2.5+</h3>
                <p>years of experience</p>
            </div>
            <div className="box">
                <h3>8+</h3>
                <p>completed projects</p>
            </div>
        </div>

        <div className="content">
            <h3>my name is <span>Jashoda Hothi</span></h3>
            <p>Experienced React.js Developer skilled in building responsive UI components with React and Redux. Committed to optimizing web applications for performance and scalability. Seeking to contribute to a dynamic team and deliver high-quality software solutions.</p>
            <Link to="/contact" className="btn">contact me</Link>
        </div>

    </div>

    <div className="row">

        

        <div className="progress">
            <h3> HTML <span>90%</span> </h3>
            <div className="bar bar-2-1"><span></span></div>
            <h3> CSS <span>80%</span> </h3>
            <div className="bar bar-2-2"><span></span></div>
            <h3> javascript <span>65%</span> </h3>
            <div className="bar bar-2-1"><span></span></div>
            <h3> React js <span>90%</span> </h3>
            <div className="bar bar-2-2"><span></span></div>
            <h3> Next jS <span>75%</span> </h3>
            <div className="bar bar-2-3"><span></span></div>
        </div>

    </div>

</section></>
  )
}

export default About
import React from "react";
import Common from "./Common";
import pageImg from "./img/about.png"
const About = () => {
    return <>
        <Common name="About"
            logo={pageImg}
            visite="/contact"
            btnName="Contact Now"
        />
    </>
}
export default About;
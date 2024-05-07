import { useState } from "react"

const About = ({name,nameChange}) => {
    // const {name}=props;
    return (
        <>
            <h2>Hello {name} </h2>
            <button onClick={nameChange}>Change Name</button>
        </>
    )
}
export default About
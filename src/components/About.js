import React from 'react'

const About = () => {
  return (
    <div style={{ display:"flex", flexDirection:"column", background:" #252551", borderRadius:"20px", margin:"20px 25px", padding:"15px 15px"}}>
      <div style={{display:"flex", justifyContent:"center"}}>
        <h1 style={{cursor:"pointer", fontFamily:"serif"}}>ABOUT</h1>
      </div>
      <p style={{cursor:"pointer", fontFamily:"serif", justifyContent:"center", display:"flex"}}>PRN or (Pink Rhino News Network) is a just a project created by Shubham Dubey and the sole reason for the creation is to learn and understand the TechStack involved.
      <br />This is a React.js project with CSS Styling and API used to render news data is from NewaData.io <br /> The source code for this project can be found on the github https://github.com/Dubey-Shubham </p>
    </div>
  )
}

export default About
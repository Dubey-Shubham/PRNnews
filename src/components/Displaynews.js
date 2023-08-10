import React from 'react'
import { useLocation } from 'react-router-dom'

const Displaynews = () => {
  const { state } = useLocation();
  return (
    <>
      <div style={{ display:"flex", flexDirection:"column", background:" #252551", borderRadius:"20px", margin:"20px 25px", padding:"15px 15px"}}>
        <h1 style={{cursor:"pointer", fontFamily:"serif"}}>{state.title}</h1>
        <p style={{cursor:"pointer", fontFamily:"serif"}}>{state.content}</p>
      </div>
    </>

  )
}

export default Displaynews
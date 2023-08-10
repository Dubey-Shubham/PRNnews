import React from 'react'

const SmallCard = (props) => {
  const { title, description, source, author, image, date, category, handleClick } = props
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0px", margin: "15px", backgroundColor: " #252551", border: "2px solid #252551", overflow: "auto", borderRadius: "20px" }} >
      <div style={{ alignItems: "center" }}>
        <img style={{ objectFit: "fill", width: "340px", height: "250px", verticalAlign: "middle", boxSizing: "border-box", cursor: "pointer", lineHeight: "inherit", }} src={image} alt="NEWS" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", cursor: "pointer", lineHeight: "inherit" }}>
        <div style={{ cursor: "pointer", boxSizing: "border-box", lineHeight: "inherit" }}>
          <h3 style={{ fontFamily: "serif", width: "20rem", cursor: "pointer", textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", boxSizing: "border-box", margin: "5px 10px", lineHeight: "26px" }}>{title}</h3>
          <p style={{ fontFamily: "serif", width: "20rem", cursor: "pointer", textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", boxSizing: "border-box", margin: "5px 10px" }}>{description}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: "10px 0px", gap: "30px" }}>
          <div style={{ textAlign: "left", margin: "0px 2px" }}>
            <h4 style={{ fontFamily: "serif", fontSize: "15px", margin: "2px 8px" }}>Date</h4>
            <p style={{ fontFamily: "serif", fontSize: "13px", margin: "2px 8px" }}>{date}</p>
          </div>
          <div style={{ textAlign: "left", margin: "0px 2px" }}>
            <h4 style={{ fontFamily: "serif", fontSize: "15px", margin: "2px 8px" }}>Author</h4>
            <p style={{ fontFamily: "serif", fontSize: "13px", margin: "2px 8px" }}>{author}</p>
          </div>
        </div>
        <div >
          <p style={{ fontFamily: "serif", fontSize: "15px", margin: "5px 9px" }}>By:- {category}</p>
          <div style={{ display: "flex", gap: "125px" }}>
            <button onClick={handleClick} style={{ margin: "5px 9px", borderRadius: "20px", backgroundColor: "red", textDecoration: "none", fontWeight: "bold", color: "white" }}>Read More</button>
            <button style={{ margin: "5px 9px", borderRadius: "20px", backgroundColor: "red" }}> <a href={source} style={{ margin: "5px 2px", borderRadius: "20px", textDecoration: "none", fontWeight: "bold", color: "white" }}>Visit Source</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
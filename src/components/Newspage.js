import React, { useEffect, useState } from 'react'
import SmallCard from './SmallCard'
import { useNavigate } from 'react-router-dom'

const Newspage = (props) => {

  const key = process.env.REACT_APP_NEWSAPP_API

  const navigate = useNavigate();

  const handleNavigate = (entrystate) => {
    navigate(`/displaynews/${entrystate.title}`, { state: entrystate })
  }

  const [articles, setArticles] = useState([])

  const fetchdata = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=${key}&q&language=en&category=${props.category}`
    let data = await fetch(url);
    let alldata = await data.json();
    setArticles(alldata.results)
  }

  useEffect(() => {
    fetchdata();
  }, [props.category])

  return (
    <>
      
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "0.6em", }}>
          {articles?.map((entry) => {
            return <div key={entry.title}>
              <SmallCard title={entry.title} content={entry.content} description={entry.description ? entry.description : "No Description"} source={entry.link} author={entry.creator ? entry.creator.toString().slice(0, 25).concat("...") : "Not Found"} image={entry.image_url ? entry.image_url : "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE="} date={entry.pubDate.slice(0, 22)} category={entry.category} handleClick={() => handleNavigate(entry)} />
            </div>
          })}
        </div>
      
    </>
  )
}

export default Newspage
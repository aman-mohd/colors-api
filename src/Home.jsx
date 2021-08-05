import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'


const Home = () => {

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/unknown");
        const json = response.data;
        setFetchedData(json.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchApi()
  }, []);


  return (
    <div className="cards_container">
      {fetchedData.map((val) => {
        return (
          <div className="all_cards" key={val.id} >
            <Link className="each_card" style={{ backgroundColor: `${val.color}` }} to={`/resources/${val.id}`}>
              <h3>{val.name}</h3>
              <h2>{val.year}</h2>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home

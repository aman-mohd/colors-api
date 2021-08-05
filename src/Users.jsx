import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'

const Users = () => {

  const { id } = useParams();
  const url = `https://reqres.in/api/unknown/${id}`
  const [eachData, setEachData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        const json = response.data;
        setEachData(json.data)
      } catch (error) { console.error(error); }
    }
    fetchApi()
  }, [url]);

  return (

    <div className="big_color_card" style={{ backgroundColor: `${eachData.color}` }}>
      <h1>{eachData.name}</h1>
      <h1>{eachData.year}</h1>
      <div className="pantone">
        <small>pantone value</small>
        <p>{eachData.pantone_value}</p>

      </div>


    </div>
  )
}

export default Users

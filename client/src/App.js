// import React, { Component, useState } from 'react'
import { Users } from './user'
import React, { useEffect, useState } from 'react'
import Table from './Component/Table';
import "./app.css";
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setdata] = useState([]);
  console.log(query);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setdata(res.data);
    };
    if (query.length === 0 || query.length > 2)
      fetchData();
  }, [query])
  const search = (data) => {
    return data.filter(item => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query));
  }
  return (
    <div className='app'>
      <input type="text" placeholder='Search ...' className='search' onChange={e => setQuery(e.target.value.toLowerCase())} />

      <Table data={data} />

    </div>
  )
}

export default App


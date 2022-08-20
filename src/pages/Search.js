

import React from 'react'
import StockSection from '../components/StockSection'
import { useState, useEffect } from 'react'

const Search = () => {
  const [stockData, setStockData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/SearchSection')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setStockData(data);
        });
    }, []);

    console.log(searchTerm)

  return (
    <div className='flex w-full flex-col items-center'>
      <form className='w-3/4'>
        <input type='text' onChange={(event) => 
          {setSearchTerm(event.target.value);}} 
          className='bg-purple-100 w-full pl-8 py-5 rounded-2xl shadow-lg' placeholder='Search for a Stock'></input>
      </form>
      <div className='flex flex-row w-3/4'>
        {stockData && <StockSection stocks={stockData} search={searchTerm} />}
      </div>
    </div>
  )
}

export default Search
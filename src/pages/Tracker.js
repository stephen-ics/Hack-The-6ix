

import React from 'react'
import DashboardSection from '../components/DashboardSection'
import { useState, useEffect } from 'react'

const Tracker = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/StockSection')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setStockData(data);
        });
    }, []);

  return (
    <div className='flex w-full flex-col items-center'>
      <form className='w-3/4'>
        <input type='text' className='bg-gray-100 w-full pl-8 py-5 rounded-2xl shadow-lg' placeholder='Search for a Stock'></input>
      </form>
      <div className='flex flex-row w-3/4'>
        {stockData && <DashboardSection stocks={stockData} />}
      </div>
    </div>
  )
}

export default Tracker
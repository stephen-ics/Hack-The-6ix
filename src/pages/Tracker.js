

import React from 'react'
import DashboardSection from '../components/DashboardSection'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Tracker = () => {
  const [stockData, setStockData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
    <motion.div className='flex w-full flex-col items-center'
      initial={{opacity:0, y:100 }}
      animate={{opacity:1, y:0, transition: {duration:1}}}
      exit={{opacity:0, transition: {duration:0.5}}}>
      <form className='w-3/4'>
      <input type='text' onChange={(event) => 
          {setSearchTerm(event.target.value);}} 
          className='bg-purple-100 w-full pl-8 py-5 rounded-2xl shadow-lg' placeholder='Search for a Stock'></input>
      </form>
      <div className='flex flex-row w-3/4'>
        {stockData && <DashboardSection stocks={stockData} search={searchTerm}/>}
      </div>
    </motion.div>
  )
}

export default Tracker
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SearchProfile = () => {
  const { id } = useParams();
  const [stockData, setStockData] = useState(null);

  
  useEffect(() => {
    fetch('http://localhost:8000/SearchSection/' + id)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setStockData(data);
        });
    }, []);
  
  const handleSubmit = (e) => {
    const title = stockData.title
    const percentageDifference = stockData.percentageDifference
    const history = stockData.history
    const image = stockData.image
    const id = stockData.id

    e.preventDefault();
    const stock  = { title, percentageDifference, history, image };
    fetch('http://localhost:3001/StockSection', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stock)
    })
  }

  return (
    <div className='flex justify-center'>
        {stockData &&
        <div className='w-3/4 items-center justify-evenly h-full mt-10'>
            <div className='flex justify-around flex-wrap items-start bg-gray-100/[0.8] h-full rounded-xl shadow-xl p-10 w-full pt-20'> 
                <div className='flex flex-col w-2/5 h-full'>
                  <div className='bg-purple-100 h-full w-full shadow-xl rounded-2xl p-10'>{stockData.title}</div>
                  <div className='bg-violet-300 h-full w-full shadow-xl rounded-2xl p-60 mt-10'>L2</div>
                </div>
                <div className='flex flex-col w-2/5 mr-20'>
                  <motion.button 
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    onClick={handleSubmit}
                    className='bg-violet-300 border-violet-400 border-2 border-solid text-center h-full shadow-xl rounded-2xl py-12'>
                    Add to Watchlist
                  </motion.button>
                  <div className='bg-violet-300 h-full shadow-xl rounded-2xl p-56 mt-10'>
                    LOL
                  </div>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default SearchProfile
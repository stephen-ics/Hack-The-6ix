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
    const description = stockData.description

    e.preventDefault();
    const stock  = { title, percentageDifference, history, stock, image, description };
    fetch('http://localhost:3001/StockSection', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stock)
    })
  }

  return (
    <motion.div className='flex justify-center'
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        {stockData &&
        <div className='w-3/4 items-center justify-evenly h-full mt-10'>
            <div className='flex justify-around flex-wrap items-start bg-gray-100/[0.8] h-full rounded-xl shadow-xl p-10 w-full pt-20'> 
                <div className='flex flex-col w-2/5 h-full'>
                  <div className='bg-purple-100 h-full w-full shadow-xl rounded-2xl p-6 flex items-center'>
                    <img src={stockData.image} />
                    <div className='text-4xl ml-10'>{stockData.title}</div>
                  </div>
                  <iframe src={stockData.history} className='bg-violet-300 h-96 w-full shadow-xl rounded-2xl mt-10'>L2</iframe>
                </div>
                <div className='flex flex-col w-2/5 mr-20'>
                  <motion.button 
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    onClick={handleSubmit}
                    className='bg-violet-300 border-violet-400 border-2 border-solid text-center h-full shadow-xl rounded-2xl py-10'>
                    Add to Watchlist
                  </motion.button>
                  <div className='bg-violet-200 shadow-xl rounded-2xl h-96 mt-10'>
                    <h1 className='text-center mt-6 text-3xl'>ESG Score: 0</h1>
                    <div className='ml-10 mt-5'>
                      <h1>{stockData.description}</h1>
                    </div>
                  </div>
                </div>
            </div>
        </div>}
    </motion.div>
  )
}

export default SearchProfile
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SearchProfile = () => {
  const { id } = useParams();
  const [stockData, setStockData] = useState(null);

  
  useEffect(() => {
    fetch('http://localhost:8000/StockSection/' + id)
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
    const stock  = { title, percentageDifference, history, image, id };
    fetch('http://localhost:3001/DashboardSection', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stock)
    })
  }

  return (
    <div className='flex justify-center'>
        {stockData &&
        <div className='w-3/4 items-center justify-evenly mt-10'>
            <div className='flex bg-lime-600/[0.5] p-10 items-center w-full pt-20'> 
                <div className='flex flex-col w-full'>
                    <div className='flex items-start justify-between'>
                        <img src={stockData.image} className='rounded-full w-48 h-48 ml-20'/>
                        <div className='flex flex-col bg-lime-800/[0.6] w-1/3 px-4 pt-8 mx-16 rounded-2xl h-72 items-start text-start'> 
                            <h1 className='text-white text-5xl'>{stockData.title}</h1>  
                        </div>
                    </div>
                    <div className='w-full justify-around mt-10 text-white'>
                        <motion.button className='w-1/2 py-6 px-8 bg-lime-800/[0.2] rounded-2xl border-green-800 border-solid border-2'
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}
                        onClick={handleSubmit}>Add to Dashboard
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default SearchProfile
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

  return (
    <motion.div className='flex justify-center'
      initial={{ opacity: 0, y:100  }}
      animate={{ opacity: 1, y:0, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        {stockData &&
         <div className='w-3/4 items-center justify-evenly h-full mt-10'>
            <div className='flex justify-around flex-wrap items-start bg-gray-100/[0.8] h-full rounded-xl shadow-xl p-10 w-full pt-20'> 
                <div className='flex flex-col w-2/5 h-full'>
                    <div className='bg-purple-100 h-full text-2xl w-full shadow-xl rounded-2xl p-6'>{stockData.title}</div>
                    <iframe src='https://www.youtube.com/watch?v=nHouJc__q2Y' className='bg-violet-300 h-96 w-full shadow-xl rounded-2xl mt-10'>L2</iframe>
                </div>
                <div className='flex flex-col w-2/5 h-96 bg-violet-300 shadow-xl rounded-2xl'>
                    
                    <h1 className='text-center mt-10 text-3xl'>ESG Score: 0</h1>
                    <div className='ml-10 mt-10 pb-96 text-xl'>
                        <h1>{stockData.description}</h1>
                    </div>
                </div>
            </div>
     </div>} 
    </motion.div>
  )
}

export default SearchProfile
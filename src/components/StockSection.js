import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const StockSection = ({ stocks, search }) => {
    return (
    <div className='w-full items-center mt-10'>
        <div className='w-full'>
            {stocks.filter((val)=> {
                if (search == '') {
                    return val
                } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map(stock => (
                <motion.div className='mb-20' key={stock.id}
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}>
                    <div className=''>
                        <Link to={`/search/${stock.id}`}>
                            <div className='shadow-2xl w-full bg-violet-300 rounded-xl flex items-center p-8 justify-between'>
                                <img src={stock.image} className='rounded-full w-32 h-32'/>
                                <h1 className='text-slate-800 text-7xl ml-20 w-full'>{stock.title}</h1>
                            </div>
                        </Link>
                    </div>
                    
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default StockSection
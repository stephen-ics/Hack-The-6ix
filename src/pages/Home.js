
import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect';
import HomeSection from '../components/HomeSection'
import Phone from '../images/Phone.jpeg'
import Graph from '../images/Graph.png'
import Stocks from '../images/Stocks.png'


const Home = () => {
  return (
    <motion.section className='flex flex-col justify-center items-center w-full h-full mt-10'
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}>

      <div className="bg-gray-100 h-full pb-20 m-10 rounded-lg flex flex-col items-center w-3/4 font-mono">
        <div className='flex flex-col justify-center items-center h-full'>
          <img src={Stocks}/>
          <h1 className='text-6xl mb-5'>Stock Stalker</h1>
        </div>
        <div className = 'text-2xl text-bold'>
        <Typewriter
          options={{
            strings: ['Keep your stocks close'],
            autoStart: true,
            loop: true,
          }}
  
        />
        </div>
        <div className='p-5 px-10'>
          <Link to='/search'>
            <motion.button className="w-56 text-2xl text-slate-800 mt-32 rounded-3xl p-5 bg-blue-200/[.3] border-blue-100 border-solid border-2"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}>
              Start Investing!
            </motion.button>
          </Link>
        </div>
      </div>
      <HomeSection title="To the moon!" buttonLabel="Check it out" subtitle="Keep track of the live stock market and make smart decisions on your investments!" image={Phone} reversed={false} linkTo='/tracker'/>
      <HomeSection title="ESG Evaluations" buttonLabel="Check it out" subtitle="Take the future investments into your hands. " image={Graph} reversed={true} linkTo='esg' />
    </motion.section>

  )
}


export default Home
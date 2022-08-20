
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { classNames } from "../lib/cssTools";


import HomeSection from '../components/HomeSection'
import Grass from '../images/Grass.jpeg'


const Home = () => {
  return (
    <div>
      <div className="bg-blue-100/[0.3] h-full pb-20 m-10 rounded-lg flex flex-col items-center">
        <div className='flex flex-coll justify-center items-center h-full'>
          <h1 className='mt-40 text-8xl p-5 text-slate-800 text-center'>Title</h1>
        </div>
        <div className='p-5 px-10'>
          <Link to='/search'>
            <motion.button className="w-56 text-2xl text-slate-800 mt-32 rounded-3xl p-5 bg-blue-200/[.3] border-blue-100 border-solid border-2"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}>
              Start Planting!
            </motion.button>
          </Link>
        </div>
      </div>
      <HomeSection title="Grow with your plant." buttonLabel="button" subtitle="Take pictures of your plants and we'll turn it into a timelapse for you!" image={Grass} reversed={false}/>
      <HomeSection title="Care for your plants." buttonLabel="button" subtitle="Learn about your plant and set care reminders for them!" image={Grass} reversed={true}/>
    </div>

  )
}


export default Home
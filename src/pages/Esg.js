
import getESGData from '../lib/getESGData'

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'

const ESG = () => {
    const [data, setData] = useState(null); 
    console.log(data)
    
    useEffect(() => {
        const getData = async () => {
            setData(await getESGData("aapl"))
        }

        getData().catch(console.error);
    })

    return (
      <motion.div className=''
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <div className='w-7/12 ml-24 space-y-10'>
          <div className='mt-20'>
            <h1 className='text-5xl'>What Are Environmental, Social, and Governance (ESG) Criteria?</h1>
            <h1 className='text-2xl leading-10 mt-5'>Environmental, social, and governance (ESG) criteria are a set of standards for a company’s behavior used by socially conscious investors to screen potential investments. Environmental criteria consider how a company safeguards the environment, including corporate policies addressing climate change, for example. Social criteria examine how it manages relationships with employees, suppliers, customers, and the communities where it operates. Governance deals with a company’s leadership, executive pay, audits, internal controls, and shareholder rights.</h1>
            <h1 className='text-2xl leading-10 mt-5'>ESG criteria are also increasingly informing the investment choices of large institutional investors such as public pension funds. According to the most recent report from US SIF Foundation, investors held $17.1 trillion in assets chosen according to ESG criteria at the end of 2019, up from $12 trillion just two years earlier (Investopedia).</h1>
          </div>
          <div className='mt-20'>
            <h1 className='text-5xl'>Environmental 🍃</h1>
            <h1 className='text-2xl leading-10 mt-5'>Environmental criteria may include corporate climate policies, energy use, waste, pollution, natural resource conservation, and treatment of animals. The criteria can also help evaluate any environmental risks a company might face and how the company is managing those risks.</h1>
          </div>
          <div className='mt-20'>
            <h1 className='text-5xl'>Social 🏙️</h1>
            <h1 className='text-2xl leading-10 mt-5'>Social criteria look at the company’s relationships with stakeholders.
Does it hold suppliers to its own ESG standards? Does the company donate a percentage of its profits to the local community or encourage employees to perform volunteer work there?</h1>
          </div>
          <div className='mt-20'>
            <h1 className='text-5xl'>Governance 🏛️</h1>
            <h1 className='text-2xl leading-10 mt-5'>ESG governance standards ensure a company uses accurate and transparent accounting methods, pursues integrity and diversity in selecting its leadership, and is accountable to shareholders.
ESG investors may require assurances that companies avoid conflicts of interest in their choice of board members and senior executives, don't use political contributions to obtain preferential treatment, or engage in illegal conduct (Investopedia). 
I think this is enough for the third page (ESG page)</h1>
          </div>
          
        </div>







        {data && <h2>Gov grade: {data.governance.grade}</h2>}
      </motion.div>
    )
}

export default ESG
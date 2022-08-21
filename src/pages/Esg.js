
import getESGData from '../lib/getESGData'

import React, { useState, useEffect } from "react";

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
      <div>
        <h1>data</h1>

        {data && <h2>Gov grade: {data.governance.grade}</h2>}
      </div>
    )
}

export default ESG
import React from 'react'
import getESGData from '../lib/getESGData'

import { useState, useEffect } from 'react,'


const ESG = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      setData(await getESGData("aapl"))
    })
  })

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default Esg
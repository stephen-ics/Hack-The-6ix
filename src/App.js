import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Esg from './pages/Esg'
import Tracker from './pages/Tracker'
import Search from './pages/Search'
import StockProfile from './pages/StockProfile'
import StockProfile2 from './pages/StockProfile2'
import Stock from './pages/stock' 

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Suspense fallback={<div>Page Loading...</div>}>
         <Navbar />
         <AnimatePresence
          mode='wait'>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/tracker" exact element={<Tracker />} />
              <Route path="/tracker/:id" exact element={<StockProfile2 />} />
              <Route path="/esg" exact element={<Esg />} />
              <Route path="/stock" exact element={<Stock/>} />
              <Route path='/search' exact element={<Search />} />
              <Route path='/search/:id' exact element={<StockProfile />} />
            </Routes>
         </AnimatePresence>
       </Suspense>
     </BrowserRouter>
   </div>
 );
}
 
export default App;


import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Esg from './pages/Esg'
import Tracker from './pages/Tracker'
import Search from './pages/Search'
import StockProfile from './pages/StockProfile'
 
function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Suspense fallback={<div>Page Loading...</div>}>
         <Navbar />
         <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/tracker" exact element={<Tracker />} />
           <Route path="/esg" exact element={<Esg />} />
           <Route path='/search' exact element={<Search />} />
           <Route path='/search/:id' exact element={<StockProfile />} />
         </Routes>
       </Suspense>
     </BrowserRouter>
   </div>
 );
}
 
export default App;


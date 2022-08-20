import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
 
function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Suspense fallback={<div>Page Loading...</div>}>
         <Navbar />
         <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/about" exact element={<About />} />
         </Routes>
       </Suspense>
     </BrowserRouter>
   </div>
 );
}
 
export default App;


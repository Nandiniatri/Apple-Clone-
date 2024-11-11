import { useState, useEffect } from 'react'
import './App.css'
import Iphone from './iPhone/Iphone';
import Support from './Comm-Components/support/supportCom';
import Home from './Home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccessoriesCom from './Accessories/mainAccessories/accessories';
import Watch from './Watch/Watch';
import ScrollToTopPage from './ScrollComponent/scroll';
import Mac from './Mac/mac';
import AllProductComponentFile from './ComponentReusable/AllProductComp/allProductComp';
// import AllProductComponentFile from './ComponentReusable/AllProductComp/allProductComp';


function App() {
  // const products = ["watch" , "mac"]; 
  
  return (
    <Router> 
      <ScrollToTopPage />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path='/Iphone' element={<Iphone />} />
        <Route path='/Support' element={<Support />}/>
        <Route path='/accessories' element={<AccessoriesCom />}/>
        <Route path='/product/:productName' element={<AllProductComponentFile />} />
        {/* <Route path='/mac' element={<Mac />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
 
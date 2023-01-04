import logo from './logo.svg';
import './App.css';

import './Component/Styles.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import data from './Component/ContextApi';
import { useState } from 'react';


function App() {

  const [userdata, setUserData] = useState({})
  console.log(userdata)



  return (
    <div className="App">
      <data.Provider value={{setUserData}}>

      <Router>
        <Routes>
          <Route path='/'
            element={<Home/>}

          />
          <Route path='/Login'element={<Login/>}/>
          <Route path='/Register'element={<Register/>}/>
        </Routes>
      </Router>


      </data.Provider>


      


      
      {/*<Home/>*/}
      {/*<Login/>*/} 
      {/*<Register/>*/}
   
    </div>
  );
}

export default App;

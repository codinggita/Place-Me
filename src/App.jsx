import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './nav.jsx';
import Home from './Home.jsx';
import MyProfile from './Myprofile.jsx';
import Company from './Company.jsx';
import Feedback from './Feedback.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route
            path="/"
            element={
              <div className="Home">
                <Nav />
                <Home />
              </div>
            }
          />

          <Route
            path="/myprofile"
            element={
              <div className='prof'>
                <Nav />
                <MyProfile />
              </div>
            }
          />

          <Route
          path='/company'
          element={
            <div className='company'>
              <Nav />
              <Company />
            </div>
          }/>

          <Route
          path='/feedback'
          element={
            <div className='feedback'>
              <Nav />
              <Feedback />
            </div>
          }/>

          <Route
            path="*"
            element={
              <div>
                <p>kya bhai i am confused to route</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

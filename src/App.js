import React from 'react';
import "./App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePages/>}></Route>
      </Routes>
    </div>

  );
}

export default App;

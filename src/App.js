import React from 'react';
import "./App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import MainPage from './pages/mainpages/MainPages';
import SingIn from './pages/singin/SingIn';
import SingUp from './pages/singup/SingUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePages/>}></Route>
        <Route path='/main' element={<MainPage/>}></Route>
        <Route path='/singin' element={<SingIn/>}></Route>
        <Route path='/singup' element={<SingUp/>}></Route>
      </Routes>
    </div>

  );
}

export default App;

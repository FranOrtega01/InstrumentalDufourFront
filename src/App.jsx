import './App.scss';
import { useState, useEffect } from 'react';
import { PreContainer } from './Screens/PreService/PreService';
import { Header } from './Components/Header/Header';

function App() {
  return(
    <>
      <Header/>
      <PreContainer />
    </>
  )
}

export default App;

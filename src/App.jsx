import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PreContainer } from './Screens/PreService/PreService';
import { Header } from './Components/Header/Header';

function App() {
  return(
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Home />} />
          <Route path='/preservice/:token' element={<PreContainer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

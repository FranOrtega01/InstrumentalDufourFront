import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PreContainer } from './Screens/PreService/PreService';
import { Home } from './Screens/Home/Home';
import { AdminContainer } from './Screens/Admin/adminContainer'

function App() {
  return(
    <>
      {/* <Header/> */}
      <Router>
        <Routes>
          <Route path='/preservice/:token' element={<PreContainer />} />
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminContainer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { PreContainer } from './Screens/PreService/PreService';
import { Home } from './Screens/Home/Home';
import { AdminContainer } from './Screens/Admin/adminContainer'
import { ThemeProvider } from 'react-bootstrap';
import { ModalProvider } from './Context/modalContext'
import { Redirect } from './Components/Redirect/Redirect';


function App() {

  

  return (
    <>
      {/* <Header/> */}
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/preservice/:token' element={<PreContainer/>} />
            <Route path='/' element={<Home />} />
            <Route path="/admin" element={<Navigate to="/admin/dashboard"/>} />
            <Route
              path='/admin/*'
              element={
                <ModalProvider>
                  <AdminContainer />
                </ModalProvider>
              }
            />
            <Route path="*" element={<Redirect to={'/'} message={'Page not found! Redirecting to home...'} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;

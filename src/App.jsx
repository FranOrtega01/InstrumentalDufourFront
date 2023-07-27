import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PreContainer } from './Screens/PreService/PreService';
import { PostContainer } from './Screens/PreService/PostService';
import { Home } from './Screens/Home/Home';
import { AdminContainer } from './Screens/Admin/adminContainer'
import { Redirect } from './Components/Redirect/Redirect';
import { Login } from './Screens/Session/Login';
import { Register } from './Screens/Session/Register';
import { AuthProvider } from './Context/authContext';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';

function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/preservice/:token' element={<PreContainer />} />
            <Route path='/postservice/:token' element={<PostContainer />} />
            <Route path='/' element={<Home />} />
            <Route path="/admin" element={<PrivateRoute to={'/session/login'}><Navigate to="/admin/dashboard" /></PrivateRoute>} />
            <Route path='/session/login' element={<Login />} />
            <Route path='/session/register' element={<PrivateRoute to={'/'}><Register /></PrivateRoute>} />
            <Route path='/admin/*' element={<PrivateRoute to={'/session/login'}><AdminContainer /></PrivateRoute>} />
            <Route path="*" element={<Redirect to={'/'} message={'Page not found! Redirecting to home...'} />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}
export default App;

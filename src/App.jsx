import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PreContainer } from './Screens/PreService/PreService';
import { Home } from './Screens/Home/Home';
import { AdminContainer } from './Screens/Admin/adminContainer'
import { ContactsContainer } from './Screens/Contacts/contactsContainer'
import { ThemeProvider } from 'react-bootstrap';

function App() {
  return(
    <>
      {/* <Header/> */}
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/preservice/:token' element={<PreContainer />} />
            <Route path='/' element={<Home />} />
            <Route path='/admin/dashboard' element={<AdminContainer />} />
            <Route path='/admin/enterprise' element={<ContactsContainer title={'contact'} />} />
            <Route path='/admin/contact' element={<ContactsContainer title={'enterprise'} />} />

          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;

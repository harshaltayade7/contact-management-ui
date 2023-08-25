import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import ContactManagement from './pages/ContactManagement';
import LoginPage from './pages/LoginPage';

function AppContainer() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty(localStorage.getItem('jwt'))) {
      navigate('/login')
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/contact-management" Component={ContactManagement} />
      </Routes>
    </div>
  );
}

export default AppContainer;

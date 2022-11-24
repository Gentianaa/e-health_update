import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Patient from './pages/Patient';
import Signin from './pages/Signin';
import Video from './pages/Video';
import Feed from './pages/Feed';
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={
            <><Navbar /><Home /></>
        } 
          />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route path='/video' element={
              <Protected>
                <Video />
              </Protected>
            } 
          />
              <Route path='/patient' element={
              <Protected>
                <Patient />
              </Protected>} />
                <Route exact path="/patient/:id" element={<Protected><PatientDetails /></Protected>} />
              <Route path='/feed' element={
              <Protected>
                <Feed />
              </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;



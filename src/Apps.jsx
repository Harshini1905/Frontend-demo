import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import User from './User';
import Createuser from './Createuser';
import Updateuser from './Updateuser';  

function Apps() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/createuser" element={<Createuser />} />
        <Route path="/updateuser/:id" element={<Updateuser />} />
      </Routes>
    </Router>
  );
}

export default Apps;
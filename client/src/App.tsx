import {BrowserRouter as Router, Routes,Route}from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import AdminHome from './pages/adminHome';
import Enseignant from './pages/Enseignant';
import Etudiant from './pages/Etudiant';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
<Router>
    <Routes>
      <Route path="/"  element={<Login />}/>
      <Route path="/adminHome" element={<AdminHome/>}/>
      <Route path="/Enseignant"  element={<Enseignant />}/>
      <Route path="/Etudiant"  element={<Etudiant />}/>
     </Routes>
  </Router>
  );
}

export default App;

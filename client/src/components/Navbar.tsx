import React from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"



export default function Navbar() {
  const navigate = useNavigate();
  const loginData = JSON.parse(localStorage.getItem('loginData')|| 'null');  
  console.log("🚀 ~ file: Navbar.tsx:10 ~ Navbar ~ loginData:", loginData)

  const handelLogout =() => {
    localStorage.removeItem('loginData');
    localStorage.removeItem('role');
    navigate("/")
  }

  const StoreData = (userType: string) => {
    localStorage.setItem('role', JSON.stringify(userType));
  }


  return (
    <div>
      
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom container text-center">
      <Link to="/adminHome" className="d-flex align-items-center  mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <i className="bi bi-qr-code col-3 p-3 mb-2" style={{ fontSize: '3rem' }}></i>
    
        <div className="fs-4 col-3 p-3 mb-2">Gestion d'absonse</div>
          <div className='col-3 p-3 mb-2 container text-center'>Bonjour {loginData.prenom}!</div>
      </Link>

      <ul className="nav nav-pills ">
        <li className="nav-item col-3 p-4 mb-4"><Link to="/AdminHome" className="nav-link active " aria-current="page">Accueil</Link></li>
        <li className="nav-item col-3 p-4 mb-4"><Link to="/Enseignant"  className="nav-link" onClick={() => StoreData('enseignant')}>
          Enseignants</Link></li>
        <li className="nav-item col-3 p-4 mb-4"><Link to="/Etudiant" className="nav-link" onClick={() => StoreData('etudiant')} > Etudiants</Link></li>
        <li className="nav-item col-3 p-4 mb-4"><Link to="/"onClick={handelLogout}  className="nav-link">Deconnection</Link></li>
      </ul>

    </header>

    </div>
  )
}



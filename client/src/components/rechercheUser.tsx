import React from 'react'
import axios from "axios";


type users = {
  id : number  ; 
  nom: string;
  prenom: string;
  numtel : string;
  email: string;
  role: string;
}


export default function RechercheUser() {

const [usersInfo, setUsersInfo] = React.useState<users[]>([]);
const [searchKey, setSearchKey] = React.useState<string>(''); // Define the search key state


const onSubmitSearch: React.FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();
  if (searchKey.trim() !== '') {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/search/${searchKey}`);
      setUsersInfo(response.data.data);
      console.log('Fetched users:', response.data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
};


  return (
    <div className='container'>
    <nav className="navbar navbar-light">
    <div className="container-fluid">
      <form className="d-flex justify-content-center" onSubmit={onSubmitSearch}>
        <input className="form-control me-2" type="search" placeholder="chercher" aria-label="Search"
        onChange={(e) => setSearchKey(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" >Chercher</button>
      </form>
    </div>
  </nav>
          <table className="table">
          <thead className="table-primary">
              <tr>

              </tr>
          </thead>
          <tbody>
              {usersInfo.map((users) => (
              <tr>
              <th scope="row" key={users.id}>{users.id}</th>
              <td>{users.nom}</td>
              <td>{users.prenom}</td>
              <td>{users.email}</td>
              <td>{users.numtel}</td>
              </tr>
              
              ))}

          </tbody>
      </table>
      </div>

  
  )
}



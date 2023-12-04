import React from 'react'
import axios from "axios";
import ModifierUser from './modifierUser';
import ArchiverUser from './archiverUser';

type users = {
    id : number  ; 
    nom: string;
    prenom: string;
    numtel : string;
    email: string;
    role: string;
}


const ListEnseignant= ()=>{
    const [usersInfo, setUsersInfo] = React.useState<users[]>([]);
    const usersData=JSON.parse(localStorage.getItem('role')|| 'null');

React.useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/getListByRole/${usersData}`)
    .then((response)=>{setUsersInfo(response.data.data);
        console.log("Fetched users:", response.data.data);})
    .catch((error)=>{{console.log("error",error)}})
}, [usersInfo]);



  return (
    <div>
        <table className="table">
            <thead className="table-primary">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">email</th>
                <th>Numéro de téléphone</th>
                <th>modifier</th>
                <th>archiver</th>
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
                <td><ModifierUser dossier={users}/></td>
                <td><ArchiverUser id={users.id}/></td>
                </tr>
                
                ))}

            </tbody>
        </table>
    </div>
  )
};
export default ListEnseignant;

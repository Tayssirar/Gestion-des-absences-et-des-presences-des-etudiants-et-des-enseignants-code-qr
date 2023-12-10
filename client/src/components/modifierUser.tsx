import React from 'react';
import axios from "axios";

type dossierType = {
  id : number  ;
  role: string; 
  nom: string;
  prenom: string;
  numtel : string;
  email: string;
}
type dossierProps = {
  dossier: dossierType;
};

export default function ModifierUser({dossier}:dossierProps) {
  const [nom, setNom] = React.useState(dossier.nom);
  const [prenom, setPrenom] = React.useState(dossier.prenom);
  const [numtel, setTel] = React.useState(dossier.numtel);
  const [email, setEmail] = React.useState(dossier.email);
  const [role, setRole] = React.useState(dossier.role || 'enseignant');


// Edit dossier function
const updateDossier = async (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
  try {
    await axios.put(`http://localhost:4000/api/v1/updateDossier/${dossier.id}`,
      { nom, prenom ,numtel , email, role }, // Send description directly in the request body
    );
  

  } catch (err) {
    console.log(err);
  }
};



  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modifyModal">
        modifier
        </button>

     <div className="modal fade" id="modifyModal"  aria-labelledby="modifyModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modifyModalLabel">Ajouter</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="prenom" className="form-label">Prénom</label>
                  <input type="text" className="form-control" id="prenom" placeholder="Entrer votre prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="nom" placeholder="Entrer votre nom" 
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">email</label>
                  <input type="email" className="form-control" id="email" placeholder="Entrer votre mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="numero" className="form-label">Numéro</label>
                  <input type="number" className="form-control" id="numero" placeholder="Entrer votre numéro"
                  value={numtel}
                  onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="role" className="form-label">Rôles</label>
                  <select className="form-select" id="role" value={role} onChange={e => setRole(e.target.value)}>
                    <option value="enseignant">Enseignant</option>
                    <option value="etudiant">Etudiant</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary"   onClick={(e) => updateDossier(e)} >Modifier</button>

          </div>
        </div>
        </div>
        </div>
    </div>
  );
}
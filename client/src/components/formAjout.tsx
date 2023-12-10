import React from 'react';
import axios from "axios";

 const FormAjout= ()=>{

  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [numtel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState('');


  const onSubmitForm = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
        const response = await axios.post(`http://localhost:4000/api/v1/addUser`, 
        { prenom: prenom, nom: nom, numtel:numtel, email: email, role: role });
        console.log('post response',response.data);
      // Clear form fields after successful submission
      setNom('');
      setPrenom('');
      setTel('');
      setEmail('');
      setRole('');
      setErrorMessage(''); // Clear error message if any
    } catch (error) {
        setErrorMessage('User already exists.'); // Set the error message to display
      }
    
  };



  return (
    <div className="text-center">
      <img src="https://cdn-icons-png.flaticon.com/512/1177/1177577.png"
        alt="User"
        className="img-thumbnail"
        style={{ display: 'inline-block', width: '150px', height: '150px' }}
      />
      <div>
      <h3>   </h3>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ajoutModal">
      Ajouter un dossier
      </button>

      </div>
      <div className="modal fade" id="ajoutModal" aria-labelledby="ajoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ajoutModalLabel">
                Ajouter
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
              <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                  <label htmlFor="prenom" className="form-label">Prénom</label>
                  <input type="text" className="form-control" id="prenom" placeholder="Entrer votre prénom" 
                    value={prenom} onChange={e => setPrenom(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="nom" placeholder="Entrer votre nom" 
                    value={nom} onChange={e => setNom(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="mail" className="form-label">email</label>
                  <input type="email" className="form-control" id="mail" placeholder="Entrer votre e-mail"
                    value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="numero" className="form-label">Numéro</label>
                  <input type="text" className="form-control" id="numero" placeholder="Entrer votre numéro" 
                    value={numtel} onChange={e => setTel(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Rôles</label>
                  <select className="form-select" id="role" value={role} onChange={e => setRole(e.target.value)}>
                    <option value="enseignant">Enseignant</option>
                    <option value="etudiant">Etudiant</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormAjout;
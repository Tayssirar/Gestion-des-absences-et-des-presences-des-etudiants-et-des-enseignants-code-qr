import React from 'react'
import axios from "axios";


type Dossier = {
  id: number;
};

type ArchiverProps = {
  id: number;
};

export default function ArchiverUser({ id }: ArchiverProps) {


  const archiverDossier = async (id: number) => {
  
    try {
      await axios.delete(`http://localhost:4000/api/v1/archiverDossier/${id}`);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>

        <button type="button" className="btn btn-primary" onClick={() => archiverDossier(id)}>
        Archiver
        </button>
    </div>
  )
}



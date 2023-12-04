import React from 'react'
import Navbar from '../components/Navbar'
import FormAjout from '../components/formAjout'
import RechercheUser from '../components/rechercheUser'

export default function AdminHome() {
  return (
    <div>
      <Navbar/>
      <RechercheUser/>
      <FormAjout/>

    </div>
  )
}



import React from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import LottieGif from '../styles/LottieGif'
import animation_login from '../assets/login_animation.json'

export default function Login() {
    React.useEffect(() => {
        document.title = 'login';
      }, []);

      const [email, setEmail] = React.useState("")
      const [password, setPassword]= React.useState("")
      const navigate = useNavigate();
    
      const handleSubmit= async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
    
          await axios.post("http://localhost:4000/api/v1/login", { email, password })              
                  .then(response => {
                   console.log(response)
                   localStorage.setItem('loginData',JSON.stringify(response.data.data)); 
                    navigate("/AdminHome");
                })
                 
              } catch (error:any) {
                console.error('There was an error!', error);
                    alert(error.response.data.message);
                
            }
          }

  return (
    
    <div className=" row justify-content-center gx-5 my-5 ">
      <div className='col-4 d-none d-lg-block'>
        <LottieGif illustration={animation_login} width={500} height={500}/>
      </div>
      <div className="col-4">
        <div className="text-center my-5">
          <i className="bi bi-qr-code" style={{ fontSize: '3rem' }}></i>
          <h5>Bonjour!</h5>
          <h2>Accéder à votre compte</h2>
        </div>
        <form className="row g-4" onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="bi bi-person-fill input-group-text" style={{ fontSize: '2rem' }}></i>
                <input className="form-control" id="email" name="email" type="email" placeholder=" email" 
                value={email} onChange={e => setEmail(e.target.value)}>
                </input>
            </div>
            <div className="input-group">
                <i className="bi bi-key-fill input-group-text" style={{ fontSize: '2rem' }}></i>
                <input className="form-control" id="password" name="password" type="password" placeholder="Mot de passe" required
                value={password} onChange={e => setPassword(e.target.value)} >
                </input>
            </div>
            <div className="d-grid mx-auto">
                <button type="submit" className="btn btn-primary">se connecter</button>
            </div>
        </form>
      </div>  
    </div>
  )
}



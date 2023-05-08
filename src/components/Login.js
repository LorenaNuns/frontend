import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import { TabelaProfessor } from './TelaProfessor/Pages/TabelaProfessor';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/loginProfessor", {email, senha});

      const token = response.data.acessToken;
      //com isso consegue ver no navegador no inspecionar
      localStorage.setItem("token", token);
      setLoggedIn(true)
    } catch (error) {
      console.error(error);
    }
  }

  if(loggedIn) {
    return <TabelaProfessor></TabelaProfessor>
  }


  return (
    <div className='d-flex align-items-center justify-content-center' style={{height: "100vh"}}>
        <div className='border rounded p-5' style={{backgroundColor: "#9370DB", borderRadius: "25px" }}>
            <Form style={{color: "snow", margin: "5px"}} onSubmit={handleLogin}>
                <h1 className='text-center text-lowercase fw-bold'>Login</h1>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Label className='fw-bold'>Email</Form.Label>
                        <Form.Control type="text" placeholder='Digite seu email' value={email} onChange={(event) => setEmail(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='formBasicSenha'>
                    <Form.Label className='fw-bold' >Senha</Form.Label>
                        <Form.Control type="password" placeholder='senha' value={senha} onChange={(event) => setSenha(event.target.value)}>
                        </Form.Control>
                </Form.Group>
                <Button style={{backgroundColor: "#D358F7", borderColor: "#9370DB", marginTop: "10px"}} type='submit'>
                    Entrar
                </Button>
            </Form>
        </div>
    </div>
  )
}

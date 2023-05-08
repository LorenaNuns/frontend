import axios from 'axios'
import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

export const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/criarProfessor", {nome, email, senha})
            alert(response.data)
        }catch(err) {
            alert(err)
        }
    }




  return (
    //d-flex: deixa a div responsiva
    //onSubmit é uma função direta da tag Form
    <div className='d-flex align-items-center justify-content-center' style={{height: "100vh"}}>
        <div className='border rounded p-5' style={{backgroundColor: "#9370DB", borderRadius: "25px" }}>
            <Form style={{color: "snow", margin: "5px"}} onSubmit={handleSubmit}>
                <h1 className="text-center text-lowercase fw-bold">Cadastrar</h1>
                <Form.Group controlId='formBasicText'>
                    <Form.Label className='fw-bold'>Nome</Form.Label>
                        <Form.Control type="text" placeholder='Digite seu nome' value={nome} onChange={(event) => setNome(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Label className='fw-bold'>Email</Form.Label>
                        <Form.Control type="text" placeholder='Digite seu email' value={email} onChange={(event) => setEmail(event.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='formBasicSenha'>
                    <Form.Label className='fw-bold'>Senha</Form.Label>
                        <Form.Control type="password" placeholder='senha' value={senha} onChange={(event) => setSenha(event.target.value)}>
                        </Form.Control>
                </Form.Group>
                <Button classname="" style={{backgroundColor: "#ffae00", borderColor: "#9370DB", marginTop: "10px"}} type='submit'>
                    Cadastrar
                </Button>
            </Form>
        </div>
    </div>
  )
}

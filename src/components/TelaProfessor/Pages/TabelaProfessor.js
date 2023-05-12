import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'

export const TabelaProfessor = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [alunos, setAlunos] =  useState([])
    const professorId = 1;

    const handleCadastro = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/criarAluno", {nome: nome, curso: curso, professorId: professorId});
            alert(response.data)
        }catch(err) {
            alert(err)
        }
    }
    
    const mostrarAlunos = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/professor/${professorId}/listaDeAlunos`);
            setAlunos(response.data.sort((a, b) => (a.nome > b.nome ? 1 : -1 )));
        } catch (err) {
            alert(err);
        }
    };

   /*  useEffect(() => {
        mostrarAlunos();
    }) */

  return (
    <div className="d-grid align-items-center justify-content-center" style={{height: "100vh"}}>
        <div className='border rounded p-5' style={{backgroundColor: "#5f4888", borderRadius: "25px"}}>
            <Form style={{color: "#ffffff", margin: "5px"}}>
                <h4>Cadastrar aluno</h4>
                <Row className='d-flex align-items-center flex-wrap'>
                    <Col xs="auto">
                        <Form.Group controlId='formBasicText'>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type='text' placeholder='Nome' value={nome} onChange={(event) => setNome(event.target.value)}>

                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Form.Group controlId='formBasicText'>
                            <Form.Label>Curso</Form.Label>
                            <Form.Control type='text' placeholder='Curso' value={curso} onChange={(event) => setCurso(event.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs="auto" style={{marginTop: "22px"}}>
                        <Button style={{backgroundColor: "#ffae00", borderColor: "#ffae00", marginTop: "10px" }} type='submit'>
                            Cadastrar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    <div>
    <Table striped border hover className='border rounded p-5' size="md" style={{backgroundColor: "ffffff"}}>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Curso</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>João</td>
                <td>Silva</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Maria</td>
                <td>Santos</td>
                <td>25</td>
            </tr>
            <tr>
                <td>Lucas</td>
                <td>Oliveira</td>
                <td>18</td>
            </tr>
        </tbody>
    </Table>
    </div>
    </div>
  )
}

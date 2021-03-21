import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import './App.css';
import { useState } from 'react';

const formulario = {
  id: '',
  nome: '',
  especie: '',
  raca: ''
}


function App() {
  const [form, setForm] = useState(formulario);
  const [data, setData] = useState([]);

  function add() {
    const newData = [...data, form];

    setData(newData);
    setForm(formulario);

  }
  const setInput = (newValue) => {
    setForm(form => ({ ...form, ...newValue }))
  }
  return (
    <div className="App">

      <div className="form">

        <Form >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridId">
              <Form.Label>Id</Form.Label>
              <Form.Control onChange={e => setInput({ id: e.target.value })} value={form.id} type="text" placeholder="Insira o id" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control onChange={e => setInput({ nome: e.target.value })} value={form.nome} type="text" placeholder="Nome" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEspecie">
            <Form.Label>Especie</Form.Label>
            <Form.Control onChange={e => setInput({ especie: e.target.value })} value={form.especie} placeholder="Especie" />
          </Form.Group>

          <Form.Group controlId="formGridRaca">
            <Form.Label>Raça</Form.Label>
            <Form.Control onChange={e => setInput({ raca: e.target.value })} value={form.raca} placeholder="Raça" />
          </Form.Group>

          <Button variant="primary" onClick={add} >
            Cadastrar
          </Button>
        </Form>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Especie</th>
            <th>Raça</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res, index) =>

            <tr key={index}>
              <td>
                {res.id}
              </td>
              <td>
                {res.nome}
              </td>

              <td>
                {res.especie}
              </td>
              <td>
                {res.raca}
              </td>
            </tr>

          )}

        </tbody>
      </Table>

    </div>
  );
}

export default App;

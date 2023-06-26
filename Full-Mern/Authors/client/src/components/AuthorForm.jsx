import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const AuthorForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handle = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors',{
        name
        })
            .then(res=>{console.log(res);
              setName('');
              navigate('/');
              })
            .catch(err=>console.log(err))
  }
  return (
    <div >
      <Form className="" onSubmit={(e) => handle(e)}>
        <Form.Group className="mb-3 text-center" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" className="w-25 mx-auto" onChange={(e)=>setName(e.target.value)} />
          <Form.Text className="text-muted" >
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" className="ms-5" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </Form>
    </div>
  )
}

export default AuthorForm

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/")
            .then(res => {
                setAuthors(res.data.authors);
                setLoaded(true);
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);
    const edit = (id) => {
        navigate('/edit/' + id);
    }
    const deleteMe = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then((res) => {console.log(res);
            navigate('/');})
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <Link to={"/new"}>Add an author</Link>
            <h3>We have quotes by:</h3>
            <Table striped className='w-50 mx-auto'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, id) =>
                        <tr key={id}>
                            <td>{author.name}</td>
                            <td><Button variant="primary" onClick={() => edit(author._id)}>Edit</Button>{' '}<Button variant="danger" onClick={() => deleteMe(author._id)}>Delete</Button>{' '}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Main
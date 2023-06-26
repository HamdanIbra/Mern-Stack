import React from 'react'
import {Link} from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
const New = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <h3>Add a new Author :</h3>
        <AuthorForm/>
    </div>
  )
}

export default New
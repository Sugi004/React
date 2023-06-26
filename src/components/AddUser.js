import React, { useState } from 'react'
import  Form  from 'react-bootstrap/form'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

function AddUser({users, setUsers}) {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [address,setAdress] = useState("")
  let navigate = useNavigate()

  let handleSave = ()=>{
   let newUsers = [...users]
   newUsers.push({
      name,
      email,
      mobile,
      address
   })
   setUsers(newUsers)
   navigate('/dashboard')
  }

  return <div className='container'>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{marginTop:"10px"}}>Create User</h1>
    </div>

  <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Adress" onChange={(e)=>setAdress(e.target.value)}/>
        </Form.Group>
        
        
        <Button variant="primary" onClick={()=>handleSave()}>
          Create
        </Button>
    </Form>
  </div>
  
}

export default AddUser
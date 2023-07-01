import React, { useState , useEffect } from 'react'
import  Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate, useParams } from 'react-router-dom'




function EditUser({users, setUsers}) {
    let params = useParams()

    let [name,setName] = useState()
    let [email,setEmail] = useState()
    let [mobile,setMobile] = useState()
    let [address,setAdress] = useState()
    let navigate = useNavigate()
    
    useEffect(()=>{
      if(params.id<users.length){
        setName(users[params.id].name)
        setEmail(users[params.id].email)
        setMobile(users[params.id].mobile)
        setAdress(users[params.id].address)
      }
      else{
        alert("Invalid User ID")
        navigate('/users')
      }
    },[])

    let handleSave = ()=>{
     let newUsers = [...users]
     newUsers.splice(params.id,1,{
        name,
        email,
        mobile,
        address
     })
     setUsers(newUsers)
     navigate('/users')
    }

    
  
    return <div className='container'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800" style={{marginTop:"10px"}}>Edit User</h1>
      </div>
  
    <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="number" placeholder="Enter Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Adress" value={address} onChange={(e)=>setAdress(e.target.value)}/>
          </Form.Group>
          
          
          <Button variant="primary" onClick={()=>handleSave()}>
            Submit
          </Button>
      </Form>
    </div>
}

export default EditUser
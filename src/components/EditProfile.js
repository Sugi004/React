import React from 'react'
import { Form } from 'react-bootstrap'
import { useParams,  useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {useState,useEffect} from 'react'
import Image from 'react-bootstrap/Image'

function EditProfile({users,setUsers}) {
    let params = useParams()
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [password , setPassword] = useState()
    let [image,setImage] = useState()
    let [mobile,setMobile] = useState()
    let [address,setAdress] = useState()
    let navigate = useNavigate()

    useEffect(()=>{
        if(params.id<users.length){
          setImage(users[params.id].img)
          setName(users[params.id].name)
          setEmail(users[params.id].email)
          setPassword(users[params.id].password)
          setMobile(users[params.id].mobile)
          setAdress(users[params.id].address)
        }
        else{
          alert("Invalid User ID")
          navigate(`/users`)
        }
    },[navigate, params.id, users])

    let saveData = ()=>{
        let newUsers = [...users]
        newUsers.splice(params.id,1,{
            image,
            name,
            email,
            mobile,
            address,
            password
        })
        setUsers(newUsers)
        navigate(`/profile/${params.id}`)
    }


  return <>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{marginTop:"10px"}}>Edit Profile</h1>
    </div>  

    <div style={{textAlign:"center"}}>
        <Image src={users[params.id].img} style={{width:"180px", height:"180px"}} roundedCircle/>
     
    </div> <br/>
  
  <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Name</Form.Label>
        <Form.Control defaultValue={users[params.id].name} style={{fontSize:"20px", fontFamily:"verdana"}} onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Email ID</Form.Label>
        <Form.Control defaultValue={users[params.id].email} style={{fontSize:"20px", fontFamily:"verdana"}} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Mobile</Form.Label>
        <Form.Control defaultValue={users[params.id].mobile} type="number" style={{fontSize:"20px", fontFamily:"verdana"}} onChange={(e)=>{setMobile(e.target.value)}}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Address</Form.Label>
        <Form.Control defaultValue={users[params.id].address} style={{fontSize:"20px", fontFamily:"verdana"}} onChange={(e)=>{setAdress(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Password</Form.Label>
        <Form.Control type="password" defaultValue={users[params.id].password}/>
      </Form.Group>
      <div style={{textAlign:"center"}}>
        <Button variant="primary" type="submit" onClick={()=>saveData()}>
          Submit
        </Button>
      </div>
    </Form>
  </>
}

export default EditProfile
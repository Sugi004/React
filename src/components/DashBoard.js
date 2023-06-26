
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function DashBoard({users,setUsers}) {
  let navigate = useNavigate()
   

    let handleDelete = (i)=>{
      let newUsers = [...users]
      newUsers.splice(i,1);
      setUsers(newUsers)
    }
  return <>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{marginTop:"10px"}}>Dashboard</h1>
    </div>
      
    <div className='container'>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
              users.map((e,i)=>{
                return <tr key={i}>
                      <td>{i+1}</td>
                      <td>{e.name} </td>
                      <td>{e.email} </td>
                      <td>{e.mobile} </td>
                      <td>{e.address} </td>
                      <td>
                            <Button variant='primary'onClick={()=>{navigate(`/edit-user/${i}`)}} >Edit</Button>
                            &nbsp;
                            <Button variant='danger' onClick= {()=>handleDelete(i)}>Delete</Button>  
                      </td>
                  </tr>
              })
          }
        </tbody>
      </Table>
    </div>
  </>
  
}

export default DashBoard


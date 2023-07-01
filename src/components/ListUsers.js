import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
function ListUsers({users,setUsers}) {
  let navigate = useNavigate()
   

    let handleDelete = (i)=>{
      let newUsers = [...users]
      newUsers.splice(i,1);
      setUsers(newUsers)
    }
  return <>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{marginTop:"10px"}}>Users</h1>
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
                            
                            <i class="fa-solid fa-pen-to-square" style={{color: "#17416d", cursor:"pointer"}} onClick={()=>{navigate(`/edit-user/${i}`)}}></i>
                            &nbsp; &nbsp;
                           
                            <i class="fa-solid fa-trash" style={{color: "#17416d", cursor:"pointer"}} onClick= {()=>handleDelete(i)}></i>
                            &nbsp; &nbsp;
                            <i class="fa-solid fa-id-card" style={{color: "#17416d", cursor:"pointer"}} onClick={()=>{navigate(`/profile/${i}`)}}></i>
                      </td>
                  </tr>
              })
          }
        </tbody>
      </Table>
    </div>
  </>
  
}

export default ListUsers


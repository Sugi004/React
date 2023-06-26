import { useState } from "react";
import AddUser from "./components/AddUser";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditUser from "./components/EditUser";

function App() {

    let [users,setUsers] = useState ([
        {
            name:"Sugi",
            email:"sugi@gmail.com",
            mobile:"9788370456",
            address:"17/c5, Bharathi Nagar, Tamil nadu",
        },
        {
            name:"Aswin",
            email:"aswin@gmail.com",
            mobile:"7695992861",
            address:"18/22, Jeevanantham Nagar, Tamil nadu",
        },
        {
            name:"Vignesh",
            email:"vicky@gmail.com",
            mobile:"812345673",
            address:"Francis street, Sweden",
        },
        {
            name:"Siva",
            email:"siva@hotmail.com",
            mobile:"8608768971",
            address:"32, Ramasamy Nagar, Tamil nadu",
        },
        {
            name:"James",
            email:"james@gmail.com",
            mobile:"+123 454789",
            address:"Church Street, France",
        },
    ])
    
  return <>
  <BrowserRouter>
    <div id="wrapper">
          <SideBar/>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                <Routes>
                    <Route path="/dashboard" element={<DashBoard users={users} setUsers={setUsers}/>}></Route>
                    <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers}/>}></Route>
                    <Route path="/edit-user/:id" element={<EditUser users={users} setUsers={setUsers}/>}></Route>
                </Routes>
            </div>
        </div>
        
        </div>
    </div>
</BrowserRouter>
    </>
}

export default App;

import { useState } from "react";
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";
import user1 from '../src/images/user1.jpg'
import user2 from '../src/images/user2.jpeg'
import user3 from '../src/images/user3.jpg'
import user4 from '../src/images/user4.jpeg'
import user5 from '../src/images/user5.webp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditUser from "./components/EditUser";
import EditProfile from "./components/EditProfile";

function App() {

    let [users,setUsers] = useState ([
        {
            name:"Sugi",
            email:"sugi@gmail.com",
            mobile:"9788354547",
            address:"17/c5, Bharathi Nagar, Tamil nadu",
            img: user1,
            password:"Giosn@1234"
        },
        {
            name:"Aswin",
            email:"aswin@gmail.com",
            mobile:"7692154512",
            address:"18/22, Jeevanantham Nagar, Tamil nadu",
            img: user2,
            password:"Fioasn@4566"
        },
        {
            name:"Vignesh",
            email:"vicky@gmail.com",
            mobile:"8123456737",
            address:"Francis street, Sweden",
            img: user3,
            password:"Fioasn@4566"
        },
        {
            name:"Siva",
            email:"siva@hotmail.com",
            mobile:"8602411315",
            address:"32, Ramasamy Nagar, Tamil nadu",
            img: user4,
            password:"Hianty@0987"
        },
        {
            name:"James",
            email:"james@gmail.com",
            mobile:"+123 454789",
            address:"Church Street, France",
            img: user5,
            password:"Kinfro@8756"
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
                    <Route path="/users" element={<ListUsers users={users} setUsers={setUsers}/>}></Route>
                    <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers}/>}></Route>
                    <Route path="/edit-user/:id" element={<EditUser users={users} setUsers={setUsers}/>}></Route>
                    <Route path="/profile/:id" element={<Profile users={users} setUsers={setUsers}/>}></Route>
                    <Route path="/edit-profile/:id" element={<EditProfile users={users} setUsers={setUsers}/>}></Route>
                </Routes>
            </div>
        </div>
        
        </div>
    </div>
</BrowserRouter>
    </>
}

export default App;

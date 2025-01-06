import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
function User() {
    const [user,setuser]=useState([]);

    useEffect(()=>{
        axios.get('https://backend-demo-0jg8.onrender.com/api/user/fetch')
        .then(result=>{
          
          console.log(result.data);
          setuser(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const deleteUser=(id)=>{
        axios.delete(`https://backend-demo-0jg8.onrender.com/api/user/deleted/${id}`)
        .then(result=>{
            console.log("user deleted successfully");
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        
        <div>
             <h1>      
            <Link to="/createuser">
            <button className="creates">Create User</button>
            </Link></h1> 
           <table border="2">
                <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Address</th>
                     <th>Actions</th>
                </tr>
                {
                     user.map((item)=>(
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>
                                <Link to={`/Updateuser/${item._id}`}>
                                      <button>Update</button>
                                </Link>
                                <button onClick={(e)=>deleteUser(item._id)} >Delete</button>
                            </td>
                          </tr>
                     ))
                }
           </table>
        </div>
    )
}
export default User;
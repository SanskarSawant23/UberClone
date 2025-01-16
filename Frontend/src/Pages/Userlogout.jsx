import React from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
export const Userlogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    axios.get("http://localhost:4000/users/logout",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    }).then((response)=>{
        if(response.status === 200){
            localStorage.removeItem('token');
            navigate('/login')
        }
    })
  return (
    <div>Userlogout</div>
  )
}


import React ,{useContext, useEffect} from 'react'
import { UserDataContext } from '../Context/Usercontext'
import { useNavigate } from 'react-router-dom'

export const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log(token)
    useEffect(()=>{
      if(!token) {
        navigate('/login')
      }
    },[token]);


  return (
    <>  
        {children}
    </>
  )
}

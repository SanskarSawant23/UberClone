import React, { useContext, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../Context/Usercontext'


const Userlogin = () => {

 const[email, setEmail] = useState('') 
 const[password, setPassword] = useState('')  
 const[userData, setUserData] = useState({});
 const {user, setUser} = useContext(UserDataContext);
 const navigate = useNavigate();
  const onSubmithandler = async (e)=>{
    e.preventDefault();
   
  
    setUserData({
        email:email,
        password:password
    })
    console.log("userData", userData)






    const response = await axios.post(`http://localhost:4000/users/login`, {email:email, password:password})
    if(response.status === 200){
         const data = response.data;
         console.log(data)
         setUser(data.user);
         console.log(data.token)
         localStorage.setItem('token', data.token);
         navigate("/home")
         
    }
    console.log(userData);
    setEmail(' ');
    setPassword(' ');
}

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <img className='w-14' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fuber-logo-vector-png-uber-icon-png-50-px-1600.png&f=1&nofb=1&ipt=53a134f2c1ad552c19a96aac54064a5a8201abbe340d9523bec210f589396d36&ipo=images" alt="" />
    <div>
    <form onSubmit={(e)=>{
            onSubmithandler(e)
    }}>
            <h3 className='text-xl font-medium mb-2'>What's your email</h3>

            <input required 
            className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            value={email}
            onChange={((e)=>{setEmail(e.target.value)})}
            placeholder='email@example.com' 
            /> 

            <h3 className='text-xl font-medium'>Enter Password</h3>
            <input required
            className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            onChange={((e)=>setPassword(e.target.value))}
            placeholder='Password' />

            <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full' >Login</button>
            <p className='text-center '>New here? <Link to={'/signup'} className = "text-blue-600">Create new Account</Link>

            </p>
    </form>
    </div>
     
     <div>
        <Link to={'/driver-login'} className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full'>Sign in as Driver</Link>
     </div>
      
    </div>
  )
}

export default Userlogin
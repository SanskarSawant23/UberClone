import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Driversignup = () => {
    const[email, setEmail] = useState('') 
    const[password, setPassword] = useState('') 
    const[name, setName] = useState('')
    const[lastname, setLastname] = useState('');
    const[userData, setUserData] = useState({});
    const onSubmithandler = (e)=>{
       e.preventDefault();
       console.log('eeelo')
   
       setUserData({
           fullname:{
            firstname:firstname,
            lastname:lastname
           },
           email:email,
           password:password
       })
       console.log(userData);
       setEmail(' ');
       setPassword(' ');
       setName(' ');
       setPassword(' ');
       setLastname(' ')
   }
   
     return (
       <div className='p-7 h-screen flex flex-col justify-between'>
       <img className='w-14' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fuber-logo-vector-png-uber-icon-png-50-px-1600.png&f=1&nofb=1&ipt=53a134f2c1ad552c19a96aac54064a5a8201abbe340d9523bec210f589396d36&ipo=images" alt="" />
       <div>
       <form onSubmit={(e)=>{
               onSubmithandler(e)
       }}>
               <h3 className='text-xl font-medium mb-2'>Enter Driver's details</h3>
 
               <div className='flex gap-3 '>
               <input required 
               className=' bg-[#eeeeee] mb-6 w-1/2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
               type="name" 
               onChange={((e)=>{setName(e.target.value)})}
               placeholder='First name' 
               value={name}
              
               /> 
               <input required 
               className=' bg-[#eeeeee] mb-6 w-1/2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
               type="name" 
               onChange={((e)=>{setLastname(e.target.value)})}
               placeholder='last name'
               value={lastname} 
               /> 
               </div>
               <h3 className='text-xl font-medium mb-2'>Enter you Email</h3>
               
               <input required 
               className=' bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
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
               value={password}
               placeholder='Password' />
   
               <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full' >Login</button>
               <p className='text-center '>Already have acount? <Link to={'/login'} className = "text-blue-600">Sign in</Link>
   
               </p>
       </form>
       </div>
        
        <div>
         <p className='text-[10px] leading'> This site is protected by reCAPTCHA and the Google Policy</p>
        </div>
         
       </div>
     )
}

export default Driversignup
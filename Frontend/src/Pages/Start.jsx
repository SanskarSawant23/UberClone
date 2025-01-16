import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1682834983265-27a10ba5232c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZmZpYyUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-2 flex justify-between flex-col w-full bg-red-400'>
            <img className='w-14 ml-8' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fuber-logo-vector-png-uber-icon-png-50-px-1600.png&f=1&nofb=1&ipt=53a134f2c1ad552c19a96aac54064a5a8201abbe340d9523bec210f589396d36&ipo=images" alt="" />
            <div className='bg-white py-4 px-4'>
                <h1 className='text-3xl pb-3 font-bold'>Get Started With uber</h1>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Start
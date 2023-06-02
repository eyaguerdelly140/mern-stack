import React from 'react'
import {useState} from'react'
import axios from 'axios'
function Login() {
    const [data,setData]= useState({
        email:'',
        password:''
    })
const loginUser =(e) =>{
    e.preventDefault()
    axios.get('/')
}
  return (
    <div>
        <form onSubmit ={loginUser}>
        <input type='email' placeholder='enteremail' value ={data.email} onChange={(e) => setData({...data,email:e.target.value})}/>
        <input type='password' placeholder='enterpassword'value ={data.password} onChange={(e) => setData({...data,password:e.target.value})}/>
        <button type ='sumbit'>submit</button>
        </form>
    </div>
  )
}

export default Login
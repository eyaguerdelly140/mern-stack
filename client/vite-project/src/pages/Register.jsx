import React, { useState} from 'react';
import axios from 'axios';
import './Register.css'



function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('/register', {
        name,
        email,
        password
      });
      alert('Welcome to the experience of a lifetime!!');
    } catch (error) {
      alert('Oups there is a problem.Please try again...')
    }
  };

  return (
         <div className="signUpContainer">
      <div className="leftSection">
        <img className="imageSignIn" src="https://www.radiocontact.be/app/uploads/2021/05/2019-9-1350x500-c-default.jpeg" alt="Signup" />
      </div>
      <div className="rightSection">
      <h3>Join us!</h3>
        <form onSubmit={registerUser} className="formxx">
            <label>Your Name : </label>
            <input className='fo-fo'
              type="text"
              placeholder="enter name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              
               required />
             <label>Your Email :</label>
            <input  className='fo-fo'
              type="email"
              placeholder="enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required   />
            <label>Your Password :</label>
                  <input className='fo-fo'
              type="password"
              placeholder="enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            
            /> <br/> <br/> 
            <button type="submit" className='submit'>Register For The Party</button>
        
        </form>

      </div> </div>
  );
}

export default Register;
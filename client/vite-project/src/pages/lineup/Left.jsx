import React from 'react'
import './Left.css'
function Left() {
  return (
    <div className='axax'>
        <h1 className='fcfc'>Left a message</h1>
        <div className='displayingxx'>
        <form className='forlxlx'>
        <label htmlFor="email"> <strong>Email :</strong></label>
      <input
        type="email"
        id="email"
        required placeholder='Your email'
      /> 

      <label htmlFor="message"> <strong>Message :</strong></label>
      <textarea
        id="message"
        rows="4"
        cols="50"
        required placeholder='Message'
      /> <br/> 
      <button type="submit" className='bvbv'> <strong>SEND</strong></button>
    </form>
    </div></div>
  )
}

export default Left
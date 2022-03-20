import React from 'react'
import { Brand } from '../../components'
import "./register.css"
const Register = () => {
  return (
    <div className='register'>
      <div className="main">
        <div className="tulisan">

          <Brand className="brand_register" />
          <h1 className="register_title">Create New Account</h1>
          <div className="link_login">Already A Member ? <span>Log In</span></div>
        </div>

        <div className="input_group">
          <div className="input_atas_group">

            <div className="input_register">

              <label htmlFor="fullName">Full Name</label>
              <div className="input-single">

                <input type="text" placeholder='Full Name' id='fullName' />
                <i className="fas fa-user-alt"></i>
              </div>
            </div>
            <div className="input_register">

              <label htmlFor="userName">User Name</label>
              <div className="input-single">

                <input type="text" placeholder='User Name' id='userName' />
                <i className="fas fa-user-alt"></i>
              </div>
            </div>
          </div>
          <div className="input_register">

            <label htmlFor="emailInput">Email</label>
            <div className="input-single">

              <input type="email" placeholder='Email' id='emailInput' />
              <i className="fa-solid fa-at"></i>
            </div>
          </div>
          <div className="input_register">

            <label htmlFor="passs">Password</label>
            <div className="input-single">

              <input type="password" placeholder='Email' id='passs' />
              <i className="fa-solid fa-eye-slash"></i>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Register
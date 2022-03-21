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
        <div className="bawah_login">
          <p className='sosmed-p'>Sign Up With Social Media</p>
          <div className="sosmed_login_icon">
            <div className="atas_login_sosmed_btn">

              {/* login sosmed icon */}
              <div className="gradient_icon_login">
                <div className="black_icon_login">
                  <i class="fab fa-google"></i>
                </div>
              </div>
              {/* login sosmed icon */}
              <div className="gradient_icon_login">
                <div className="black_icon_login">
                  <i className="fab fa-facebook"></i>
                </div>
              </div>
              {/* login sosmed icon */}
              <div className="gradient_icon_login">
                <div className="black_icon_login">
                  <i class="fab fa-apple"></i>
                </div>
              </div>

            </div>
            <button className=' btn-login btn-register-edit'>
              <p>Login to your account</p>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

        </div>
        <div className="copyright">
          <p>&copy; 2022 - Design And Developed By   Rivo Pelu</p>
        </div>
      </div>
    </div>
  )
}

export default Register
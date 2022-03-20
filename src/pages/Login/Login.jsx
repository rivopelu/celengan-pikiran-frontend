import React from 'react'
import { Brand } from '../../components'
import './login.css'
const Login = () => {



  return (
    <div className='main_login'>
      <Brand className='login_brand' />
      <h1 className='login_title'>Login To your account</h1>
      <p className="subtitle_login">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum illo dolore.
      </p>
      <div className="content_login">


        <div className="input-group">
          <div className="input-single">

            <input type="text" placeholder='Email' />
            <i className="fas fa-user-alt"></i>
          </div>
          <div className="input-single">

            <input type="password" placeholder='Password' />
            <i className="fas fa-eye-slash"></i>
          </div>

          <button className=' btn-login'>
            <p>Login to your account</p>
            <i className="fas fa-arrow-right"></i>
          </button>

        </div>
        <h1 className="sles">/</h1>
        <div className="lupa_pas" >
          Forgot Password ?
        </div>


        <div className="login_sosmed">

          <div className="title_loginSosmed">
            Or Login With Social Media
          </div>


          <div className="login_sosmed_btn_group">

            <div className="gradient_login">
              <div className="btn_sosmed">
                <i className="fab fa-google"></i> <p>Sign in with google</p>
              </div>
            </div>
            <div className="gradient_login">
              <div className="btn_sosmed">
                <i className="fab fa-facebook"></i> <p>Sign in with Facebook</p>
              </div>
            </div>
            <div className="gradient_login">
              <div className="btn_sosmed">
                <i className="fab fa-apple"></i> <p>Sign in with Apple</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className=" lupa_pas_desktop" >
        Forgot Password ? 
      </div>
      <div className="copyright">
        <p>&copy; 2022 - Design And Developed By   Rivo Pelu</p>
      </div>
    </div>
  )
}

export default Login
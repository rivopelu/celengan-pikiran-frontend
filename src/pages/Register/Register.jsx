import React, { useState } from 'react'
import axios from 'axios'
import { Brand } from '../../components'
import "./register.css"
import gambarRegis from "./img/imgregister.png"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert,] = useState("");
  const [error, setError] = useState('');


  const history = useHistory()

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value)
  }

  const onChangeUserName = (e) => {
    const value = e.target.value;
    setUsername(value);
  }
  const onChangeEmail = (e => {
    const value = e.target.value;
    setEmail(value)
  })

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  }

  const klikRegister = () => {
    const data = {
      username,
      name,
      email,
      password,
    };
    axios
      .post("http://localhost:5000/v1/user/register", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setUsername('');
            setEmail('');
            setName('');
            setPassword('')
            history.push('/login')
          }
        }
        console.log(result.data);
      })
      .catch(e => {
        setError(e.response.data.message)
      })
  }


  return (
    <div className='register'>
      <div className="main">
        <div className="tulisan">

          <Brand className="brand_register" />
          <h1 className="register_title">Create New Account</h1>
          <div className="link_login">Already A Member ? <span onClick={() => history.push('/login')}>Log In</span></div>
        </div>
        {alert && (
          <div className="alert">
            <h1>{alert}</h1>
          </div>
        )
        }
        {error && (
          <div className="alert">
            <h1>{error}</h1>
          </div>
        )
        }

        <div className="input_group">
          <div className="input_atas_group">

            <div className="input_register">

              <label htmlFor="fullName">Full Name</label>
              <div className="input-single">

                <input type="text" placeholder='Full Name' id='fullName' value={name} onChange={onChangeName} />
                <i className="fas fa-user-alt"></i>
              </div>
            </div>
            <div className="input_register">

              <label htmlFor="userName">User Name</label>
              <div className="input-single">

                <input type="text" placeholder='User Name' id='userName' value={username} onChange={onChangeUserName} />
                <i className="fas fa-user-alt"></i>
              </div>
            </div>
          </div>
          <div className="input_register">

            <label htmlFor="emailInput">Email</label>
            <div className="input-single">

              <input type="email" placeholder='Email' id='emailInput' value={email} onChange={onChangeEmail} />
              <i className="fa-solid fa-at"></i>
            </div>
          </div>
          <div className="input_register">

            <label htmlFor="passs">Password</label>
            <div className="input-single">

              <input type="password" placeholder='password' id='passs' value={password} onChange={onChangePassword} />
              <i className="fa-solid fa-eye-slash"></i>
            </div>
          </div>
          {/* <div className="input_register">

            <label htmlFor="passs">Repeat Password</label>
            <div className="input-single">

              <input type="password" placeholder='repeat password' id='passs' />
              <i className="fa-solid fa-eye-slash"></i>
            </div>
          </div> */}

        </div>
        <div className="bawah_login">
          <p className='sosmed-p'>Sign Up With Social Media</p>
          <div className="sosmed_login_icon">
            <div className="atas_login_sosmed_btn">

              {/* login sosmed icon */}
              <div className="gradient_icon_login">
                <div className="black_icon_login">
                  <i className="fab fa-google"></i>
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
                  <i className="fab fa-apple"></i>
                </div>
              </div>

            </div>
            <button onClick={klikRegister} className=' btn-login btn-register-edit'>
              <p>Login to your account</p>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

        </div>
        <div className="copyright">
          <p>&copy; 2022 - Design And Developed By   Rivo Pelu</p>
        </div>
      </div>
      <div className="kanan_register">
        <img src={gambarRegis} alt="jangan datan" />
      </div>
    </div>
  )
}

export default Register
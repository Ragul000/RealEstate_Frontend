import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import Home from "../Home";
const SignupForm = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')




  const UsernameChange = (e) => {
    setUsername(e.target.value)
    setErrors({ ...errors, username: '' })

  }

  const EmailChange = (e) => {
    setEmail(e.target.value)
    setErrors({ ...errors, email: '' })

  }

  const PasswordChange = (e) => {
    setPassword(e.target.value)
    setErrors({ ...errors, password: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {}

    console.log('Form submitted:');
    if (username.length < 3) {
      // setErrors({...errors, title: "Title should be atleast 3 characters long"})
      err.username = "Username should be 3 characters long"// err="Title should be"
    }
    if (password.length < 6) {
      // setErrors({...errors, title: "Title should be atleast 3 characters long"})
      err.password = "Password should be atleast 6 characters long"// err="Title should be"
    }

    if (!email) {
      err.email = "Enter a valid mailid"
    }

    if (Object.keys(err).length > 0) {
      setErrors({ ...err })
      return
    }
    <Link to={Home}></Link>

  };
  return (
    <div className="wrapper">

      <div className="signup-container">

        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>
          <div className="input-group">

            <input type="text" name="username" placeholder="Username" value={username} onChange={UsernameChange} />

          </div>
          {errors.username ? <div id="Error">{errors.username}</div> : null}
          <div className="input-group">

            <input type="email" name="email" placeholder="Emailid" value={email} onChange={EmailChange} />

          </div>
          {errors.email ? <div id="Error">{errors.email}</div> : null}
          <div className="input-group">

            <input type="password" name="password" placeholder="Password" value={password} onChange={PasswordChange} />

          </div>
          {errors.password ? <div id="Error">{errors.password}</div> : null}
          <button type="submit">Sign Up</button>
          <div className="signin-link">
            <p><Link>Already having an account?Sign in</Link></p>
          </div>
          <div className="social-platform">
            <p>Or Sign Up with</p>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>

            </div>
          </div>

        </form>
      </div>
    </div>

  )
}
export default SignupForm
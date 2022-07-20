import {useState} from 'react'
import { Link } from 'react-router-dom'
import style from './login.css'  
import '../forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../AuthContext'


function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
    <div className='mainContainer' >
      <div className='loginContainer' >
        <h1 className='loginTitle'>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form' className='formStyle'>
          <input className='emailInputStyle'
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <input className='passwordInputStyle'
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit' className='buttonStyle'>Login</button>
        </form>
        <p className='textStyle1'>
          Don't have and account? 
          <Link to='/register'>Create one here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
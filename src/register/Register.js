import {useState} from 'react'
import '../forms.css'
import {auth} from '../firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from '../AuthContext'
import style from './register.css'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  //Password validation
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  //Register action
  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='main'>
      <div className='center'>
        <div className='auth'>
          <h1 className='registerTitle'>Create account</h1>
          {error && <div className='auth__error'>{error}</div>}
          <form onSubmit={register} name='registration_form' className='formStyle' >
            <input  className='emailInputStyle'
              type='email' 
              value={email}
              placeholder="Enter your email"
              required
              onChange={e => setEmail(e.target.value)}/>

            <input className='passwordInputStyle'
              type='password'
              value={password} 
              required
              placeholder='Enter your password'
              onChange={e => setPassword(e.target.value)}/>

              <input 
              type='password' className='passwordInputStyle'
              value={confirmPassword} 
              required
              placeholder='Confirm password'
              onChange={e => setConfirmPassword(e.target.value)}/>

            <button type='submit' className='buttonStyle'>Register</button>
          </form>
          <span className='textStyle'>
            Already have an account?
            <Link to='/login'>Go to login</Link>
          </span>
        </div>
        <div>
          <img src='maidRegister.jpeg' className='imgStyle'/> 
        </div>
      </div>
    </div>
  )
}

export default Register
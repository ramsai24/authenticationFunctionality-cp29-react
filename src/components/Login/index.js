// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const successLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }
  const onLoginCreds = async () => {
    // const username = 'rahul'
    // const password = 'rahul@2021'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    // const url = 'https://apis.ccpb.in/login'  //since domain name in url is wrong (instead of ccbp,ccpb is written)
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(userDetails),
    // }
    // const response = await fetch(url, options)
    // const data = await response.json()

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      successLogin(data.jwt_token)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onLoginCreds}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login

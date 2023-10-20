import { GoogleLoginButton } from "react-social-login-buttons"
import { LoginSocialGoogle } from "reactjs-social-login"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setUserImg, setAccessToken, setIsLoggedIn } from "../Redux/userSlice"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className="h-[75vh] px-[5%] flex justify-center items-center">

      <LoginSocialGoogle
      client_id= {import.meta.env.VITE_CLIENT_ID}
      scope="openid profile email https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata"
      discoveryDocs={["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]}
      access_type="offline"
      onResolve={({provider, data}) => {

        console.log(provider,data)
        dispatch( setUserImg(data.picture) )
        dispatch( setAccessToken(data.access_token) )
        dispatch( setIsLoggedIn(true))
        dispatch( setAccessToken(data.access_token))
        navigate(`/MyNotes?name=${data.family_name}`)

      }}
      onReject={(err) => {
        console.log(err)
      
      }}
      >

        <GoogleLoginButton/>

      </LoginSocialGoogle>
    </div>
  )
}

export default Login

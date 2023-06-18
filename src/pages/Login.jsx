import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { app } from '../firebase/firebase';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    getRedirectResult(auth)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }, []);

  const handleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="h-[75vh] px-[5%] flex justify-center items-center">
        <GoogleLoginButton onClick={handleLogin} disabled={loading} />
    </div>
  );
}

export default Login;

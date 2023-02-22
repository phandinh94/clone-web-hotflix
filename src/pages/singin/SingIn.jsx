import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingIn.scss";

function SingIn() {
 const [password, setPassword]= useState("")
 const [email, setEmail] = useState("")
 const navigate = useNavigate()


 const dataUser = JSON.parse(localStorage.getItem("user"))
 console.log(dataUser);
    const user = dataUser[0]
    const emailLocal = user.email
    const passwordLocal =user.password

 const handleClick = (e) => {
    e.preventDefault()
    if(email === ""){
        alert("please enter your email")
    } else if (password === ""){
        alert("please enter your password")
    } else if(email === "" && password ===""){
        alert("please enter your email and password")
    }
    if(email !== emailLocal && password!==passwordLocal){
        alert("email and password wrong")
    } else if(email === emailLocal && password!==passwordLocal){
        alert("password wrong")
    } else if(email !== emailLocal && password === passwordLocal){
        alert("email wrong")
    } else {
        navigate("/main")
    }
 }

  return (
    <div className="singin">
      <div className="form-input">
        <form >
          <div>
            <label>Email</label>
            <input 
            className="email-login" 
            name="EmailLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
            className="password-login"
            name="PasswordLogin"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             />
          </div>
          <div>
            <input type="checkbox" /> <span> Remember Me</span>
          </div>
          <button onClick={handleClick}>Sing in</button>
        </form>
      </div>
    </div>
  );
}

export default SingIn;

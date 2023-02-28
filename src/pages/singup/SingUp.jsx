import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingUp.scss";

function SingUp() {
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswrodUser] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const collecData = (e) => {
    e.preventDefault();
    if (nameUser === "") {
      alert("please enter your name");
    } else if (emailUser === "") {
      alert("please enter your name");
    } else if (passwordUser === "") {
      alert("please enter your name");
    } else {
      user.push({ name: nameUser, email: emailUser, password: passwordUser });
      localStorage.setItem("user", JSON.stringify(user));
      console.log(localStorage.setItem("user", JSON.stringify(user)));
    JSON.parse(localStorage.getItem("user"))


        navigate("/singin");
    }
  };
  return (
    <div className="singin">
      <div className="form-input">
        <form>
          <div>
            <label>Name</label>
            <input
              className="name-singup"
              name="NameSingUp"
              type="text"
              placeholder="Name"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="email-singup"
              name="EmailSingUp"
              type="text"
              placeholder="Email"
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="password-singup"
              name="PasswordSingUp"
              type="text"
              placeholder="Password"
              value={passwordUser}
              onChange={(e) => setPasswrodUser(e.target.value)}
            />
          </div>
          <div>
            <input type="checkbox" />
            <span>
              I agree to the <span>Privacy Policy</span>
            </span>
          </div>
          <button onClick={collecData}>Sing in</button>
        </form>
      </div>
    </div>
  );
}

export default SingUp;

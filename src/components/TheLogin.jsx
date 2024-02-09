import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Backimg from "../image/backimg.svg";

const TheLogin = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginStatus = localStorage.getItem("loginStatus");
  console.log("Login stutas", loginStatus);
  if (loginStatus === "true") {
    window.location.href = "/";
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "" && password === "") {
      setError("Please fill username or password");
    } else if (username === "") {
      setError("Fill username");
    } else if (password === "") {
      setError("fill password");
    } else if (username === "Pravin" && password === "Pravin@123") {
      localStorage.setItem("loginStatus", true);
      navigate("/");
      setLoading(true);
    } else {
      localStorage.setItem("loginStatus", false);
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="bg-pDOrange">
      <form id="Form_main">
        <div className="form">
          {loading === true ? (
            <p className="wel_come_text">Wel-Come</p>
          ) : (
            <>
              <div className="user_name">
                <label>User Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>

              <div className="password">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div>
                <button type="button" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </>
          )}
        </div>
      </form>
      <div className="Animation_main">
        <Animation ids="Dot_1" />
        <Animation ids="Dot_2" />
        <Animation ids="Dot_3" />
        <Animation ids="Dot_4" />
        <Animation ids="Dot_5" />
        <Animation ids="Dot_6" />
        <Animation ids="Dot_7" />
        <Animation ids="Dot_8" />
        <Animation ids="Dot_9" />
        <Animation ids="Dot_10" />
      </div>
    </div>
  );
};

function Animation(props) {
  return (
    <div className="Animation_bg" id={props.ids}>
      <img src={Backimg} alt="" />
    </div>
  );
}

export default TheLogin;

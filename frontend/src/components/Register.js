import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState(""); //state for the username input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  // function to handle the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, email, password };

    setError(""); //clear the previous error
    setMessage(""); //clear the previous messages

    try {
      const res = await fetch("https://password-reset-1-2d8z.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(data.message || "Regisration successfull");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        const errordata = await res.json();
        setError(
          errordata.message ||
            "Registration not successful, try again change username and email"
        );
      }
    } catch (error) {
      setError("Unable to register");
    }
  };

  // rendering the component

  const nav = () => {
    navigate('/password-reset')
  }
  const login = () => {
    navigate('/login')
  }
  return (
    <div className="bg-blue-300 p-4 text-center">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-5 fw-bold text-center">Register</h2>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input
            type="text"
            placeholder="Enter your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white rounded m-3 p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold mr-9">Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded m-3 p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold m-2">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             className="bg-white rounded m-3 p-2"
            required
          />
        </div>

        <button type="submit" className="mb-3 mt-3 m-3 bg-orange-500 px-2 py-1 rounded text-white">
          Register
        </button>
        <button className="mb-3 mt-3 bg-orange-500 px-2 py-1 rounded text-white" onClick={nav}>PasswordReset</button>
        <button className="mb-3 mt-3 m-3 bg-orange-500 px-2 py-1 rounded text-white" onClick={login}>Login Page</button>
      </form>
    </div>
  );
};

export default RegisterForm;

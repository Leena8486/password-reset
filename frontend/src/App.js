import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import PasswordReset from "./components/PasswordReset";
import ResetPasswordForm from "./components/ResetPasswordForm";
import "./App.css"
import Login from "./components/Login";
import Home from "./components/Home";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>

    </div>
  )

}

export default App
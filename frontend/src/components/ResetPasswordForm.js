import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPasswordForm = () => {

    const { token } = useParams()
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");


    // function to handle the form submission

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(''); //clear the previous error
        setMessage(""); //clear the previous messages

        try {
            const res = await fetch(`https://password-reset-1-2d8z.onrender.com/api/users/reset-password/${token}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({password})
            })

            if (res.ok) {
                const data = await res.json();
                setMessage(data.message || "Password reset succesfully");
                setPassword('')
            } else {
                const errordata = await res.json();
                setError(errordata.message || "Password not reset please try again")
            }

        } catch (error) {
            setError("Unable to reset",error)
        }

    }


    // rendering the component

    return (
        <div className="bg-blue-300">
            <form onSubmit={handleSubmit}>
                <h2 className="mb-5 text-center fw-bold">Reset Password</h2>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}


                <div className="mb-3 text-center">
                    <label className="form-label fw-bold m-3">Password</label>
                    <input
                        type="password"
                        placeholder="Reset your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white rounded p-2"
                        required
                    />
                </div>
                <center>
                <button type="submit" className="mb-3 text-center bg-orange-500 py-1 px-2 rounded text-white">Reset password</button></center>
            </form>
        </div>
    )


}


export default ResetPasswordForm
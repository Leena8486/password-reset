import {useState} from "react";

const PasswordReset = () => {

    const[email, setEmail] = useState('');

    const[error, setError] = useState("");
    const [message, setMessage] = useState("");


    // function to handle the form submission

    const handleSubmit = async(e) => {
        e.preventDefault();



        setError(''); //clear the previous error
        setMessage(""); //clear the previous messages

        try {
        const res = await fetch("https://fsd-demo-3-2.onrender.com/api/users/password-reset", {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({email})
            })

            if(res.ok){
                const data = await res.json();
                setMessage(data.message || "Password reset link sent successfully");

                setEmail("");

            } else {
                const errordata = await res.json();
                setError(errordata.message || "Failed to submit the eamil, Please try again ")
            }

        } catch(error){
            setError("Email failed try again")
        }

    }


    // rendering the component

    return(
        <div className="bg-blue-300 p-4 rounded text-center">
            <form onSubmit={handleSubmit}>
                <h2 className="mb-5 text-center">Password Reset Link</h2>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                    <label className="form-label fw-bold m-3">Email</label>
                    <input
                        type = "text"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white p-2 rounded"
                        required
                    />
                </div>


               
                <center>
                <button type="submit" className="mb-3 mt-3 bg-orange-500 rounded px-2 py-1 text-white">Send Reset Link</button>
                </center>
            </form>
        </div>
    )


}


export default PasswordReset
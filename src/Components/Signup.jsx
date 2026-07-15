import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Signup=()=>{
    // declare the states here
    const [username, setUsername]=useState("")
    // declare the state 
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    // three states for passing DataTransfer
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState ("")
    const[error,setError]=useState("")
    // function to sighn up 
    const handlesubmit =async (e)=>{
            e.preventDefault()
            setLoading("Please wait...")
            // creat an empty digital envelop to store user inputs
            const formdata= new FormData()
            formdata.append("username",username)
            formdata.append("email",email)
            formdata.append("password",password)
            formdata.append("phone",phone)
            try {
                const response= await axios.post("https://baxter.alwaysdata.net/api/signup",formdata)
                setSuccess(response.data.message)
                setLoading("")
            } catch (error) {
               setError("Something went wrong ")
               setLoading("") 
            }
    }
    return(
        <div className="row justify-content-center">
           <div className="col-md-6 card shadow p-3 mt-3 text-center ">
            <h1 className="text-black">signup</h1>
            {/* bind the state here  */}
            <h1 className="text-danger">{loading}</h1>
            <h1 className="text-success">{success}</h1>
            <h1 className="text-danger">{error}</h1>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" className="form-control"  placeholder="Enter username"
                onChange={(e)=>setUsername(e.target.value)}
                /><br />
                <input type="email" className="form-control" placeholder="Enter email" 
                onChange={(e)=>setEmail(e.target.value)}/><br />
                <input type="password" className="form-control"placeholder="Enter password" 
                onChange={(e)=>setPassword (e.target.value)}
                /><br />
                <input type="number" className="form-control" placeholder="Enter Phone"
                onChange={(e)=>setPhone (e.target.value)}
                /><br />
                <input type="submit" value="signup" className="form-control bg-danger text-white" placeholder="signup"/><br />
                <p>Already have an account?<Link to="/signin">Signin</Link></p>
            </form>
           </div>

        </div>
    )
}
export default Signup
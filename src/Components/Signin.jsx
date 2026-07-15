import axios from "axios"
import{useState} from "react"
import { Link ,useNavigate,useNavigate } from "react-router-dom"

const Signin=()=>{
    let navigate=useNavigate();
    // declare the states here 
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    // states for passing data transfer 
     const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState ("")
    const[error,setError]=useState("")
    // function to sign in 
    const handlesubmit=async (e)=>{
        e.preventDefault ()
        setLoading("please wait")
        // creat an empty digital envelop 
        const formdata= new FormData ()
        formdata.append("email",email)
        formdata.append("password",password)
        try {
            const response= await axios.post("https://baxter.alwaysdata.net/api/signin",formdata)
                setSuccess(response.data.message)
                setLoading("")
                // redirect user to get products page 
                // nb upon loginsuccessful 
                if (response.data.user){
                    // it means login successful
                    navigate("/")
                }
        } catch (error) {
          setError("Something went wrong ")
               setLoading("")    
        }
    }

    return(
        <div className="row justify-content-center">
        <div className="col-md-6 card shadow p-4 mt-3 text-center">
            <h1 className="">signIn</h1>
            {/* bind the state here  */}
            <h1 className="text-warning">{loading}</h1>
            <h1 className="text-info">{success}</h1>
            <h1 className="text-info">{error}</h1>
            <form action="" onSubmit={handlesubmit}>
                <input type="email" className="form-control" placeholder="Email"  
                onChange={(e)=>setEmail(e.target.value)}
                /><br />
                <input type="password" className="form-control"
                placeholder="Password" 
                onChange={(e)=>setPassword (e.target.value)}
                /> <br/>
                <input type="submit" value="Sign in" className="form-control bg-primary text-white" /><br />
                <p>Already have an account <Link to="/signup">sign up</Link></p>
            </form>
        </div>
        
        </div>
    )
}
export default Signin 
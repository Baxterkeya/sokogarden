import axios from "axios"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
const Mpesapayment=()=>{
        const {singleproduct} =useLocation().state || {}
        // image path goes here 
        const imagepath ="https://baxter.alwaysdata.net/static/images/"
    // declare the state
    const [phone,setPhone]=useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    // function to  handle submite 
    const handlesubmit =async (e)=>{
        e.preventDefault()
        setLoading("please wait")
        // creat an empty envelope
        const formdata=new FormData()
        formdata.append("phone",phone)
        formdata.append("amount",singleproduct.product_cost)

        try {
            const response=await axios.post("https://baxter.alwaysdata.net/api/mpesa_payment",formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
        return(
            
        <div className="row justify-content-center">
            <div className="col-md-6 card shadow p-4 mt-3">
                
                {/* image goes here  */}
                <img src={imagepath + singleproduct.product_photo} alt="" height={200} />
                <h5>{singleproduct.product_name}</h5>
                <p>{singleproduct.product_description}</p>
                <b className="text-warning0">{singleproduct.product_cost}</b><br />
                <span className="badge bg-success">{singleproduct.product_category}</span><br />
                {/* bind here  */}
                <h1 className="text-danger">{loading}</h1>
                <h1 className="text-success">{success}</h1>
                <h1 className="text-danger">{error}</h1>
                <form action="" onSubmit={handlesubmit}>
                    <input type="tel" className="form-control" placeholder="Enter phone 254xxxxxxx" onChange={(e)=>setPhone(e.target.value)} /><br />
                    <button className="btn btn-info w-100">Make payment</button>
                </form>
            </div>
        </div>
    )
}
export default Mpesapayment
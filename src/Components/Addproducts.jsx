import axios from "axios"
import { useState } from "react"

const Addproducts=()=>{
    // declare the states here 
    const [productname, setProductname]=useState("")
    const[productcategory,setProductcategory]=useState("")
    const[productdescription,setProductdescription]=useState("")
    const[productcost,setProcutcost]=useState("")
    const[productphoto,setProductphoto]=useState("")

    // three states for passing DataTransfer
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState ("")
    const[error,setError]=useState("")
    // function to sigh up 
    const handlesubmit =async (e)=>{
            e.preventDefault()
            setLoading("Please wait...")
            // creat an empty develope
            const formdata = new FormData ()
            formdata.append("product_name",productname)
            formdata.append("product_category",productcategory)
            formdata.append("product_description",productdescription)
            formdata.append("product_cost",productcost)
            formdata.append("product_photo",productphoto)
            try {
                const response= await axios.post("https://baxter.alwaysdata.net/api/addproduct",formdata)
                setSuccess(response.data.message)
                setLoading("")
            } catch (error) {
                setError("something went wrong")
                setLoading("")
                
            }
            
    }
    return(
        <div className="row justify-content-center">
            <div className="col-md-6 shadow p-3  mt-3 text-center">
                <h1 className="text-black">Upload Products</h1>
                {/* bind the state  */}
                <h3 className="text-warning">{loading}</h3>
                <h3 className="text-success">{success}</h3>
                <h3 className="text-danger">{error}</h3>
                <form action="" onSubmit={handlesubmit} >
                
                <input type="text"
                placeholder="🔰Enter Product Name "
                className="form-control"
                required
                onChange={(e)=>setProductname(e.target.value)} /> <br />
                
                    
                    <input type="text"  className="form-control" placeholder="♨️Enter Product Category" required
                    onChange={(e)=>setProductcategory(e.target.value)}/> <br />
                   <input type="text" className="form-control" placeholder="💈Describe Your product" required
                   onChange={(e)=>setProductdescription(e.target.value)} />  <br />
                    <input type="number" className="form-control" placeholder="💰Enter Product Cost" required
                    onChange={(e)=>setProcutcost(e.target.value)} /><br />
                    <h6 className="text-center"><b>Browse/Upload products images</b></h6>
                    <input type="file" className="form-control" required
                    accept="image/*" onChange={(e)=>setProductphoto(e.target.files[0])} /><br /><br />
                    <button className="btn btn-primary" >Upload products</button>

                </form>

            </div>
            
        </div>
    )
}

export default Addproducts
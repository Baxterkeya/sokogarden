import axios from "axios"
import { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"
const Getproducts=()=>{
    let navigate= useNavigate()
    // declare the three status for getting products 
    const[loading,setLoading]=useState("")
    const[products,setProducts]=useState([])
    const[error,setError]=useState("")

    // define the state 
    const[search,setSearch]=useState("");
    const[visiblecount,setVisiblecount]=useState(4);
    // filteringlogic 
    const filtered_products=products.filter((item)=>    
        item.product_name.toLowerCase().includes(search.toLowerCase())||
    item.product_description.toLowerCase().includes(search.
        toLowerCase())
    );


    // function to get products 
    const getproducts = async ()=>{
        setLoading("please wait......")
        try {
            const response= await axios.get("https://baxter.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    // call the function 
    useEffect(()=>{
        getproducts()
    })
    // log to see if we have products 
    console.log(products);
    // image path 
    const imagepath ="https://baxter.alwaysdata.net/static/images/"

    return(
        <div className="row container-fluid justify-content">
            <div className=" row justify-content-center mt-3 mb-3">
                <input
            className="form-control w-50"
            type="search"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
</div>
            
            {/* carousel goes here  */}
            <Carousel/>
            {/* map the products  */}
            {filtered_products.slice(0,visiblecount).map((singleproduct)=>

            
            <div className="col-md-3 mb-4">
                <div className="card shadow p-3">
                    {/* image gose here  */}
                    <img src={imagepath + singleproduct.product_photo} alt="" height={200} />
                    <div className="card-body text-center">
                        <h5 className="text-danger ">{singleproduct.product_name}</h5>
                        <p>{singleproduct.product_description.slice(0,30)}...</p>
                        <b className="text-warning">Ksh{singleproduct.product_cost}</b><br />
                        <span className="badge bg-success ">{singleproduct.product_category}</span><br /><br /> 
                        <button className="btn btn-danger w-100" onClick={()=>navigate("/mpesa" ,{state:{singleproduct}})}>Purchase Now </button>
                    </div>
                </div>
            </div>
            )}
            {/* load more buttongoes here  */}
            {visiblecount<filtered_products.length &&(
                <div className="text-center m-4">
                    <button className="btn btn-primary"
                    onClick={()=>setVisiblecount(visiblecount+8)}>
                     load more   
                    </button>
                    </div>
            )}
            
        </div>
    
        )}

export default Getproducts
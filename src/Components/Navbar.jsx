import React from 'react'

const Navbar = () => {
  return (
     <section class="row">
    <div class="col-md-12">
      <nav class="navbar navbar-expand-md bg-success">
        {/* <!-- brand --> */}
         <a href="/" class="navbar-brand"><b class="text-danger-">CAR SOKO</b></a>
         {/* <!-- button --> */}
          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navabarcollapes">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <!-- divison containing links  --> */}
           <div class="collapse navbar-collapse navbar-collapes" id="navabarcollapes" >
            {/* <!-- left links  --> */}
             <div class="navbar-nav">
              <a href="/" class="nav-link">Home</a>
              <a href="/signin" class="nav-link">signin</a>
              <a href="/signup" class="nav-link">signup</a>
              <a href="add" class="nav-link">Add product</a>
              <a href="/food" class="nav-link">Food</a>
              <a href="/drinks" class="nav-link">Drinks</a>
             </div>
           </div>
      </nav>
    </div>
   </section> 
  
  )
}

export default Navbar

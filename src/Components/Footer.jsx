import React from 'react'

export const Footer = () => {
  return (
    <div>

  <section class="row bg-warning p-4">
    <div class="col-md-4">
    <h3 class="text-center text-white">About Us</h3>
    <p class="text-white">We are one of the bigest shops located in our town we offer honest and transparencey in our work.,we deliver contry wide services and free deliver for big cars</p>
    </div>
    <div class="col-md-4">
      <h3 class="text-center text-white">Contact us</h3>
      <form action="">
        <input type="email" placeholder="Enter your email" class="form-control" /><br/>
        <textarea placeholder="leave comment" class="form-control"></textarea><br/>
        <input type="button" value="Send message" class="btn btn-outline-danger" />
      </form>
    </div>
    <div class="col-md-4">
      <h3 class="text-center text-white">Stay conected</h3>
      <a href="https;//www,facebook.com"></a>
        <img src="images/fb.png" alt="facebook"/>
        <a href="https;//www.instagram.com"></a>
          <img src="images/in.png" alt="instagram"/>
          <a href="htpps://www.x.com">
            <img src="images/x.png" alt="x"/>
          </a>
        
          <p>The techlogy is created to make everthing connect with each other and spread information around to every person in each app</p>
    </div>
  </section>
  <footer className="bg-danger p-3 text-center"><b className="text-white">Developed by Baxter © 2026.ALL</b></footer>
    </div>
  )
}

import React from 'react'

const Carousel = () => {
  return (
    <section class="row">
        <div class="col-md-12">
            <div class="carousel slide" data-bs-ride="carousel" id="kimm">
                {/* <!-- divison containing images --> */}
                <div class="carousel-inner">
                    {/* <!-- div with image 1  --> */}
                    <div class="carousel-item  active"><img src="images/cubicroot-mercedes-3386103_1920.jpg" alt="slid1" width="100%" height="400px"/></div>
                    {/* <!-- div with image 2 --> */}
                    <div class="carousel-item">
                        <img src="images/paulapaulsen-mercedes-4070624.jpg" alt="slid2" height="400px" width="100%"/>
                    </div>
                    {/* <!-- div with image 3  --> */}
                    <div class="carousel-item">
                        <img src="images/cubicroot-mercedes-3386103_1920.jpg" alt="slid3" width="100%" height="400px"/>
                    </div>
                    {/* <!-- div with image 4  --> */}
                    <div class="carousel-item">
                        <img src="images/e-gabi-stuttgart-367987_1920.jpg" alt="slide4" width="100%" height="400px"/>
                    </div>
                </div>
                {/* <!-- previous control icon  --> */}
                <a href="#kimm" class="carousel-control-prev" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-warning"></span>
                </a>
                {/* <!-- Next control icon  --> */}
                <a href="#kimm" class="carousel-control-next" data-bs-slide="next"> <span
                        class="carousel-control-next-icon bg-warning"></span></a>
            </div>
        </div>
    </section>
  )
}

export default Carousel

const Videos= ()=>{
    return(
        <div className="container mt-5">
            {/* section */}
        <h2 className="text-center text-success mb-4">Mansory </h2>
        <section className="row">
            {/* child one gose here  */}
            <iframe width="299" height="280px" src="https://www.youtube.com/embed/LzniT8OE7U4?si=etDhm1_8XIfG_C4X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h5 className="mt-2 text-center">cars </h5>
            <p className="text-center text-muted">
                learn on development of cars 
            </p>
            
            {/* child 2 goes here  */}
            <div className="col-md-4 mb-4">
              <iframe width="299" height="220px " src="https://www.youtube.com/embed/iO65hYAOVWU?si=u-ZzAn2VPhsm9s8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h5 className="mt-2 text-center">cars </h5>
            <p className="text-center text-muted">
                learn on development of cars 
                </p>
            </div>

            <div className="col-md-4 mb-4">
              <iframe width="299" height="220px" src="https://www.youtube.com/embed/TIRkQPe77J0?si=pwr7MjoVCcAe693d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            <h5 className="mt-2 text-center">cars </h5>
            <p className="text-center text-muted">
                learn on development of cars 
                </p>
            </div>

            
        </section>
        {/* end of section 1 */}
        <hr className="my-5"/>
        {/* section 2  */}
        {/* NB;you can copy pastesection 1 and paste it here  */}

        </div>
    );
}
export default Videos;
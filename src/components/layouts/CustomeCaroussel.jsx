const CustomeCaroussel = (props) =>{

    const{carouselImg1,carouselImg2,carouselImg3}=props

    return (
        <>
        <div className="ContainerCarousel ">
          <div className="d-flex TitleCarousel"> 
          <span className="card-text-transform">
            <h1>Les Dernieres créations</h1>
          </span>
          </div>
            <div id="MonCarousel" className="carousel slide d-flex" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#MonCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#MonCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#MonCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={process.env.PUBLIC_URL + carouselImg1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + carouselImg2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + carouselImg3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#MonCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#MonCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    );
};

export default CustomeCaroussel;
function Hero() {
  return (
    <div className="container text-center p-5 bg-light mt-5">
      <h1>Selamat Datang di Neo Culture Technology</h1>
      <p className="lead">NCT JAYA, JAYA!!</p>

     {/* Carousel */}
     <div id="heroCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img
              src="\src\assets\car1.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="\src\assets\car2.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="\src\assets\car3.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;

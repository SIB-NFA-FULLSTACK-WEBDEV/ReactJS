// src/components/Hero.jsx
function Hero() {
    return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="text-center p-5 shadow rounded bg-white" style={{ maxWidth: '800px', width: '100%' }}>
          <h1>Selamat Datang di React Project</h1>
          <p className="lead">Belajar React itu menyenangkan!</p>
          <img 
            src="https://via.placeholder.com/600x300"
            alt="Ilustrasi"
            className="img-fluid rounded shadow mt-3"
          />
        </div>
      </div>
    );
  }  
  
  export default Hero;
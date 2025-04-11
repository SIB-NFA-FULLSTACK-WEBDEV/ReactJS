function Navbar() {
    return (
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          
          {/* Kiri: Nama Aplikasi */}
          <div className="col-md-3">
            <a href="/" className="d-inline-flex text-dark text-decoration-none fs-4 fw-bold">
              React App
            </a>
          </div>
  
          {/* Tengah: Navigasi */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="\" className="nav-link px-2">Home</a></li>
            <li><a href="\Team" className="nav-link px-2">Team</a></li>
            <li><a href="\Contact" className="nav-link px-2">Contact</a></li>
          </ul>
  
          {/* Kanan: Kosong */}
          <div className="col-md-3 text-end">
            {/* Kosong, tidak perlu login/signup */}
          </div>
  
        </header>
      </div>
    );
  }
  
  export default Navbar;
  
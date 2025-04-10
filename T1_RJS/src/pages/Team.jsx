// src/pages/Team.jsx
import Navbar from "../components/Navbar";

function Team() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">Tim Hebat Kami</h2>
        <div className="row">
          {[1, 2, 3].map((id) => (
            <div className="col-md-4 mb-4" key={id}>
              <div className="card shadow-sm h-100">
                <img
                  src={`https://via.placeholder.com/300x200?text=Member+${id}`}
                  className="card-img-top"
                  alt={`Member ${id}`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Nama Anggota {id}</h5>
                  <p className="card-text">Frontend Developer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

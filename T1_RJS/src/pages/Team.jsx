// src/pages/Team.jsx
import Navbar from "../components/Navbar";

function Team() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">Tim Hebat Kami</h2>
        <div className="row">

          {/* Member 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src="\src\assets\profil1.jpg"
                className="card-img-top"
                alt="Jaehyun"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Jeong Jaehyun</h5>
                <p className="card-text">Visual Developer</p>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src="\src\assets\profil2.jpg"
                className="card-img-top"
                alt="Member 2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Qian Kun</h5>
                <p className="card-text">UI/UX Designer</p>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src="\src\assets\profil3.jpg"
                className="card-img-top"
                alt="Member 3"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Lee Haechan</h5>
                <p className="card-text">Backend Developer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Team;
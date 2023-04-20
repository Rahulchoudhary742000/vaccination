import img from "./drr.png";
import img1 from "./drr3.png";
import img2 from "./baby1.jpg";
import img3 from "./baby2.jpg";
import img4 from "./baby3.jpg";
import img5 from "./baby4.jpg";
import video from "./vacine.mp4";
import video1 from "./virus.mp4";
import { Container, Row, Col, Button } from "react-bootstrap";
function Img() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <img src={img1} className="img-fluid" />
          </div>
          <div className="col-sm-4">
            <img src={img} className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h3
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,0,0,0), rgba(12, 113, 201))",
                height: "10vh",
                borderRadius: "3px",
                textAlign: "right",
                paddingRight: "5.5rem",
                color: "white",
              }}
            >
              Dr. Jenisha Jain
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3" style={{ borderRadius: "2px" }}>
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={img2}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3" style={{ borderRadius: "2px" }}>
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={img3}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3" style={{ borderRadius: "2px" }}>
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={img4}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3" style={{ borderRadius: "2px" }}>
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={img5}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-6">
            <div className="card mb-3">
              <video className="img-fluid" autoPlay muted >
                <source src={video1} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>
              <div className="card-body">
                <h5 className="card-title">Virus</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-3">
              <video className="img-fluid" autoPlay muted  >
                <source src={video} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>
              <div className="card-body">
                <h5 className="card-title">Virus</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Img;

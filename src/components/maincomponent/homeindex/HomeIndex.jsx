import imgcheck from "../../../assets/imagehomepage/adminpage.png";
import "./HomeImage.scss";
function NewItems() {
  return (
    <div className="w-100 homeslide-list">
        <div className="d-flex w-100 card-deck">
          <div className="card">
            <img className="card-img-top" src={imgcheck} alt="image" />
            <div className="bg-dark card-body">
              <b className="card-title">Benched</b>
              <p className="text-warning card-text">Comepmy</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={imgcheck} alt="image" />
            <div className="bg-dark card-body">
              <b className="card-title">Benched</b>
              <p className="text-warning card-text">Comepmy</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={imgcheck} alt="image" />
            <div className="bg-dark card-body">
              <b className="card-title">Benched</b>
              <p className="text-warning card-text">Comepmy</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={imgcheck} alt="image" />
            <div className="bg-dark card-body">
              <b className="card-title">Benched</b>
              <p className="text-warning card-text">Comepmy</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={imgcheck} alt="image" />
            <div className="bg-dark card-body">
              <b className="card-title">Benched</b>
              <p className="text-warning card-text">Comepmy</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default NewItems;

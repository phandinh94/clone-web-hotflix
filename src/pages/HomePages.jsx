import "./HomePages.scss";
import imgMainPage from "../assets/imagehomepage/mainpages.png";
import imgAddminPage from "../assets/imagehomepage/adminpage.png";
import imgQR from "../assets/imagehomepage/qrcode_hotflix.png"

function HomePages() {
  return (
    <div className="homepages">
      <div className="container">
        <h1 className="row-col-12 home-title">
          <b>
            <span>HOT</span>FLIX
          </b>
          v 2.1
        </h1>
        <p className="row-col-12 home-text">
          Online Movies, TV Show & Cinema HTML Template
        </p>
      </div>
      <section>
        <div className="row-col-12 container-contents">
          <div className="content-text">
            <h1 className="content-title">Demo Pages</h1>
          </div>
         <div className="row mainpage-content">
         <div className="col-12 content-mainpage">
            <a className="link-mainpage" href="#">
              <img className="img-mainpage" src={imgMainPage} alt="photo" />
              <span>Main Pages</span>
            </a>
          </div>
          <div className="col-12 content-mainpage">
            <a className="link-mainpage" href="#">
              <img className="img-mainpage" src={imgAddminPage} alt="photo" />
              <span>Admin Pages</span>
            </a>
          </div>
          <div className="col-12 content-mainpage">
            <div>
                <img src={imgQR}></img>
            </div>
            <p>Scan to view on your mobile device</p>
          </div>
         </div>
        </div>
      </section>
    </div>
  );
}

export default HomePages;

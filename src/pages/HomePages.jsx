import "./HomePages.scss";
import imgMainPage from "../assets/imagehomepage/mainpages.png";
import imgAddminPage from "../assets/imagehomepage/adminpage.png";
import imgQR from "../assets/imagehomepage/qrcode_hotflix.png"
import { Link } from "react-router-dom";

function HomePages() {
  return (
    <div className="homepages">
      <div className="container-test">
        <h1 className="home-title">
          <b>
            <span>HOT</span>FLIX
          </b>
         v 2.1
        </h1>
        <p className="home-text">
          Online Movies, TV Show & Cinema HTML Template
        </p>
      </div>
      <section>
        <div className="container-contents">
          <div className="col content-text">
            <h1 className="content-title">Demo Pages</h1>
          </div>
         <div className="mainpage-content">
         <div className="content-mainpage">
            <Link className="link-mainpage" to="/main">
              <img className="img-mainpage" src={imgMainPage} alt="photo" />
              <span>Main Pages</span>
            </Link>
          </div>
          <div className="content-mainpage">
            <a className="link-mainpage" href="#">
              <img className="img-mainpage" src={imgAddminPage} alt="photo" />
              <span>Admin Pages</span>
            </a>
          </div>
          <div className="qrcode-mainpage">
            <div className="img-qrcode">
                <img src={imgQR}></img>
            </div>
            <p>Scan to view on your mobile device</p>
          </div>
         </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
        <p><span>©</span> HOTFLIX, 2019—2021. Created by <a href="#">Dmitry Volkov</a>.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePages;

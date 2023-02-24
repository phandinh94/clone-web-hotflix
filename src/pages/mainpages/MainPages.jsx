import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import HomeSlide from "../../components/maincomponent/homeindex/HomeIndex";
import NavbarMainPages from "../../components/maincomponent/navbar/Navbar";
import "./MainPages.scss";
import imgTest from "../../assets/imagehomepage/mainpages.png";
import NewItem from "../../components/maincomponent/content/NewItem";

function MainPage() {
  return (
    <div className="position-relative mainpage" style={{backgroundImage: {imgTest}}}>
        <NavbarMainPages />
      <section className="w-100 home" >
        <div 
        className="w-100 md homeindex-content"
        >
          <div className="w-100 d-flex justify-content-around homeindex-title">
            <div className="mt-5 title-text">
              <b>NEW ITEMS</b> OF THIS SEASON
            </div>
            <div className="carousel-icon">
              <button type="button" role="presentation" className="mb-3 owl-pre text-white bg-dark boder-0">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                type="button"
                role="presentation"
                className="mt-5 owl-next text-white bg-dark boder-0"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
         <div className="row homeindex-slider">
            <HomeSlide/>
         </div>
        </div>
      </section>
      <section className="content">
        <span className="content-title">New items</span>
        <div className="comtainer-content">
          <NewItem></NewItem>
        </div>
      </section>
      <section className="section-border"></section>
      <section className="section-border"></section>
      <footer className="footer"></footer>
    </div>
  );
}

export default MainPage;

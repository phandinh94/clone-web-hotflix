
import NavbarMainPages from "../../components/maincomponent/navbar/Navbar";
import "./MainPages.scss";
import axios from "axios"
import imgTest from "../../assets/imagehomepage/mainpages.png";
import NewItem from "../../components/maincomponent/content/NewItem";
import SimpleSlider from "../../components/maincomponent/homeindex/HomeIndex";
import ViewAll from "../../components/maincomponent/viewall/ViewAll";

function MainPage() {
  let getAxiosFilm = ()=>{
    axios
    .get("http://localhost:3000/listphim")
    .then((data)=>console.log(data))
    .catch((err)=> console.log(err))
  }
console.log(getAxiosFilm);
  return (
    <div
      className="position-relative mainpage"
      style={{ backgroundImage: { imgTest } }}
    >
      <NavbarMainPages />
      <section className="w-100 home">
        <div className="home-top">
          <div className="col">
            <p className="text-white">
              <b className="font-weight-bolder home-title">NEW ITEMS</b> OF THIS SEASON
            </p>
          </div>
        </div>
       <div className="w-100 simple-slide-news"> <SimpleSlider with={80}/></div>
         

      </section>
      <section className="content">
        <span className="content-title">New items</span>
        <div className="comtainer-content">
          <NewItem></NewItem>
        </div>
      </section>
      <section className="text-white section-border">
        <div className="expected-premirere">
         <div className="d-flex justify-content-between title-view">
         <h1 className="title">Expected premiere</h1>
          <button className="btn-viewall">View All</button>
         </div>
          <ViewAll></ViewAll>
        </div>

      </section>


      <section className="section-borderlast">
        <div className="row">
        <div className="col-12 col-xl-10 text-white">
        <h1>HotFlix - Best Place for Movies</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        <p>Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        </div>
       

       <div className="row col-12 text-white row--grid">
       <div className="col-12 col-md-6 col-lg-4 order-lg-1 border-top border-warning best-place">
          <div className="place-top">
            <div className="title-left">Basic</div>
            <div className="text-warning title-right">Free</div>
          </div>
          <div className="place-list">
            <p><span ><i className="fa-solid fa-check text-success"></i></span> 7 days</p>
            <p><span><i className="fa-solid fa-check text-success"></i></span> 720p Resolution</p>
            <p><span><i className="fa-solid fa-xmark text-danger"></i></span> Limitted Availability</p>
            <p><span><i className="fa-solid fa-xmark text-danger"></i></span> Desktop Only</p>
            <p><span><i className="fa-solid fa-xmark text-danger"></i></span> Limitted Support</p>
          </div>
          <button className="btn-choose border-warning">CHOOSE PLAN</button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 border-top border-success best-place">
          <div className="place-top">
            <div className="title-left">Premium</div>
            <div className="text-success title-right">$34.99/Month</div>
          </div>
          <div className="place-list">
            <p ><span ><i className="fa-solid fa-check text-success"></i></span> 1 Month</p>
            <p><span><i className="fa-solid fa-check text-success"></i></span> Full HD</p>
            <p><span><i className="fa-solid fa-check text-success"></i></span> Limitted Availability</p>
            <p><span><i className="fa-solid fa-xmark text-danger"></i></span> TV & Desktop</p>
            <p><span><i className="fa-solid fa-xmark text-danger"></i></span> 24/7 Support</p>
          </div>
          <button className="btn-choose border-success">CHOOSE PLAN</button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 border-top border-warning best-place">
          <div className="place-top">
            <div className="title-left">Cinematic</div>
            <div className="text-warning title-right">$49.99/month</div>
          </div>
          <div className="place-list">
            <p><span ><i className="fa-solid fa-check text-success"></i></span> 2 month</p>
            <p><span><i className="fa-solid fa-check text-success"></i></span> Ultra HD</p>
            <p><span><i className="fa-solid fa-check text-success"></i></span> Lifetime Avaibility</p>
            <p><span><i className="fa-solid fa-check text-success"></i></span> Any Device</p>
            <p><span><i className="fa-solid fa-check text-success"></i></span> 24/7 Support</p>
          </div>
          <button className="btn-choose border-warning">CHOOSE PLAN</button>
        </div>
       </div>
      </section>
      <footer className="footer"></footer>
    </div>
  );
}

export default MainPage;

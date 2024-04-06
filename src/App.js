import './App.css';
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Slider  from "./components/Slider.js"
import data from './data/data.json'
import Offers from "./components/Offers.js"
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js';
import ProductReview from './components/ProductReview.js'
import Videos from './components/Videos.js'
import BannerSlider from './components/BannerSlider.js'
import Footer from './components/Footer.js'
import NavOption from './components/NavOption.js'


const packageJson = require('./data/data.json')

function App() {
  return (
  <Router>
   <PreNavbar />
   <Navbar/>
   <Routes>
    <Route path="/#miphones"
    element={<NavOption miPhones={data.miPhones} />}></Route>
   </Routes>
   <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop}  fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
   <Slider start={data.banner.start}/>
   <Offers offer={data.offer}/>
   <Heading text="STAR PRODUCT"/>
   <StarProduct starProduct={data.starProduct}/>
   <Heading text="HOT ACCESSORIES"/>
   <HotAccessoriesMenu/>
   
   <Routes>

       <Route  
          exact path="/music"
          element = {<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
       </Route>

       <Route  
          exact path="/smartDevice"
          element = {<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}>
       </Route>

       <Route  
          exact path="/home"
          element = {<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>
       </Route>
       
       <Route  
          exact path="/lifestyle"
          element = {<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifestyle} />}>
       </Route>

       <Route  
          exact path="/mobileAccessories"
          element = {<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>
       </Route>

   </Routes>

   <Heading text="PRODUCT REVIEW"/>
   <ProductReview ProductReview={data.productReviews}/>
   <Heading text="VIDEOS"/>
   <Videos videos={data.videos}/>
   <Heading text="IN THE PRESS"/>
   <BannerSlider banner={data.banner}/>

   <Footer footer={data.footer}/>

   </Router>

  );
}

export default App;

import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Link from "@iconscout/react-unicons/icons/uil-link";
import Blog from "@iconscout/react-unicons/icons/uil-blogger";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="box1">
          <img height="210px"src="https://user-images.githubusercontent.com/102036593/161413179-6b197814-6604-4a5f-ab84-4c9a8f49dc60.jpg" alt="" />
          
          <div className="box">
            <div className="output">
            <h1>Toy Marche Clone</h1>
            <h4>Toymarche is an Indian startup that sells all kinds of toys and offers people from across India to sell their products on the platform itself.
            <br/>
            The website has lots of functionality such as login, signup, homepage, add to cart, coupon code, purchase, payment verified with OTP, and the order success, etc.
          </h4>
          <h4 style={{color:"red"}}>Tech Stack: <label style={{color: darkMode?'white': 'Black'}} >HTML, CSS, JavaScript</label></h4>
          <a style={{color: darkMode?'white': 'Black'}} className="color" href="https://github.com/PrathyushNair/ToyMarche_clone" target="_blank"><Gitub color="dark" size={"3rem"} /></a>
          <a  style={{color: darkMode?'white': 'Black'}} className="color"href="https://62488c87db897540a8152398--subtle-centaur-57e7a8.netlify.app/" target="_blank"><Link color="dark" size={"3rem"} /></a>
          <a  style={{color: darkMode?'white': 'Black'}} className="color"href="https://medium.com/@info.coldfired/project-toy-marche-clone-9a66fee38079" target="_blank"><Blog color="dark" size={"3rem"} /></a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="box1">
          <img src="https://camo.githubusercontent.com/869638a63dc065fb27efeac72ecc2ba175bbbbcb794fea40edd3ed457f98c7b8/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a756e377a355a786c4e57477457326b7377476f554d772e706e67" alt="" />
          <div className="output">
          <h1>KindMeal.my Clone</h1>
          <h4>We are given a task to make a functional clone website of The World's 1st Meat-Free Lifestyle Platform KindMeal.my.
            <br/>
            The website has lots of functionalities such as login, signup, Landing-page, Meal Deals, KindMoments, Hot Picks, Recipes, Directory, Articles, Help, etc. 
          </h4>
          <h4 style={{color:"red"}}>Tech Stack: <label style={{color: darkMode?'white': 'Black'}} >HTML, CSS, JavaScript, Es6, BootStrap</label></h4>
          <div className="box">
          <a  style={{color: darkMode?'white': 'Black'}} className="color"href="https://github.com/Devashishsaurabh/KindMeal.my-Clone" target="_blank"><Gitub color="dark" size={"3rem"} /></a>
          <a style={{color: darkMode?'white': 'Black'}}  className="color" href="https://lucent-narwhal-b8e29a.netlify.app/" target="_blank"><Link color="dark" size={"3rem"} /></a>
          <a  style={{color: darkMode?'white': 'Black'}}  className="color" href="https://medium.com/@onlyvishwasindia/project-kindmeal-my-clone-648e86d3e588" target="_blank"><Blog color="dark" size={"3rem"} /></a>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="box1">
          <img  height="210px"src="https://camo.githubusercontent.com/64c07c9772585a490ae59f5c113efe42e1ec6b78d15cec2cc31df00c30f6ca21/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a59465a364d73753773706b39352d5035414461584c772e706e67" alt="" />
          <div className="output">
          <h1>KFC Clone</h1>
          <h4>We are given a task to make a functional clone website of KFC Corporation, based in Louisville.
            <br/>
            The website has lots of functionalities such as User can order food online, user able to Logout, OnClick any Category user to get related foods, user able to get multiple payment methods.
          </h4>
          <h4 style={{color:"red"}}>Tech Stack: <label style={{color: darkMode?'white': 'Black'}} >HTML, CSS, JavaScript, Es6, BootStrap</label></h4>
          <div className="box">
          <a style={{color: darkMode?'white': 'Black'}}  className="color" href="https://github.com/ayaznoori/kfc_clone" target="_blank"><Gitub color="dark" size={"3rem"} /></a>
          <a style={{color: darkMode?'white': 'Black'}}  className="color" href="https://kfc-clone-masai.netlify.app/" target="_blank"><Link color="dark" size={"3rem"} /></a>
          <a  style={{color: darkMode?'white':'Black'}}  className="color" href="https://medium.com/@onlyvishwasindia/project-kfc-clone-3742f3aba968" target="_blank"><Blog color="dark" size={"3rem"} /></a>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React, { useEffect, useState } from "react";
import HomeAPI from "../JsonFiles/pages/Home.json";
import Backimg from "../image/backimg.svg";
import Slider from "react-slick";

function Home(props) {
  const HomeData = HomeAPI.setting;
  return (
    <section>
      {HomeData === true ? (
        <div>
          <div className="bg-pDOrange rounded-bl-[50px] rounded-br-[50px]">
            <Banner />
            <AboutCompany />
            <div className="Animation_main">
              <Animation ids="Dot_1" />
              <Animation ids="Dot_2" />
              <Animation ids="Dot_3" />
              <Animation ids="Dot_4" />
              <Animation ids="Dot_5" />
              <Animation ids="Dot_6" />
              <Animation ids="Dot_7" />
              <Animation ids="Dot_8" />
              <Animation ids="Dot_9" />
              <Animation ids="Dot_10" />
            </div>
          </div>
          <Service />
          <Project />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
}

function Animation(props) {
  return (
    <div className="Animation_bg" id={props.ids}>
      <img src={Backimg} alt="" />
    </div>
  );
}

function Banner() {
  const [showElement, setShowElement] = useState(true);
  const handleClick = () => {
    // Calculate 70% of the viewport height
    const scrollAmount = window.innerHeight * 0.9;

    // Scroll down by the calculated amount
    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth", // Optionally, add smooth scrolling effect
    });
    setShowElement(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain point
      if (window.scrollY > window.innerHeight * 0.5) {
        // Hide the element
        setShowElement(false);
      } else if (window.scrollY === 0.0) {
        setShowElement(true);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const BannerData = HomeAPI.bannner[0];
  return (
    <div id="banner" className="container mx-auto relative z-10">
      <div className="banner">
        <h1 dangerouslySetInnerHTML={{ __html: BannerData.label }}></h1>
        {showElement && (
          <div className="scroll_div" onClick={handleClick}>
            <span>Scroll Down</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1v12m0 0 4-4m-4 4L1 9"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

function AboutCompany() {
  const AboutData = HomeAPI.about[0];
  return (
    <div id="about_company" className="relative z-10">
      <div className="container mx-auto">
        <div className="about_company_text">
          <div>
            <h2 className="heading">{AboutData.label}</h2>
            {AboutData.text1 &&
              AboutData.text1.map((res, index) => (
                <p key={index}>{res.paragraph}</p>
              ))}
          </div>
        </div>
        {/* <div className='about_company_img'>
                <img src={BannerImg} alt='' />
            </div> */}
      </div>
    </div>
  );
}

function Service() {
  const ServiceData = HomeAPI.services;
  console.log("services", ServiceData);

<<<<<<< Updated upstream
  return (
    <section id="service" className="relative z-10">
      <div className="container mx-auto">
        <div className="service">
          <h2 className="main_heading">Services</h2>
          <div className="card_main">
            {ServiceData &&
              ServiceData.map((res, index) => (
                <div className="card" key={index}>
                  <span dangerouslySetInnerHTML={{ __html: res.svg }}></span>
                  <h3>{res.label}</h3>
                  <p>{res.detail}</p>
=======
    return (
        <section id='service'>
            <div className='container mx-auto'>
                <div className='service'>
                    <h2 className='heading'>Services</h2>
                    <div className='card_main'>
                        {ServiceData && ServiceData.map((res, index) => (
                            <div className='card' key={index}>
                                <span dangerouslySetInnerHTML={{ __html: res.svg }}>
                                </span>
                                <h3>{res.label}</h3>
                                <p>{res.detail}</p>
                            </div>
                        ))}
                    </div>
>>>>>>> Stashed changes
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Project() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="project" className="relative z-10">
      <div className="container mx-auto">
        <div className="project">
          <h2 className="main_heading">Latest Project’s</h2>
          <div className="slider">
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import HomeAPI from "../JsonFiles/pages/Home.json";
import Backimg from "../image/backimg.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project1 from '../image/Project-1.png';
import WorkImg from '../image/Rectangle 12.png';
import WorkImg2 from '../image/Mask group (1).png';
import WorkImg3 from '../image/Mask group.png';
import { Link } from "react-router-dom";

function Home(props) {
  const HomeData = HomeAPI.setting;
  return (
    <section>
      {HomeData ? (
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
          <Morden />
          <Work />
          <Lest />
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
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ProjectData = HomeAPI.project;
  console.log("ProjectData", ProjectData);
  return (
    <section id="project" className="relative z-10">
      <div className="container mx-auto">
        <div className="project">
          <h2 className="main_heading">Latest Project’s</h2>
          <div className="slider">
            <Slider {...settings}>
              {ProjectData && ProjectData.map((res, index) => (
                <div key={index}>
                  <div key={index} className="slide_inner">
                    <div className="slide_img">
                      <img src={Project1} alt="Project1" />
                    </div>
                    <div className="slide_detail">
                      <h3 className="slider_head">{res.label}</h3>
                      <p className="slider_semi_head">{res.semi_label}</p>
                      <p>{res.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div >
      </div >
    </section >
  );
}

function Morden() {
  const accordionItems = HomeAPI.morden;
  console.log("accordionItems", accordionItems);
  return (
    <section id="morden" className="relative z-10">
      <div className="container mx-auto">
        <div className="morden">
          <h2 className="main_heading">Modern IT Services</h2>
          <p className="semi_title">Our cutting-edge digital solutions and services have been helping businesses across the world to mitigate modern business challenges with a modern digital approach.</p>
        </div>
        <div>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  )
}

const AccordionItem = ({ title, content, content_details, content_title, btn, isOpen, onToggle }) => {

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <h2>{title}</h2>
      </div>
      {/* {isOpen && <div className="accordion-header" >{content}</div>} */}
      {isOpen && <div className="accordion-content" >
        <div className="header_accordion">
          <h4>{content_title}</h4>
          {/* <h4>Digital Transformation</h4> */}
          <p>{content}</p>
          {/* <p>Explore how the dots connect from conceptualization to an agile cycle of digital transformation & app development with the support of robust technologies to bring the leading-edge digital product to life that can transform your business.</p> */}
          <div class="primary_btn">
            <a class="button" href="/">{btn}</a>
          </div>
        </div>
        <div className="content_div">
          {content_details.map((res, index) => (
            <div key={index}>
              <p>{res.pss}</p>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );

};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };
  return (
    <div className="accordion" id="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index}
          title={item.title}
          btn={item.btn}
          content={item.content}
          content_details={item.content_details}
          content_title={item.content_title}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)} />
      ))}
    </div>
  );
};

function Work() {
  const WorkItems = HomeAPI.work;
  console.log("accordionItems", WorkItems);
  return (
    <div id="work" className="relative z-10">
      <div className="container mx-auto">
        <div>
          <h2 className="main_heading">Our Recent Work</h2>
        </div>
        <div className="work_card">
          <div className="cards">
            <figure>
              <img src={WorkImg} alt="" />
            </figure>
          </div>
          <div className="cards">
            <figure>
              <img src={WorkImg3} alt="" />
            </figure>
          </div>
          <div className="cards">
            <figure>
              <img src={WorkImg2} alt="" />
            </figure>
          </div>
          {WorkItems && WorkItems.map((res, index) => (
            <>
              <div className="cards" key={index}>
                <div className="cards_text">
                  <h2>{res.title}</h2>
                  <p>{res.detail}</p>
                </div>
              </div>
            </>
          ))}
          <div className="cards">
            <div className="cards_text">
              <p>Want to start a Project ?</p>
              <div className='primary_btn cards_btn'>
                <Link className="button">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Lest() {
  return (
    <div id="lest" className="relative z-10">
      <div className="container mx-auto">
        <div className="lest">
          <h2>
            Let’s create a measurable <br /> impact on your business.
          </h2>
          <div className='primary_btn'>
            <Link className="button">Start a conversation</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

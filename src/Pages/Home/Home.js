import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import "./home.css";
import portfolio1 from "../../assets/images/sc.png";
import portfolio2 from "../../assets/images/sc2.png";
import portfolio3 from "../../assets/images/sc3.png";
import portfolio4 from "../../assets/images/sc4.png";
import image from "../../assets/images/MyPIC.jpg";
import image2 from "../../assets/images/1.jpg";
import image3 from "../../assets/images/IMG-20220130-WA0097.jpg";
import { FaShopify } from "react-icons/fa";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../../components/AnimatedSection";
const servicesData = [
  {
    title: "Software Development",
    icon: "fas fa-solid fa-desktop",
    description:
      "Building robust software solutions for diverse industries with a passionate team of skilled developers.",
  },
  {
    title: "Web Application",
    icon: "fas fa-laptop-code",
    description:
      "Building customized web applications to optimize your digital experience. Custom solutions with seamless user experiences.",
  },
  {
    title: "WordPress",
    icon: "fab fa-wordpress",
    description:
      "Expertly crafting WordPress solutions to elevate your online presence.Trusted by businesses worldwide.",
  },
  {
    title: "Shopify Ecommerce",
    icon: "fab fa-shopify",
    description:
      "Transforming concepts into robust software solutions, tailored to meet your unique business needs and goals.",
  },
  // Add more services as needed
];
// Container with individual hover state management
const Container = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef(null);
  const [topOffset, setTopOffset] = useState("0");

  useEffect(() => {
    if (contentRef.current) {
      const containerHeight = 450; // fixed height of the container
      const contentHeight = contentRef.current.scrollHeight; // dynamic content height
      const maxOffset = containerHeight - contentHeight; // maximum offset to scroll
      setTopOffset(isHovered ? `${maxOffset}px` : "0"); // scroll to the end on hover, back to top on leave
    }
  }, [isHovered]);

  return (
    <div
      className="portfolio"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Content ref={contentRef} topOffset={topOffset}>
        {children}
      </Content>
    </div>
  );
};

const Content = styled.div`
  position: absolute;
  top: ${(props) => props.topOffset};
  transition: top 15s ease;
`;

// The main Portfolio section
const Portfolio = () => {
  return (
    <>
      <AnimatedSection animationType="translateY" animationDistance="300px">
        <div className="home-section">
          <div className="home-content">
            <h3>Providing digital solutions for your business</h3>
            <h1>We are a team of expert developers</h1>
            <p>
              We have expertise in Website Development and Desktop applications
            </p>
            <Link to="/demo" className="btn btn-primary home-content-btn">
              GET STARTED
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animationType="translateY" animationDistance="300px">
        <section className="services-section">
          <h2 className="text-center pb-5">How can we help you?</h2>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <divx className="service-card" key={index}>
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </divx>
            ))}
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection
        animationType="translateY"
        animationDistance="300px"
        threshold="0.1"
      >
        <section className="portfolio-section">
          <h1 className="text-center mb-2">Portfolio</h1>
          <h5 className="text-center pb-5">
            Here is our portfolio which represents our connection with our
            clients
          </h5>
          <div className="d-md-flex justify-content-evenly">
            <Container>
              <img
                src={portfolio3}
                style={{ width: "100%", objectFit: "contain" }}
                alt="portfolio"
              />
            </Container>
            <Container>
              <img
                src={portfolio4}
                style={{ width: "100%", objectFit: "contain" }}
                alt="portfolio"
              />
            </Container>
          </div>
          <div className="d-md-flex justify-content-evenly pt-md-5">
            <Container>
              <img
                src={portfolio1}
                style={{ width: "100%", objectFit: "contain" }}
                alt="portfolio"
              />
            </Container>
            <Container>
              <img
                src={portfolio2}
                style={{ width: "100%", objectFit: "contain" }}
                alt="portfolio"
              />
            </Container>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection
        animationType="translateY"
        animationDistance="300px"
        threshold="0.1"
      >
        <div className="about-us-section about-us-section-color">
          <h1 className="text-center">Amazing Designs and Quality Work</h1>
          <p className="text-center">
            Our main purpose is to provide attractive and amazing designs while
            maintaining strict quality standards
          </p>
          <div className="d-flex flex-column align-items-center mt-3">
            <div className="icon">
              <img className="image-icon" src={image} />
            </div>
            <h5>Haseeb Farrukh</h5>
            <h6>FOUNDER</h6>
          </div>
          <div className="mt-5">
            {" "}
            <h1 className="text-center">Meet our leadership</h1>
            <p className="text-center">
              At Code Zento, we have been helping our clients to tell their
              story since 2020, making sure they reach a wider audience
            </p>
            <div className="about-team">
              <div className="team-card d-flex flex-column align-items-center">
                <div className="icon">
                  <img className="image-icon" src={image} />
                </div>
                <h5>Haseeb Farrukh</h5>
                <h6>FOUNDER</h6>
              </div>
              <div className="team-card d-flex flex-column align-items-center">
                <div className="icon">
                  <img className="image-icon" src={image} />
                </div>
                <h5>Haseeb Farrukh</h5>
                <h6>FOUNDER</h6>
              </div>
              <div className="team-card d-flex flex-column align-items-center">
                <div className="icon">
                  <img className="image-icon" src={image} />
                </div>
                <h5>Haseeb Farrukh</h5>
                <h6>FOUNDER</h6>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animationType="translateY" animationDistance="300px">
        <section className="get-in-touch-section">
          <h2>Get in Touch</h2>
          <p>
            Ready to elevate your digital presence? Let's discuss your project!
          </p>
          <Link to="/contact">
            <button className="btn btn-primary">Contact Us</button>
          </Link>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Portfolio;

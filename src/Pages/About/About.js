import React from "react";
import "./About.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import { Card, Col, Container, Label, Row } from "reactstrap";
import WhoWeAre from "../../assets/images/team4.jpg";
import image from "../../assets/images/MyPIC.jpg";
import image2 from "../../assets/images/1.jpg";
import image3 from "../../assets/images/IMG-20220130-WA0097.jpg";
import { MdArrowRight } from "react-icons/md";
import AnimatedSection from "../../components/AnimatedSection";

const AboutUs = () => {
  return (
    <>
      <AnimatedSection animationType="translateY" animationDistance="300px">
        <div className="about-section">
          <div className="about-content">
            <h1>About Us</h1>
            <h3>Welcome to the CODE ZENTO</h3>
            <p>Quality, Efficiency, and Loyalty are our core values.</p>
          </div>
          <div className="cards-container">
            <Card className=" about-card">
              <h3>Who Are We</h3>
              <p>
                Our engineers and developers join hands to provide complete
                satisfaction to our clients. We utilize our knowledge to build
                responsive websites, mobile, and desktop applications.
              </p>
            </Card>
            <Card className=" about-card">
              <h3>Our Mission</h3>
              <p>
                Our mission to make happy clients and provide them work with
                full loyalty and efficiency.
              </p>
            </Card>
            <Card className="about-card">
              <h3>What We Do</h3>
              <div className="d-flex align-items-center">
                <MdArrowRight className="arrowIcon" />
                <p>Website Development</p>
              </div>
              <div className="d-flex align-items-center">
                <MdArrowRight className="arrowIcon" />
                <p>Marketing</p>
              </div>
              <div className="d-flex align-items-center">
                <MdArrowRight className="arrowIcon" />
                <p>Social Media</p>
              </div>
              <div className="d-flex align-items-center">
                <MdArrowRight className="arrowIcon" />
                <p>eCommerce Store</p>
              </div>
              <div className="d-flex align-items-center">
                <MdArrowRight className="arrowIcon" />
                <p>Tech Support</p>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>
      <div className=" AboutContainerColor ">
        <AnimatedSection
          animationType="translateY"
          animationDistance="300px"
          threshold="0.3"
        >
          <div className="AboutContainer">
            <div className="col-sm-12 col-lg-5 team-image">
              <img src={WhoWeAre} />
            </div>
            <div className="col-sm-12 col-lg-6 serviceProcessList">
              <h1 className="mb-3">Team CODE ZENTO</h1>
              <p>
                Developing a website and mobile app is a masterful field.
                NEXTPAK AGILE SOLUTIONS is a cross-useful software advancement
                organization focused on planning and conveying new computerized
                tools and services to organizations across enterprises and
                verticals. We stick to a proactive, dynamic, and result-situated
                way to deal with and guarantee that we bring typically effective
                results. We are energetic about what we do. Our architects and
                digital analysts utilize their strong aptitude to offer
                achievement arranged vectors for our customers. Client
                assistance engineers guarantee the apparatuses we work for our
                customers to satisfy their clients.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection
        animationType="translateY"
        animationDistance="300px"
        threshold="0.2"
      >
        <div className="about-us-section">
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
    </>
  );
};

export default AboutUs;

import React, { useState } from "react";
import "./Services.css"; // Import CSS file for styling
import WhoWeAre from "../../assets/images/offer.jpg";
import client1 from "../../assets/images/clientLogo3.png";
import client2 from "../../assets/images/clientLogo2.png";
import client3 from "../../assets/images/clientLogo1.png";
import client5 from "../../assets/images/devikons.png";
import client7 from "../../assets/images/apple-touch-icon-120x120.png";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import AnimatedSection from "../../components/AnimatedSection";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

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

  return (
    <>
      <AnimatedSection animationType="translateY" animationDistance="300px">
        <div className="Service-section">
          <div className="Service-content">
            <h1>Custom Software Services</h1>
            <h2>Tailored Solutions from Industry Experts</h2>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animationType="translateY" animationDistance="300px">
        <section className="services-section">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <divx
                className="service-card"
                key={index}
                onClick={() => toggleService(service)}
              >
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
        threshold="0.2"
      >
        <div className="AboutContainer ServiceAboutContainer">
          <div className="col-sm-12 col-xl-5 team-image ">
            <img src={WhoWeAre} />
          </div>
          <div className="col-xl-6 col-sm-12 serviceProcessList">
            <h1 className="mb-3">Our Proven Process for Success</h1>
            <div className="my-3">
              <h3>1: Understand client Vision</h3>
              <p>
                Comprehending the consumer's Requirements and enterprise
                specifications is important. At Code Zento, we beleive in
                meeting client needs with enhanced quality of work and
                productivity
              </p>
            </div>
            <div className="my-3">
              <h3>2: Strategic planning and revision</h3>
              <p>
                In order to meet project objectives, we plan in terms of
                requirements, progress and goal acheivements to deliver within
                timelines.
              </p>
            </div>
            <div className="my-3">
              <h3>3: Design and Development</h3>
              <p>
                Once design work is done, we share those to the clients for the
                feedback or review.
              </p>
            </div>
            <div className="my-3">
              <h3>4: Quality Assurance & Testing</h3>
              <p>
                Our company is guaranteeing of quality of work with enhanced
                teting in all domains and prespectives by using build cases and
                test driven Development
              </p>
            </div>
            <div className="my-3">
              <h3>5: Launch</h3>
              <p>
                Our work is fully completed and quality tests are passed, we
                moves toward final delivery and Launching.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        animationType="translateY"
        animationDistance="300px"
        threshold="0.2"
      >
        <section className="flip-section">
          <h3 className="text-center mb-5">
            Choose Our Flexible Pricing Plan For Customizing Software
          </h3>
          <div className="flip-section-container">
            <div class="flip-card">
              <div className="flip-card-inner">
                <div class="flip-card-front flip-card-front1">
                  <div class="overlay">
                    <h1>Starter</h1>
                    <Link to="/contact">
                      <button className="btn btn-secondary btn-sm">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3 className="  mb-3">Starter</h3>
                  <div className=" mb-4">
                    <FaDollarSign className="fs-4 text-primary" />
                    <span className="price-amount fs-2">15</span>
                    <span className="price-unit">hours</span>
                  </div>
                  <ul className="list-unstyled service-list">
                    <li className="d-flex align-items-center   mb-3">
                      <FaCheck className="text-success me-2" />
                      <span>Full Customization</span>
                    </li>
                    <li className="d-flex align-items-center  mb-3">
                      <FaCheck className="text-success me-2" />
                      <span>Clean Code</span>
                    </li>
                    <li className="d-flex align-items-center   mb-3">
                      <FaCheck className="text-success me-2" />
                      <span>1 Month Support</span>
                    </li>
                    <li className="d-flex align-items-center    mb-3">
                      <FaCheck className="text-success me-2" />
                      <span>100% Satisfaction</span>
                    </li>
                  </ul>
                  <a href="/contact" className="btn btn-primary">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div className="flip-card-inner">
                <div class="flip-card-front flip-card-front2">
                  <div class="overlay">
                    <h1>Medium</h1>
                    <Link to="/contact">
                      <button className="btn btn-light btn-sm">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3 className="  mb-3">Medium</h3>
                  <div className=" mb-4">
                    <FaDollarSign className="fs-4 text-primary" />
                    <span className="price-amount fs-2">35</span>
                    <span className="price-unit">hours</span>
                  </div>
                  <ul className="list-unstyled service-list">
                    <li className="d-flex align-items-center   mb-3">
                      <FaCheck className="text-success me-2" />
                      <span> Everything in starter</span>
                    </li>
                    <li className="d-flex align-items-center  mb-3">
                      <FaCheck className="text-success me-2" />
                      <span>Out of the box ideas</span>
                    </li>
                    <li className="d-flex align-items-center   mb-3">
                      <FaCheck className="text-success me-2" />
                      <span>Expert Consultation</span>
                    </li>
                    <li className="d-flex align-items-center    mb-3">
                      <FaCheck className="text-success me-2" />
                      <span>3 Months Support</span>
                    </li>
                  </ul>
                  <a href="/contact" className="btn btn-primary">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="  flip-card">
              <div className="flip-card-inner">
                <div class="flip-card-front flip-card-front3">
                  <div class="overlay">
                    <h1>Custom</h1>
                    <Link to="/contact">
                      <button className="btn btn-success btn-sm">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3 className="  mb-3">Custom</h3>
                  <div className=" mb-4">
                    <span className="price-amount fs-6">custom</span>
                    <span className="price-unit fs-3">Pricing</span>
                  </div>
                  <ul className="list-unstyled service-list">
                    <li className="d-flex align-items-center   mb-3">
                      <FaCheck className="text-success me-2" />
                      <span> Everything in starter & Medium</span>
                    </li>
                    <li className="d-flex align-items-center  mb-3">
                      <FaCheck className="text-success me-2" />
                      <span> Requirements based ideas</span>
                    </li>
                    <li className="d-flex align-items-center   mb-3">
                      <FaCheck className="text-success me-2" />
                      <span> 24/7 Lifetime Support</span>
                    </li>
                    <li className="d-flex align-items-center    mb-3">
                      <FaCheck className="text-success me-2" />
                      <span> Super Fast Deliveries</span>
                    </li>
                  </ul>
                  <a href="/contact" className="btn btn-primary">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection animationType="translateY" animationDistance="300px">
        <section className="our-clients">
          <div class="container">
            <h2>Our Customers</h2>
            <p>We have a list of happy customers all around the world.</p>
            <p>
              We are seeking forward to add you to the list of our happy
              clients.
            </p>
            <div class="d-md-flex align-items-center justify-content-center">
              <div class="client">
                <img src={client3} alt="Client 1" />
              </div>
              <div class="client">
                <img src={client2} alt="Client 1" />
              </div>
              <div class="client">
                <img src={client1} alt="Client 1" />
              </div>
              <div class="client">
                <img src={client5} alt="Client 1" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection animationType="translateY" animationDistance="300px">
        <section className="get-in-touch-section get-in-touch-section-service">
          <h2>Get in Touch</h2>
          <p className="text-center">
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

export default Services;

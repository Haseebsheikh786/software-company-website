import React from "react";
import {
  Card,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { MdMail, MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";
import AnimatedSection from "../../components/AnimatedSection";
const ContactUS = () => {
  return (
    <>
      <AnimatedSection animationType="translateY" animationDistance="500px">
        <div className="contact-section">
          <div className="contact-content">
            <h1>Contact Us</h1>
            <h2>Contact for Premium Business Services</h2>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animationType="translateY" animationDistance="300px"   threshold="0.2">
        <div className="contact-container">
          <div className=" infoContainer text-start">
            {/* <h6 className="">STAY TUNED WITH US</h6> */}
            <h2 className="py-2">
              Get Information & Lets Get In Touch With Our Team
            </h2>
            <div className="mt-4">
              <h6>Reach us</h6>
              <Card className="pt-1 pb-3 cards">
                <h5 className="d-flex mb-0">
                  <div>
                    <FaLocationDot className="location-icon" />
                  </div>
                  <b>
                    International House, The McLaren Building, 46 The Priory
                    Queensway, Birmingham, B4 7LR, Birmingham, United Kingdom
                  </b>
                </h5>
              </Card>
              <Card className="py-3 cards">
                <h5 className="d-flex mb-0">
                  <MdMail className="" />
                  <b>info@codezento.com</b>
                </h5>
              </Card>
              <Card className="py-3 cards">
                <h5 className="d-flex mb-0">
                  <MdPhone className="" />
                  <b>+92 (0) 342 7282 514</b>
                </h5>
              </Card>
              <Card className="py-3 cards">
                <h5 className="d-flex mb-0">
                  <MdPhone className="" />
                  <b>+92 (0) 318 7243 073</b>
                </h5>
              </Card>
            </div>
          </div>
          <Card className="p-4 mx-4 shadow text-start form-section ">
            <h2 className="mb-3 mx-1 ">CONTACT US</h2>
            <div>
              <FormGroup>
                <Label for="lastName">Full Name</Label>
                <Input id="lastName" name="lastName" type="text" />
              </FormGroup>
            </div>
            <FormGroup>
              <Label for="email"> Email</Label>
              <Input id="email" name="email" type="email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input id="message" name="message" type="textarea" />
            </FormGroup>
            <div className="text-end m-2">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="mt-3">
              Or Call Us: <a href="tel:+923427282514">+92 342 7282 514</a>
            </p>
          </Card>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactUS;

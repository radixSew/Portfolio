import React from "react";
import "../css/services.css";
import { Row, Col } from "antd";
import ServicesCard from "../components/servicesCard";
import img1 from "../Assets/coding.gif";
import img2 from "../Assets/web-design.gif";
import img3 from "../Assets/responsive.gif";
import img4 from "../Assets/website.gif";

const services = () => {
  const serviceData = [
    {
      id: 1,
      ScardIcon1: img1,
      ScardName1: "Web Development",
      Scardp1:
        "Building and maintaining websites with clean, efficient code to create dynamic and functional web applications.",
    },
    {
      id: 2,
      ScardIcon1: img2,
      ScardName1: "Web Design",
      Scardp1:
        "Crafting visually appealing and user-friendly website layouts that enhance user experience.",
    },
    {
      id: 3,
      ScardIcon1: img3,
      ScardName1: "Responsive Web Design",
      Scardp1:
        "Creating websites that adapt seamlessly to different devices and screen sizes for optimal performance.",
    },
    {
      id: 4,
      ScardIcon1: img4,
      ScardName1: "UI Design",
      Scardp1:
        "Designing intuitive and engaging user interfaces to optimize user interactions and enhance overall usability.",
    },
  ];
  return (
    <div className="serviceContainor">
      <div className="topSC">
        <div className="serviceTopic">
          <h1 className="serviceT">Services</h1>
        </div>
      </div>
      <div className="bottomSC">
        <Row gutter={[16,16]}>
          {serviceData.map((serviceD) => (
            <Col span={12} key={serviceD.id}>
              <ServicesCard
                ScardIcon1={serviceD.ScardIcon1}
                ScardName1={serviceD.ScardName1}
                Scardp1={serviceD.Scardp1}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default services;

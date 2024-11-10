import React from "react";
import "../css/servicesCard.css";
import { Card, Col, Row } from "antd";

const servicesCard = ({ScardIcon1,ScardName1,Scardp1}) => {
  return (
    <div>
      <Card className="cardContaioner"
        bordered={false}
        style={{
          width: 350,
          height: 250,
        }}
      >
        <div className="ScardIcon">
          <img src={ScardIcon1} alt="icon" />
        </div>
        <div className="ScardTitle">
          <h1 className="ScardName">{ScardName1}</h1>
        </div>
        <div className="ScardDesc">
          <p className="Scardp">{Scardp1}</p>
        </div>
        <div className="ScardButton">
          <button className="ScardBtn" type="button">Order Now</button>
        </div>
      </Card>
    </div>
  );
};

export default servicesCard;

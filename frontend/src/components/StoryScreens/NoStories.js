import React from "react";
import { Col } from "react-bootstrap";

const NoStories = () => (
  <center>
    <br />
    <br />
    <br />
    <br />
    <Col md="5">
      <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>
        Sorry, No pets were found at the moment
      </p>
      <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
        Please Check your internet and try again.
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: "400" }}>
        If you still cannot find your any pets, please quickly contact our
        customer support service, we will solve your issue as soon as possible
      </p>
    </Col>
  </center>
);

export default NoStories;

import React from 'react';
import {
  Container,
  Row,
  Col,
  CardImg
} from 'reactstrap';

const Services = () => (
  <Container>
  <Row>
    <Col sm="12" md="12" lg="12"><img className="services_img" src="images/services.png" alt="service_logo"/></Col>
    <Col sm="3" md="3" lg="3" className="services">
      <ul className="side_panel">
        <li><p>services</p></li>
        <li><p>air delivery</p></li>
        <li><p>ground shipping</p></li>
        <li><p>sea delivery</p></li>
      </ul>
    </Col>
    <Col xs="12" sm="9" md="9" lg="9">
      <div className="services_do">
        <h1>what we do</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
        </p>
      </div>

      <Container>
        <Row>
          <Col xs="12" sm="12" md="4">
            <div className="service_card">
              <CardImg src="images/news3.jpg" alt="air"/>
              <h3>Air delivery</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4">
            <div className="service_card">
              <CardImg src="images/serv1.png" alt="track"/>
              <h3>Ground shipping</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4">
            <div className="service_card">
              <CardImg src="images/serv2.png" alt="boat"/>
              <h3>Sea delivery</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
            </div>
          </Col>
        </Row>
      </Container>

    </Col>
  </Row>
</Container>);

export default Services

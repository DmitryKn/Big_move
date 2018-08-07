import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Home = () => (
  <div className="home">
    <div>
      <img className="home_logo" src="images/transportation.jpg" alt="main_pic"/>
    </div>
    <div>
      <Container>
        <h2 className="home_title">About Bigmove</h2>
        <Row>
          <Col xs="12" sm="12" md="6" className="del_img">
            <img  src="images/about.png" alt="about_pic"/>
          </Col>
          <Col xs="12" sm="12" md="6" className="del_about">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
              vel illum dolore eu feugiat nulla facilisis at vero ero
            </p>
            <div className="home_table">
              <ul>
                <li><i className="fas fa-building"> Professional company</i></li>
                <li><i className="fas fa-boxes"> Largest warehousing</i></li>
              </ul>
              <ul>
                <li><i className="fas fa-car-side"> On time delivery</i></li>
                <li><i className="fas fa-clock"> Goods tracking support</i></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Home;

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

import img1 from "../../assets/images/1.jpg"

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
              <div>

              <ul class="main-nav">
  <li class="item1">
  <a href="https://www.instagram.com/p/CjGSZ_WJMMC/">
    <div class="bg"></div></a>
  </li>
  
  <li class="item2">
  <a href="https://www.instagram.com/p/Ci8AAAiPGBX/?utm_source=ig_web_copy_link">
    <div class="bg"></div></a>
  </li>
  <li class="item3">
  <a href="https://www.instagram.com/p/CjCzP8aLdOV/?utm_source=ig_web_copy_link">
    <div class="bg"></div></a>
  </li>
  <li class="item4">
  <a href="https://www.instagram.com/p/CjTTv13Pxfj/?utm_source=ig_web_copy_link">
    <div class="bg"></div></a>
  </li>
  <li class="item5">
  <a href="https://www.instagram.com/p/Ch6kgFwBmBK/?utm_source=ig_web_copy_link">
    <div class="bg"></div></a>
  </li>
</ul>
                    



              </div>
              

      </Container>
    </HelmetProvider>
  );
};

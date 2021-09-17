import React from "react";
import {
  Wrapper,
  Row,
  Column,
  Title,
  Link,
  Container,
} from "./Footer.elements";
// import Icon from "../components/icons";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <Title>About Us</Title>
            <Link href="#">Story</Link>
            <Link href="#">Clients</Link>
            <Link href="#">Testimonials</Link>
          </Column>
          <Column>
            <Title>Services</Title>
            <Link href="#">Marketing</Link>
            <Link href="#">Consulting</Link>
            <Link href="#">Development</Link>
            <Link href="#">Design</Link>
          </Column>
          <Column>
            <Title>Contact Us</Title>
            <Link href="#">United States</Link>
            <Link href="#">United Kingdom</Link>
            <Link href="#">Australia</Link>
            <Link href="#">Support</Link>
          </Column>
          <Column>
            <Title>Social</Title>
            <Link href="#">
              {/* <Icon className="fab fa-facebook-f" /> */}
              Facebook
            </Link>
            <Link href="#">
              {/* <Icon className="fab fa-instagram" /> */}
              Instagram
            </Link>
            <Link href="#">
              {/* <Icon className="fab fa-youtube" /> */}
              Youtube
            </Link>
            <Link href="#">
              {/* <Icon className="fab fa-twitter" /> */}
              Twitter
            </Link>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Footer;

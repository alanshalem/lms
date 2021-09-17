import React from "react";
import { Container, Row, Title } from "./Jumbotron.elements";

const Jumbotron = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div>
            {title && (
              <>
                <Title>{title}</Title>
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;

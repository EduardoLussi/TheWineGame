/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-lg mb-5">
          <span>About</span>
        </h2>
        <p className="lead" style={{ 'text-align': 'justify' }}>
          The Wine Game is changing the way people know wine. We are building an entire
          ecosystem of wine consumption, creating NFTs for storing people's unique
          wine moments.
        </p>
        <h3 className="h4 font-weight-bold mt-md" style={{ color: '#63032e' }}>What is an NFT?</h3>
        <Row className="py-3 align-items-center">
          <Col sm="9">
            <p className="lead" style={{ 'text-align': 'justify' }}>
              NFT stands for Non-Fungible Token, which is an unique digital information
              stored on a blockchain. A fungible item is something that can be exchanged for
              another item that has the same value and meaning, like money. On the other hand, a
              non-fungible item is unique and not interchangeable, like the Mona Lisa by Leonardo
              da Vinci (1503) located in the Louvre Museum, Paris.
            </p>
          </Col>
        </Row>
        <h3 className="h4 font-weight-bold mt-md" style={{ color: '#63032e' }}>Collect Wine Moments!</h3>
        <Row className="py-3 align-items-center">
          <Col sm="9">
            <p className="lead" style={{ 'text-align': 'justify' }}>
              The real value of a wine is the moment you drink it. It is a tradition to collect 
              wine corks as a reminder of wine moments. The Wine Game allows you to create
              virtual wine corks to be stored forever on Ethereum blockchain as an NFT! Don't
              forget the good wines you drank or the ones that were there with you, it may
              be more valuable than you think...
            </p>
          </Col>
        </Row>
      </>
    );
  }
}

export default About;

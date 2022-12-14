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
import { Button, Container, Row, Col } from "reactstrap";

class Marketplace extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h2 className="mt-lg">
            <span>Marketplace</span>
          </h2>
          <a href="https://testnets.opensea.io/collection/thewinegame">
            <img 
              alt="..." 
              src={require("assets/img/opensea-logo.png")} 
              style={{ width: "90%" }}/>
          </a>
        </Container>
      </>
    );
  }
}

export default Marketplace;

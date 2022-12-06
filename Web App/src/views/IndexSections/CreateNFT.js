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
import { Pagination, Button, Container, FormGroup, Input, PaginationItem, PaginationLink, Col } from "reactstrap";

class CreateNFT extends React.Component {
  state = {
    pagination: 1
  }

  paginationPage(pagination) {
    if (pagination === 1) {
      return (
        <Container>
          <Button
            block
            color="primary"
            style={{ background: "#46767e", border: "None" }}
            size="lg"
            type="button"
            className="ml-1"
          >
            Read Barcode
          </Button>
        </Container>
      )
    } else if (pagination === 2) {
      return (
        <Container>
          <Button
            block
            color="primary"
            style={{ background: "#46767e", border: "None" }}
            size="lg"
            type="button"
            className="ml-1"
          >
            Take a Photo
          </Button>
        </Container>
      )
    } else if (pagination === 3) {
      return (
        <Container>
          <p className="lead">
            You cannot toast such a good wine alone, share with your friends...
          </p>
          <Button
            block
            color="primary"
            style={{ background: "#63032e", border: "None" }}
            size="lg"
            type="button"
            className="ml-1"
          >
            Add Account
          </Button>
          <Button
            block
            color="primary"
            style={{ background: "#46767e", border: "None" }}
            size="lg"
            type="button"
            className="ml-1"
          >
            Continue
          </Button>
        </Container>
      )
    } else if (pagination === 4) {
      return (
        <Container>
          <p className="lead">
            Give your wine moment a title
          </p>
          <FormGroup>
            <Input placeholder="Regular" type="text" />
          </FormGroup>
          <Button
            block
            color="primary"
            style={{ background: "#46767e", border: "None" }}
            size="lg"
            type="button"
            className="ml-1"
          >
            Create NFT
          </Button>
        </Container>
      )
    }
  }

  render() {

    return (
      <>
        <h2 className="mt-lg mb-5">
          <span>Collect Your Wine Moment!</span>
        </h2>

        {this.paginationPage(this.state.pagination)}
        
        <div style={{ justifyContent: "center", display: "flex", marginTop: "5vh"}}>
          <nav aria-label="Page navigation example">
            <Pagination>
              <PaginationItem active={this.state.pagination === 1}>
                <PaginationLink
                  onClick={() => this.setState({ pagination: 1 })}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active={this.state.pagination === 2}>
                <PaginationLink
                  onClick={() => this.setState({ pagination: 2 })}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active={this.state.pagination === 3}>
                <PaginationLink
                  onClick={() => this.setState({ pagination: 3 })}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active={this.state.pagination === 4}>
                <PaginationLink
                  onClick={() => this.setState({ pagination: 4 })}
                >
                  4
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
      </>
    );
  }
}

export default CreateNFT;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";

const Fix = styled.div`
  position: fixed;
  width: 1030px;
  margin: auto;
  top: 0px;
  z-index: 1;
`;

const Cart = styled.p`
  color: white;
  padding-left: 10px;
  font-size: 18px;
  margin-top: 10px;
`;

const NuvberWrap = ({ countCart }) => {
  console.log(countCart);
  return (
    <>
      <Fix>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">世界のビール</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">ホーム</Nav.Link>
              <Nav.Link href="#features">ラインナップ</Nav.Link>
              <Nav.Link href="#pricing">お問い合わせ</Nav.Link>
            </Nav>{" "}
            <IconContext.Provider value={{ color: "#ccc", size: "50px" }}>
              <FaShoppingCart />
              <Cart>カートの中身:{countCart}</Cart>
            </IconContext.Provider>
          </Container>
        </Navbar>
      </Fix>
    </>
  );
};

export default NuvberWrap;

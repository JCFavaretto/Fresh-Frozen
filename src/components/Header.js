import React, { useState, useContext, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import Cart from "components/Cart.js";
import Carrito from "context/CartContext";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const [cantidad, setCantidad] = useState(0);
  const [{ cart, calcularCantidad }] = useContext(Carrito);

  useEffect(
    () => {
      setCantidad(() => calcularCantidad());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  return (
    <Navbar color="primary" dark expand="md" fixed="top">
      <Container>
        <NavbarBrand href="/" className="mr-auto">
          Fresh&Frozen
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />{" "}
        <NavItem className="cart-icon">
          <i className="material-icons " onClick={toggleModal}>
            shopping_cart
          </i>
          <span> {cantidad > 0 && cantidad} </span>
        </NavItem>
        <Cart modal={modal} toggleModal={toggleModal} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-5">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Productos
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: "var(--primary)" }}>
                <DropdownItem>
                  <Link to="/products" onClick={toggleNavbar}>
                    Todos los productos
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products/hottest" onClick={toggleNavbar}>
                    Lo mas vendido
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products/promociones" onClick={toggleNavbar}>
                    Promociones
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contactus" onClick={toggleNavbar}>
                Nosotros
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

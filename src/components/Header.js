import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
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
} from "reactstrap";
import Cart from "components/Cart.js";
import Carrito from "context/CartContext";
import AuthContext from "context/AuthContext";
import { auth } from "fire";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [{ user }] = useContext(AuthContext);
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
    <Navbar style={{ position: "relative" }} color="primary" dark expand="md">
      <Container>
        <NavLink to="/">
          <NavbarBrand className="logo mr-auto">
            <NavLink to="/">Fresh&Frozen</NavLink>
          </NavbarBrand>
        </NavLink>
        <div className="d-flex flex-end align-self-end nav-icons">
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />{" "}
          <NavItem className="cart-icon" onClick={toggleModal}>
            <FontAwesomeIcon
              icon={cantidad > 0 ? faCartArrowDown : faShoppingCart}
            />
          </NavItem>
        </div>
        <Cart modal={modal} toggleModal={toggleModal} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-5">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Productos
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: "var(--primary)" }}>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="/products"
                    onClick={toggleNavbar}
                  >
                    Todos los productos
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="/products/onSale"
                    onClick={toggleNavbar}
                  >
                    Promociones
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="/products/fresco"
                    onClick={toggleNavbar}
                  >
                    Fresco
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="/products/rebozado"
                    onClick={toggleNavbar}
                  >
                    Rebozados
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="/products/congelado"
                    onClick={toggleNavbar}
                  >
                    Congelados
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink className="nav-link" to="/nosotros" onClick={toggleNavbar}>
              Nosotros
            </NavLink>
            {user.loggedIn ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {user.name}
                </DropdownToggle>
                <DropdownMenu style={{ backgroundColor: "var(--primary)" }}>
                  <DropdownItem>
                    <NavLink
                      className="nav-link"
                      to="/user"
                      onClick={toggleNavbar}
                    >
                      Mis datos
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className="nav-link"
                      to="/compras"
                      onClick={toggleNavbar}
                    >
                      Mis compras
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className="nav-link"
                      to="/"
                      onClick={() => {
                        auth.signOut();
                      }}
                    >
                      Salir
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <NavItem>
                <NavLink className="nav-link" to="/login">
                  Iniciar Sesion
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

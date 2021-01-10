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
  NavLink,
} from "reactstrap";
import Cart from "components/Cart.js";
import Carrito from "context/CartContext";
import AuthContext from "context/AuthContext";
import { auth } from "fire";

const Header = () => {
  const [{ user }] = useContext(AuthContext);
  const { uid } = user;
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
        <NavbarBrand href="/" className="logo mr-auto">
          Fresh&Frozen
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />{" "}
        <NavItem className="cart-icon" onClick={toggleModal}>
          <FontAwesomeIcon
            icon={cantidad > 0 ? faCartArrowDown : faShoppingCart}
          />
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
                  <NavLink href="/products" onClick={toggleNavbar}>
                    Todos los productos
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/products/onSale" onClick={toggleNavbar}>
                    Promociones
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/products/fresco" onClick={toggleNavbar}>
                    Fresco
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/products/rebozado" onClick={toggleNavbar}>
                    Rebozados
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/products/congelado" onClick={toggleNavbar}>
                    Congelados
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contactus" onClick={toggleNavbar}>
                Nosotros
              </NavLink>
            </NavItem>
            {user.loggedIn ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {user.name}
                </DropdownToggle>
                <DropdownMenu style={{ backgroundColor: "var(--primary)" }}>
                  <DropdownItem>
                    <NavLink href={`/${uid}`} onClick={toggleNavbar}>
                      Mis datos
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/compras" onClick={toggleNavbar}>
                      Mis compras
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      href="/"
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
                <NavLink href="/login">Iniciar Sesion</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

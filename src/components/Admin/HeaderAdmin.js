import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  Container,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const HeaderAdmin = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="info" light fixed="top">
      <Container>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/admin" className="mr-auto">
          Seccion Admin
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-5">
            <NavItem>
              <NavLink href="/admin/additem" onClick={toggleNavbar}>
                Agregar producto nuevo
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderAdmin;

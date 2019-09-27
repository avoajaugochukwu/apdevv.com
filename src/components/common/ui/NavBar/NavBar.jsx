import React from 'react';
import {
  Collapse,
  Navbar,
  Container,
  NavbarToggler,
  Nav,
  NavItem,
  } from 'reactstrap';
  import { Link } from "react-router-dom";
  import './navBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const styles = {
      backgroundColor: "#2962FF",
      color: "#ffffff"
    };


    return (
      <div>
        <Navbar color="" light expand="md" style={styles} fixed={`top`}>
          <Container>
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar >
                <NavItem>
                  <Link to="/" className="navbar-light navbar-nav nav-link">apdevv.com</Link>
                </NavItem>
                <NavItem>
                  <Link to="/blog" className="navbar-light navbar-nav nav-link">blog</Link>
                </NavItem>
                <NavItem>
                  <Link to="/portfolio" className="navbar-light navbar-nav nav-link">portfolio</Link>
                </NavItem>
                <NavItem>
                  <Link to="/resume" className="navbar-light navbar-nav nav-link">data & analytics</Link>
                </NavItem>
                <NavItem>
                  <Link to="/resume" className="navbar-light navbar-nav nav-link">resume</Link>
                </NavItem>

                {/*<UncontrolledDropdown nav inNavbar className="ml-auto">
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>*/}

              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar

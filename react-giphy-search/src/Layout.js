import React from 'react';
import { Container, Navbar, NavbarBrand} from 'reactstrap';

const Layout = ({ children }) => {
    return(
        <div>
            <Navbar
            className="mb-3"
            light color="light"
            >
                <Container>
                    <NavbarBrand
                    href="/"
                    >Giphy React App</NavbarBrand>
                </Container>
            </Navbar>
            {children}
        </div>
    )
}
export default Layout;
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import React from 'react';
function Header() {
    const history = useHistory();
    const user=JSON.parse(localStorage.getItem('user-info'));
    console.log(user);
    function logout(){
        localStorage.clear();
        history.push("/register");
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav-bar-wrapper">
                        <Link to="/">Product List</Link>
                        <Link to="/add">Add Product</Link>
                        <Link to="/update">Update Product</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/search">Search Product</Link>
                    </Nav>
                    {/* {localStorage.getItem('user-info')? */}
                    <Nav>
                        {/* <NavDropdown title={user && user.name}> */}
                        <NavDropdown title={'user-info'}>
                          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* :null} */}
                    
                </Container>
            </Navbar>
        </>
    )
}
export default Header;
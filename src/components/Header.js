import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: "#121618" }}>
                <Container>
                    {/* <img style={{width:"200px", height:"200px"}} src="https://i.postimg.cc/Dfx22wBf/b3.png" alt="" /> */}
                    <Navbar.Brand className='text-white' href="#home"><span style={{ color: "#0796EF" }}>DEEP</span> NET SOFT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        {/* <Nav className="ml-auto">
                        <Nav.Link style={{fontFamily: 'Oswald',}} className='text-white' href="#home">HOME</Nav.Link>
                        <Nav.Link style={{color:"#0796EF"}} href="#menu">MENU</Nav.Link>
                        <Nav.Link style={{fontFamily: 'Oswald',}}className='text-white' href="#reservation">MAKE A RESERVATION</Nav.Link>
                        <Nav.Link style={{fontFamily: 'Oswald',}} className='text-white' href="#contact">CONTACT US</Nav.Link>
                    </Nav> */}
                    {/* </Navbar.Collapse> */}
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav.Link  style={{ fontFamily: 'Oswald', }} className='text-white m-2' href="#home">HOME</Nav.Link>
                        <Nav.Link style={{ color: "#0796EF" }} href="#menu" className='m-2'>MENU</Nav.Link>
                        <Nav.Link style={{ fontFamily: 'Oswald', }} className='text-white m-2' href="#reservation">MAKE A RESERVATION</Nav.Link>
                        <Nav.Link style={{ fontFamily: 'Oswald', }} className='text-white m-2' href="#contact">CONTACT US</Nav.Link>

                    </Navbar.Collapse>


                </Container>
            </Navbar>

            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/f81b6208cb3da0f5ecc0f0d109ca4bd0.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top 30%',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1
                    className='justify-content-center'
                    style={{
                        color: 'white',
                        fontFamily: 'Oswald',
                        fontWeight: 600,
                        fontSize: '75px',
                        lineHeight: '111.15px',
                        letterSpacing: '3%',
                        textShadow: '4px 3px 0 #800020',

                    }}
                >
                    MENU
                </h1>
                <p style={{ color: 'white' }}>
                    Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br />
                    <center>place an order, use the "Order Online" button located below the menu.</center></p>
            </div>

        </>
    );
}

export default Header;

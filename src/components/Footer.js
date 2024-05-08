import React from 'react'
import { Row,Col,Container, Navbar, Nav } from 'react-bootstrap';
function Footer() {
  return (
    <div>
      

      <div>
        <Row 
        style={{ 
          backgroundColor: "black", 
          
          // flexDirection: 'flex', 
          // alignItems: 'center',
          // padding: '20px'
        }}
        >
          <Col lg={4} md={4} sm={12} className='p-3'
          style={{ 
            // padding: '20px', 
            borderRadius: '20px', 
            border: '2px solid white', 
            // marginBottom: '20px',
            // width: '100%',
            // boxSizing: 'border-box'
          }}
          >
            <h5 className='text-center' style={{color:"#0796EF"}}>Connect with Us</h5>
            <p className='text-center text-white'><i className="fa-solid fa-phone"></i> +1 470-788-8255</p>
            <p className='text-center text-white'><i className="fa-solid fa-envelope"></i> email@42barrill.com</p>
          </Col>
          <Col lg={4} md={4} sm={12}  className='p-3'
          style={{ 
            // padding: '20px', 
            borderRadius: '20px', 
            border: '2px solid white', 
            // marginBottom: '20px',
            // width: '100%',
            // boxSizing: 'border-box'
          }}
          >
            <h5 className='text-center' style={{color:"#0796EF"}}>DEEP NET SOFT</h5>
            <div className='text-center'>
              <i className="m-3 fa-brands fa-facebook"></i>
              <i className="m-3 fa-brands fa-instagram"></i>
              <i className="m-3 fa-brands fa-youtube"></i>
              <i className="m-3 fa-brands fa-square-twitter"></i>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}   className='p-3'
          style={{ 
            // padding: '20px', 
            borderRadius: '20px', 
            border: '2px solid white', 
            // width: '100%',
            // boxSizing: 'border-box'
          }}
          >
            <h5 className='text-center' style={{color:"#0796EF"}}>FIND US</h5> 
            <p className='text-center text-white'><i className="fa-solid fa-location-dot"></i> 327 Memorial Dr SE, Atlanta, GA 30312, USA</p>
          </Col>
        </Row>
  
      </div>




      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#D9D9D9" }}>
        <p className='ms-5'>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
        <p>Terms & Conditions</p>
        <p className='me-5'>Privacy Policy</p>
      </div>
    </div>
    

  )
}

export default Footer
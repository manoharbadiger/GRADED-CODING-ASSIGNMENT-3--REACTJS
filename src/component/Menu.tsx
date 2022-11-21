import { Navbar, Container , Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const Menu = () => {
    return ( 
        <Navbar bg="light" variant="light" expand="lg">
        <Container>
        
          <Navbar.Brand to="/home" as={NavLink}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav"/>
          <Nav className="me-auto">
            <Nav.Link to="/movieintheater" as={NavLink}>Movie in Theater</Nav.Link>
            <Nav.Link to="/comingsoon" as={NavLink}>Coming Soon</Nav.Link>
            <Nav.Link to="/topIndia" as={NavLink}>Top rated India</Nav.Link>
            <Nav.Link to="/toprated" as={NavLink}>Top rated Movie</Nav.Link>
            <Nav.Link to="/faviourites" as={NavLink}>Faviourites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     );
}
 
export default Menu;
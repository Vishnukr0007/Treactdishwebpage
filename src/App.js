
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPlayCircle } from "react-icons/bs";
import img1 from './pics/img1.jpg';


function App() {
  return (
    <div className="App ">
      <Navbar bg="white" data-bs-theme="primary" >
        <Container >
          <Navbar.Brand className='logo-txt' href="#home"><button className='logo'>T</button> Treact</Navbar.Brand>
          <Nav className="me-auto title">
            <Nav.Link  href="#About" >About</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
            <Nav.Link href="#login"><button className='login-btn'>Login</button></Nav.Link>
            <Nav.Link href="#login"><button className='sign-up-btn'>Sign Up</button></Nav.Link>
      
            
          </Nav>
        </Container>
      </Navbar>
      
      <section className='left-sec'>
      <div className='content'>
        <h1>Delicious& Affordable <br /></h1>
        <div className='back'>
        <h1 className='txt-bg'>   Meals Near You.</h1>
        </div>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random <br /> text. It has roots in a piece of classical Latin literature from</p>
        <button className='order-btn'>Order Now</button>
        <button className='play-btn'><BsPlayCircle className='pl-icon' />  Meet The Chefs</button>
      </div>


      </section>
      
        <div className='img-sec'>
         <img className='dish'  src={img1} alt="" />
        </div>

      
      
      </div>

  );
}

export default App;

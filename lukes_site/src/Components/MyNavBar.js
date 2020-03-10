import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button' 
import Nav from 'react-bootstrap/Nav' 
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import {About} from '../Pages/About'
import {Contact} from '../Pages/Contact'
import {Home} from '../Pages/Home' 
import {Layout} from '../Components/Layout'
class  MyNavBar extends React.Component{

  render () {
    return (
      <div >
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand href="/">Luke's Page</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="ml-auto">
                <Nav.Link href = '/'>Home</Nav.Link>
              <Nav.Link href="/about">About </Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            
            </Nav>
           
          </Navbar.Collapse>
        </Navbar>

 
        <React.Fragment>
            <Router>
                <Switch> 
                    <Layout>
                        <Route exact path ="/" component ={Home } />
                        <Route  path="/about" component= {About} />
                        <Route  path="/contact" component= {Contact} /> 
                    </Layout>
                </Switch>
            </Router>
        </React.Fragment>
   
        </div>
      );
    }
  }
  export default MyNavBar;
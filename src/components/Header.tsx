import { Button, Form } from 'react-bootstrap';
import { Bag, ChevronDown, Facebook, GeoAlt, Grid3x3Gap, Heart, Instagram, Person, Pinterest, Search, TelephonePlus, Twitter } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header:React.FC = () => {
    return (
        <>
            {/* Top Nav */}
            <Navbar bg="white" expand="lg" id='top-nav'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">About Us</Nav.Link>
                            <Nav.Link href="/">My Account</Nav.Link>
                            <Nav.Link href="/">Wishlist</Nav.Link>
                            <Nav.Link href="/">Order Tracing</Nav.Link>
                        </Nav>
                        <ul className="social-icons d-flex justify-content-center align-items-center ps-0 mb-0">
                            <li className='list-unstyled me-3'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Facebook /></a>
                            </li>
                            <li className='list-unstyled me-3'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Twitter /></a>
                            </li>
                            <li className='list-unstyled me-3'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Instagram /></a>
                            </li>
                            <li className='list-unstyled'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Pinterest /></a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Search Nav */}
            <Navbar bg="white" expand="lg" id='search-nav' className='py-4'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand href="/">
                            <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg" alt="" />
                        </Navbar.Brand>
                        <div className="search-and-panel ms-auto d-flex justify-content-center align-items-center">
                            <Form className='position-relative'>
                                <Form.Control type="text" placeholder='Search products...' />
                                <Button className='d-flex align-items-center position-absolute'><Search /></Button>
                            </Form>
                            <div className="admin-panel-icons ms-5 d-flex justify-content-center align-items-center">
                                <a href='/' className="find-location text-decoration-none d-flex justify-content-center align-items-center">
                                    <GeoAlt className='me-2' fontSize={16} /> <span>Find a Book Store</span>
                                </a>
                                <ul className='d-flex justify-content-center align-items-center mb-0'>
                                    <li className='list-unstyled pe-3'>
                                        <a href="/"><Person fontSize={18} /></a>
                                    </li>
                                    <li className='list-unstyled px-3'>
                                        <a href="/"><Heart fontSize={14} /><span>0</span></a>
                                    </li>
                                    <li className='list-unstyled ps-3'>
                                        <a href="/"><Bag fontSize={15} /><span>0</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Menu Nav */}
            <Navbar bg="white" expand="lg" id='menu-nav' sticky='top'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <div className="categories d-flex justify-content-between align-items-center">
                            <div className="main-part d-flex justify-content-center align-items-center">
                                <Grid3x3Gap className='me-2' fontSize={18} /> Categories
                            </div>
                            <ChevronDown fontSize={10} />
                        </div>
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className='me-4'>Home</Nav.Link>
                            <Nav.Link href="/" className='me-4'>Shop</Nav.Link>
                            <Nav.Link href="/" className='me-4'>Vendor</Nav.Link>
                            <Nav.Link href="/" className='me-4'>Pages</Nav.Link>
                            <Nav.Link href="/" className='me-4'>Blog</Nav.Link>
                            <Nav.Link href="/">Contact</Nav.Link>
                        </Nav>
                        <div className="support-center d-flex justify-content-center align-items-center">
                            <div className="call-icon me-3"><TelephonePlus/></div>
                            <div className="support-context">
                                <p className='mb-0'>+1 840 - 841 25 69</p>
                                <span>24/7 Support Center</span>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}


export default Header;
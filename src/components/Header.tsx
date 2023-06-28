import { useContext, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { Bag, ChevronDown, ChevronUp, Facebook, GeoAlt, Grid3x3Gap, Heart, Instagram, MoonFill, Person, Pinterest, Search, TelephonePlus, Twitter } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import { useBetween } from 'use-between';
import useSharedCanvas from './sharedHook/useSharedCanvas';
import { BookContext } from '../context/BookContext';
import useSharedLogin from './sharedHook/useSharedLogin';
import Login from './login/Login';
import useSharedUser from './sharedHook/useSharedUser';
import Swal from 'sweetalert2';
import useSharedCategory from './sharedHook/useSharedCategory';
import { ThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
    const { showCanvas, setShowCanvas } = useBetween(useSharedCanvas);
    const { setShowLogin } = useBetween(useSharedLogin);
    const { userStatus, setUserStatus, userName } = useBetween(useSharedUser);
    const { setActiveCat } = useBetween(useSharedCategory);
    const [logout, setLogout] = useState<string>("d-none");

    const [books] = useContext(BookContext);

    const { totalItems, items, removeItem, cartTotal, emptyCart } = useCart();
    const [navbarAdd, setNavbarAdd] = useState(false)
    const navbarExtra = () => {
        if (window.scrollY >= 137.5) {
            setNavbarAdd(true)
        } else {
            setNavbarAdd(false)
        }
    }

    const handleClose = () => setShowCanvas(false);
    const handleShow = () => setShowCanvas(true);

    window.addEventListener("scroll", navbarExtra);

    const [searchValue, setSearchValue] = useState<string>("");
    const searchResult = books.filter((value: any) => value.title.toLocaleLowerCase().includes(searchValue));

    const cartCheckout = () => {
        if (userStatus !== "") {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The order of the books has been accepted',
                showConfirmButton: false,
                timer: 1000
            })
            emptyCart();
            setTimeout(() => {
                setShowCanvas(false);
            }, 1000);
        } else {
            Swal.fire({
                title: 'Please login first!',
                timer: 1000,
                timerProgressBar: false,
                showConfirmButton: false,
            })
            setTimeout(() => {
                setShowLogin(true);
            }, 1200);
        }
    }

    const [mode, setMode] = useContext(ThemeContext);

    const modeChange = () => {
        if (mode === 'light') {
            setMode("dark");
            localStorage.setItem('mode', 'dark');
        } else {
            setMode("light");
            localStorage.setItem('mode', 'light');
        }
    }

    return (
        <>
            {/* Top Nav */}
            <Navbar expand="lg" id='top-nav'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <button
                                className="btn btn-func mode-btn ms-3"
                                type="submit"
                                onClick={modeChange}
                            >
                                {mode === "dark" ? "🌞" : <MoonFill />}
                            </button>
                            <button
                                className="btn btn-func lang-btn ms-3"
                                type="submit"
                            >
                                AZ
                            </button>
                        </Nav>
                        {userStatus === "admin" ?
                            <LinkContainer to="/dashboard">
                                <span className='admin-dash'>Dashboard</span>
                            </LinkContainer>
                            :
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
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Search Nav */}
            <Navbar expand="lg" id='search-nav' className='py-4'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand href="/">
                            <img src={mode === "light" ? "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg" : "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo.svg"} alt="" />
                        </Navbar.Brand>
                        <div className="search-and-panel ms-auto d-flex justify-content-center align-items-center">
                            <Form className='position-relative'>
                                <Form.Control type="search" placeholder='Search products...' onChange={(e) => { setSearchValue(e.target.value) }} />
                                <Button className='d-flex align-items-center position-absolute'><Search /></Button>
                                <div className={`searching-result ${searchValue === "" ? "d-none" : "d-block"}`}>
                                    {searchResult.length !== 0 ? searchResult.map((item: any) => {
                                        return <div className="search-item d-flex align-items-center justify-content-between" key={item.id}>
                                            <div className="book-img-info d-flex align-items-center">
                                                <div className="search-img">
                                                    <img src={item.image} alt="book" width="60px" />
                                                </div>
                                                <div className="book-data ms-3">
                                                    <LinkContainer to={`/shop/${item.id}`}>
                                                        <h3 className="book-name mb-1" onClick={() => { setSearchValue("") }}>{item.title}</h3>
                                                    </LinkContainer>
                                                    <p className="book-info mb-1">{item.briefDescription.substr(0, 30)}...</p>
                                                    <span className='price'>${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    }) : <p className='no-book mb-0'>No such book was found</p>}
                                </div>
                            </Form>
                            <div className="admin-panel-icons ms-5 d-flex justify-content-center align-items-center">
                                <a href='/' className="find-location text-decoration-none d-flex justify-content-center align-items-center">
                                    <GeoAlt className='me-2' fontSize={16} /> <span>Find a Book Store</span>
                                </a>
                                <ul className='d-flex justify-content-center align-items-center mb-0'>
                                    {!userStatus ?
                                        <li className='list-unstyled pe-3' onClick={() => { setShowLogin(true) }}>
                                            <LinkContainer to={window.location.pathname}>
                                                <a href="/"><Person fontSize={18} /></a>
                                            </LinkContainer>
                                        </li>
                                        : userStatus === "admin" ?
                                            <li className='list-unstyled pe-3' onMouseEnter={() => { setLogout("d-block") }} onMouseLeave={() => { setLogout("d-none") }}>
                                                <LinkContainer to={window.location.pathname}>
                                                    <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>Hi, admin</p> <Person fontSize={18} /></a>
                                                </LinkContainer>
                                                <div className={`log-out ${logout}`} onClick={() => { setUserStatus(""); localStorage.removeItem("user") }}>
                                                    <span>Log out</span>
                                                </div>
                                            </li>
                                            :
                                            <li className='list-unstyled pe-3' onMouseEnter={() => { setLogout("d-block") }} onMouseLeave={() => { setLogout("d-none") }}>
                                                <LinkContainer to={window.location.pathname}>
                                                    <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>Hi, {userName}</p> <Person fontSize={18} /></a>
                                                </LinkContainer>
                                                <div className={`log-out ${logout}`} onClick={() => { setUserStatus(""); localStorage.removeItem("user") }}>
                                                    <span>Log out</span>
                                                </div>
                                            </li>
                                    }
                                    <li className='list-unstyled px-3'>
                                        <a href="/"><Heart fontSize={14} /><span>0</span></a>
                                    </li>
                                    <li className='list-unstyled ps-3' onClick={handleShow}>
                                        <div><Bag fontSize={15} /><span>{totalItems}</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Menu Nav */}
            <Navbar expand="lg" id='menu-nav' sticky='top'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <div className="categories d-flex justify-content-between align-items-center">
                            <div className="cat-relative d-flex justify-content-between align-items-center w-100">
                                <div className="main-part d-flex justify-content-center align-items-center">
                                    <Grid3x3Gap className='me-2' fontSize={18} /> Categories
                                </div>
                                <ChevronDown fontSize={10} />
                                <ChevronUp fontSize={10} />
                            </div>
                            <div className="category-hover">
                                <ul className='category-list ps-0 mb-0'>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(1) }}>
                                                <i className="fa-sharp fa-solid fa-mountain-sun me-2"></i>
                                                Action & Adventure
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(5) }}>
                                                <i className="fa-solid fa-feather me-2"></i>
                                                Arts & Photography
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(8) }}>
                                                <i className="fa-regular fa-flag me-2"></i>
                                                Contemporary
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(11) }}>
                                                <i className="fas fa-book-open me-2"></i>
                                                Foreign Language
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(12) }}>
                                                <i className="fa-solid fa-fan me-2"></i>
                                                Genre Fiction
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(13) }}>
                                                <i className="fa-brands fa-canadian-maple-leaf me-2"></i>
                                                Historical
                                            </div>
                                        </LinkContainer>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/">
                                <Nav.Link className='me-4'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/shop">
                                <Nav.Link className='me-4'>Shop</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/vendor">
                                <Nav.Link className='me-4'>Vendor</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link className='me-4'>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className='me-4'>About us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <div className={`support-center d-flex justify-content-center align-items-center ${navbarAdd ? "d-none" : ""}`}>
                            <div className="call-icon me-3"><TelephonePlus /></div>
                            <div className="support-context">
                                <p className='mb-0'>+1 840 - 841 25 69</p>
                                <span>24/7 Support Center</span>
                            </div>
                        </div>
                        <div className={`admin-panel-icons ${navbarAdd ? "" : "d-none"}`}>
                            <ul className='d-flex justify-content-center align-items-center mb-0'>
                                {!userStatus ?
                                    <li className='list-unstyled pe-3' onClick={() => { setShowLogin(true) }}>
                                        <LinkContainer to="/">
                                            <a href="/"><Person fontSize={18} /></a>
                                        </LinkContainer>
                                    </li>
                                    : userStatus === "admin" ?
                                        <li className='list-unstyled pe-3' onMouseEnter={() => { setLogout("d-block") }} onMouseLeave={() => { setLogout("d-none") }}>
                                            <LinkContainer to="/">
                                                <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>Hi, admin</p> <Person fontSize={18} /></a>
                                            </LinkContainer>
                                            <div className={`log-out ${logout}`} onClick={() => { setUserStatus("") }}>
                                                <span>Log out</span>
                                            </div>
                                        </li>
                                        :
                                        <li className='list-unstyled pe-3' onMouseEnter={() => { setLogout("d-block") }} onMouseLeave={() => { setLogout("d-none") }}>
                                            <LinkContainer to="/">
                                                <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>Hi, {userName}</p> <Person fontSize={18} /></a>
                                            </LinkContainer>
                                            <div className={`log-out ${logout}`} onClick={() => { setUserStatus("") }}>
                                                <span>Log out</span>
                                            </div>
                                        </li>
                                }
                                <li className='list-unstyled px-3'>
                                    <a href="/"><Heart fontSize={14} /><span>0</span></a>
                                </li>
                                <li className='list-unstyled ps-3' onClick={handleShow}>
                                    <div><Bag fontSize={15} /><span>{totalItems}</span></div>
                                </li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Add to cart */}
            <Offcanvas show={showCanvas} onHide={handleClose} placement='end' className={mode === "dark" ? "off-dark" : ""}>
                <Offcanvas.Header>
                    <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                    <div className="closeBtn text-uppercase" onClick={handleClose}>Close</div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {totalItems === 0 ?
                        <div className='no-cart d-flex flex-column'>
                            <p className='mb-0'>No products in the cart.</p>
                        </div>
                        :
                        <div className='shop-cart d-flex flex-column justify-content-between h-100'>
                            <div className="shop-item-cards">
                                {items.map((item: any) => {
                                    return (
                                        <div className="shop-cart" key={item.id}>
                                            <div className="remove-item d-flex flex-row-reverse" onClick={() => { removeItem(item.id) }}>X</div>
                                            <div className="shop-item d-flex">
                                                <div className="item-img">
                                                    <img src={item.image} alt="book" width="60px" />
                                                </div>
                                                <div className="item-info d-flex flex-column">
                                                    <LinkContainer to={`/shop/${item.id}`}>
                                                        <h5 onClick={() => setShowCanvas(false)}>{item.title}</h5>
                                                    </LinkContainer>
                                                    <div className="vendor-info">
                                                        Vendor: <span>{item.vendorInfo.storeName}</span>
                                                    </div>
                                                    <div className="quantity-price d-flex align-items-center">
                                                        <span className="quantity">{item.quantity} x &nbsp;</span><span className='price'>${item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="shop-submit">
                                <div className="total-price d-flex justify-content-between">
                                    Subtotal: <div className="total">${cartTotal.toFixed(2)}</div>
                                </div>
                                <div className="cart-btns">
                                    <LinkContainer to="/cart">
                                        <button className="view-cart text-uppercase" onClick={() => setShowCanvas(false)}>
                                            View Cart
                                        </button>
                                    </LinkContainer>
                                    <button className="view-cart text-uppercase" onClick={cartCheckout}>
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </Offcanvas.Body>
            </Offcanvas>

            <Login />
        </>
    );
}


export default Header;
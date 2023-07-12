import { useContext, useEffect, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { Bag, BrightnessHighFill, ChevronDown, ChevronUp, Facebook, GeoAlt, Grid3x3Gap, Heart, Instagram, MoonFill, Person, Pinterest, Search, TelephonePlus, Twitter } from 'react-bootstrap-icons';
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
import { LangContext } from '../context/LangContext';
import { menu_az, menu_cat_az, menu_cat_en, menu_en } from '../data/lang';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
    const { showCanvas, setShowCanvas } = useBetween(useSharedCanvas);
    const { setShowLogin } = useBetween(useSharedLogin);
    const { userStatus, setUserStatus, userName } = useBetween(useSharedUser);
    const { setActiveCat } = useBetween(useSharedCategory);
    const { totalItems, items, removeItem, cartTotal, emptyCart } = useCart();
    const [logout, setLogout] = useState<string>("d-none");

    const [books] = useContext(BookContext);

    const navigate = useNavigate()

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

    // Dark & Light mode
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

    // En & Az language
    const [lang, setLang] = useContext(LangContext);
    const [menuData, setMenuData] = useState<any>([]);
    const [menuCat, setMenuCat] = useState<any>([]);

    useEffect(() => {
        const menuData = lang === "en" ? menu_en : menu_az;
        setMenuData(menuData)
        const menuCat = lang === "en" ? menu_cat_en : menu_cat_az;
        setMenuCat(menuCat)
    }, [lang])

    const data: any = useSelector((a: any) => a.wish);

    const langChange = () => {
        if (lang === 'en') {
            setLang("az");
            localStorage.setItem('lang', 'az');
        } else {
            setLang("en");
            localStorage.setItem('lang', 'en');
        }
    }

    const swalTitle = lang === "en" ? "The order of the books has been accepted" : "Kitabların sifarişi qəbul olunub";
    const swalLog = lang === "en" ? "Please login first!" : "Zəhmət olmasa əvvəlcə daxil olun!";

    const cartCheckout = () => {
        if (userStatus !== "") {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: swalTitle,
                showConfirmButton: false,
                timer: 1000
            })
            emptyCart();
            setTimeout(() => {
                setShowCanvas(false);
            }, 1000);
        } else {
            Swal.fire({
                title: swalLog,
                timer: 1000,
                timerProgressBar: false,
                showConfirmButton: false,
            })
            setTimeout(() => {
                setShowLogin(true);
            }, 1200);
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
                                className="btn btn-func mode-btn"
                                type="submit"
                                onClick={modeChange}
                            >
                                {mode === "dark" ? <BrightnessHighFill /> : <MoonFill />}
                            </button>
                            <button
                                className="btn btn-func lang-btn ms-2"
                                type="submit"
                                onClick={langChange}
                            >
                                {lang === "en" ? "Az" : "En"}
                            </button>
                        </Nav>
                        {userStatus === "admin" ?
                            <LinkContainer to="/dashboard">
                                <span className='admin-dash'>{lang === "en" ? "Dashboard" : "Idarə paneli"}</span>
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
                            <img src={mode === "light" || mode === null ? "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg" : "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo.svg"} alt="" />
                        </Navbar.Brand>
                        <div className="search-and-panel ms-auto d-flex justify-content-center align-items-center">
                            <Form className='position-relative'>
                                <Form.Control type="search" placeholder={lang === "en" ? "Search books..." : "Kitabları axtarın..."} onChange={(e) => { setSearchValue(e.target.value) }} />
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
                            <div className="admin-panel-icons d-flex justify-content-center align-items-center">
                                <a href='/' className="find-location text-decoration-none d-flex justify-content-center align-items-center">
                                    <GeoAlt className='me-2' fontSize={16} /> <span>{lang === "en" ? "Find a Book Store" : "Kitab mağazası tapın"}</span>
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
                                                    <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>{lang === "en" ? "Hi" : "Salam"}, admin</p> <Person fontSize={18} /></a>
                                                </LinkContainer>
                                                <div className={`log-out ${logout}`} onClick={() => { setUserStatus(""); localStorage.removeItem("user"); if (window.location.pathname === "/dashboard" || window.location.pathname === "/dashboard/add" || window.location.pathname === "/dashboard/edit") navigate("/") }}>
                                                    <span>{lang === "en" ? "Log out" : "Hesabdan çıx"}</span>
                                                </div>
                                            </li>
                                            :
                                            <li className='list-unstyled pe-3' onMouseEnter={() => { setLogout("d-block") }} onMouseLeave={() => { setLogout("d-none") }}>
                                                <LinkContainer to={window.location.pathname}>
                                                    <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>{lang === "en" ? "Hi" : "Salam"}, {userName}</p> <Person fontSize={18} /></a>
                                                </LinkContainer>
                                                <div className={`log-out ${logout}`} onClick={() => { setUserStatus(""); localStorage.removeItem("user") }}>
                                                    <span>{lang === "en" ? "Log out" : "Hesabdan çıx"}</span>
                                                </div>
                                            </li>
                                    }
                                    <li className='list-unstyled px-3'>
                                        <LinkContainer to="/wishlist">
                                            <a href="/"><Heart fontSize={14} /><span className={data.length ? "" : "d-none"}>{data.length}</span></a>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled ps-3' onClick={handleShow}>
                                        <div><Bag fontSize={15} /><span className={totalItems ? "" : "d-none"}>{totalItems}</span></div>
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
                                    <Grid3x3Gap className='me-2' fontSize={18} /> {lang === "en" ? "Categories" : "Kateqoriyalar"}
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
                                                {menuCat[0]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(5) }}>
                                                <i className="fa-solid fa-feather me-2"></i>
                                                {menuCat[1]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(8) }}>
                                                <i className="fa-regular fa-flag me-2"></i>
                                                {menuCat[2]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(11) }}>
                                                <i className="fas fa-book-open me-2"></i>
                                                {menuCat[3]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(12) }}>
                                                <i className="fa-solid fa-fan me-2"></i>
                                                {menuCat[4]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(13) }}>
                                                <i className="fa-brands fa-canadian-maple-leaf me-2"></i>
                                                {menuCat[5]}
                                            </div>
                                        </LinkContainer>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/">
                                <Nav.Link className='me-4'>{menuData[0]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/shop">
                                <Nav.Link className='me-4'>{menuData[1]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/vendor">
                                <Nav.Link className='me-4'>{menuData[2]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link className='me-4'>{menuData[3]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className='me-4'>{menuData[4]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>{menuData[5]}</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <div className={`support-center d-flex justify-content-center align-items-center ${navbarAdd ? "d-none" : ""}`}>
                            <div className="call-icon me-3"><TelephonePlus /></div>
                            <div className="support-context">
                                <p className='mb-0'>+1 840 - 841 25 69</p>
                                <span>{lang === "en" ? "24/7 Support Center" : "24/7 Dəstək mərkəzi"}</span>
                            </div>
                        </div>
                        <div className={`admin-panel-icons ${navbarAdd ? "normal" : "d-none"}`}>
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
                                                <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>{lang === "en" ? "Hi" : "Salam"}, admin</p> <Person fontSize={18} /></a>
                                            </LinkContainer>
                                            <div className={`log-out ${logout}`} onClick={() => { setUserStatus(""); localStorage.removeItem("user"); if (window.location.pathname === "/dashboard" || window.location.pathname === "/dashboard/add" || window.location.pathname === "/dashboard/edit") navigate("/") }}>
                                                <span>{lang === "en" ? "Log out" : "Hesabdan çıx"}</span>
                                            </div>
                                        </li>
                                        :
                                        <li className='list-unstyled pe-3' onMouseEnter={() => { setLogout("d-block") }} onMouseLeave={() => { setLogout("d-none") }}>
                                            <LinkContainer to="/">
                                                <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>{lang === "en" ? "Hi" : "Salam"}, {userName}</p> <Person fontSize={18} /></a>
                                            </LinkContainer>
                                            <div className={`log-out ${logout}`} onClick={() => { setUserStatus(""); localStorage.removeItem("user") }}>
                                                <span>{lang === "en" ? "Log out" : "Hesabdan çıx"}</span>
                                            </div>
                                        </li>
                                }
                                <li className='list-unstyled px-3'>
                                    <LinkContainer to="/wishlist">
                                        <a href="/"><Heart fontSize={14} /><span className={data.length ? "" : "d-none"}>{data.length}</span></a>
                                    </LinkContainer>
                                </li>
                                <li className='list-unstyled ps-3' onClick={handleShow}>
                                    <div><Bag fontSize={15} /><span className={totalItems ? "" : "d-none"}>{totalItems}</span></div>
                                </li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Add to cart */}
            <Offcanvas show={showCanvas} onHide={handleClose} placement='end' className={mode === "dark" ? "off-dark" : ""}>
                <Offcanvas.Header>
                    <Offcanvas.Title>{lang === "en" ? "Shopping cart" : "Alış-veriş səbəti"}</Offcanvas.Title>
                    <div className="closeBtn text-uppercase" onClick={handleClose}>{lang === "en" ? "Close" : "Bağla"}</div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {totalItems === 0 ?
                        <div className='no-cart d-flex flex-column'>
                            <p className='mb-0'>{lang === "en" ? "No books in the cart." : "Səbətdə kitab yoxdur."}</p>
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
                                                        {lang === "en" ? "Vendor" : "Satıcı"}: <span>{item.storeWish}</span>
                                                    </div>
                                                    <div className="quantity-price d-flex align-items-center">
                                                        <span className="quantity">{item.quantity} x &nbsp;</span>
                                                        <span className='price'>${!item.price.toString().split(".")[1]
                                                            ? item.price.toString().concat(".00")
                                                            : item.price.toString().split(".")[1].length === 1
                                                                ? item.price.toString().concat("0")
                                                                : item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="shop-submit">
                                <div className="total-price d-flex justify-content-between">
                                    {lang === "en" ? "Subtotal" : "Ara cəmi"}: <div className="total">${cartTotal.toFixed(2)}</div>
                                </div>
                                <div className="cart-btns">
                                    <LinkContainer to="/cart">
                                        <button className="view-cart text-uppercase" onClick={() => setShowCanvas(false)}>
                                            {lang === "en" ? "View Cart" : "Səbətə bax"}
                                        </button>
                                    </LinkContainer>
                                    <button className="view-cart text-uppercase" onClick={cartCheckout}>
                                        {lang === "en" ? "Checkout" : "Alış-verişi tamamla"}
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
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Facebook, Instagram, Pinterest, Twitter } from 'react-bootstrap-icons'
import { ThemeContext } from '../context/ThemeContext'
import { LangContext } from '../context/LangContext'
import { LinkContainer } from 'react-router-bootstrap'

const Footer: React.FC = () => {
    const [mode] = useContext(ThemeContext);
    const [lang] = useContext(LangContext)
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6">
                            <div className="row info-part">
                                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column align-items-start pb-4">
                                    <div className="foot-logo">
                                        <img src={mode === "light" ? "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg" : "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo.svg"} alt="" />
                                    </div>
                                    <p className='mb-2'>{lang === "en" ? "Got Questions ? Call us 24/7!" : "Suallarınız var? 24/7 bizə zəng edin!"}</p>
                                    <h4 className='pb-4 mb-0'>+(84) - 1800 - 4635</h4>
                                    <ul className='social-icons ps-0 d-flex justify-content-center align-items-center'>
                                        <li className='list-unstyled me-3'><a href="/"><Facebook /></a></li>
                                        <li className='list-unstyled me-3'><a href="/"><Twitter /></a></li>
                                        <li className='list-unstyled me-3'><a href="/"><Instagram /></a></li>
                                        <li className='list-unstyled'><a href="/"><Pinterest /></a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 px-5">
                                    <h5 className="foot-title text-capitalize mb-3">Contact info</h5>
                                    <ul className='ps-0 mb-4'>
                                        <li className='list-unstyled mb-3'>1418 River Drive, Suite 35 <br />
                                            Cottonhall, CA 9622</li>
                                        <li className='list-unstyled'>Monday – Friday: 9:00-20:00 <br />
                                            Saturday: 11:00 – 15:00</li>
                                    </ul>
                                    <p className='mb-0'>contact@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <h5 className="foot-title text-capitalize mb-3">Explore</h5>
                                    <ul className='ps-0'>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>About Us</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Sitemap</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Bookmarks</a>
                                        </li>
                                        <li className='list-unstyled'>
                                            <a href="/" className='text-decoration-none'>Sign in/Join</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <h5 className="foot-title text-capitalize mb-3">Our service</h5>
                                    <ul className='ps-0'>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Help Center</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Returns</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Product Recalls</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Accessibility</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Contact Us</a>
                                        </li>
                                        <li className='list-unstyled'>
                                            <a href="/" className='text-decoration-none'>Store Pickup</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <h5 className="foot-title text-capitalize mb-3">Categories</h5>
                                    <ul className='ps-0'>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Action</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Comedy</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Drama</a>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <a href="/" className='text-decoration-none'>Horror</a>
                                        </li>
                                        <li className='list-unstyled'>
                                            <a href="/" className='text-decoration-none'>Kids</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="sub-footer">
                <Container className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>{lang === "en" ? "Copyright © 2023" : "Müəlliflik hüququ © 2023"} <LinkContainer to="/"><a href="/" className='text-decoration-none'>Bookory</a></LinkContainer>. {lang === "en" ? "All rights reserved." : "Bütün hüquqlar qorunur."}</p>
                    <div className="bank-cards">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/footer_img.png" alt="cards" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
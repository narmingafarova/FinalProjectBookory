import React from 'react'
import { Container } from 'react-bootstrap'

const Story: React.FC = () => {
    return (
        <div className="about-story py-5">
            <Container>
                <div className="init-about text-center">
                    <div className="init-logo mb-4">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_01_1.png" alt="about-logo" />
                    </div>
                    <h4 className='text-center'>We are the premier book retailing chain in the Southeastern United States with more than 260 Book stores in 32 states.</h4>
                </div>
            </Container>
            <div className="our-story">
                <Container>
                    <div className="main-img">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_04.jpg" alt="about" />
                    </div>
                    <div className="story-cards-part">
                        <h3 className='text-center'>Our Story</h3>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <div className="story-card">
                                    <h5 className='text-uppercase'>Retail Stores</h5>
                                    <p className='mb-0'>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                                </div>
                                <div className="story-card">
                                    <h5 className='text-uppercase'>Wholesale Distribution</h5>
                                    <p className='mb-0'>Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <div className="story-card">
                                    <h5 className='text-uppercase'>E-commerce and internet services</h5>
                                    <p className='main-card-p'>Pellentesque sodales augue eget ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis ultrices condimentum.</p>
                                    <p className='mb-0'>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-images">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_03.png" alt="about" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_02.png" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="quote-story">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <h5 className='text-capitalize'>“Bookory Are Such Joy ... To Be Cherished, Handled With Pleasure, Read And Reread And Handed Down To The Next Generation”</h5>
                                <p className='mb-0 text-uppercase'>john smith / founder</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                <p className='mb-0'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="foot-img">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_01.png" alt="about" />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Story
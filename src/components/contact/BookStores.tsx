import React from 'react'
import { Container } from 'react-bootstrap'

const BookStores:React.FC = () => {
    return (
        <div className="book-stores">
            <Container>
                <h3 className='text-center mb-5'>Our Book Store</h3>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="store-img mb-4">
                            <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/contact_pic_1.png" alt="contact" />
                        </div>
                        <div className="city-data mb-4">
                            <h4>New York</h4>
                            <p className='mb-0'>3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                            <p className='mb-0'>Hotline: +(84) 2500 888 33</p>
                            <p className='mb-0'>support@example.com</p>
                        </div>
                        <div className="woorking-hours">
                            <h6>Working Hours</h6>
                            <p className='mb-0'>Open: 8:00AM – Close: 18:00PM</p>
                            <p className='mb-0'>Saturday – Sunday: Close</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="store-img mb-4">
                            <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/contact_pic_2.png" alt="contact" />
                        </div>
                        <div className="city-data mb-4">
                            <h4>Las Vegas</h4>
                            <p className='mb-0'>3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                            <p className='mb-0'>Hotline: +(84) 2500 888 33</p>
                            <p className='mb-0'>support@example.com</p>
                        </div>
                        <div className="woorking-hours">
                            <h6>Working Hours</h6>
                            <p className='mb-0'>Open: 8:00AM – Close: 18:00PM</p>
                            <p className='mb-0'>Saturday – Sunday: Close</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="store-img mb-4">
                            <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/contact_pic_3.png" alt="contact" />
                        </div>
                        <div className="city-data mb-4">
                            <h4>Los Angeles</h4>
                            <p className='mb-0'>3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                            <p className='mb-0'>Hotline: +(84) 2500 888 33</p>
                            <p className='mb-0'>support@example.com</p>
                        </div>
                        <div className="woorking-hours">
                            <h6>Working Hours</h6>
                            <p className='mb-0'>Open: 8:00AM – Close: 18:00PM</p>
                            <p className='mb-0'>Saturday – Sunday: Close</p>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default BookStores
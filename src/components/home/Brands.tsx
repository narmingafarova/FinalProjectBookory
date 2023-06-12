import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import AOS from 'aos';

const Brands: React.FC = () => {
    useEffect(() => { 
        AOS.init();
    }, [])
    return (
        <div className="brands py-5">
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-2" data-aos="zoom-in">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_1.svg" alt="brand" />
                    </div>
                    <div className="col-12 col-sm-4 col-md-2" data-aos="zoom-in">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_2.svg" alt="brand" />
                    </div>
                    <div className="col-12 col-sm-4 col-md-2" data-aos="zoom-in">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_3.svg" alt="brand" />
                    </div>
                    <div className="col-12 col-sm-4 col-md-2" data-aos="zoom-in">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_4.svg" alt="brand" />
                    </div>
                    <div className="col-12 col-sm-4 col-md-2" data-aos="zoom-in">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_5.svg" alt="brand" />
                    </div>
                    <div className="col-12 col-sm-4 col-md-2" data-aos="zoom-in">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_6.svg" alt="brand" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Brands
import React from 'react'
import { Container } from 'react-bootstrap'
import { BoxSeam, CalendarRange, Gift, Handbag, Truck } from 'react-bootstrap-icons'

const OpportunityCards:React.FC = () => {
    return (
        <div className="opp-cards pt-2 pb-5">
            <Container className='d-flex justify-content-between align-items-center'>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Gift />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>Best Prices & Offers</h4>
                        <p className='mb-0'>Orders $50 or more</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Truck/>
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>Free Delivery</h4>
                        <p className='mb-0'>24/7 amazing services</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <CalendarRange/>
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>Great Daily Deal</h4>
                        <p className='mb-0'>When you sign up</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Handbag/>
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>Wide Assortment</h4>
                        <p className='mb-0'>Mega Discounts</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <BoxSeam />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>Easy Returns</h4>
                        <p className='mb-0'>Within 30 days</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OpportunityCards
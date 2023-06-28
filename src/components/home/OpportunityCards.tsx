import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { BoxSeam, CalendarRange, Gift, Handbag, Truck } from 'react-bootstrap-icons'
import { LangContext } from '../../context/LangContext'
import { opp_card_az, opp_card_en } from '../../data/lang'

const OpportunityCards: React.FC = () => {
    const [lang] = useContext(LangContext);
    const [oppCard, setOppCard] = useState<any>([])
    useEffect(() => {
        const opp = lang === "en" ? opp_card_en : opp_card_az;
        setOppCard(opp)
    }, [lang])
    return (
        <div className="opp-cards pt-2 pb-5">
            <Container className='d-flex justify-content-between align-items-center'>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Gift />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[0]}</h4>
                        <p className='mb-0'>{oppCard[1]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Truck />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[2]}</h4>
                        <p className='mb-0'>{oppCard[3]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <CalendarRange />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[4]}</h4>
                        <p className='mb-0'>{oppCard[5]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Handbag />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[6]}</h4>
                        <p className='mb-0'>{oppCard[7]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <BoxSeam />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[8]}</h4>
                        <p className='mb-0'>{oppCard[9]}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OpportunityCards
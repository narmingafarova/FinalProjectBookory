import React from 'react'
import HomeCarousel from '../components/home/HomeCarousel'
import GiftSaleCards from '../components/home/GiftSaleCards'
import SaleInfoBar from '../components/home/SaleInfoBar'
import Brands from '../components/home/Brands'
import Subscribe from '../components/home/Subscribe'
import Gallery from '../components/home/Gallery'
import OpportunityCards from '../components/home/OpportunityCards'
import ScrollToTop from '../components/ScrollToTop'

const Home: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            {/* Main part */}
            <HomeCarousel />
            <GiftSaleCards />
            <SaleInfoBar />
            <Brands />
            <Subscribe />
            <Gallery />
            <OpportunityCards />
        </>
    )
}

export default Home
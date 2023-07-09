import React from 'react'
import HomeCarousel from '../components/home/HomeCarousel'
import GiftSaleCards from '../components/home/GiftSaleCards'
import SaleInfoBar from '../components/home/SaleInfoBar'
import Brands from '../components/home/Brands'
import Subscribe from '../components/home/Subscribe'
import Gallery from '../components/home/Gallery'
import OpportunityCards from '../components/home/OpportunityCards'
import ScrollToTop from '../components/ScrollToTop'
import Categories from '../components/home/Categories'
import TopVendors from '../components/home/TopVendors'
import FavouriteReads from '../components/home/FavouriteReads'
import TrendingNow from '../components/home/TrendingNow'
import Bestselling from '../components/home/Bestselling'
import Popular from '../components/home/Popular'

const Home: React.FC = () => (
    <>
        <ScrollToTop />
        {/* Main part */}
        <HomeCarousel />
        <Categories />
        <GiftSaleCards />
        <TopVendors />
        <SaleInfoBar />
        <FavouriteReads />
        <TrendingNow />
        <Bestselling />
        <Popular />
        <Brands />
        <Subscribe />
        <Gallery />
        <OpportunityCards />
    </>
)

export default Home
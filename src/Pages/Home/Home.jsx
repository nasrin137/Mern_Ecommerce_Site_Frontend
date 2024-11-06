import Banner from "./Banner"
import Categories from "./Categories"
import HeroSection from './HeroSection'
import TrendingProducts from '../Shop/TrendingProducts'
import DealsSection from "./DealsSection"
import PromoBanner from "./PromoBanner"
import Blogs from "../Blog/Blogs"


const Home = () => {
  return (
    <>
        <Banner></Banner>
        <Categories></Categories>
        <HeroSection></HeroSection>
        <TrendingProducts></TrendingProducts>
        <DealsSection></DealsSection>
        <PromoBanner></PromoBanner>
        <Blogs></Blogs>
    </>
  )
}

export default Home
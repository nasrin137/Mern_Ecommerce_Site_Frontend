import { Link } from "react-router-dom"
import bannerImg from '../../assets/header.png'

const Banner = () => {
  return (
    <div className="section__container  header__container">
        <div className="header__content z-30">
            <h4 className="uppercase">up to 25 discount</h4>
            <h1>girls fashion</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates modi, animi ipsum adipisci natus quaerat delectus dolorum alias enim libero.</p>
            <button className="btn"><Link to='/shop'>Explore Now</Link></button>
        </div>
        <div className="header__image">
            <img src={bannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner
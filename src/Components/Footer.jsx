import img1 from '../assets/instagram-1.jpg'
import img2 from '../assets/instagram-2.jpg'
import img3 from '../assets/instagram-3.jpg'
import img4 from '../assets/instagram-4.jpg'
import img5 from '../assets/instagram-5.jpg'
import img6 from '../assets/instagram-6.jpg'

const Footer = () => {
  return (
    <>
    <footer className="section__container footer__container">
        <div className="footer__col"> 
            <h4>Contact Info</h4>
            <p>
                <span><i className="ri-map-pin-fill"></i></span>
                123,London
            </p>
            <p>
                <span><i className="ri-mail-fill"></i></span>
                example@lebaba.com
            </p>
            <p>
                <span><i className="ri-phone-fill"></i></span>
                +112589647
            </p>

        </div>
        <div className="footer__col">
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Work With Us</a>
            <a href="/">Our Blogs</a>
            <a href="/">Terms & Conditions</a>
        </div>
        <div className="footer__col">
            <h4>USEFUL LINKS</h4>
            <a href="/">Help</a>
            <a href="/"> Track Your Order</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
            <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
            <h4>INSTRAGRAM</h4>
          <div className='instagram__grid'>
          <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>

    </footer>
    <div className='footer__bar'>
        copyright.
    </div>
    </>
  )
}

export default Footer
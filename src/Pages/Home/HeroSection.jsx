import cardImg1 from '../../assets/card-1.png'
import cardImg2 from '../../assets/card-2.png'
import cardImg3 from '../../assets/card-3.png'

const HeroSection = () => {
    const cards=[
        {
            id:1,
            image:cardImg1,
            trend:"2024 Trend",
            title:"Women's Shirt"
        },
        {
            id:2,
            image:cardImg2,
            trend:"2024 Trend",
            title:"Women's Dresses"
        },
        {
            id:3,
            image:cardImg3,
            trend:"2024 Trend",
            title:"Women's Casuals"
        }
    ]
  return (
    <section className='section__container hero__container '>
        {
            cards.map((card)=>(
                <div key={card.id} className='hero__card'>
                    <img src={card.image} alt="" />
                    <div className='hero__content'>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href="#">Discover More</a>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default HeroSection
import dealsImg from '../../assets/deals.png'

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>
        <div className='deals__content'>
            <h5>20% discount</h5>
            <h4>Deals of the month</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nulla fugiat? Laboriosam doloribus veritatis, labore nesciunt dolore eligendi, libero reiciendis omnis nulla illum quod fugiat!</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealsSection
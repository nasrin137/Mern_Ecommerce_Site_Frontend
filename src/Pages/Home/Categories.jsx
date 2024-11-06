import { Link } from 'react-router-dom'
import categoryImg1 from '../../assets/category-1.jpg'
import categoryImg2 from '../../assets/category-2.jpg'
import categoryImg3 from '../../assets/category-3.jpg'
import categoryImg4 from '../../assets/category-4.jpg'

const Categories = () => {
    const categories = [
        {name:"Accessories",path:"accessories",image:categoryImg1},
        {name:"Dress Collection",path:"dress",image:categoryImg2},
        {name:"Jewellery",path:"jewellery",image:categoryImg3},
        {name:"Cosmetics",path:"cosmetics",image:categoryImg4}
    ]
  return (
    <>
    <div className="product__grid ">
        {
            categories.map((category)=>(
                <Link key={category.path} to={`/categories/${category.path}`} className='categories__card'>
                <img src={category.image} alt={category.name} />
                <h4>{category.name}</h4>
                </Link>
            ))
        }
    </div>
    </>
  )
}

export default Categories
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from '../../data/products.json'
import ProductCards from "../Shop/ProductCards"

const CategoryPage = () => {
    const {categoryName} = useParams()
    const[filteredProducts,sertFillteredProducts] = useState([])

    useEffect(()=>{
        const filtered = products.filter((product)=>product.category === categoryName.toLowerCase())
        sertFillteredProducts(filtered)
    },[categoryName])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
 <>
    <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fugiat corrupti repudiandae porro. Odio, aliquid.</p>
    </section>
     {/* products card */}
     <div className="section__container">
            <ProductCards products={filteredProducts}></ProductCards>
        </div>
 </>
  )
}

export default CategoryPage
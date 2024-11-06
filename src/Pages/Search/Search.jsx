import { useState } from "react"
import products from '../../data/products.json'
import ProductCards from "../Shop/ProductCards";

const Search = () => {
    const[searchQuery,setSearchQuery] = useState('')
    const[filteredProducts,sertFillteredProducts] = useState(products);

    const handelSeacrh = () =>{
        const query = searchQuery.toLowerCase()
        const filtered = products.filter((product)=>product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query) )
        sertFillteredProducts(filtered)
    }
  return (
    <>
     <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Search Products</h2>
        <p className="section__subheader">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fugiat corrupti repudiandae porro. Odio, aliquid.</p>
    </section>
     
     <section className="section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <input type="text" value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 border rounded"
            placeholder="Search For Products..."/>
            <button 
            onClick={handelSeacrh} className="search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded">Search</button>
        </div>
        <ProductCards products={filteredProducts}></ProductCards>
    </section>
    </>
  )
}

export default Search
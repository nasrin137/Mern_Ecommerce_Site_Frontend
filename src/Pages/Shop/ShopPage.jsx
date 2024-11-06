

const ShopPage = () => {
  return (
    <>
     <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fugiat corrupti repudiandae porro. Odio, aliquid.</p>
    </section>
    <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
            {/* left side */}
            <div>Shop Filtering</div>
            {/* right side */}
            <div>
                <h3 className="text-xl font-medium mb-4">Products Available</h3>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopPage
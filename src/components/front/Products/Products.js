import React from 'react'
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  
  return (
    <div className='products'>
      {
        productItems.map((productItems) => (

          <div key={productItems.name} className="card">

            {/* display image */}
            <div>
              <img className="product-image" src={productItems.image} alt={productItems.name} />
            </div>

            {/* image name */}
            
            <div>
              <h3 className='product-name'>{ productItems.name}</h3>
            </div>

            {/* image price */}

            <div className='product-price'>${productItems.price}</div>
            <div>

              <button className='product-add-button' onClick={() => handleAddProduct(productItems)}> Add to Cart</button>
              
            </div>
          </div>
        ))

      }
    </div>
  )
}

export default Products;

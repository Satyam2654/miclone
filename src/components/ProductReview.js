import React from 'react'
import ProductReviewCard from '../components/ProductReviewCard.js'
import "../styles/ProductReview.css"

const ProductReview = ({ProductReview}) => {
  return (
    <div className='ProductReviews'>
      {ProductReview.map((item)=>(
   <ProductReviewCard key={item.key} name={item.name} review={item.review} image={item.image}/>
      ))}
    </div>
  )
}

export default ProductReview

import React from 'react'

interface CategoryTypes {
  image: string,
  category: string
}

const CategoryCard: React.FC<CategoryTypes> = ({ image, category }) => {
  return (
    <div className='category-card d-flex flex-column align-items-center'>
      <div className="category-img">
        <img src={image} alt="category" />
      </div>
      <div className="category-name">
        {category}
      </div>
    </div>
  )
}

export default CategoryCard
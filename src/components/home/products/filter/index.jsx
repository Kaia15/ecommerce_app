import React from 'react'
import { categories } from '../../../data/fields'
import CheckBox from './CheckBox/checkbox'
import SliderProton from './Slider/slider'
import ClearFilters from './ClearFilter/clearfilter'

const Filter = ({
    categoryIndex,
    handleCategory,
    price,
    handlePrice,
    filter,
    applyFilters,
    clearFilters
}) => {
    // console.log(categoryIndex)
    // console.log(price)
    return (
        <div style = {{flex: "4"}}>
            <CheckBox categoryIndex={categoryIndex} handleCategory={handleCategory} categories = {categories} />
            <SliderProton price={price} handlePrice={handlePrice} />
            <ClearFilters clearFilters={clearFilters} />
        </div>
    )
}

export default Filter
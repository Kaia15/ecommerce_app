import React from 'react'

const CheckBox = ({ categoryIndex, handleCategory, categories }) => {
    return (
        <div className="category">
            <p style = {{fontSize: "1.2em", fontFamily: "Impact, Haettenschweiler, sans-serif;"}}> Category </p>
            {categories.map((category, index) => {
            return (
                <div className="form-check" key={index}>
                        <input
                            id="category"
                            type="checkbox"
                            value={categoryIndex[index]}
                            onChange={() => handleCategory(index)}
                        />
                        <label htmlFor="category"> {category} </label>
                </div>
            )
            })}
        </div>
    )
}

export default CheckBox
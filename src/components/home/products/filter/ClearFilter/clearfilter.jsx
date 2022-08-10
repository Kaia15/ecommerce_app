import React from 'react'

const ClearFilters = ({clearFilters}) => {
    return (
        <div>
            <button 
            onClick={clearFilters}
            style = {{margin: "5px", backgroundColor: "white", border: "1px solid", borderRadius: "4px", width: "100px", height: "40px", fontSize: "1em"}}
            > Clear filters</button>
        </div>
    )
}

export default ClearFilters
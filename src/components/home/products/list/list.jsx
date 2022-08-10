import React from 'react'

const List = ({list}) => {
    // console.log(list)
    return (
        <div className='items' style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "20px 0px"}}>
            {list.length > 0 && list.map(pr => {
                return (
                    <div className='d-flex flex-column'>
                        <img src={pr.model} style={{ width: "70%", height: "70%", borderRadius: "4px",  }} />
                        <p style = {{margin: "10px"}}> {pr.title} </p>
                        <div className="options-btn" style = {{display: "flex", flexDirection: "column"}}>
                            <button style = {{margin: "5px", backgroundColor: "white", border: "1px solid", borderRadius: "4px", width: "100px", height: "30px"}}
                                to={`/products/${pr.id}`}
                            > Book now </button>
                            <button style = {{margin: "5px", backgroundColor: "white", border: "1px solid", borderRadius: "4px", width: "100px", height: "30px"}}> + Save to cart </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List
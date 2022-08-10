import React from 'react'
import { useState, useEffect, useRef} from 'react'
import { categories } from '../../data/fields'
import { items } from '../../data/list'
import Filter from '../products/filter'
import List from '../products/list/list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Products = () => {
    const [categoryIndex, setCategoryIndex] = useState([])
    const [price, setPrice] = useState([0,100])
    const [searchVal, setSearchVal] = useState("")
    const [filter, setFilter] = useState([])
    // const [all, setAll] = useState(true)
    const [clear, setClear] = useState(true)
    
    const handleCategory = (id) => {
        let updatedCheck;
        if (categoryIndex.includes(id)) {
            updatedCheck = categoryIndex.filter(c => c !== id)
            setCategoryIndex(updatedCheck)
        }
        else {
            setCategoryIndex(prev => { return [...prev, id]})
            // updatedCheck = unCheck.push(id)
        }
    }

    const handlePrice = (event, newValue) => setPrice(newValue)

    const applyFilters = useEffect(() => {
        let after = items

        /*if (price) {
            after = after.filter((item, index) => {
                console.log(item['price'])
                return item['price'] <= parseInt(price)
            })
        }

        if (categoryIndex) {
            after = after.filter((item, index) => {
                return categoryIndex.includes(index)
            })
        }*/

        after = after.filter((item, index) => {
            if (
                ((item['price'] < price[0]*100) || (item['price'] > price[1]*100)) ||
                (categoryIndex.length > 0 && !categoryIndex.includes(categories.indexOf(item['category'])))
            ) return false
            return true
        })

        if (searchVal) {
            let upperSearch = searchVal.toUpperCase();
            let lowerSearch = searchVal.toLowerCase();
            after = after.filter((item, index) => {
                let upperTitle = item['title'].toUpperCase();
                let lowerTitle = item['title'].toLowerCase();
                return upperTitle.includes(upperSearch) || lowerTitle.includes(lowerSearch)
            })
        }
        console.log(after)
        setFilter(after)
        // setAll(true)
    }, [categoryIndex, price, searchVal])

    // console.log(filter)
    // console.log(price, typeof price)
    const clearFilters = () => {
        setClear(true)
        setCategoryIndex([])
        setPrice([0,100])
    }

    return (
        <div>
            {clear ? 
            (<div style = {{margin: "0 100px"}}>
            <h3 style = {{textAlign: "center"}}> Our latest products </h3>
            <button 
            style = {{margin: "5px", backgroundColor: "black", color: "white", border: "1px solid", borderRadius: "4px", width: "100px", height: "40px", fontSize: "0.8em"}}
            onClick = {() => {
                setClear(false)
            }}>
            <FontAwesomeIcon icon="fa-solid fa-filter" style={{color: "white"}}/>
            Filter </button>
            <List list = {filter} />
            </div>) :
            (<div className='filter' style = {{display: "flex", flexDirection: "row", margin: "0px 50px"}}>
            <Filter 
            categoryIndex={categoryIndex}
            handleCategory={handleCategory}
            price={price}
            handlePrice={handlePrice}
            filter={filter}
            applyFilters = {applyFilters}
            clearFilters = {clearFilters}
            />
            <div className = "listshow" style = {{margin: "0px 5px", flex: "7"}}>
            {filter.length > 0 ? <List list = {filter} /> : <div><p> No results found </p></div>}
            </div>
            </div>)
            }
        </div>
        
    )
}

export default Products
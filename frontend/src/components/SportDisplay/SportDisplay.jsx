import React, { useContext } from 'react'
import './SportDisplay.css'
import { StoreContext } from '../../context/StroreContext'
import SportItem from '../SportItem/SportItem'

const SportDisplay = ({ category }) => {

    const { Sport_list } = useContext(StoreContext)

    return (
        <div className='Sport-display' id='Sport-display'>
            <h2>Our Facilities</h2>
            <div className="Sport-display-list">
                {Sport_list.map((item, index) => {
                    if (category === 'All' || category === item.category)
                        return <SportItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })}
            </div>

        </div>
    )
}

export default SportDisplay

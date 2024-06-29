import React, { useContext } from 'react'
import './SportItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StroreContext';

const SportItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)


    return (
        <div className='Sport-item'>
            <div className="Sport-item-img-container">
                <img className='Sport-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => { addToCart(id) }} src={assets.add_icon_white} alt='' />
                    : <div className="Sport-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="Sport-item-info">
                <div className="Sport-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="Sport-item-desc">
                    {description}
                </p>
                <p className="Sport-item-price">₹ {price}</p>
            </div>
        </div>
    )
}

export default SportItem

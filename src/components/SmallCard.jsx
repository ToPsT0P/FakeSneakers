import React, { useState } from "react";

const  SmallCard = ({p, setShopArray,shopArray}) => {


    const deleteShoes = () => {
        const newElArray = [...shopArray]
        newElArray[p.id].liked = !newElArray[p.id].liked;
        setShopArray(newElArray)
      };

    return(
        <div className="cartItem d-flex align-center mb-15">
            <div className="cartItemImg mr-15" style={{backgroundImage: `url(${p.imgURL})`}}/>
                <div>
                <p className="mb-5">{p.name}</p>
                <b>{p.price} руб.</b>
            </div>
            <button className="button removeImg" onClick={e => deleteShoes()}><img src="/img/delete.svg" alt="Sneakers"/></button>
        </div>
    )
}

export default SmallCard
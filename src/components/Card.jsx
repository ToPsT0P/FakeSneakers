import React, { useState } from "react";


const Card = ({array, index, setShopArray, shopArray}) => {

  const changingLiked = (number) => {
    const newElArray = [...shopArray]
    newElArray[number].liked = !newElArray[number].liked;
    setShopArray(newElArray)
  }

  const changingFavourite = (numberOfCard) => {
    const newElArray = [...shopArray]
    newElArray[numberOfCard].favourite = !newElArray[numberOfCard].favourite
    setShopArray(newElArray)
  }

    return(
        <div className="card mb-20 mr-30" id={array.id}>
            <div className="favourite" onClick={e => changingFavourite(index)}>
                {array.favourite ? <img src="/Sneakers/heartSneakers-active.svg"/>  : <img src="/Sneakers/heartSneakers.svg"/>}
            </div>
            <img className = "ml-20" width={133} height={112} src={array.imgURL}/>
            <h5>{array.name}</h5>  
            <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span className="text-uppercase">Цена:</span>
            <b>{array.price} руб.</b>
          </div>
          <button className="button" onClick={e => changingLiked(index)} >
            {array.liked ? <img width={32} height={32} src="img/plus-active.svg"/> : <img width={32} height={32} src="img/plus.svg"/>}
          </button>
        </div>
      </div>
    )
}

export default Card
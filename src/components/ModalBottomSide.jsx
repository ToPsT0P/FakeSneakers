import React from "react";


const ModalBottomSide = ({price, setAlreadyBought, addingToBought, shopArray}) => {


  const finalFunc = () => {
    //Если через мап я нашел лайкнутый после кнопки, то я этот объект передаю в функцию
    shopArray.map((p) => {
      if(p.liked){
        addingToBought(p)
      }
    })
    setAlreadyBought(true)
  }
    return(
        
        <div className="bottomSide">
        <ul>
          <li className="d-flex align-center bottomSideText">
            <span className="mr-5">Итого:</span>
            <div className="mr-5 dots">.....................................</div>
            <b>{price} руб.</b>
          </li>
          <li className="d-flex align-center bottomSideText"> 
            <span className="mr-5">Налог 5%:</span>
            <div className="mr-5 dots">...................................</div>
            <b>{price / 20} руб.</b>
          </li>
        </ul>
        <button onClick = {e => finalFunc()} className="buttonbuy mt-20">Оформить заказ</button>
      </div>

    )
}

export default ModalBottomSide
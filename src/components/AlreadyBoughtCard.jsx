import React from "react";

const AlreadyBoughtCard = ({setModalActive}) => {

    let x = Math.floor(Math.random() *((1000 - 1) + 1));
    return(
        <div className="align-center justify-center clearCard">
            <img src="/img/alreadyBought.svg" className="imgClearCard"/>
            <div>
            <b className="boldText" style={{color: "green"}}>Заказ оформлен!</b>
            <p className="clearCardText">Ваш заказ #{x} скоро будет передан курьерской доставке</p>
            </div>
            <button className="clearCardBtn" onClick={e => setModalActive(false)}>Вернуться назад</button>
        </div>
    )
}

export default AlreadyBoughtCard
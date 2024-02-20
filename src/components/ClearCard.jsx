import React from "react";

const ClearCard = ({setModalActive}) => {

    return(
        <div className="align-center justify-center clearCard">
            <img src="/img/clearCard.svg" className="imgClearCard"/>
            <div>
            <b className="boldText">Корзина пустая</b>
            <p className="clearCardText">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            </div>
            <button className="clearCardBtn" onClick={e => setModalActive(false)}>Вернуться назад</button>
        </div>
    )
}

export default ClearCard


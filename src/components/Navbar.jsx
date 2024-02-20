import React from "react";

const Navbar = ({setModal, price, setActivePage}) => {

    return(
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.svg" />
            <div onClick={e => setActivePage("Main")} style={{cursor: "pointer"}}>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
              
            </div>
          </div>
            <ul className="d-flex">
              <li className="mr-30" style={{cursor: "pointer"}} onClick={e => {setModal(true)}}>
                <img width={18} height={18} src="/img/cart.svg"/>
                <span >{price} руб.</span>
              </li>
              <li className="mr-30" style={{cursor: "pointer"}} onClick={e => setActivePage("LikesPage")}>
                <img width={18} height={18} src="/img/heart.svg" />
                <span>Закладки</span>
              </li>
              <li className="mr-30" style={{cursor: "pointer"}} onClick={e => setActivePage("Profile")}> 
                <img width={18} height={18} src="/img/user.svg" />
                <span>Профиль</span>
              </li>
            </ul>
        </header>
    )
}

export default Navbar
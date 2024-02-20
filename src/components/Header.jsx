import React from "react";

const Header = ({setSearchShoes}) => {

    return(
        <div className="d-flex justify-between mb-40">
        <h1 className="">Все кроссовки</h1>
        <div className="search-block d-flex align-center">
          <img src="img/search.svg" alt="Search" className="mr-10 ml-10" width={20} height={20}/>
          <input placeholder="Поиск..." onChange={e => setSearchShoes(e.target.value)}/>
        </div>
      </div>
    )

}

export default Header
import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import ModalBottomSide from "./ModalBottomSide";
import ClearCard from "./ClearCard";
import AlreadyBoughtCard from "./AlreadyBoughtCard";



const ModalRightSide = ({setModalActive, shopArray, setShopArray, addingToBought}) => {

  const [alreadyBought, setAlreadyBought] = useState(false)
  let price = 0
  shopArray.map((p) => {if(p.liked == true){price += p.price}})

    return(

        <div className="shadow-rightside-modal" onClick={e => setModalActive(false)}>
          <div className="rightside-modal" onClick={e => e.stopPropagation()}>
          
            <div className="items">
              

              <h2 className="textModal">Корзина</h2>
              <div>
              {alreadyBought ? <div><AlreadyBoughtCard setModalActive={setModalActive}/></div> : shopArray.map((p) => {if(p.liked == true){ return <SmallCard p={p} setShopArray = {setShopArray} shopArray = {shopArray}/>}})}
                
              </div>




            </div>

            <div>
          {alreadyBought ? <></> : price ?  <ModalBottomSide shopArray={shopArray} addingToBought={addingToBought} price = {price} setAlreadyBought={setAlreadyBought}/> : <div className="d-flex"><ClearCard setModalActive={setModalActive}/> </div>}

            
            </div>

          </div>
        </div>
      


    )
}

export default ModalRightSide
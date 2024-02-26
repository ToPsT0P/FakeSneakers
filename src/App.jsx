import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import ModalRightSide from "./components/ModalRightSide"
import Header from "./components/Header"
import Card from "./components/Card"
import Profile from "./components/Profile"
import ModalLogin from "./components/ModalLogin"

function App() {


  const [shopArray, setShopArray]= useState([])
  const [boughtShopArray, setBoughtShopArray] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [logModal, setLogModal] = useState(false)
  const [activePage, setActivePage] = useState("Main")
  const [searchShoes, setSearchShoes] = useState("")
  const filteredShoes = shopArray.filter(shoes => {
    return shoes.name.toLowerCase().includes(searchShoes.toLowerCase())
  })

    //BackEnd 
  
    useEffect(() => {
      fetch('https://6566dedb64fcff8d730f2f2b.mockapi.io/Items')
      .then((res) => {return res.json()})
      .then((json) => {setShopArray(json)})

    }, [])

    const addingToBought = (arrayObj) => {
      fetch('https://6566dedb64fcff8d730f2f2b.mockapi.io/AlreadyBought', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(arrayObj)
      }).then((res) => {return res.json()})}


      useEffect(() => {
        fetch('https://6566dedb64fcff8d730f2f2b.mockapi.io/AlreadyBought')
        .then((res) => {return res.json()})
        .then((json) => {setBoughtShopArray(json)})
  
      }, [activePage])

  let price = 0
  shopArray.map((p) => {if(p.liked == true){price += p.price}})
  return (
    <>
      <div className="wrapper clear">
        <Navbar setLogModal={setLogModal} setModal={setModalActive} price={price} setActivePage={setActivePage}/> 
        {logModal && <ModalLogin setLogModal={setLogModal}/>}
        {modalActive && <ModalRightSide addingToBought={addingToBought} setModalActive={setModalActive} shopArray={shopArray} setShopArray={setShopArray }/>}
        <div className="content p-40">
          {activePage != "Profile" && <Header setSearchShoes={setSearchShoes}/>}
          <div className="d-flex itemsField">

          {activePage === "Main" 
          && filteredShoes.map((p, index) => 
          <Card 
          array={p} 
          index={index} 
          shopArray= {shopArray} 
          setShopArray={setShopArray}/>
          )}

          {activePage === "LikesPage" && 
          filteredShoes.map((p, index) =>
          {if(p.favourite)
          return (<Card array={p} index={index} shopArray= {shopArray} setShopArray={setShopArray}/>)
          })}

          {activePage === "Profile" && boughtShopArray.map((p) => {
            return <Profile arrayObj={p} />
          })}

          {filteredShoes.length == 0 && <div><h2>Простите, таких кроссовок нет в наличии</h2></div>}

          </div>         
        </div>
      </div>
    </>
  )
}

export default App

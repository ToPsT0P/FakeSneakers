import React, { useState } from "react";

const ModalLogin = ({setLogModal}) => {

  const [userNameLog, setUserNameLog] = useState("")
  const [userPasswordLog, setUserPasswordLog] = useState("")
  const [userEmailReg, setUserEmailReg] = useState("")
  const [userNameReg, setUserNameReg] = useState("")
  const [userPasswordReg, setUserPasswordReg] = useState("")
  const [secondUserPasswordReg, setSecondUserPasswordReg] = useState("")
  const [pageModal, setPageModal] = useState("loginPage")

    return(
        <>

         <div className="shadow-modal shadow-central d-flex" onClick={e => setLogModal(false)}>
          <div className="central-modal" onClick={e => e.stopPropagation()}>

            <div className="d-flex align-center logoLogin">
              <img width={40} height={40} src="/img/logo.svg" />
              <div style={{cursor: "pointer"}}>
                <h3 className="text-uppercase logoname">React Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
                
              </div>
            </div>
            
            {pageModal == "loginPage" && 
            <>
             <div className="central-modal-text">
              <h3>Логин</h3>
              <input onChange={(e) => {setUserNameLog(e.target.value)}} maxLength={15} placeholder="Логин"/>
              <h3>Пароль</h3> 
              <input onChange={(e) => {setUserPasswordLog(e.target.value)}} maxLength={16} placeholder="Пароль"/><br/>
              <button>Войти</button>
              </div>
            
              <h3 className="linkToReg">Нет аккаунта? <a onClick={() => setPageModal("registrationPage")} style={{cursor:"pointer"}}> Создай!</a></h3>
            </>
            }
            {pageModal == "registrationPage" && 
            <>
             <div className="central-modal-text" style={{bottom:"0px"}}>
              <h3>Ваша почта</h3>
              <input onChange={(e) => {setUserEmailReg(e.target.value)}} maxLength={15} placeholder="E-mail"/>
              <h3>Ваш логин</h3>
              <input onChange={(e) => {setUserNameReg(e.target.value)}} maxLength={15} placeholder="Логин"/>
              <h3>Пароль</h3> 
              <input onChange={(e) => {setUserPasswordReg(e.target.value)}} maxLength={16} placeholder="Пароль"/><br/>
              <h3>Повторите пароль</h3> 
              <input onChange={(e) => {setSecondUserPasswordReg(e.target.value)}} maxLength={16} placeholder="Повторите пароль"/><br/>
              <button>Войти</button>
              </div>
            
              <h3 style={{marginTop:"20px"}} className="linkToReg">Есть аккаунт? <a onClick={() => setPageModal("loginPage")} style={{cursor:"pointer"}}> Войди!</a></h3>

            </>}



          </div>
        </div>
        </>
    )
}

export default ModalLogin
import React from "react";

const ModalLogin = ({setLogModal}) => {

    return(
        <>
         <div className="shadow-modal shadow-central" onClick={e => setLogModal(false)}>
          <div className="central-modal" onClick={e => e.stopPropagation()}>
            <div className="central-modal-text">
                <h3>Логин</h3>
                <input placeholder="Логин"/>
                <h3>Пароль</h3>
                <input placeholder="Пароль"/>

            </div>

          </div>
        </div>
        </>
    )
}

export default ModalLogin
import React from "react";

const Profile = ({arrayObj}) => { 


    return(
    <div className="card mb-20 mr-30">
        <img className = "ml-20" width={133} height={112} src={arrayObj.imgURL}/>
        <h5>{arrayObj.name}</h5>  
        <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span className="text-uppercase">Цена:</span>
        <b>{arrayObj.price} руб.</b>
      </div>
    </div>
  </div>
    )
}

export default Profile
import { Fragment, useState } from "react";

function Card({id,name,info,image,price,removeTour}){
   
    const[readmore,setReadmore]=useState(false);
    const description=  readmore? info:`${info.substring(0,200)}....`

    function readmoreHandler(){
        setReadmore (!readmore);
    }

    return(
        <Fragment>
        <div className="card">
        <img src={image} alt=""  className="image"/>
        <div className="tour-info">
        <div className="tours-details">
            <h4 className="tours-price">₹{price}</h4>
            <h4 className="tours-name">{name}</h4>
        </div>

        <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler} >
                {readmore ? `Show Less`:`Read More`}
            </span>
        </div>
        </div>
        
        <button className="btn-red" onClick={()=>removeTour(id)}>
          Not Interesed
        </button>
        </div>
      
        </Fragment>
    )

}
export default Card;
import React from "react";
const Card=(props)=>{



    return(
        <>
         <div className="col-md-4 col-lg-4 mx-auto " >
        
        <div class="card" >
                <img src={props.imgSrc} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><strong>{props.title}</strong></h5>
                    <p class="card-text">{props.description}</p>
                    <a href="#" class="btn btn-primary">{props.button}</a>
                </div>
                </div>
                </div>
        
        </>
    )



}
export default Card;
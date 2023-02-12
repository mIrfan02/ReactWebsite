import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h2 className="text-center">Welcome servcie</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 ">
             
                {Sdata.map((val,index)=>{
                  return <Card key={index} imgSrc={val.imgSrc}  title={val.title}  description={val.description}   button={val.button}/>
                })}


              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};
export default Service;

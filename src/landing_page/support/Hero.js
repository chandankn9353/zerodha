import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="support">
        <h4>Support Portal</h4>
        <a href="" style={{ textDecoration: "none" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3" >
        <div className=" col-6 p-3">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input  placeholder="Eg: how do i active F&O, why is my order getting rejected..."/><br/>
          <a href="">Track account opening</a>
          <a href="" style={{marginLeft:"10px"}}>Track segment activation</a>
          <a href=""style={{marginLeft:"10px"}}>Intraday margins</a>
          <a href=""style={{marginLeft:"10px"}}>Kite user manual</a>
        </div>
   <div className=" col-6 p-3 ">
   <h1 className="fs-3">Featured</h1>
   <ol style={{lineHeight:"2.5"}}>
   <li ><a href="">Offer for sale (OFS) - November 2024</a></li>
   <li><a href="">Surveillance measure on scrips - November 2024</a></li>
   </ol>
   </div>
      </div>
    </section>
  );
}

export default Hero;

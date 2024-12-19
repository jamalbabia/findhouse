import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CountUp from 'react-countup';

import './Hero.css';
export default function Hero(){
    return(
        <section className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-left">
                 <div className="hero-title">
                    <div className="orange-cicle"/>
                    <h1>Discover <br/>Most Suitable<br/>Property</h1>
                 </div>
                 <div className="search-bar">
                 <i className=" loca bi bi-geo-alt-fill"></i>
                 <input type="text"/>
                 <button className="button">Search</button>
                
           
                    

                 </div>
                 <div className="stats">
                    <div className="stat">
                        <span>
                            <CountUp className="count" start={88000} end={90000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Premium Product</span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp className="count" start={1950} end={2000} duration={4}/>
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Happy Customers</span>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp  className="count" start={0}  end={28} duration={8} />
                            <span className="plus">+</span>
                        </span>
                        <span className="tt">Award Winnings</span>
                    </div>



                 </div>
                </div>
                <div className="hero-right">
                    <div className="img1">
                        <img src="images/moroccan.jpg" alt="header"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
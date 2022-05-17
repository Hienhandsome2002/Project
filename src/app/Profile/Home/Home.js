import React, { memo, useState, useEffect } from "react";
import './Home.css';
function Home() {
    return (
        <div className="home">

            <div className="banner-text">
                <h1 className="headText">
                    I'm Tuan Hien
                </h1>
                <div className="container-subText">
                <h3 className="subText">
                    I'm a Manila based <span>Webdesigner</span> creating awesome and effective visual identities for companies of all sizes around the globe
                    .Let's <span> start scrolling</span> and  learn more <span>about me</span>
                </h3>
                </div>

            </div>
        </div>
    )
}


export default memo(Home);

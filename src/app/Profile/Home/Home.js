import React, { memo, useState, useEffect } from "react";
import './Home.css';
function Home() {
    return (
        <div className="home">
           
            <div className="banner-text">
                <h1 className="headText">
                    I'm Tuan Hien
                </h1>
            </div>
        </div>
    )
}


export default memo(Home);

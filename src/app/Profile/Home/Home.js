import React, { memo, useState, useEffect } from "react";
import './Home.scss';
import { FaFacebookSquare,
    FaTwitter,
    FaGooglePlusG,
    FaGithub,
    FaInstagram,
    FaSkype, } from "react-icons/fa";
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
                <hr></hr>
                <div className="socialIcons">
                    <div className="ContainerIcons">
                    <a href="https://www.facebook.com/giangtuan.hien/"><FaFacebookSquare className="Icons"></FaFacebookSquare></a>
                    </div>
                    <div className="ContainerIcons">
                    <FaTwitter className="Icons"></FaTwitter>
                    </div>
                    <div className="ContainerIcons">
                    <FaGooglePlusG className="Icons"></FaGooglePlusG>
                    </div>
                    <div className="ContainerIcons">
                    <a href="https://github.com/Hienhandsome2002"><FaGithub className="Icons"></FaGithub></a>
                    </div>
                    <div className="ContainerIcons">
                    <a href="https://www.instagram.com/hientuan1301/"><FaInstagram className="Icons"></FaInstagram></a>
                    </div>
                    <div className="ContainerIcons">
                    <FaSkype className="Icons"></FaSkype>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default memo(Home);

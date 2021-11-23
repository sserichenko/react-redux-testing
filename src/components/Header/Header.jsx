import React from 'react';
import "./header.scss";
import Logo from "../../assets/graphics/censored.png"
const Header = (props) => {
    return (
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrapper">
                <div className="logo">
                    <img className="logoImg" data-test="logoImg" src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;
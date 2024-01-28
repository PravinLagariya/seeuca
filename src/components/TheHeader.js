import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import HeaderAPI from '../JsonFiles/Header.json';

function TheHeader() {
    const Header = HeaderAPI;
    return (
        <>
            <header>
                {Header.setting === true ? (
                    <div className='container mx-auto'>
                        <nav id='nav'>
                            <div className='logo_btn'>
                                <Link to={Header.logoImg.link} className="logo">
                                    <img src={Logo} alt={Header.logoImg[0].label} />
                                </Link>
                            </div>
                            <div className='nav_menu'>
                                <ul>
                                    {Header.menuItems && Header.menuItems.map((res, index) => (
                                        <li key={index}>
                                            <Link to={res.link}>
                                                {res.label}
                                            </Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className='get_btn'>
                                <Link className="button">{Header.getBtn[0].label}</Link>
                            </div>
                        </nav>
                    </div>
                ) : (
                    <div></div>
                )
                }
            </header>
        </>
    )
}

export default TheHeader
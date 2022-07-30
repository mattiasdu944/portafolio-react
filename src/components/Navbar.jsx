import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";

const Navbar = () => {

    const [btnMenu, setBtnMenu] = useState('uil-list-ui-alt');
    const [showMenu, setShowMenu] = useState('');



    const changeIconMenu = () => {
        if (btnMenu === 'uil-multiply') {
            setBtnMenu("uil-list-ui-alt");
            setShowMenu('');
        } else {
            setBtnMenu('uil-multiply');
            setShowMenu('show');
        }
    }




    const Navlinks = [
        {
            url: '',
            link: 'Inicio'
        },

        {
            url: 'sobre-mi',
            link: 'Sobre Mi'
        },

        {
            url: 'portafolio',
            link: 'Portafolio'
        },

        {
            url: 'servicios',
            link: 'Servicios'
        },

        {
            url: 'contacto',
            link: 'Contacto'
        },
    ];

    return (
        <nav className='py-3'>
            <div className="nav_container flex justify-between">
                <Fade cascade duration={900}>
                <div className="nav_logo text-2xl">
                    Mattias {' '}
                    <span>
                        Duarte
                    </span>
                </div>
                <ul className={"nav_menu flex gap-4 sm:gap-7 " + showMenu}>
                    {Navlinks.map((item, key) =>

                            <li key={key}>
                                    <a
                                        href={'#' + item.url}
                                        className="text-gray-300 hover:text-gray-100 text-md"
                                        onClick={() => { setShowMenu(''); setBtnMenu('uil-list-ui-alt') }}
                                    >{item.link}
                                    </a>
                            </li>
                    )}

                </ul>
                </Fade>
                <div
                    className="btn_menu text-gray-100 text-3xl cursor-no-drop"
                    onClick={changeIconMenu}
                >
                    <i className={'uil ' + btnMenu}></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
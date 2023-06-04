import { Link } from 'react-router-dom';

import './Header.css';

import Logo from '../assets/zeffy-logo-white.png'

export const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='logoContainer'>
                <img src={Logo} alt='Logo Zeffy' width={140} height={45} />
            </div>
            <ul>
                <li className='navigationList'>
                    <Link to='/'><p>Zeffy</p></Link>
                </li>
                <li className='navigationList'>
                    <Link to='/donations'><p>Donations</p></Link>
                </li>
                <li className='navigationList'>
                    <Link to='/donations-infinite'><p>Donations Infinite</p></Link>
                </li>
            </ul>
        </div>
    )
}
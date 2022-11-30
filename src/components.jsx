import React, { useState } from 'react'
import Image from 'next/image'
import SearchBar from './Searchbar'
import Title from './Title'
import UserImage from '../../../../../public/assets/images/avatars/default.webp'
import Type2HeaderTitle from './Type2HeaderTitle'
import MobileSearchIcon from './MobileSearchIcon'
import NotificationBell from './NotificationBell'
import NewTeamButton from './NewTeamButton'



const Header = (props: any) => {
    const [activateButton, setActiveButton] = useState(true);
    const header = (
        <header>
            <div className={`topbar ${props.PageType === 1 ? `topbar1` : ''} d-flex align-items-center`}>
                <nav className="navbar navbar-expand">
                    <div className="mobile-toggle-menu">
                        <i className='bx bx-menu'></i>
                    </div>
                    {props.PageType === 1 && <Type2HeaderTitle {...props} />}
                    {props.PageType === 0 && <Title PageTitle={props.PageTitle} />}
                    {props.NewTeamButton.switch && <NewTeamButton title={props.NewTeamButton.title} />}
                    {props.SearchBar && <SearchBar />}
                    <div className="top-menu ms-auto">
                        <ul className="navbar-nav align-items-center">
                            {props.SearchBar &&
                                <MobileSearchIcon />}

                            {props.activateButton && <li>
                                <button className='activeButton' onClick={() => setActiveButton(current => !current)}>
                                    <span className={activateButton ? 'isNotActive' : 'isActive'} data-isActive="Activated" data-isNotActive="Not Activated"></span>
                                </button>
                            </li>}
                            <NotificationBell />
                        </ul>
                    </div>
                    <div className="user-box dropdown">
                        <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Image src={UserImage} className="user-img" alt="user avatar" />
                        </a>
                    </div>
                </nav>
                <li className="nav-item mobile-search-icon">
                    <a className="nav-link" href="#"> <i className='bx bx-search'></i>
                    </a>
                </li>
            </div>
        </header>)

    return header;
}

export default Header

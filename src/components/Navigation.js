import './App.css';

import Chip from './ui/chip';

import { Search } from '@material-ui/icons';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const Navigation = () => {
    return (
        <div className="navBar">

            <div className="navBar__left">
                <img src="/images/final.png" alt="fbLogo"></img>
                <div className="navBar__left__input">
                    <Search />
                    <input type="text" placeholder='search facebook'></input>
                </div>

            </div>

            <div className="navBar__middle">
                <ul>
                    <li>
                        <HomeOutlinedIcon className="active__li" />
                    </li>
                    <li>
                        <OndemandVideoOutlinedIcon />
                    </li>
                    <li>
                        <StorefrontOutlinedIcon />
                    </li>
                    <li>
                        <PeopleOutlineOutlinedIcon />
                    </li>
                    <li>
                        <SportsEsportsOutlinedIcon />
                    </li>
                </ul>
                <div className="Slider">

                </div>
            </div>

            <div className="navBar__right">
                <Chip />
                <Avatar className="navBar__icon">
                    <AppsIcon className="sv" />
                </Avatar>
                <Avatar className="navBar__icon">
                    <EmailIcon className="sv" />
                </Avatar>
                <Avatar className="navBar__icon">
                    <NotificationsIcon className="sv" />
                </Avatar>
                <Avatar className="navBar__icon">
                    <ArrowDropDownIcon className="sv" />
                </Avatar>
            </div>
        </div>
    )
}

export default Navigation

import {Component} from "react";
import { slide as Menu } from 'react-burger-menu';
import './sideBar.scss'

class SideBar extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Menu>
                <a id="premiers" className="menu-item" href="/">Premiers</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default SideBar;
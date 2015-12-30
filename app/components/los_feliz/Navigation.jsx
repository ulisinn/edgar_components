import React from "react";
import TweenMax from 'gsap';

import MainNavButton from './ui_elements/MainNavButton';

var divStyle, _navBar;

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        divStyle = {
            backgroundColor: props.backgroundImage.navBgColor,
            opacity:0
        };
        //console.log("Navigation constructor", divStyle, props);

    }

    componentDidMount() {
        const links = this.props.links;
        this.showHideNavbar(links, 0);
        console.log("componentDidMount NAV", links, this._navBar)
    }


    componentWillReceiveProps(nextProps) {
        const links = nextProps.links;
        this.showHideNavbar(links, 1.5)
    }

    showHideNavbar(links, t) {
        const activeLink = links.filter(this.findActiveLink);
        var showNavBar = false;
        for (let i = 0; i < activeLink.length; i++) {
            if (activeLink[i].id !== "Home") {
                showNavBar = true;
            }
        }

        if (showNavBar) {
            TweenMax.to(this._navBar, t, {autoAlpha: 1});
        } else {
            TweenMax.to(this._navBar, t, {autoAlpha: 0});
        }
    }

    render() {
        const props = this.props;
        const links = props.links;
        //console.log(links);
        return (
            <nav  className="navigation" ref={(c) => this._navBar = c}>
                <ul>
                    {links.map(this.renderNavButton, this)}
                </ul>
            </nav>
        )
    }

    renderNavButton(buttonItem, index) {
        const name = "MainNavButton_" + index;
        return <MainNavButton key={name} buttonName={buttonItem} onNavClick={this.props.onNavClick}/>
    }


    findActiveLink(item) {
        if (item.isSelected) {
            return true
        } else {
            return false
        }
    }
}
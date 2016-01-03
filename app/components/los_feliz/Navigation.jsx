import React from "react";
import TweenMax from 'gsap';
import classnames from 'classnames'
import MainNavButton from './ui_elements/MainNavButton';

var divStyle, _hamburgerClassnames;
var _mobileNav, _navBar, _hamburgerIcon, _container;
var navWidth = '780px';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        const hamburgerPressed = false;
        this.state = {hamburgerPressed};
        divStyle = {
            backgroundColor: props.backgroundImage.navBgColor,
            opacity: 0
        };

    }

    componentWillReceiveProps(nextProps) {
        const links = nextProps.links;
        this.showHideNavbar(links, 1.5);
        this.initializeMenu();
        console.log("NAV componentWillReceiveProps", nextProps.siteReady);


        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }


    componentDidMount() {
        const links = this.props.links;
        this.showHideNavbar(links, 0);
        window.addEventListener('resize', () => this.handleResize());
        this.initializeMenu();
        // console.log("componentDidMount NAV", links, this._navBar, this._hamburgerClassnames);

        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        const hamburgerPressed = this.state.hamburgerPressed;
        let alpha = 1;
        let mobileNav = false;
        if (Modernizr.mq('only screen and (max-width: 860px)')) {
            mobileNav = true;
            alpha = (hamburgerPressed) ? 1 : 0;
        } else {
            mobileNav = false;
        }
        TweenMax.set(this._mobileNav, {autoAlpha: alpha});
        // console.log("mobileNav", mobileNav);
        this.setState({mobileNav});

    }

    initializeMenu() {
        let mobileNav = false;
        if (Modernizr.mq('only screen and (max-width:  ' + navWidth + ')')) {
            mobileNav = true;
            TweenMax.set(this._mobileNav, {autoAlpha: 0});
        } else {
            mobileNav = false;
            TweenMax.set(this._mobileNav, {autoAlpha: 1});
        }
        this.setState({mobileNav});
    }

    onHamburgerClick() {
        var hamburgerPressed = this.state.hamburgerPressed ? false : true;
        this.setState({hamburgerPressed});
        this.setMobileNavState()
    }

    onNavItemMouseDown() {
        //console.log("onNavItemMouseDown");
        const hamburgerPressed = false;
        this.setState({hamburgerPressed});
        this.setMobileNavState()
    }

    setMobileNavState() {
        const hamburgerPressed = this.state.hamburgerPressed;
        //console.log("onHamburgerClick setMobileNavState", hamburgerPressed);

        if (!this._mobileNav) {
            return
        }

        if (Modernizr.mq('only screen and (max-width:  ' + navWidth + ')')) {
            if (hamburgerPressed) {
                TweenMax.to(this._mobileNav, 0.5, {autoAlpha: 1});
            } else {
                TweenMax.to(this._mobileNav, 0.5, {autoAlpha: 0});
            }
        } else {
            TweenMax.set(this._mobileNav, {autoAlpha: 1});
        }
    }

    showHideNavbar(links, t) {
        const activeLink = links.filter(this.findActiveLink);
        console.log("showHideNavbar", activeLink);
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
        console.log("NAV RENDER");
        const props = this.props;
        const links = props.links;
        if (!this.state.hamburgerPressed) {
            this._hamburgerClassnames = classnames('c-hamburger', 'c-hamburger--htx');
        } else {
            this._hamburgerClassnames = classnames('c-hamburger', 'c-hamburger--htx', 'is-active');
        }
        this.setMobileNavState();

        //console.log("this._hamburgerClassnames", this._hamburgerClassnames, this.state.hamburgerPressed);
        return (
            <nav className="navigation" ref={(c) => this._navBar = c}>
                <div ref={(c) => this._container = c}>
                    <ul ref={(c) => this._mobileNav = c}>
                        {links.map(this.renderNavButton, this)}
                    </ul>
                    <button id="hamburger" onClick={() => this.onHamburgerClick()} className={this._hamburgerClassnames}
                            ref={(c) => this._hamburgerIcon = c}>
                        <span>toggle menu</span>
                    </button>
                </div>
            </nav>
        )
    }

    renderNavButton(buttonItem, index) {
        const name = "MainNavButton_" + index;
        if (buttonItem.id !== "Home") {
            return (
                <li key={'li'+name} onMouseDown={() => this.onNavItemMouseDown()}>
                    <MainNavButton key={name}
                                   buttonName={buttonItem}
                                   onNavClick={this.props.onNavClick}/>
                </li>
            )
        }
    }


    findActiveLink(item) {
        if (item.isSelected) {
            return true
        } else {
            return false
        }
    }
}
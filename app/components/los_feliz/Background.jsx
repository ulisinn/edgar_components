import React from "react";
import TweenMax from "gsap";
import classnames from "classnames";
import {getImage} from "./utils/utils";

var backgroundStyle, lightBoxStyle;
var _animatedBg, _lightBox;
var _classNames;


export default class Background extends React.Component {
    constructor(props) {
        super(props);
        const imageURL = props.location + props.backgroundImage.large;
        backgroundStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'url(' + imageURL + ') 0 0 no-repeat',
            backgroundSize: "cover",
            opacity: (props.isReload) ? 1 : 0
        };
        lightBoxStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            opacity: 0
        };


        getImage(imageURL).then(
            function (successurl) {
                this.onBackgroundImageLoaded(props.isReload);
            }.bind(this)).catch(
            function (errorurl) {
                console.log('errorurl', errorurl);
            });

        if (props.isReload) {
            this._classNames = classnames('animated');
        } else {
            this._classNames = classnames('');
        }

        console.log("Background constructor", props.isReload);
    }


    componentDidMount() {
        const links = this.props.links;
        this.showHideLightbox(links, 0);
    }

    componentWillReceiveProps(nextProps) {
        const links = nextProps.links;
        this.showHideLightbox(links, 1.5)
    }

    showHideLightbox(links, t) {
        var activeLink;
        var showLightBox = false;
        try {
            activeLink = links.filter(this.findActiveLink);
        } catch (e) {
            //
        }
        if (!activeLink) {
            return;
        }
        //console.log(activeLink, "Background componentWillReceiveProps");
        for (let i = 0; i < activeLink.length; i++) {
            if (activeLink[i].id === "Teaser") {
                showLightBox = true;
            }
        }
        if (showLightBox) {
            TweenMax.to(this._lightBox, t, {autoAlpha: 1});
        } else {
            TweenMax.to(this._lightBox, t, {autoAlpha: 0});

        }
    }

    render() {
        //console.log("background render");
        return (
            <div>
                <div style={backgroundStyle} className={this._classNames} ref={(c) => this._animatedBg = c}></div>
                <div style={lightBoxStyle} className="lightbox" ref={(c) => this._lightBox = c}></div>
            </div>
        )
    }

    onBackgroundImageLoaded(reload) {

        const t = (reload) ? 0 : 1;
        if (this._animatedBg && t == 1) {
            console.log("onBackgroundImageLoaded", t);
            TweenMax.to(this._animatedBg, t, {autoAlpha: 1});
        }
        this.props.onFadeStart();
    }

    findActiveLink(item) {
        if (item.isSelected) {
            return true
        } else {
            return false
        }
    }
}

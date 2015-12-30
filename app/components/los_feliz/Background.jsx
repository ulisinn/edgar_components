import React from "react";
import TweenMax from 'gsap';

import {findActiveLink,getImage} from './utils/utils';

var backgroundStyle, lightBoxStyle;
var _animatedBg, _lightBox;

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
            opacity: 0
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
                this.onBackgroundImageLoaded();
            }.bind(this)).catch(
            function (errorurl) {
                console.log('errorurl', errorurl);
            });

    }

    componentWillReceiveProps(nextProps) {
        //console.log(this.backgroundStyle, "BACKGROUND ", nextProps.links, this.props.links);
    }

    render() {
        return (
            <div>
                <div style={backgroundStyle} className="animated" ref={(c) => this._animatedBg = c}></div>
                <div style={lightBoxStyle} className="lightbox" ref={(c) => this._lightBox = c}></div>
            </div>
        )
    }

    onBackgroundImageLoaded() {
        TweenMax.to(this._animatedBg, 1, {autoAlpha: 1});
        this.props.onFadeStart();
    }

}

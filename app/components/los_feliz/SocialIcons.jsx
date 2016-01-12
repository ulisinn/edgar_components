import React from "react";

import AudioStore from './alt/AudioStore';

import TweenMax from 'gsap';
import classnames from 'classnames';

import SpeakerIcon from './ui_elements/SpeakerIcon'

var _container;
var _classNames;

export default class SocialIcons extends React.Component {
    constructor(props) {
        super(props);
        const isMuted = false;
        this.state = ({isMuted});
        this._classNames = classnames('socialIconsVertical');
        this._classNames = classnames('socialIcons');
    }

    componentWillReceiveProps(nextProps) {
        const currentRoute = nextProps.currentRoute;

        //console.log("SocialIcons componentWillReceiveProps", nextProps.currentRoute);
        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
        this.setSocialIconDirection(currentRoute)
    }

    componentDidMount() {
        //console.log("SocialIcons componentDidMount", this.props);
        const currentRoute = this.props.initialRoute;
        AudioStore.listen(this.audioStoreChanged);
        TweenMax.set(this._container, {autoAlpha: 0});
    }

    componentWillUnmount() {
        AudioStore.unlisten(this.audioStoreChanged);
    }

    audioStoreChanged = (state) => {
        const isMuted = state.isGloballyMuted;
        this.setState({isMuted});

    };

    setSocialIconDirection(currentRoute) {
        if (currentRoute === "Stills" ||currentRoute === "Drawings" || currentRoute === "Credits" || currentRoute === "MakingOf" || currentRoute === "Theory" || currentRoute === "Screenings" || currentRoute === "Press") {
            this._classNames = classnames('socialIconsVertical');
        } else {
            this._classNames = classnames('socialIcons');
        }
    }

    onSpeakerClick() {
        return false;
    }

    render() {
        const globalMute = this.state.isMuted;
        if (!this.props.currentRoute) {
            this.setSocialIconDirection(this.props.initialRoute)
        }
        //console.log("SocialIcons render", this.props.currentRoute,this.props.initialRoute);

        return (
            <div className={this._classNames} ref={(c) => this._container = c}>
                <div>
                    <a href="https://www.facebook.com/1000000000.at" target="_blank">
                        &#xe80c;
                    </a>

                    <a href="https://twitter.com/Billionaire_at" target="_blank">
                        &#xe80b;
                    </a>

                    <a href="https://www.youtube.com/user/BillionaireAT" target="_blank">
                        &#xe815;
                    </a>

                    <a href="https://soundcloud.com/billionaire-film" target="_blank">
                        &#xe806;
                    </a>

                    <a href="http://www.1000000000.at/?page_id=2" target="_blank">
                        &#xe805;
                    </a>
                    <a onClick={() =>this.onSpeakerClick()}>
                        <SpeakerIcon globalMute={globalMute}/>
                    </a>
                </div>
            </div>
        )
    }
}
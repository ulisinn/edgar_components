import React from "react";
import TweenMax from 'gsap';

import {findActiveLink,getImage} from './utils/utils';

export default class BackgroundLoop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {muted: false};
    }

    componentDidMount() {
        const links = this.props.links;
        this._audio.volume = 0;
        this.muteUnmuteAudio(links, 0);
        //console.log("componentWillMount NAV", links, this._navBar)
    }

    componentWillReceiveProps(nextProps) {
        const links = nextProps.links;
        this.muteUnmuteAudio(links, 1.5)
    }


    muteUnmuteAudio(links, t) {
        const activeLink = links.filter(this.findActiveLink);
        var muted = false;
        for (let i = 0; i < activeLink.length; i++) {
            if (activeLink[i].id === "Teaser" || activeLink[i].id === "Interviewscs" || activeLink[i].id === "MakingOf") {
                muted = true;
            }
        }
        const currentVolume = {volume: this._audio.volume};
        const audioEl = this._audio;
        TweenMax.to(currentVolume, 1.5, {
            volume: (muted) ? 0 : 1, onUpdate: function () {
                audioEl.volume = currentVolume.volume;
            }
        });
        //console.log(this._audio, "BackgroundLoop muted", muted, currentVolume);
    }

    render() {
        console.log("BackgroundLoop render", this.props.location + this.props.audio[0].mpeg);
        return (
            <div>
                <audio autoPlay loop ref={(c) => this._audio = c}>
                    <source src={this.props.location + this.props.audio[0].mpeg}/>
                    <source src={this.props.location + this.props.audio[0].ogg}/>
                </audio>
            </div>
        )
    }

    findActiveLink(item) {
        if (item.isSelected) {
            return true
        } else {
            return false
        }
    }

}
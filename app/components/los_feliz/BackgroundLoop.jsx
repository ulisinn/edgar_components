import React from "react";
import TweenMax from 'gsap';


import AudioActions from './alt/AudioActions';
import AudioStore from './alt/AudioStore';

import {findActiveLink,getImage} from './utils/utils';

export default class BackgroundLoop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isGloballyMuted: false, videoIsPlaying: false};
    }

    componentDidMount() {
        const links = this.props.links;
        const isMuted = (this.props.initialRoute === "Teaser" && this.props.currentRoute === undefined) ? true : false;

        this._audio.volume = 0;
        this.muteUnmuteAudio(isMuted, 0);
        AudioStore.listen(this.audioStoreChanged);
    }


    componentWillUnmount() {
        AudioStore.unlisten(this.audioStoreChanged);
    }

    audioStoreChanged = (state) => {
        const isGloballyMuted = state.isGloballyMuted;
        this.setState({isGloballyMuted});
        if (state.isGloballyMuted) {
            this.muteUnmuteAudio(true, 1.5)
        } else {
            if (state.videoIsPlaying) {
                console.log("BackgroundLoop audioStoreChanged", state.videoIsPlaying, this.state.isGloballyMuted);
                this.muteUnmuteAudio(true, 1.5)
            }
            if (state.videoIsPlaying === false) {
                this.muteUnmuteAudio(false, 1.5)

            }

        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        //console.log("BackgroundLoop shouldComponentUpdate", nextState);
        return false;
    }


    muteUnmuteAudio(muted, t) {
        const currentVolume = {volume: this._audio.volume};
        const audioEl = this._audio;
        TweenMax.to(currentVolume, 1.5, {
            volume: (muted) ? 0 : 1, onUpdate: function () {
                audioEl.volume = currentVolume.volume;
            }
        });
        console.log(this._audio, "BackgroundLoop muted", muted, currentVolume);
    }

    render() {
        console.log("BackgroundLoop render", this._audio, this.props, this.props.location + this.props.audio[0].mpeg);
        return (
            <div>
                <audio autoPlay loop ref={(c) => this._audio = c}>
                    <source src={this.props.location + this.props.audio[0].mpeg}/>
                    <source src={this.props.location + this.props.audio[0].ogg}/>
                </audio>
            </div>
        )
    }
}
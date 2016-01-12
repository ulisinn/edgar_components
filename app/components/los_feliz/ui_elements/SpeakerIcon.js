/**
 * Created by ulrichsinn on 01/11/2016.
 */

import React from "react";


import AudioActions from '../alt/AudioActions';
import AudioStore from '../alt/AudioStore';

import TweenMax from 'gsap';
import classnames from 'classnames'

var _speakerStrikeThrough, _speakerSoundWaves;

export default class SpeakerIcon extends React.Component {
    constructor(props) {
        super(props);
        const isMuted = false;
        this.state = ({isMuted});
        this._speakerStrikeThrough = classnames('muted');
        this._speakerSoundWaves = classnames('unmuted');
    }

    componentWillReceiveProps(newProps) {
        const isMuted = newProps.globalMute;
        if (isMuted) {
            this._speakerStrikeThrough = classnames('unmuted');
            this._speakerSoundWaves = classnames('muted');
        } else {
            this._speakerStrikeThrough = classnames('muted');
            this._speakerSoundWaves = classnames('unmuted');
        }
        this.setState({isMuted});

    }

    componentDidMount() {
        AudioStore.listen(this.audioStoreChanged);
    }

    componentWillUnmount() {
        AudioStore.unlisten(this.audioStoreChanged);
    }

    audioStoreChanged = (state) => {
        const isMuted = state.isGloballyMuted;
        if (isMuted) {
            this._speakerStrikeThrough = classnames('unmuted');
            this._speakerSoundWaves = classnames('muted');
        } else {
            this._speakerStrikeThrough = classnames('muted');
            this._speakerSoundWaves = classnames('unmuted');
        }
        this.setState({isMuted});

    };

    onSpeakerClick() {
        const globalMute = (this.state.isMuted) ? false : true;
        AudioActions.setGlobalMute(globalMute);
    }

    render() {
        console.log("SpeakerIcon RENDER", this.state);
        return (
            <svg onClick={() =>this.onSpeakerClick()} className='speakerIcon' width="25px" x="0px" y="0px"
                 viewBox="0 0 456 456"
                 enable-background="new 0 0 456 456">
                <g id="speaker">
                    <g>
                        <circle fill="none" stroke="white" strokeWidth="30" stroke-miterlimit="10" cx="228" cy="228"
                                r="218"/>
                        <polygon fill="white" points="99,164 174,164 275,73 275,369 175,278 99,278 		"/>
                    </g>
                </g>
                <g id="on" className={this._speakerSoundWaves}>
                    <g transform="translate(-10,-4)">
                        <path fill="none" stroke="white" strokeWidth="15" stroke-miterlimit="10"
                              d="M319,143c23.1,24.3,37,57,37,85s-12.8,64-38,85"
                        />
                        <path fill="none" stroke="white" strokeWidth="15" stroke-miterlimit="10" d="M337.1,125c28.1,29.6,44.9,69.4,44.9,103.5
			s-15.6,78-46.1,103.5"/>
                        <path fill="none" stroke="white" strokeWidth="15" stroke-miterlimit="10" d="M355.6,107.4c32.6,34.3,52.1,80.5,52.1,120.1
			s-18,90.4-53.5,120.1"/>
                    </g>
                </g>
                <g id="off" className={this._speakerStrikeThrough}>
                    <g>
                        <line fill="none" stroke="white" strokeWidth="30" stroke-miterlimit="10" x1="378.8" y1="77.3"
                              x2="76.5" y2="379.5"/>
                    </g>
                </g>
            </svg>

        )
    }

}

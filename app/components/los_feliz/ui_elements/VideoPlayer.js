/**
 * Created by ulrichsinn on 12/24/2015.
 */
import React from "react";
import AudioActions from '../alt/AudioActions';

import TweenMax from 'gsap';

var _video, style, videoStyle;

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AudioActions.setVideoPlaying(true);
    }

    componentWillUnmount() {
        AudioActions.setVideoPlaying(false);
    }

    render() {

        let source, type;
        if (Modernizr.video.webm) {
            source = this.props.location + this.props.video.webm;
            type = "video/webm"
        } else {
            source = this.props.location + this.props.video.mpeg;
            type = "video/mp4"
        }
        console.log("VideoPlayer render:", source, type);
        return (
                <video className="teaser" autoPlay="autoplay" controls ref={(c) => this._video = c} src={source} type={type}>

                </video>
        )
    }

}


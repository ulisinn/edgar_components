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
        style = {
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            //height: '360px',
            overflow: 'hidden'
        };

        videoStyle = {
            width: '100%',
            height: 'auto',
            zIndex: '1000000'

        }
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
            <div style={style}>
                <video style={videoStyle} autoPlay controls ref={(c) => this._video = c} src={source} type={type}>

                </video>
            </div>
        )
    }

}


/**
 * Created by ulrichsinn on 12/24/2015.
 */
import React from "react";
import TweenMax from 'gsap';

var _video, style, videoStyle;

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        style = {
            position: 'relative',
            width: '90%',
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

    render() {
        console.log("VideoPlayer render", this.props);
        return (
            <div style={style}>
                <video style={videoStyle} autoPlay controls ref={(c) => this._video = c}>
                    <source src={this.props.location + this.props.video.mpeg} type="video/mp4"/>
                    <source src={this.props.location + this.props.video.webm} type="video/webm"/>
                </video>
            </div>
        )
    }

}


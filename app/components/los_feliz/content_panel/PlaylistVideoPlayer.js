/**
 * Created by ulrichsinn on 12/24/2015.
 */
import React from "react";

import AudioActions from '../alt/AudioActions';

import TweenMax from 'gsap';

var _video;

export default class PlaylistVideoPlayer extends React.Component {
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
        //console.log("PlaylistVideoPlayer", this.props);
        let source, type;
        if (Modernizr.video.webm) {
            source = this.props.location + this.props.selectedPlaylistItem.webm._default;
            type = this.props.selectedPlaylistItem.mime;
        } else {
            source = this.props.location + this.props.selectedPlaylistItem.mpeg._default;
            type = this.props.selectedPlaylistItem.mime;
        }
        //console.log("PlaylistVideoPlayer render:", source, type);
        return (
            <div>
                <video
                    className="playlistVideoPlayer"
                    autoPlay="autoplay"
                    controls ref={(c) => this._video = c}
                    src={source}
                    type={type}>

                </video>
            </div>
        )
    }

}


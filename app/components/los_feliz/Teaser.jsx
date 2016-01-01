import React from "react";
import VideoPlayer from './ui_elements/VideoPlayer';

var style;

export default class Teaser extends React.Component {
    constructor(props) {
        super(props);
        const video = this.props.assets.teaser;
        this.state = {video};

    }

    render() {
        console.log("Teaser", this.props.assets.location, this.state.video[0]);

        return (
            <div className="content">
                <VideoPlayer location={this.props.assets.location} video={this.state.video[0]}/></div>
        )
    }

    findVideo(item) {
        if (item.key === 'Teaser') {
            return true;
        } else {
            return false;
        }

    }
}
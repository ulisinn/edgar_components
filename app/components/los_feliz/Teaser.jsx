import React from "react";
import TweenMax from 'gsap';

import VideoPlayer from './ui_elements/VideoPlayer';

var style;
var _container;

export default class Teaser extends React.Component {
    constructor(props) {
        super(props);
        const video = this.props.assets.teaser;
        this.state = {video};
    }

    componentWillReceiveProps(nextProps) {
        console.log("Teaser componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }
    componentDidMount() {
        console.log("Teaser componentDidMount", this.props.siteReady);

        TweenMax.set(this._container, {autoAlpha: 0});
        if(this.props.siteReady){
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    render() {
        console.log("------ Teaser", this.props.assets.location, this.state.video[0]);

        return (
            <div className="mainContentPanelColumn" ref={(c) => this._container = c}>
                <VideoPlayer location={this.props.assets.location}
                             video={this.state.video[0]}/></div>
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
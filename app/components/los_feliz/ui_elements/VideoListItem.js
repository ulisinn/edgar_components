/**
 * Created by ulrichsinn on 12/24/2015.
 */
import React from "react";
import TweenMax from 'gsap';
import VideoPlayer from './VideoPlayer';

var _video, style, videoStyle;

export default class InterviewsListItem extends React.Component {
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

        };
    }

    render() {
        if (this.props.currentItem) {
            const video = {
                mpeg: this.props.currentItem.mpeg,
                webm: this.props.currentItem.webm
            };
            console.log("InterviewsListItem render", this.props.location + video.mpeg);
            return (
                <div className='listItem'>
                    <VideoPlayer location={this.props.location} video={video}/>
                    <div>
                        <p>&#160;</p>
                        <h1>{this.props.currentItem.longTitle}</h1>
                        <p>{this.props.currentItem.description}</p>
                    </div>
                </div>
            )

        } else {
            return null;
        }
    }

}


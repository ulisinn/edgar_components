/**
 * Created by ulrichsinn on 01/02/2016.
 */
import  React from 'react';
import TweenMax from 'gsap';

import {getImage} from '../utils/utils';

var _image;

export default class PlaylistImageViewer extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.listItems;
        this.state = {listItems};

        const defaultPath = props.selectedPlaylistItem.imageSrc._default;
        const path = defaultPath.substring(0, defaultPath.lastIndexOf('/') + 1);
        const src = (props.selectedPlaylistItem.imageSrc.sizes) ? props.location + path + props.selectedPlaylistItem.imageSrc.sizes.wh640c0.path : props.location + path + props.selectedPlaylistItem.imageSrc._default;
        //console.log("PlaylistImageViewer", src, this.state.listItems);
        const imageSrc = '';
        this.state = ({imageSrc});

        const currentImage = getImage(src).then(
            function (successurl) {
                this.onImageLoaded(successurl);
            }.bind(this)).catch(
            function (errorurl) {
                console.log('errorurl', errorurl);
            });

        //console.log("PlaylistImageViewer listItems", listItems);
    }


    componentWillReceiveProps(newProps) {
        TweenMax.set(this._image, {autoAlpha: 0});
        const defaultPath = newProps.selectedPlaylistItem.imageSrc._default;
        const path = defaultPath.substring(0, defaultPath.lastIndexOf('/') + 1);
        const src = newProps.location + path + newProps.selectedPlaylistItem.imageSrc.sizes.wh640c0.path;
        //console.log("PlaylistImageViewer", src);

        const currentImage = getImage(src).then(
            function (successurl) {
                this.onImageLoaded(successurl);
            }.bind(this)).catch(
            function (errorurl) {
                console.log('errorurl', errorurl);
            });
    }

    onImageLoaded(url) {
        const imageSrc = url;
        this.setState({imageSrc});
        //console.log("onImageLoaded", url);
        TweenMax.to(this._image, 0.7, {autoAlpha: 1});

    }

    render() {
        return (
            <div className="playlistViewerImage">
                <img src={this.state.imageSrc} ref={(c) => this._image = c}/>
            </div>
        )
    }

}
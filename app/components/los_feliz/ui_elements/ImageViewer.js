/**
 * Created by ulrichsinn on 01/02/2016.
 */
import  React from 'react';
import TweenMax from 'gsap';

var _image;

export default class ImageViewer extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.listItems;
        this.state = {listItems};
        //console.log("ImageViewer listItems", listItems);
    }


    componentWillReceiveProps(newProps) {
        TweenMax.set(this._image, {autoAlpha: 0});

        const currentImage = newProps.currentImage.then(
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
            <div className="imageViewerDisplay">
                <img src={this.state.imageSrc} ref={(c) => this._image = c}/>
            </div>
        )
    }

}
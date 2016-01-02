/**
 * Created by ulrichsinn on 01/02/2016.
 */
import  React from 'react';

export default class ImageViewer extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.listItems;
        this.state = {listItems};
        //console.log("ImageViewer listItems", listItems);
    }


    componentWillReceiveProps(newProps) {
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

    }

    render() {
        return (
            <div className="imageViewerDisplay">
                <img src={this.state.imageSrc}/>
            </div>
        )
    }

}
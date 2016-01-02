/**
 * Created by ulrichsinn on 01/02/2016.
 */
import  React from 'react';

export default class ImageViewerCopy extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.listItems;
        this.state = {listItems};
        console.log("ImageViewer listItems", listItems);
    }


    componentWillReceiveProps(newProps) {
        const currentImage = newProps.currentImage.then(
            function (successurl) {
                this.onImageLoaded(successurl, newProps);
            }.bind(this)).catch(
            function (errorurl) {
                console.log('errorurl', errorurl);
            });

    }

    onImageLoaded(url, newProps) {
        const imageSrc = url;
        this.setState({imageSrc});
        console.log("ImageViewerCopy onImageLoaded", newProps.currentItem);
        const title = newProps.currentItem.title;
        const description = newProps.currentItem.description;
        this.setState({title})
        this.setState({description})

    }

    render() {
        return (
            <div className="listItem">
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
            </div>
        )
    }

}
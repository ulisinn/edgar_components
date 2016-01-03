/**
 * Created by ulrichsinn on 01/02/2016.
 */
import  React from 'react';
import TweenMax from 'gsap';

var _container;

export default class ImageViewerControl extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.listItems;
        this.state = {listItems};

        //console.log("ImageViewerControl listItems", listItems);
    }

    componentDidMount() {
        TweenMax.set(this._container, {opacity: 0});
    }

    componentWillReceiveProps(newProps) {
        const currentIndex = this.findCurrentIndex(newProps.currentItem, newProps.listItems);
        const numItems = this.props.listItems.length;

        this.setState({numItems});
        this.setState({currentIndex});

        const currentImage = newProps.currentImage.then(
            function (successurl) {
                this.onImageLoaded(successurl);
            }.bind(this)).catch(
            function (errorurl) {
                console.log('errorurl', errorurl);
            });
    }

    onImageLoaded(url) {
        TweenMax.set(this._container, {opacity: 1});
    }

    findCurrentIndex(current, list) {
        const currentIndex = list.map(function (item, index) {
            if (current.assetID === item.assetID) {
                return index;
            } else {
                return 0;
            }
        }).reduce(function (previousValue, currentValue) {
            console.log(previousValue);
            return parseInt(previousValue) + parseInt(currentValue);
        });
        //console.log(currentIndex, "findCurrentIndex");
        return currentIndex + 1;

    }

    onPreviousSelected() {
        const currentIndex = this.state.currentIndex - 1;
        const nextIndex = (currentIndex - 1 >= 0) ? currentIndex - 1 : this.props.listItems.length - 1;
        const nextItem = this.props.listItems[nextIndex];
        this.props.setCurrentItem(nextItem);
    }

    onNextSelected() {
        const nextIndex = (this.state.currentIndex < this.props.listItems.length) ? this.state.currentIndex : 0;
        const nextItem = this.props.listItems[nextIndex];
        this.props.setCurrentItem(nextItem);
    }

    render() {
        const listItems = this.state.listItems;
        console.log("currentItem", this.state);
        return (
            <div className='imageViewerControl'>
                <div className='imageViewerControlWrapper' ref={(c) => this._container = c}>
                    <div className="imageViewerControlArrow" onClick={()=>this.onPreviousSelected()}> &#xe801;</div>
                    <div className="imageViewerControlCounter">{this.state.currentIndex}/{this.state.numItems}</div>
                    <div className="imageViewerControlArrow" onClick={()=>this.onNextSelected()}> &#xe800;</div>
                </div>
            </div>
        )
    }

}
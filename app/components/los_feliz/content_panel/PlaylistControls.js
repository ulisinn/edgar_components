/**
 * Created by ulrichsinn on 01/02/2016.
 */
import  React from 'react';
import TweenMax from 'gsap';

var _container;

export default class PlaylistControls extends React.Component {
    constructor(props) {
        super(props);
        const currentPlaylist = this.props.currentPlaylist;
        const numItems = this.props.currentPlaylist.length;
        const selectedPlaylistItem = this.props.selectedPlaylistItem;

        this.state = {currentPlaylist, numItems, selectedPlaylistItem};

    }

    componentDidMount() {
        //console.log("PlaylistControls currentPlaylist", this.state.selectedPlaylistItem, this.state.currentPlaylist);

        const currentIndex = this.findCurrentIndex(this.state.selectedPlaylistItem, this.state.currentPlaylist);
        this.setState({currentIndex});

        TweenMax.set(this._container, {opacity: 1});
    }

    componentWillReceiveProps(newProps) {
        const currentPlaylist = newProps.currentPlaylist;
        const currentIndex = this.findCurrentIndex(newProps.selectedPlaylistItem, newProps.currentPlaylist);
        const numItems = newProps.currentPlaylist.length;

        this.setState({currentPlaylist});
        this.setState({numItems});
        this.setState({currentIndex});
    }

    onImageLoaded(url) {
        TweenMax.set(this._container, {opacity: 1});
    }

    findCurrentIndex(current, list) {
        const currentIndex = list.map(function (item, index) {
            let n;
            if (current.assetID === item.assetID) {
                console.log(item.assetID, index);
                n = index;
            } else {
                n = 0;
            }
            return n;
        }).reduce(function (previousValue, currentValue) {
            var result = parseInt(previousValue) + parseInt(currentValue);
            return result;
        }, 0);
        console.log("findCurrentIndex", currentIndex);
        return currentIndex + 1;

    }

    onPreviousSelected() {
        const currentIndex = this.state.currentIndex - 1;
        const nextIndex = (currentIndex - 1 >= 0) ? currentIndex - 1 : this.props.currentPlaylist.length - 1;
        const nextItem = this.props.currentPlaylist[nextIndex];
        this.props.setCurrentItem(nextItem);
    }

    onNextSelected() {
        const nextIndex = (this.state.currentIndex < this.props.currentPlaylist.length) ? this.state.currentIndex : 0;
        const nextItem = this.props.currentPlaylist[nextIndex];
        console.log("nextIndex", nextIndex);
        this.props.setCurrentItem(nextItem);
    }

    render() {
        const currentPlaylist = this.state.currentPlaylist;
        //console.log("render currentItem", this.state);
        return (
            <div className='playListControl'>
                <div className='playListControlWrapper' ref={(c) => this._container = c}>
                    <div className="playListControlArrow" onClick={()=>this.onPreviousSelected()}> &#xe801;</div>
                    <div className="playListControlCounter">{this.state.currentIndex}/{this.state.numItems}</div>
                    <div className="playListControlArrow" onClick={()=>this.onNextSelected()}> &#xe800;</div>
                </div>
            </div>
        )
    }

}
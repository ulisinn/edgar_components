/**
 * Created by ulrichsinn on 01/02/2016.
 */
import  React from 'react';
import PlaylistVideoPlayer from './PlaylistVideoPlayer'
import PlaylistImageViewer from './PlaylistImageViewer'

export default class PlaylistViewer extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.listItems;
        this.state = {listItems};
        //console.log("PlaylistViewer listItems", listItems);
    }


    componentWillReceiveProps(newProps) {
        //
    }

    onImageLoaded(url) {
        const imageSrc = url;
        this.setState({imageSrc});
        //console.log("onImageLoaded", url);

    }

    render() {
        //console.log("PlaylistViewer render", this.props, this.state);

        if (this.props.playlistType === "videos") {
            return <PlaylistVideoPlayer
                location={this.props.location}
                selectedPlaylistItem={this.props.selectedPlaylistItem}>
            </PlaylistVideoPlayer>
        } else {
            return <PlaylistImageViewer
                location={this.props.location}
                selectedPlaylistItem={this.props.selectedPlaylistItem}>

            </PlaylistImageViewer>

        }
    }

}
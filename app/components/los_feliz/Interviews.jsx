import  React from 'react';
import VideoListCallout from './ui_elements/VideoListCallout';
import VideoListItem from './ui_elements/VideoListItem';

export default class Interviews extends React.Component {
    constructor(props) {
        super(props);
        const interviews = this.props.assets.interviews;
        this.state = {interviews};
        console.log("interviews", this.props);
    }

    onItemSelected(item) {
        const currentItem = item;
        this.setState({currentItem})
    }

    render() {
        const interviews = this.props.assets.interviews;
        const currentItem = this.state.currentItem;
        console.log('Interviews render', currentItem);
        return <div className="interviews">
            <VideoListCallout listItems={interviews} onItemSelected={(item) => this.onItemSelected(item)}/>
            <VideoListItem currentItem={currentItem} location={this.props.assets.location}/>
        </div>
    }
}

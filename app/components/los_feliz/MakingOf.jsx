import  React from 'react';
import VideoListCallout from './ui_elements/VideoListCallout';
import VideoListItem from './ui_elements/VideoListItem';

export default class MakingOf extends React.Component {
    constructor(props) {
        super(props);
        const makingOf = this.props.assets.makingOf;
        this.state = {makingOf};
        console.log("makingOf", makingOf);
    }

    onItemSelected(item) {
        const currentItem = item;
        this.setState({currentItem})
    }

    render() {
        const makingOf = this.props.assets.makingOf;
        const currentItem = this.state.currentItem;
        console.log('MakingOf render', currentItem);
        return <div className="interviews">
            <VideoListCallout listItems={makingOf} onItemSelected={(item) => this.onItemSelected(item)}/>
            <VideoListItem currentItem={currentItem} location={this.props.assets.location}/>
        </div>
    }
}

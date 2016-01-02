import  React from 'react';
import TweenMax from 'gsap';

import VideoListCallout from './ui_elements/VideoListCallout';
import VideoListItem from './ui_elements/VideoListItem';

var _container;

export default class Interviews extends React.Component {
    constructor(props) {
        super(props);
        const interviews = this.props.assets.interviews;
        this.state = {interviews};
        console.log("interviews", this.props);
    }

    componentDidMount() {
        console.log("Interviews componentDidMount", this.props.siteReady);
        TweenMax.set(this._container, {autoAlpha: 0});
        if(this.props.siteReady){
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Interviews componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }


    onItemSelected(item) {
        const currentItem = item;
        this.setState({currentItem})
    }

    render() {
        const interviews = this.props.assets.interviews;
        const currentItem = this.state.currentItem;
        console.log('Interviews render', currentItem);
        return <div className="interviews" ref={(c) => this._container = c}>
            <VideoListCallout listItems={interviews} onItemSelected={(item) => this.onItemSelected(item)}/>
            <VideoListItem currentItem={currentItem} location={this.props.assets.location}/>
        </div>
    }
}

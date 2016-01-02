import  React from 'react';
import TweenMax from 'gsap';

import VideoListCallout from './ui_elements/VideoListCallout';
import VideoListItem from './ui_elements/VideoListItem';

var _container;

export default class MakingOf extends React.Component {
    constructor(props) {
        super(props);
        const makingOf = this.props.assets.makingOf;
        this.state = {makingOf};
        console.log("makingOf", makingOf);
    }

    componentDidMount() {
        console.log("MakingOf componentDidMount", this.props.siteReady);
        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("MakingOf componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    onItemSelected(item) {
        const currentItem = item;
        this.setState({currentItem})
    }

    render() {
        const makingOf = this.props.assets.makingOf;
        const currentItem = this.state.currentItem;
        console.log('MakingOf render', currentItem);
        return <div className="makingOf" ref={(c) => this._container = c}>
            <VideoListCallout listItems={makingOf} onItemSelected={(item) => this.onItemSelected(item)}/>
            <VideoListItem currentItem={currentItem} location={this.props.assets.location}/>
        </div>
    }
}

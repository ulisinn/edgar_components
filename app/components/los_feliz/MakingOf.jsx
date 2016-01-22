import  React from 'react';
import TweenMax from 'gsap';
import uuid from 'node-uuid';
import classnames from 'classnames';

import Sidebar from './content_panel/Sidebar';
import VideoListItem from './ui_elements/VideoListItem';
import MainContentPanel from './content_panel/MainContentPanel';

var _container;

export default class MakingOf extends React.Component {
    constructor(props) {
        super(props);
        const makingOf = this.props.assets.makingOf;
        const navigation = this.props.assets.makingOf.navigation[0].MakingOfNav.map(function (item) {
            //console.log(item);
            item.assetID = uuid.v4();
            return item;
        });

        this.state = {makingOf, navigation};
        this._classNames = classnames('mainContentPanelRow', 'makingOf');
        //this._classNames = classnames('mainContentPanelRow');

        //console.log("makingOf", makingOf, navigation);
    }

    componentDidMount() {
        //console.log("MakingOf componentDidMount", this.props.assets.makingOf.navigation[0].MakingOfNav);

        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log("MakingOf componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    onItemSelected(item) {
        //console.log("onItemSelected", item);
        const currentItem = item;
        this.setState({currentItem})
    }

    render() {
        const navigation = this.state.navigation;
        const currentItem = this.state.currentItem;
        const makingOf = this.props.assets.makingOf;
        const location = this.props.assets.location;
        console.log('MakingOf render', location);
        if (currentItem) {
            return <div
                className={this._classNames}
                ref={(c) => this._container = c}>
                <Sidebar
                    listItems={navigation}
                    onItemSelected={(item) => this.onItemSelected(item)}/>
                <MainContentPanel
                    location={location}
                    currentItem={makingOf[currentItem.id][0]}/>
            </div>
        } else {
            return <div ref={(c) => this._container = c}>
                <Sidebar
                    listItems={navigation}
                    onItemSelected={(item) => this.onItemSelected(item)}/>
            </div>
        }
    }
}

import  React from 'react';
import TweenMax from 'gsap';
import uuid from 'node-uuid';
import classnames from 'classnames';

import MainContentPanel from './content_panel/MainContentPanel';

var _container, _classNames;

export default class Drawings extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.assets.drawings;
        const currentItem = listItems[0];

        this.state = {listItems, currentItem};
        console.log("Drawings listItems", listItems);
        this._classNames = classnames('mainContentPanelColumn');

    }

    componentDidMount() {
        //console.log("Drawings componentDidMount", this.props.assets.drawings.navigation[0].MakingOfNav);

        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log("Drawings componentWillReceiveProps", nextProps);

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
        const drawings = this.props.assets.drawings;
        const location = this.props.assets.location;
        console.log('Drawings render', location, this.state);
        if (currentItem) {
            return <div
                className={this._classNames}
                ref={(c) => this._container = c}>
                <MainContentPanel
                    location={location}
                    currentItem={drawings[0]}/>
            </div>
        }
    }
}

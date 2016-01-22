import  React from 'react';
import TweenMax from 'gsap';
import classnames from 'classnames';

import ListCallout from './ui_elements/ListCallout';
import ListItem from './ui_elements/ListItem';

var _container, _classNames;

export default class Theory extends React.Component {
    constructor(props) {
        super(props);
        const theory = this.props.assets.theory;
        this.state = {theory};
        this._classNames = classnames('mainContentPanelRow');

    }

    componentDidMount() {
        console.log("Theory componentDidMount", this.props.siteReady);
        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Theory componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    onItemSelected(item) {
        const currentItem = item;
        //console.log('onItemSelected', item);
        this.setState({currentItem})
    }

    render() {
        const theory = this.props.assets.theory;
        const currentItem = this.state.currentItem;
        return <div
            className={this._classNames}
            ref={(c) => this._container = c}>
            <ListCallout listItems={theory} onItemSelected={(item) => this.onItemSelected(item)}/>
            <ListItem currentItem={currentItem}/>
        </div>
    }
}

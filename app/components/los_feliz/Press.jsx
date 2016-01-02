import React from "react";
import TweenMax from 'gsap';

var style;
var _container;

export default class Press extends React.Component {
    constructor(props) {
        super(props);
        style = {
            textAlign: 'center'
        }
    }

    componentDidMount() {
        console.log("Press componentDidMount", this.props.siteReady);
        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Press componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    render() {
        return (
            <div className="content" ref={(c) => this._container = c}>
                <div style={style} className="contentInset"><h1>Reviews: Coming Soon</h1></div>
            </div>
        )
    }
}
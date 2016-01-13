import React from "react";
import TweenMax from 'gsap';

var style;
var _container;

export default class Links extends React.Component {
    constructor(props) {
        super(props);
        style = {
            textAlign: 'center'
        }
    }

    componentDidMount() {
        console.log("Links componentDidMount", this.props.siteReady);
        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Links componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }
    render() {
        return (
            <div className="contact" ref={(c) => this._container = c}>
                <div style={style} ><h1>Links: Coming Soon</h1></div>
            </div>
        )
    }
}
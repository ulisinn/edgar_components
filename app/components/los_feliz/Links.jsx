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

        const links = this.props.assets.external_inks;
        this.state = {links};
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
            <div className="links" ref={(c) => this._container = c}>
                <ul>{this.state.links.map(this.renderLinks)}</ul>
            </div>
        )
    }

    renderLinks(item) {
        console.log("renderLinks");
        return <li key={item.assetID}><a href={item.url} target="_blank">{item.label}</a></li>
    }
}
import React from "react";
import ScreeningsItem from "./ui_elements/ScreeningsItem";
import TweenMax from 'gsap';

var style;

var _container;

export default class Screenings extends React.Component {
    constructor(props) {
        super(props);
        style = {
            textAlign: 'center'
        }
    }

    componentDidMount() {
        console.log("Screenings componentDidMount", this.props.assets.screenings);

        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Screenings componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    render() {
        const screenings = this.props.assets.screenings.map(function(item){
            return item
        }).reverse();

        return (
            <div className="screenings" ref={(c) => this._container = c}>
                {screenings.map(this.renderScreening, this)}
            </div>
        )
    }

    renderScreening(item, index) {
        const name = "MainNavButton_" + index;
        return (
            <div key={item.assetID}>
                <ScreeningsItem currentItem={item}/>
            </div>
        )
    }
}
import React from "react";
import ScreeningsItem from "./ui_elements/ScreeningsItem";
import TweenMax from 'gsap';
import classnames from 'classnames';

var _container, _classNames;

export default class Screenings extends React.Component {
    constructor(props) {
        super(props);
        this._classNames = classnames('mainContentPanelColumn');

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
        const screenings = this.props.assets.screenings.map(function (item) {
            return item
        }).reverse();

        return (
            <div
                className={this._classNames}
                ref={(c) => this._container = c}>
                <div className="screenings">
                    {screenings.map(this.renderScreening, this)}
                </div>
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
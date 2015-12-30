import React from "react";
import TweenMax from 'gsap';

var car = require('./assets/car_small_icn.png');
var _container;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentDidMount() {
        TweenMax.set(this._container, {autoAlpha: 0});
    }

    onButtonClick() {
        this.props.onNavClick("Teaser");
    }

    render() {
        return (
            <div className="content">
                <div className="splashPage" ref={(c) => this._container = c}>
                    <div >
                        <svg width="100%" viewBox="0 0 920 200" preserveAspectRatio="xMinYMin meet"
                             onClick={()=>this.onButtonClick()}>
                            <text alignmentBaseline='middle' textAnchor='start' fill="white"
                                  x="0"
                                  y="43%">
                                <tspan className="splashHeader" dx="0">LOS FELIZ</tspan>
                                <tspan className="splashSub" dx="25px"> A ROAD MOVIE SHOT IN A STUDIO</tspan>
                            </text>
                            <image xlinkHref={car} x="759px" y="11%" height="76px" width="166px"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
import React from "react";
import TweenMax from 'gsap';
import classnames from 'classnames';

var car = require('./assets/car_small_icn.png');
var blinker = require('./assets/car_small_animated.gif');
var _blink;
var _tagline;
var _container;
var _classNames;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        const siteReady = false;
        this.state = ({siteReady});

        this._classNames = classnames('splashPage');
    }

    componentWillReceiveProps(nextProps) {
        console.log("HOME componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentDidMount() {
        TweenMax.set(this._container, {autoAlpha: 0});

        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    onButtonClick() {
        //this.props.onNavClick("Teaser");
        var owner = this;
        TweenMax.set(this._blink, {autoAlpha: 0});
        TweenMax.to(this._tagline, 2, {autoAlpha: 0, css: {marginLeft: 1000}, delay: 0.5});
        TweenMax.to(this._container, 1, {
            autoAlpha: 0, delay: 1, onComplete: function () {
                owner.props.onNavClick("Teaser");
            }
        });

    }

    render() {
        //console.log("HOME render", this.props);

        return (
            <div className='contentCenterAlign'>
                <div className={this._classNames} ref={(c) => this._container = c}>
                    <div >
                        <svg ref={(c) => this._tagline = c} width="100%" viewBox="0 0 920 200"
                             preserveAspectRatio="xMinYMin meet"
                             onClick={()=>this.onButtonClick()}>


                            <text alignmentBaseline='middle' textAnchor='start' fill="white"
                                  x="0"
                                  y="43%">
                                <tspan className="splashHeader" dx="0">LOS FELIZ</tspan>
                                <tspan className="splashSub" dx="15px"> A ROAD MOVIE SHOT IN A STUDIO</tspan>
                            </text>
                            <image xlinkHref={car} x="745px" y="11%" height="76px" width="166px"/>
                            <image xlinkHref={blinker} x="745px" y="13%" height="76px" width="166px"
                                   ref={(c) => this._blink = c}/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
import  React from 'react';
import TweenMax from 'gsap';

var _container, _creditsContent, _creditsWrapper, _creditsTween, _resizeTimeOut;

var orf = require('./assets/orf.png');
var filmFonds = require('./assets/filmfonds.png');
var edoko = require('./assets/edoko.png');
var filmInstitute = require('./assets/film_institute.png');
var kulturLand = require('./assets/kulturland.png');
var museum = require('./assets/21erHaus.png');

export default class Credits extends React.Component {
    constructor(props) {
        super(props);
        const credits = this.props.assets.credits;
        this.state = {credits};
    }


    componentDidMount() {
        console.log("Credits componentDidMount", this.props.siteReady, this._creditsContent.clientHeight, this._creditsWrapper.clientHeight);
        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
            this.playCredits(2);
        } else {
            this.playCredits(4);
        }
        window.addEventListener('resize', () => this.handleResize());


    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    componentWillReceiveProps(nextProps) {
        //console.log("Credits componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    playCredits(delay = 3, tweenTime = 180) {
        var _contentHeight = 0;
        var _wrapperHeight = 0;
        var remainingTime;
        var _currentY;


        try {
            _currentY = Math.abs(parseInt(this._creditsContent.style.top));
        } catch (e) {
            //
        }

        try {
            _contentHeight = this._creditsContent.clientHeight;
        } catch (e) {
            //
        }

        try {
            _wrapperHeight = this._creditsWrapper.clientHeight;
        } catch (e) {
            //
        }
        if (_contentHeight === 0 || _wrapperHeight === 0) {
            return;
        }

        remainingTime = tweenTime - _currentY / (_contentHeight - _wrapperHeight + 220) * tweenTime;
        if (isNaN(remainingTime)) {
            remainingTime = tweenTime;
        }
        //console.log(remainingTime, _currentY, "playCredits", _contentHeight, _wrapperHeight);

        this._creditsTween = TweenMax.to(this._creditsContent, remainingTime, {
            css: {top: (_contentHeight - _wrapperHeight + 220) * -1},
            delay: delay,
            ease: Linear.easeNone
        });
    }

    replayCredits() {
        console.log("replayCredits");
        TweenMax.set(this._creditsContent, {
            css: {top: 0}
        });
        this.playCredits(2);
    }


    handleResize() {
        this.pauseCredits();
        clearTimeout(this._resizeTimeOut);
        this._resizeTimeOut = setTimeout(() => this.resumeCredits(), 400);
    }

    pauseCredits() {
        try {
            this._creditsTween.pause();
        } catch (e) {
            console.log("no tween");
        }
    }

    resumeCredits() {
        //console.log("CREDITS ++++ resumeCredits");
        this.playCredits(0);
    }

    render() {
        const credits = this.state.credits;
        if (credits) {
            //console.log('render Credits', credits[0]);
            return (
                <div className="creditsWrapper" ref={(c) => this._creditsWrapper = c}>
                    <div className="logos">
                        <img src={filmInstitute} alt=""/>
                        <img src={filmFonds} alt=""/>
                        <img src={orf} alt=""/>
                        <img src={kulturLand} alt=""/>
                        <img src={edoko} alt=""/>
                        <img src={museum} alt=""/>
                    </div>
                    <div className="credits"
                         ref={(c) => this._container = c}
                         onMouseEnter={() => this.pauseCredits()}
                         onMouseLeave={() => this.resumeCredits()}>
                        <div className='creditsContent' ref={(c) => this._creditsContent = c}>
                            <div dangerouslySetInnerHTML={this.createMarkup(credits[0].processed)}/>
                            <div onClick={() => this.replayCredits()} className="replayCredits">REPLAY CREDITS</div>
                        </div>
                    </div>
                </div>
            );
        }
        return null
    }

    renderData(item) {
        return (
            <li key={item.assetID}>
                <div>{item.title}</div>
                <div>{item.author}</div>
            </li>
        )
    }

    createMarkup(item) {
        //console.log("createMarkup", item);
        return {__html: item};
    };

}

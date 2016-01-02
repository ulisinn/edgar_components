import  React from 'react';
import TweenMax from 'gsap';

var _container;

export default class Credits extends React.Component {
    constructor(props) {
        super(props);
        const credits = this.props.assets.credits;
        this.state = {credits};
    }


    componentDidMount() {
        console.log("Credits componentDidMount", this.props.siteReady);
        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Credits componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    render() {
        const credits = this.state.credits;
        if (credits) {
            //console.log('render Credits', credits[0]);
            return <div className="credits" ref={(c) => this._container = c}>
                <div dangerouslySetInnerHTML={this.createMarkup(credits[0].processed)}/>
            </div>;
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

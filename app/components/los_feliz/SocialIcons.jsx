import React from "react";
import TweenMax from 'gsap';

var _container;

export default class SocialIcons extends React.Component {
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
                <div className="socialIcons">
                    <div>
                        <a href="https://www.facebook.com/1000000000.at" target="_blank">
                            &#xe80c;
                        </a>

                        <a href="https://twitter.com/Billionaire_at" target="_blank">
                            &#xe80b;
                        </a>

                        <a href="https://www.youtube.com/user/BillionaireAT" target="_blank">
                            &#xe815;
                        </a>

                        <a href="https://soundcloud.com/billionaire-film" target="_blank">
                            &#xe806;
                        </a>

                        <a href="http://www.1000000000.at/?page_id=2" target="_blank">
                            &#xe805;
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
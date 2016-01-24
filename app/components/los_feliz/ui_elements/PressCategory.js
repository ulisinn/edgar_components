/**
 * Created by ulrichsinn on 12/24/2015.
 */
import React from "react";
import ReviewsItem from "./ReviewsItem";

import TweenMax from 'gsap';

var _container, _input;

export default class PressCategory extends React.Component {
    constructor(props) {
        super(props);
        console.log("PressCategory", props);
        const wasAnswered = false;
        this.state = ({wasAnswered});
    }

    requestPassword() {
        var email = this.props.currentContent[0].email;
        console.log("requestPassword", this.props);
        document.location.href = "mailto:" + email + "?subject=Password Request";
    }

    render() {
        const currentItem = this.props.currentItem;
        if (currentItem == undefined) {
            return null;
        }
        const currentContent = this.props.currentContent;
        //console.log(this.props, "PressCategory", currentItem, "currentContent", currentContent);
        const wasAnswered = this.state.wasAnswered;

        const cat = currentItem.category;

        switch (cat) {
            case 'Downloads':
                if (this.checkForMagicWord()) {
                    return <div className='downloads'>
                        <h1><a
                            href={this.props.location + currentContent[0].download}>{currentContent[0].description}</a>
                        </h1>
                    </div>;
                } else {
                    return <div className='downloads'>
                        <h1>What's the magic word? </h1>
                        <input type="password" ref={(c) => this._input = c}/>
                        <div className="submitDownload" onClick={() =>this.onClick()}
                             onFocus={() =>this.onFocus()}>SUBMIT
                        </div>
                        <div className="passwordRequest" onClick={() => this.requestPassword()}>REQUEST A PASSWORD</div>
                    </div>;
                }

                break;
            case 'Reviews':
                return (
                    <div className="reviews" ref={(c) => this._container = c}>
                        {currentContent.map(this.renderReviews, this)}
                    </div>
                );
                break;
            case 'Info/Contact':
                const info = this.props.info[0];
                const events = this.props.info[0].events;
                console.log("PressCategory RENDER", this.props.info);

                return (
                    <div className="info" ref={(c) => this._container = c}>
                        <div className="infoLinks">
                            <div>{this.renderInfoWebsite(info)}</div>
                            <div>{this.renderInfoMailto(info)}</div>
                            <div>{info.phone}</div>
                        </div>
                        <div className="events">
                            {events.map(this.renderEvents, this)}
                        </div>
                    </div>
                );
                break;
        }

    }

    renderInfoWebsite(obj) {

        return <a href={obj.url} target="_blank">{obj.label}</a>

    }

    renderInfoMailto(obj) {
        return <a href={obj.email} target="_blank">{obj.mailto}</a>

    }

    renderInfoEvents(obj) {

    }

    onFocus() {
        console.log("on focus");
        this._input.placeholder = " ";
        const wasAnswered = false;
        this.setState({wasAnswered});
    }

    onClick() {
        console.log("click", this._input.value, this.props.magicWord, this.props.currentContent[0].magicWord);
        this.props.setMagicWord(this._input.value);
        if (this._input.value !== this.props.currentContent[0].magicWord) {
            this._input.value = '';
            this._input.placeholder = "that's not it!"
        } else {
            const wasAnswered = true;
            this.setState({wasAnswered});
        }
    }

    renderReviews(item, index) {
        return (
            <div key={item.assetID}>
                <ReviewsItem currentItem={item}/>
            </div>
        )
    }

    renderEvents(item, index) {
        return <div key={index}>
            <div dangerouslySetInnerHTML={this.createMarkup(item.body.processed)}/>
        </div>
    }

    checkForMagicWord() {
        console.log("checkForMagicWord", this.props);
        if (this.props.magicWord === this.props.currentContent[0].magicWord) {
            return true
        } else {
            return this.state.wasAnswered;
        }
    }

    createMarkup(item) {
        console.log("createMarkup", item);
        return {__html: item};
    };

}


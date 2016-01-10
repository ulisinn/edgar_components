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
        document.location.href = "mailto:edgar@sil.at?subject=Password Request";
    }

    render() {
        const currentItem = this.props.currentItem;
        const currentContent = this.props.currentContent;
        console.log(this.props, "PressCategory", currentItem, "currentContent", currentContent);
        const wasAnswered = this.state.wasAnswered;
        console.log("RENDER", wasAnswered, this.props.magicWord);
        if (currentItem && currentItem.category === "Downloads") {
            if (this.checkForMagicWord()) {
                return <div className='downloads'>
                    <h1><a href={this.props.location + currentContent[0].download}>{currentContent[0].description}</a>
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
        } else {
            return (
                <div className="reviews" ref={(c) => this._container = c}>
                    {currentContent.map(this.renderReviews, this)}
                </div>
            )
        }
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

    checkForMagicWord() {
        console.log("checkForMagicWord", this.props);
        if (this.props.magicWord === this.props.currentContent[0].magicWord) {
            return true
        } else {
            return this.state.wasAnswered;
        }
    }
}


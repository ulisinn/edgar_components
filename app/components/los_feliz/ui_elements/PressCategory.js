/**
 * Created by ulrichsinn on 12/24/2015.
 */
import React from "react";
import ReviewsItem from "./ReviewsItem";

import TweenMax from 'gsap';

var _container;

export default class PressCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentItem = this.props.currentItem;
        const currentContent = this.props.currentContent;
        console.log("PressCategory", currentItem, "currentContent", currentContent);
        if (currentItem && currentItem.category === "Downloads") {
            return <div className='downloads'>
                <h1>{currentItem.category}</h1>
            </div>;
        } else {

            console.log("RENDER REVIEWS");
            return (
                <div className="reviews" ref={(c) => this._container = c}>
                    {currentContent.map(this.renderReviews, this)}
                </div>
            )
        }
    }

    renderReviews(item, index) {
        console.log(item);
        return (
            <div key={item.assetID}>
                <ReviewsItem currentItem={item}/>
            </div>
        )
    }
}


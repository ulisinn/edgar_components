import uuid from 'node-uuid';
import  React from 'react';
import TweenMax from 'gsap';

import PressCallout from './ui_elements/PressCallout';
import PressCategory from './ui_elements/PressCategory';

var _container;

export default class Press extends React.Component {
    constructor(props) {
        super(props);
        //console.log("PRESS", props.assets.reviews, props.assets.downloads);
        const reviews = this.props.assets.reviews;
        const downloads = this.props.assets.downloads;
        const category = [
            {
                category: 'Info/Contact',
                assetID: uuid.v4()
            }, {
                category: 'Reviews',
                assetID: uuid.v4()
            },
            {
                category: 'Downloads',
                assetID: uuid.v4()
            }
        ];
        const currentContent = reviews;
        this.state = {reviews, downloads, category, currentContent};
    }

    componentDidMount() {
        console.log("Press componentDidMount", this.props.siteReady);
        TweenMax.set(this._container, {autoAlpha: 0});
        if (this.props.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log("Press componentWillReceiveProps", nextProps);
        //console.log("PRESS", nextProps.assets.reviews, nextProps.assets.downloads);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    onItemSelected(item) {
        const currentItem = item;
        console.log('onItemSelected', item);
        this.setState({currentItem})
    }

    render() {
        let currentContent = this.state.currentContent;
        const category = (this.state.category) ? this.state.category : currentContent.category;
        const currentItem = this.state.currentItem;
        const magicWord = this.props.assets.magicWord;
        console.log("PRESS STATE", this.props, currentItem);
        if (currentItem) {
            currentContent = (this.state.currentItem.category === "Reviews") ? this.props.assets.reviews : this.props.assets.downloads;
        }
        return <div className="press" ref={(c) => this._container = c}>
            <PressCallout listItems={category} onItemSelected={(item) => this.onItemSelected(item)}/>
            <PressCategory info={this.props.assets.info}
                           currentItem={currentItem}
                           currentContent={currentContent}
                           location={this.props.assets.location}
                           setMagicWord={this.props.setMagicWord}
                           magicWord={magicWord}/>
        </div>
    }
}

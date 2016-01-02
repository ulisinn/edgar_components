import  React from 'react';
import TweenMax from 'gsap';

import  ImageViewer from './ui_elements/ImageViewer';
import  ImageViewerControl from './ui_elements/ImageViewerControl';
import  ImageViewerCopy from './ui_elements/ImageViewerCopy';
import {findActiveLink,getImage} from './utils/utils';

var _container;

export default class Stills extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.props.assets.stills;
        this.state = {listItems};
        console.log("Stills listItems", listItems);
    }

    componentDidMount() {
        console.log("Stills componentDidMount");
        const items = this.state.listItems;
        const listItems = this.initializeList(items);
        this.setState({listItems});
        const currentItem = listItems[0];
        this.setCurrentItem(currentItem);

        TweenMax.set(this._container, {autoAlpha: 0});
        if(this.props.siteReady){
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("Stills componentWillReceiveProps", nextProps);

        if (nextProps.siteReady) {
            TweenMax.to(this._container, 1, {autoAlpha: 1});
        }
    }

    initializeList(list) {
        const listItems = list.map(
            function (item, index) {
                //console.log(item, index);
                if (index == 0) {
                    item.isSelected = true;
                } else {
                    item.isSelected = false;
                }
                return item
            }
        );
        return listItems;
    }

    setCurrentItem(item) {
        const currentItem = item;
        const currentImage = getImage(this.props.assets.location + item.source);

        this.setState({currentItem});
        this.setState({currentImage});

    }

    render() {
        const listItems = this.state.listItems;
        const currentItem = this.state.currentItem;
        const currentImage = this.state.currentImage;
        console.log("STILLS RENDER", this.state);
        return (
            <div className='stills' ref={(c) => this._container = c}>
                <ImageViewer currentImage={currentImage}
                             location={this.props.assets.location}
                             listItems={listItems}
                             currentItem={currentItem}/>
                <ImageViewerControl location={this.props.assets.location}
                                    listItems={listItems}
                                    currentItem={currentItem}
                                    setCurrentItem={(item) => this.setCurrentItem(item)}/>
                <ImageViewerCopy currentImage={currentImage}
                             location={this.props.assets.location}
                             listItems={listItems}
                             currentItem={currentItem}/>
            </div>
        )
    }

}

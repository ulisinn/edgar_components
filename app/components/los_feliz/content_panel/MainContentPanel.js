/**
 * Created by ulrichsinn on 01/08/2016.
 */

import  React from 'react';
import TweenMax from 'gsap';
import classnames from 'classnames';
import uuid from 'node-uuid';
import MainContentDescription from './MainContentDescription'
import PlaylistWrapper from './PlaylistWrapper'

var _classNames, _container;


export default class MainContentPanel extends React.Component {
    constructor(props) {
        super(props);
        this._classNames = classnames('mainContent');

        //console.log("MainContentPanel listItems", listItems);
    }


    componentWillReceiveProps(newProps) {
        console.log("MainContentPanel componentWillReceiveProps", newProps);
    }

    render() {
        return (
            <div className={this._classNames} ref={(c) => this._container = c}>
                <MainContentDescription description={this.props.currentItem.body}></MainContentDescription>
                <PlaylistWrapper location={this.props.location}
                                 images={this.props.currentItem.images}
                                 videos={this.props.currentItem.video}
                                 paintings={this.props.currentItem.paintings}
                                 sketches={this.props.currentItem.sketches}
                >
                </PlaylistWrapper>
            </div>
        )
    }

}
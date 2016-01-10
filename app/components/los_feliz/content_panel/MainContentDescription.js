/**
 * Created by ulrichsinn on 01/08/2016.
 */

import  React from 'react';
import TweenMax from 'gsap';
import classnames from 'classnames';
import {createMarkup} from '../utils/utils';

import uuid from 'node-uuid';

var _classNames, _container;


export default class MainContentDescription extends React.Component {
    constructor(props) {
        super(props);
        this._classNames = classnames('mainContentDescription');

        //console.log("MainContentDescription listItems", listItems);
    }


    componentWillReceiveProps(newProps) {
        //console.log("MainContentDescription componentWillReceiveProps", newProps);
    }

    render() {
        //console.log(this.props.description);
        return (
            <div className={this._classNames} dangerouslySetInnerHTML={createMarkup(this.props.description)}/>

        )
    }
}
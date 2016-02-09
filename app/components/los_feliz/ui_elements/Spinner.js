/**
 * Created by ulrichsinn on 02/08/2016.
 */

import React from "react";
import TweenMax from 'gsap';
import classnames from 'classnames';

var spinner = require('../assets/darkSpinner.gif');
var _container;
var _classNames;

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);
        const siteReady = false;
        this.state = ({siteReady});

        this._classNames = classnames('spinner');
    }


    render() {
        console.log("HOME render", this.props);

        return (
            <div className='contentCenterAlign'>
                <div className={this._classNames} ref={(c) => this._container = c}>
                    <div >
                        <img src={spinner} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
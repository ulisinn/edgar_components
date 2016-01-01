/**
 * Created by ulrichsinn on 12/22/2015.
 */

import React from "react";

export default class MainNavButton extends React.Component {
    constructor(props) {
        super(props);
    }

    onButtonClick() {
        this.props.onNavClick(this.props.buttonName.id);
    }

    render() {
        //console.log(this.props.buttonName);
        //return (this.props.buttonName.isSelected) ? ()=>this.renderSelectedButton() : ()=>this.renderActiveButton()
        let btn;

        (this.props.buttonName.isSelected) ? btn = this.renderSelectedButton() : btn = this.renderActiveButton();
        return btn;
    }

    renderActiveButton() {
        return (
            <div className="mainNavButtonActive" onClick={()=>this.onButtonClick()}>{this.props.buttonName.label}</div>
        )
    }

    renderSelectedButton() {
        return (
            <div className="mainNavButtonSelected">{this.props.buttonName.label}</div>
        )
    }
}
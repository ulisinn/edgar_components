/**
 * Created by ulrichsinn on 01/10/2016.
 */

import React from "react";

export default class PlaylistContentTypeButton extends React.Component {
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
            <div className="playlistTypeButton" onClick={()=>this.onButtonClick()}>{this.props.buttonName.label}</div>
        )
    }

    renderSelectedButton() {
        return (
            <div className="playlistTypeButtonSelected">{this.props.buttonName.label}</div>
        )
    }
}
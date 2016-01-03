/**
 * Created by ulrichsinn on 01/01/2016.
 */

import React from "react";

export default class ListCalloutItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onItemSelected() {
        //console.log("onItemSelected", this.props.item);
        this.props.onListItemSelected(this.props.item);
    }

    render() {
        const item = this.props.item;
        //console.log("renderListItems", item.isSelected);
        let btn;

        (item.isSelected) ? btn = this.renderSelectedButton(item) : btn = this.renderActiveButton(item);
        return btn;

    }

    renderActiveButton(item) {
        return (
            <li className="listItemCallout" onClick={()=>this.onItemSelected()}>
               {item.category}
            </li>)
    }

    renderSelectedButton(item) {
        return (
            <li className="listItemSelected">
                {item.category}
            </li>)

    }
}
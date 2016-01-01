/**
 * Created by ulrichsinn on 01/01/2016.
 */
import React from "react";
import ListCalloutItem from "./ListCalloutItem";
import TweenMax from 'gsap';

export default class ListCallout extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.initializeList(props.listItems);
        this.state = {listItems};
    }

    componentDidMount() {
        const items = this.state.listItems;
        const listItems = this.initializeList(items);
        this.setState({listItems});

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

    onListItemSelected(newItem) {
        //console.log("onListItemSelected", newItem);
        const oldList = this.state.listItems;
        const listItems = oldList.map(
            function (item, index) {
                //console.log(item, index);
                if (newItem.assetID === item.assetID) {
                    item.isSelected = true;
                } else {
                    item.isSelected = false;
                }
                return item
            }
        );
        this.setState({listItems});

    }

    render() {
        const listItems = this.state.listItems;

        return (
            <div className="listCallout">
                <ul>
                    {listItems.map(this.renderListItems, this)}

                </ul>
            </div>
        )
    }

    renderListItems(item, index) {
        return (
            <ListCalloutItem key={item.assetID}
                             item={item}
                             onListItemSelected={(item) => this.onListItemSelected(item)}/>
        )
    }
}


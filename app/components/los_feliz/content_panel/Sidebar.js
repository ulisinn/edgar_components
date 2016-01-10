/**
 * Created by ulrichsinn on 01/01/2016.
 */
import React from "react";
import SidebarListItem from "../content_panel/SidebarListItem";
import TweenMax from 'gsap';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        const listItems = this.initializeList(props.listItems);
        this.state = {listItems};
    }

    componentDidMount() {
        const items = this.state.listItems;
        const listItems = this.initializeList(items);
        this.setState({listItems});
        const currentItem = listItems[0];
        this.setCurrentItem(currentItem);
        console.log("Sidebar componentDidMount", currentItem);
    }

    initializeList(list) {
        console.log("initializeList", list);
        const listItems = list.map(
            function (item, index) {
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
        const oldList = this.state.listItems;
        const currentItem = newItem;
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
        console.log("onListItemSelected", newItem);
        this.setState({listItems});
        this.setCurrentItem(newItem);
    }

    setCurrentItem(item) {
        this.setState({item});
        this.props.onItemSelected(item);
    }

    render() {
        const listItems = this.state.listItems;

        return (
            <div className="makingOfListCallout">
                <ul>
                    {listItems.map(this.renderListItems, this)}

                </ul>
            </div>
        )
    }

    renderListItems(item, index) {
        //console.log("Sidebar renderListItems", item);
        return (
            <SidebarListItem key={index}
                             item={item}
                             onListItemSelected={(item) => this.onListItemSelected(item)}/>
        )
    }
}


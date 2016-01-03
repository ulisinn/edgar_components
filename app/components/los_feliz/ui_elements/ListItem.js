/**
 * Created by ulrichsinn on 01/01/2016.
 */
import  React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        const currentItem = this.props.currentItem;
        this.state = {currentItem};
    }

    render() {
        const currentItem = this.props.currentItem;
            //console.log('render ListItem', currentItem, this.props);
        if (currentItem) {
            return <div className='listItem' >
                <div dangerouslySetInnerHTML={this.createMarkup(currentItem.processed)}/>
            </div>;
        }
        return null
    }

    createMarkup(item) {
        //console.log("createMarkup", item);
        return {__html: item};
    };

}

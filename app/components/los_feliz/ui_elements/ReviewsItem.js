/**
 * Created by ulrichsinn on 01/01/2016.
 */
import  React from 'react';

export default class ScreeningsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentItem = this.props.currentItem;
        console.log(currentItem);
        return <div className='screeningsItem'>
            <h1>{currentItem.publication}</h1>
            <h2>{currentItem.title}</h2>
            <h3>{currentItem.author}</h3>
            <h4>{currentItem.date}</h4>
            <div dangerouslySetInnerHTML={this.createMarkup(currentItem.processed)}/>
        </div>;
    }


    createMarkup(item) {
        //console.log("createMarkup", item);
        return {__html: item};
    };
}

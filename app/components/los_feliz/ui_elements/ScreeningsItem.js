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
            <h1>{currentItem.city}</h1>
            <h2>{currentItem.venue}</h2>
            <h3>{currentItem.address}</h3>
            <h4>{currentItem.date}</h4>
            <p>{currentItem.comment}</p>
        </div>;
    }
}

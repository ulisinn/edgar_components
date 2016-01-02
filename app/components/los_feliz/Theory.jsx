import  React from 'react';
import ListCallout from './ui_elements/ListCallout';
import ListItem from './ui_elements/ListItem';

export default class Theory extends React.Component {
    constructor(props) {
        super(props);
        const theory = this.props.assets.theory;
        this.state = {theory};
    }

    onItemSelected(item) {
        const currentItem = item;
        //console.log('onItemSelected', item);
        this.setState({currentItem})
    }

    render() {
        const theory = this.props.assets.theory;
        const currentItem = this.state.currentItem;
        return <div className="theory">
            <ListCallout listItems={theory} onItemSelected={(item) => this.onItemSelected(item)}/>
            <ListItem currentItem={currentItem}/>
        </div>
    }
}

import  React from 'react';
import ListCallout from './ui_elements/ListCallout'

export default class Theory extends React.Component {
    constructor(props) {
        super(props);
        const theory = this.props.assets.theory;
        this.state = {theory};
    }

    onItemSelected(item) {
        console.log('onItemSelected', item);
    }

    render() {
        const theory = this.props.assets.theory;
        /*        if (credits) {
         //console.log('render Credits', credits[0]);
         return <div className="credits">
         <div dangerouslySetInnerHTML={this.createMarkup(credits[0].processed)}/>
         </div>;
         }*/
        return <div className="theory">
            <ListCallout listItems={theory} onItemSelected={(item) => this.onItemSelected(item)}/>
        </div>
    }

    renderData(item) {
        return (
            <li key={item.assetID}>
                <div>{item.title}</div>
                <div>{item.author}</div>
            </li>
        )
    }

    createMarkup(item) {
        //console.log("createMarkup", item);
        return {__html: item};
    };

}

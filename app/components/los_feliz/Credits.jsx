import  React from 'react';
import {getCredits} from './utils/data.js';

var _body;
export default class Credits extends React.Component {
    constructor(props) {
        super(props);
        const credits = this.props.assets.credits;
        this.state = {credits};
    }

    render() {
        const credits = this.state.credits;
        if (credits) {
            //console.log('render Credits', credits[0]);
            return <div className="credits">
                <div dangerouslySetInnerHTML={this.createMarkup(credits[0].processed)}/>
            </div>;
        }
        return null
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

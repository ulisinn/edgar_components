import  React from 'react';
import {getCredits} from './utils/data.js';

var _body;
export default class Credits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const credits = getCredits().then(function (response) {
            console.log("Credits response", response.data);
            const credits = response.data.map(
                function (item) {
                    const t = {};
                    t.assetID = item._id;
                    t.title = item.Credits[0].title;
                    t.author = item.Credits[0].author;
                    t.processed = item.Credits[0].body.processed;
                    t.raw = item.Credits[0].body.raw;
                    //console.log("item", item);
                    return t;
                });
            this.setState({credits});
        }.bind(this))
    }

    render() {
        const credits = this.state.credits;
        if (credits) {
            console.log('render Credits', credits[0]);
            return <div>
                <ul>{credits.map(this.renderData)}</ul>
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

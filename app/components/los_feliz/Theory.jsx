import  React from 'react';
import {getTheory} from './utils/data.js';

var _body;
export default class Theory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const theory = getTheory().then(function (response) {
            //console.log("Theory response", response.data);
            const theory = response.data.map(
                function (item) {
                    const t = {};
                    t.assetID = item._id;
                    t.title = item.Theory[0].title;
                    t.author = item.Theory[0].author;
                    t.processed = item.Theory[0].body.processed;
                    t.raw = item.Theory[0].body.raw;
                    //console.log("item", item);
                    return t;
                });
            this.setState({theory});
        }.bind(this))
    }

    render() {
        const theory = this.state.theory;
        if (theory) {
            //console.log('render Theory', theory[0]);
            return <div>
                <ul>{theory.map(this.renderData)}</ul>
                {/*<div dangerouslySetInnerHTML={this.createMarkup(theory[0].processed)}/>*/}
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

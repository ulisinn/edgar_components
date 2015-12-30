import  React from 'react';
import {getMakingOf} from './utils/data.js';

export default class MakingOf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const makingOf = getMakingOf().then(function (response) {
            //console.log("getMakingOf response", response.data);
            const makingOf = response.data.map(
                function (item) {
                    const t = {};
                    t.assetID = item._id;
                    t.title = item.MakingOf[0].title;
                    t.description = item.MakingOf[0].description;
                    t.mpeg = item.MakingOf[0].mpeg._default;
                    t.webm = item.MakingOf[0].webm._default;
                    //console.log("item", t, item);
                    return t;
                });
            this.setState({makingOf});
        }.bind(this))
    }

    render() {
            const makingOf = this.state.makingOf;

        if(makingOf){
            console.log('render MakingOf', makingOf);
            return <div>
                <ul>{makingOf.map(this.renderData)}</ul>
            </div>

        }
        return null
    }

    renderData(item) {
        return (
            <li key={item.assetID}>
                {item.mpeg}
            </li>
        )
    }
}

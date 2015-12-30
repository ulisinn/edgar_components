import  React from 'react';
import {getStills} from './utils/data.js';

export default class Stills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const stills = getStills().then(function (response) {
            //console.log("response", response);
            const stills = response.data.map(
                function (item) {
                    const t = {};
                    t.assetID = item._id;
                    t.description = item.Stills[0].description;
                    t.title = item.Stills[0].title;
                    t.source = item.Stills[0].imageSrc._default;

                    //console.log(item, t);
                    return t;
                });
            this.setState({stills});
        }.bind(this))
    }

    render() {
        const stills = this.state.stills;

        if (stills) {
            console.log('render Stills', stills);
            return <div>
                <ul>{stills.map(this.renderData)}</ul>
            </div>
        }
        return null;
    }

    renderData(data) {
        return (
            <li key={data.assetID}>
                {data.source}
            </li>
        )
    }
}

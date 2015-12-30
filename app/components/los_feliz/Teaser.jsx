import  React from 'react';
import {getTeaser} from './utils/data.js';

export default class Teaser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const teaser = getTeaser().then(function (response) {
            //console.log("response", response.data);
            const teaser = response.data.map(
                function (item) {
                    const t = {};
                    t.assetID = item.Teaser[0].TeaserMPEG.assetID;
                    t.title = item.Teaser[0].TeaserTitle;
                    t.mpeg = item.Teaser[0].TeaserMPEG._default;
                    t.webm = item.Teaser[0].TeaserWebM._default;
                    //console.log("item", t);
                    return t;
                });
            this.setState({teaser});
        }.bind(this))
    }

    render() {
        const teaser = this.state.teaser;

        if (teaser) {
            console.log('render Teaser', teaser);
            return <div>
                <ul>{teaser.map(this.renderData)}</ul>
            </div>

        }
        return null;
    }

    renderData(item) {
        return (
            <li key={item.assetID}>
                {item.mpeg}
            </li>
        )
    }
}

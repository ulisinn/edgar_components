import  React from 'react';
import {getScreenings} from './utils/data.js';

var _body;
export default class Screenings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const screenings = getScreenings().then(function (response) {
            //console.log("Screenings response", response.data);
            const screenings = response.data.map(
                function (item) {
                    const t = {};
                    t.assetID = item._id;
                    t.venue = item.Screenings[0].venue;
                    t.address = item.Screenings[0].address;
                    t.date = item.Screenings[0].date;
                    t.comment = item.Screenings[0].comment;
                    //console.log("item", item.Screenings);
                    return t;
                });
            this.setState({screenings});
        }.bind(this))
    }

    render() {
        const screenings = this.state.screenings;
        if (screenings) {
            console.log('render Interviews', screenings);
            return <div>
                <ul>{screenings.map(this.renderData)}</ul>
            </div>;
        }
        return null
    }

    renderData(item) {
        return (
            <li key={item.assetID}>
                <div>{item.venue}</div>
                <div>{item.address}</div>
                <div>{item.date}</div>
                <div>{item.comment}</div>
            </li>
        )
    }
}

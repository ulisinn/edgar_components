import  React from 'react';
import {getInterviews} from './utils/data.js';

export default class Interviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const interviews = getInterviews().then(function (response) {
            //console.log("response", response.data);
            const interviews = response.data.map(
                function (item) {
                    const interview = {};
                    //console.log("item", item.Interview[0]);
                    interview.shortTitle = item.Interview[0].InterviewTitleShort;
                    interview.longTitle = item.Interview[0].InterviewTitleLong;
                    interview.description = item.Interview[0].InterviewDescription;
                    interview.assetID = item.Interview[0].InterviewMPEG.assetID;
                    interview.mpeg = item.Interview[0].InterviewMPEG._default;
                    interview.webm = item.Interview[0].InterviewWebM._default;
                    return interview;
                });
            this.setState({interviews});
            //console.log("interviews");

        }.bind(this))
    }

    render() {
        const interviews = this.state.interviews;

        if (interviews) {
            console.log('render Interviews', interviews);
            return <div>
                <ul>{interviews.map(this.renderData)}</ul>
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

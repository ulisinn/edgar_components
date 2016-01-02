import  React from 'react';

export default class Downloads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {null};
        const downloads = getDownloads().then(function (response) {
            //console.log("Downloads response", response.data);
            const downloads = response.data.map(
                function (item) {
                    const t = {};
                    t.assetID = item._id;
                    t.description = item.Downloads[0].description;
                    t.download = item.Downloads[0].download._default;

                    //console.log(item, t);
                    return t;
                });
            this.setState({downloads});
        }.bind(this))
    }

    render() {
        const downloads = this.state.downloads;

        if (downloads) {
            console.log('render Downloads', downloads);
            return <div>
                <ul>{downloads.map(this.renderData)}</ul>
            </div>
        }
        return null;
    }

    renderData(data) {
        return (
            <li key={data.assetID}>
                {data.description}
            </li>
        )
    }
}

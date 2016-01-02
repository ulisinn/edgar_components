import React from 'react';
import Navigation from './los_feliz/Navigation.jsx';
import Home from './los_feliz/Home.jsx';
import Stills from './los_feliz/Stills.jsx';
import Background from './los_feliz/Background.jsx';
import Teaser from './los_feliz/Teaser.jsx';
import Interviews from './los_feliz/Interviews.jsx';
import BackgroundLoop from './los_feliz/BackgroundLoop.jsx';
import Theory from './los_feliz/Theory.jsx';
import Credits from './los_feliz/Credits.jsx';
import Screenings from './los_feliz/Screenings.jsx';
import MakingOf from './los_feliz/MakingOf.jsx';
import Downloads from './los_feliz/Downloads.jsx';
import SocialIcons from './los_feliz/SocialIcons.jsx';

import {getInitialData} from './los_feliz/utils/data';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(window.location.hostname.indexOf('localhost'));
        const location = (window.location.hostname.indexOf('.at') == -1) ? "http://new.1000000000.at" : "";
        const siteReady = false;
        this.state = {location, siteReady};

        const data = getInitialData().then(function (response) {
            console.log("getInitialData", response[10].data);
            this.parseBackground(response[0]);
            this.parseBackgroundLoop(response[1]);
            this.parseNavigation(response[2]);
            this.parseTeaser(response[3]);
            this.parseStills(response[4]);
            this.parseScreenings(response[5]);
            this.parseInterviews(response[6]);
            this.parseMakingOf(response[7]);
            this.parseCredits(response[8]);
            this.parseTheory(response[9]);
            this.parseDownloads(response[10]);
        }.bind(this))
    }

    render() {
        const links = this.state.links;
        const backgroundImage = this.state.currentBackground;
        const location = this.state.location;
        const audio = this.state.backgroundLoop;
        const siteReady = this.state.siteReady;


        if (this.state && this.state.downloads) {
            console.log("ALL DATA LOADED", this.state);
            return (
                <div>
                    <Background onFadeStart={() => this.onBackgroundFadeStart()}
                                links={links}
                                backgroundImage={backgroundImage}
                                location={location}/>
                    <div className="contentTopAlign">

                        {/* <Home links={links}
                         siteReady={siteReady}
                         onNavClick={(id) => this.onLinkClicked(id)}/>
                         <Teaser assets={this.state}/>
                         <Credits assets={this.state}/>
                         <Theory assets={this.state}/>
                         <Interviews assets={this.state}/>
                        <MakingOf assets={this.state}/>*/}
                        <Stills assets={this.state}/>


                    </div>
                    {/* <BackgroundLoop links={links}
                     audio={audio}
                     backgroundImage={backgroundImage}
                     location={location}
                     isHidden={true}/> */}
                    <Navigation links={links}
                                backgroundImage={backgroundImage}
                                onNavClick={(id) => this.onLinkClicked(id)}
                    />

                    <SocialIcons links={links}
                                 siteReady={siteReady}
                                 onNavClick={(id) => this.onLinkClicked(id)}/>
                </div>
            );
            return null;

        } else if (this.state && backgroundImage) {
            //console.log(this.state, "Modernizr", Modernizr);
            return (
                <div>
                    <Background onFadeStart={() => this.onBackgroundFadeStart()}
                                links={links}
                                backgroundImage={backgroundImage}
                                location={location}/>
                </div>
            );
        } else if (this.state && links) {
            //console.log(this.state, "Modernizr", Modernizr);
            return (
                <div>
                    <Background onFadeStart={() => this.onBackgroundFadeStart()}
                                links={links}
                                backgroundImage={backgroundImage}
                                location={location}/>
                    <BackgroundLoop links={links} audio={audio} backgroundImage={backgroundImage} location={location}
                                    isHidden={true}/>
                    <div className="content">
                        <Home links={links}
                              siteReady={siteReady}
                              onNavClick={(id) => this.onLinkClicked(id)}/>

                    </div>
                    <Navigation links={links} backgroundImage={backgroundImage}
                                onNavClick={(id) => this.onLinkClicked(id)}/>

                    <SocialIcons links={links}
                                 siteReady={siteReady}
                                 onNavClick={(id) => this.onLinkClicked(id)}/>

                </div>
            );
        } else {
            return null;
        }
    }

    onBackgroundFadeStart() {
        const siteReady = true;
        this.setState({siteReady});
    }

    onLinkClicked(id) {
        const oldLinks = this.state.links;
        const links = oldLinks.map(function (item) {
            let newObject = {id: item.id, isSelected: item.isSelected, label: item.label};
            if (item.id === id) {
                newObject.isSelected = true;
            } else {
                newObject.isSelected = false;
            }
            return newObject;
        });
        this.setState({links});
        console.log("onLinkClicked old", oldLinks[0], "new", links[0]);
        //this.props.history.pushState(null, "/" + id + "/");
    }

    // SET INITIAL STATE

    parseBackground(response) {
        const background = response.data.map(
            function (item) {

                const dataItem = {
                    large: item.backgroundImageLg[0].BgLarge._default,
                    small: item.backgroundImageSm[0].BgSmall._default,
                    assetID: item._id
                };

                return dataItem;
            });
        this.setState({background});
        const index = Math.floor(Math.random() * background.length);
        const currentBackground = {
            large: background[index].large,
            small: background[index].small
        };
        this.setState({currentBackground});

    }

    parseBackgroundLoop(response) {
        const backgroundLoop = response.data.map(
            function (item) {
                //console.log("item", item);
                const t = {};
                t.assetID = item._id;
                t.title = item.title;
                t.mpeg = item.mpeg;
                t.ogg = item.ogg;
                return t;
            });
        this.setState({backgroundLoop});
    }

    parseNavigation(response) {
        const links = response.data.map(
            function (item) {
                const t = {};
                t.id = item.Navigation[0].id;
                t.isSelected = (item.Navigation[0].isSelected === "false") ? false : true;
                t.label = item.Navigation[0].label;
                return t;
            });
        this.setState({links});
    };

    parseTeaser(response) {
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
    }

    parseStills(response) {
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
    }

    parseScreenings(response) {
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
    }

    parseInterviews(response) {
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
    }

    parseMakingOf(response) {
        console.log("MAKING OF", response);
        const makingOf = response.data.map(
            function (item) {
                const t = {};
                t.assetID = item._id;
                t.shortTitle = item.MakingOf[0].titleShort;
                t.longTitle = item.MakingOf[0].title;
                t.description = item.MakingOf[0].description;
                t.mpeg = item.MakingOf[0].mpeg._default;
                t.webm = item.MakingOf[0].webm._default;
                //console.log("item", t, item);
                return t;
            });
        this.setState({makingOf});
    }

    parseCredits(response) {
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
    }

    parseTheory(response) {
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
    }

    parseDownloads(response) {
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
    }
}
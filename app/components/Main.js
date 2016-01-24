import React from 'react';
import Navigation from './los_feliz/Navigation.jsx';
import Home from './los_feliz/Home.jsx';
import Stills from './los_feliz/Stills.jsx';
import Background from './los_feliz/Background.jsx';
import Teaser from './los_feliz/Teaser.jsx';
import Interviews from './los_feliz/Interviews.jsx';
import BackgroundLoop from './los_feliz/BackgroundLoop.jsx';
import About from './los_feliz/About.jsx';
import Credits from './los_feliz/Credits.jsx';
import Screenings from './los_feliz/Screenings.jsx';
import MakingOf from './los_feliz/MakingOf.jsx';
import Downloads from './los_feliz/Downloads.jsx';
import SocialIcons from './los_feliz/SocialIcons.jsx';
import Press from './los_feliz/Press.jsx';
import Contact from './los_feliz/Contact.jsx';

import {getInitialData} from './los_feliz/utils/data';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        //console.log(window.location.hostname.indexOf('localhost'));
        const location = (window.location.hostname.indexOf('.at') == -1) ? "http://new.1000000000.at" : "";
        const siteReady = false;
        const magicWord = "";
        this.state = {location, siteReady, magicWord};

        const data = getInitialData(location).then(function (response) {
            //console.log("getInitialData", response[11].data);
            this.parseBackground(response[0]);
            this.parseBackgroundLoop(response[1]);
            this.parseNavigation(response[2]);
            this.parseTeaser(response[3]);
            this.parseStills(response[4]);
            this.parseScreenings(response[5]);
            this.parseInterviews(response[6]);
            this.parseMakingOf(response[7]);
            this.parsePaintings(response[8]);
            this.parseCredits(response[9]);
            this.parseTheory(response[10]);
            this.parseLinks(response[11]);
            this.parseInfo(response[12]);
            this.parseReviews(response[14]);
            this.parseDownloads(response[13]);
        }.bind(this))
    }

    componentWillReceiveProps(nextProps) {
        //console.log("MAIN - componentWillReceiveProps", nextProps.routes, nextProps.routes[1].path);
        const currentRoute = nextProps.routes[1].path;
        if (currentRoute) {
            this.setNavState(currentRoute);
            this.setState({currentRoute});
        }
    }

    componentDidMount() {
        //console.log("MAIN - componentDidMount", this.props.routes, this.props.routes[1].path);
        const initialRoute = (this.props.routes[1].path) ? this.props.routes[1].path : "Home";
        if (initialRoute) {
            this.setState({initialRoute});
        }
    }

    render() {
        const links = this.state.links;
        const backgroundImage = this.state.currentBackground;
        const location = this.state.location;
        const audio = this.state.backgroundLoop;
        const siteReady = this.state.siteReady;
        const initialRoute = this.state.initialRoute;
        const currentRoute = this.state.currentRoute;
        const state = this.state;
        const parentComp = this;

        const childrenWithProps = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                assets: state,
                onNavClick: (id) => parentComp.onLinkClicked(id),
                setMagicWord: (str) => parentComp.onSetMagicWord(str),
                siteReady: siteReady
            });
        });

        if (this.state && this.state.downloads) {
            //console.log("ALL DATA LOADED", this.state);
            return (
                <div>
                    <Background onFadeStart={() => this.onBackgroundFadeStart()}
                                links={links}
                                backgroundImage={backgroundImage}
                                currentRoute={currentRoute}
                                initialRoute={initialRoute}
                                location={location}/>
                    <div className="contentTopAlign">
                        {childrenWithProps}
                    </div>
                    <BackgroundLoop links={links}
                                    audio={audio}
                                    currentRoute={currentRoute}
                                    initialRoute={initialRoute}
                                    backgroundImage={backgroundImage}
                                    location={location}
                                    isHidden={true}/>
                    <Navigation links={links}
                                backgroundImage={backgroundImage}
                                siteReady={siteReady}
                                currentRoute={currentRoute}
                                onNavClick={(id) => this.onLinkClicked(id)}
                    />

                    <SocialIcons links={links}
                                 siteReady={siteReady}
                                 currentRoute={currentRoute}
                                 initialRoute={initialRoute}
                    />
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
                                currentRoute={currentRoute}
                                initialRoute={initialRoute}
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
                                currentRoute={currentRoute}
                                initialRoute={initialRoute}
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
                    />

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
        if (id === "Contact") {
            this.sendMail();
            return;
        }
        this.props.history.pushState(null, "/" + id + "/");
        this.setNavState(id);
    }

    sendMail() {
        document.location.href = "mailto:edgar@sil.at";
    }

    onSetMagicWord(str) {
        //console.log("onSetMagicWord");
        const magicWord = str;
        this.setState({magicWord});
    }

    setNavState(id) {

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
        //console.log("onLinkClicked old", oldLinks[0], "new", links[0]);
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
        const initialRoute = this.state.initialRoute;
        //console.log("NAVIGATION", response.data[0].Navigation);
        const links = response.data[0].Navigation.map(
            function (item) {
                const t = {};
                t.id = item.id;
                t.isSelected = (item.id === initialRoute) ? true : false;
                t.label = item.label;
                return t;
            });
        this.setState({links});
    };

    parseTeaser(response) {
        //console.log("PARSE TEASER", response.data);
        const teaser = response.data.map(
            function (item) {
                //console.log("item", item);
                const t = {};
                t.assetID = item._id;
                //t.mpeg = item.video[0].mpeg._default;
                t.mpeg_path = item.video[0].mpeg_path;
                t.mpeg = item.video[0].mpeg_path;
                //t.webm = item.video[0].webm._default;
                t.webm_path = item.video[0].webm_path;
                t.webm = item.video[0].webm_path;
                return t;
            });
        this.setState({teaser});
    }

    parseStills(response) {
        const stills = response.data;
/*        const stills = response.data.map(
            function (item) {
                const t = {};
                t.assetID = item._id;
                t.description = item.Stills[0].description;
                t.title = item.Stills[0].title;
                t.source = item.Stills[0].imageSrc._default;

                //console.log(item, t);
                return t;
            });*/
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
                t.city = item.Screenings[0].city;
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
        //console.log("MAKING OF", response);
        const makingOf = response.data;
        this.setState({makingOf});
    }

    parsePaintings(response) {
        //console.log("PAINTINGS", response);
        const drawings = response.data;
        this.setState({drawings});
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
                t.magicWord = item.Downloads[0].magicWord;
                t.description = item.Downloads[0].description;
                t.download = item.Downloads[0].download._default;
                t.email = item.Downloads[0].email;

                //console.log(item, t);
                return t;
            });
        this.setState({downloads});
    }

    parseReviews(response) {
        const reviews = response.data.map(
            function (item) {
                const t = {};
                t.assetID = item._id;
                t.publication = item.Reviews[0].publication;
                t.author = item.Reviews[0].author;
                t.title = item.Reviews[0].title;
                t.date = item.Reviews[0].date;
                t.processed = item.Reviews[0].body.processed;
                t.raw = item.Reviews[0].body.raw;
                t.file = item.Reviews[0].file;
                //console.log(item, t);
                return t;
            });
        this.setState({reviews});
    }

    parseLinks(response) {
        const external_inks = response.data.map(
            function (item) {
                const t = {};
                t.assetID = item._id;
                t.url = item.Links[0].url;
                t.label = item.Links[0].label;
                //console.log(t);
                return t;
            });
        this.setState({external_inks});
    }

    parseInfo(response) {
        const info = response.data.map(
            function (item) {
                console.log("parseInfo item", item);
                const t = {};
                t.assetID = item._id;
                t.url = item.url;
                t.label = item.label;
                t.email = item.email;
                t.mailto = item.mailto;
                t.phone = item.phone;
                t.events = item.events;
                console.log(t);
                return t;
            });
        this.setState({info});
    }
}
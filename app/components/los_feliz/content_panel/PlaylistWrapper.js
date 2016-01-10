/**
 * Created by ulrichsinn on 01/08/2016.
 */

import  React from 'react';
import TweenMax from 'gsap';
import classnames from 'classnames';
import uuid from 'node-uuid';
import {createMarkup} from '../utils/utils';

import PlaylistViewer from './PlaylistViewer';
import PlaylistControls from './PlaylistControls';
import PlaylistContentTypeButton from './PlaylistContentTypeButton';


var _classNames, _container;


export default class PlaylistWrapper extends React.Component {
    constructor(props) {
        super(props);
        this._classNames = classnames('playListWrapper');
        const buttons = null;
        this.state = ({buttons});
    }

    componentDidMount() {
        ////console.log("---- componentDidMount", this.state);
        this.initializePlaylist(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.initializePlaylist(newProps);
    }

    initializePlaylist(props) {
        console.log("initializePlaylist", props);

        const buttons = this.createButtonData(props);
        this.setState({buttons});

        if (buttons !== null) {
            this.onPlaylistSelected(buttons[0].id, props, buttons);
        }
    }

    render() {
        return (
            <div className={this._classNames}>
                {this.renderButtons()}
                {this.renderControls()}
                {this.renderContent()}

            </div>
        );
    }

    renderButtons() {
        const buttons = this.state.buttons;
        const owner = this;
        if (!buttons || buttons.length <= 1) {
            return null
        } else {
            //console.log("renderButtons", buttons);
            return (
                <div >{
                    buttons.map(function (item) {
                            return <PlaylistContentTypeButton
                                className="playlistTypeButton"
                                key={item.id}
                                buttonName={item}
                                onNavClick={() => owner.onPlaylistSelected(item.id)}>{item.label}>
                            </PlaylistContentTypeButton>
                        }
                    )
                }</div>)
        }
    }

    renderContent() {
        //console.log("renderContent");
        if (this.state.buttons !== null) {
            return <PlaylistViewer location={this.props.location}
                                   playlistType={this.state.currentPlaylistId}
                                   selectedPlaylistItem={this.state.selectedPlaylistItem}>

            </PlaylistViewer>
        } else {
            return null;

        }
    }

    renderControls() {
        console.log("renderControls", this.state);
        if (this.state.buttons !== null) {
            return <PlaylistControls currentPlaylist={this.state.currentPlaylist}
                                     selectedPlaylistItem={this.state.selectedPlaylistItem}
                                     setCurrentItem={(item) => this.setCurrentItem(item)}>

            </PlaylistControls>

        } else {
            return null;

        }

    }


    setCurrentItem(item) {
        const selectedPlaylistItem = item;
        this.setState({selectedPlaylistItem});
        //const currentImage = getImage(this.props.assets.location + item.source);
    }

    onPlaylistSelected(id, props, buttons) {
        const currentProps = (props) ? props : this.props;
        const currentPlaylistId = id;
        const currentPlaylist = currentProps[currentPlaylistId];
        const selectedPlaylistItem = currentPlaylist[0];
        const oldButtons = (buttons) ? buttons : this.state.buttons;
        console.log("onPlaylistSelected", this.state);
        if (oldButtons) {
            const buttons = oldButtons.map(function (item) {
                if (item.id === id) {
                    item.isSelected = true
                } else {
                    item.isSelected = false
                }
                return item
            });
            this.setState({buttons});
        }
        this.setState({currentPlaylistId});
        this.setState({currentPlaylist});
        this.setState({selectedPlaylistItem});


    }

    createButtonData(props) {
        let buttonsArr = [];
        if (props.images) {
            buttonsArr.push({
                    label: 'Images',
                    id: 'images',
                    isSelected: false
                }
            );
            props.images.forEach(function (item) {
                item.assetID = parseInt(item.imageSrc.assetID);
            });
        }
        if (props.paintings) {
            buttonsArr.push({
                    label: 'Paintings',
                    id: 'paintings',
                    isSelected: false
                }
            );
            props.paintings.forEach(function (item) {
                item.assetID = parseInt(item.imageSrc.assetID);
            });
        }
        if (props.sketches) {
            buttonsArr.push({
                    label: 'Sketches',
                    id: 'sketches',
                    isSelected: false
                }
            );
            props.sketches.forEach(function (item) {
                item.assetID = parseInt(item.imageSrc.assetID);
            });
        }
        if (props.videos) {
            buttonsArr.push({
                    label: 'Videos',
                    id: 'videos',
                    isSelected: false
                }
            );
            props.videos.forEach(function (item) {
                item.assetID = parseInt(item.mpeg.assetID);
            })
        }

        if (buttonsArr.length >= 1) {
            buttonsArr[0].isSelected = true;
        }
        const buttons = (buttonsArr.length > 0) ? buttonsArr : null;
        console.log("createButtonData", props, buttons);
        return buttons
    }
}
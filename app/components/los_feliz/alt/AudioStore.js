/**
 * Created by ulrichsinn on 01/11/2016.
 */

import alt from './alt';
import AudioActions from './AudioActions';

class AudioStore {
    constructor() {
        const videoIsPlaying = false;
        const isGloballyMuted = false;
        this.state = {videoIsPlaying, isGloballyMuted};

        this.bindActions(AudioActions);
    }

    setVideoPlaying(b) {
        console.log(" ---- AudioStore videoIsPlaying", b);
        const videoIsPlaying = b;
        this.setState({videoIsPlaying});
    }

    setGlobalMute(b) {
        const isGloballyMuted = b;
        this.setState({isGloballyMuted});

        console.log("setGlobalMute", b);
    }
}

export default alt.createStore(AudioStore, 'AudioStore');
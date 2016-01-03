import axios from 'axios';

// GET BACKGROUND IMAGES

export function getBackgrounds() {
    return axios.get('http://new.1000000000.at/background_image.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET AUDIO BACKGROUND LOOP

export function getBackgroundLoop() {
    return axios.get('http://new.1000000000.at/background_loop.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET NAVIGATION DESCRIPTION

export function getNavigation() {
    return axios.get('http://new.1000000000.at/navigation.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET TEASER VIDEOS

export function getTeaser() {
    return axios.get('http://new.1000000000.at/teaser.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET STILLS FOR SLIDE SHOW

export function getStills() {
    return axios.get('http://new.1000000000.at/stills.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET SCREENINGS LISTINGS

export function getScreenings() {
    return axios.get('http://new.1000000000.at/screenings.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET INTERVIEWS VIDEOS

export function getInterviews() {
    return axios.get('http://new.1000000000.at/interviews.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET MAKING OF VIDEOS

export function getMakingOf() {
    return axios.get('http://new.1000000000.at/makingof.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET CREDTS AS HTML

export function getCredits() {
    return axios.get('http://new.1000000000.at/credits.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET THEORY ARTICLES AS HTML

export function getTheory() {
    return axios.get('http://new.1000000000.at/theory.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET DOWNLOADS AS ZIP

export function getDownloads() {
    return axios.get('http://new.1000000000.at/downloads.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}

// GET REVIEWS

export function getReviews() {
    return axios.get('http://new.1000000000.at/reviews.php').catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
        }
    });
}



export function getInitialData() {
    return axios.all([
        getBackgrounds(),
        getBackgroundLoop(),
        getNavigation(),
        getTeaser(),
        getStills(),
        getScreenings(),
        getInterviews(),
        getMakingOf(),
        getCredits(),
        getTheory(),
        getDownloads(),
        getReviews()
    ])
}
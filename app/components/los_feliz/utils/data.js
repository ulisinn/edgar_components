import axios from "axios";

// GET BACKGROUND IMAGES

export function getBackgrounds(location) {
    return axios.get(location + '/background_image.php').catch(function (response) {
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

export function getBackgroundLoop(location) {
    return axios.get(location + '/background_loop.php').catch(function (response) {
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

export function getNavigation(location) {
    return axios.get(location + '/navigation.php').catch(function (response) {
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

export function getTeaser(location) {
    return axios.get(location + '/teaser.php').catch(function (response) {
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

export function getStills(location) {
    return axios.get(location + '/stills.php').catch(function (response) {
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

export function getScreenings(location) {
    return axios.get(location + '/screenings.php').catch(function (response) {
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

export function getInterviews(location) {
    return axios.get(location + '/interviews.php').catch(function (response) {
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

// GET MAKING CONTENT

export function getMakingOf(location) {
    return axios.get(location + '/makingof.php').catch(function (response) {
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
// GET PAINTINGS & SKETCHES

export function getPaintings(location) {
    return axios.get(location + '/paintings.php').catch(function (response) {
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

export function getCredits(location) {
    return axios.get(location + '/credits.php').catch(function (response) {
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

export function getTheory(location) {
    return axios.get(location + '/theory.php').catch(function (response) {
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

export function getDownloads(location) {
    return axios.get(location + '/downloads.php').catch(function (response) {
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

export function getReviews(location) {
    return axios.get(location + '/reviews.php').catch(function (response) {
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


// GET LINKS

export function getLinks(location) {
    return axios.get(location + '/links.php').catch(function (response) {
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


// GET INFO FOR PRESS PAGE

export function getInfo(location) {
    return axios.get(location + '/info.php').catch(function (response) {
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


export function getInitialData(location) {
    return axios.all([
        getBackgrounds(location),
        getBackgroundLoop(location)
    ])
}

export function getMainData(location) {
    return axios.all([
        getNavigation(location),
        getTeaser(location),
        getStills(location),
        getScreenings(location),
        getInterviews(location),
        getMakingOf(location),
        getPaintings(location),
        getCredits(location),
        getTheory(location),
        getLinks(location),
        getInfo(location),
        getDownloads(location),
        getReviews(location)
    ])
}
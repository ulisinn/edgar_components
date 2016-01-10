/**
 * Created by ulrichsinn on 12/30/2015.
 */

import  React from 'react';

export function findActiveLink(item) {
    if (item.isSelected) {
        return true
    } else {
        return false
    }
}

export function getImage(url) {
    console.log("---- getImage", url);
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve(url)
        };
        img.onerror = function () {
            reject(url)
        };
        img.src = url
    })
}

export function createMarkup(item) {
    //console.log("createMarkup", item);
    return {__html: item};
}
import axios from 'axios';

export function getMyList(uid) {
    //return axios.get('http://api.justpick.me/rooms');
    return axios.get('http://api.justpick.me/water?uid='+uid);
}
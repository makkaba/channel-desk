import axios from 'axios';

export function getList() {
    //return axios.get('http://api.justpick.me/rooms');
    return axios.get('https://api.github.com/repos/vmg/redcarpet/issues?state=closed');
}
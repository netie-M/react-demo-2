/**
 * Created by YanyanMao on 2017/4/11.
 */
import 'whatwg-fetch';
import {URL_findUserArchList,URL_insertUserArch} from "./ServiceUrl"

export function findUserArchList(callbackFunction) {
    fetch(URL_findUserArchList)
        .then((response) => {
            return response.json();
        }).then((data) => {
        callbackFunction(data);
    }).catch((e) => {
        console.log(e.message);
    });
}

export function insertUserArch(userArch,callbackFunction) {
    var data = new FormData();
    data.append("userId",userArch.userId);
    data.append("userName",userArch.userName);
    data.append("userStatus",userArch.userStatus);
    data.append("dimissionDate",userArch.dimissionDate);
    var options = {
        method: "POST",
        body: data
    }
    fetch(URL_insertUserArch,options)
        .then((response) => {
            return response.json();
        }).then((data) => {
        callbackFunction(data);
    }).catch((e) => {
        console.log(e.message);
    });
}
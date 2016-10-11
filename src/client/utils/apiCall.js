import {Auth} from './Auth'
import 'isomorphic-fetch'
import 'es6-promise'
import '../react-isomorphic-render'

const BASE_URL = 'http://api.itboost.org:88/app_dev.php/api'

const FETCH_DATA = (url, key, {method = 'GET', params, type = null, base_url = BASE_URL} = {}) => {

    let headers_data = {}
    let body = {}

    if(method == 'GET'||method == 'DELETE'){
        let i = 0
        let op
        for(let key in params){
            if(!params[key]){
                continue;
            }
            i++
            i>1 ? op = '&': op = '?'

            url += `${op}${key}=${params[key]}`
        }
        params = undefined
    }

    switch (type){
        case 'form-data':
            body = params
            break
        default:
            headers_data = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            body = JSON.stringify(params)
    }

    const headers = new Headers(headers_data)

    if(Auth.isAuthenticated()){
        headers.append('Authorization', 'Bearer '+Auth.getToken())
    }



    return new Promise((resolve, reject)=>{
        fetch(base_url + url, {
            method: method,
            headers: headers,
            body: body,
            mode: 'cors'
        })
            .then(function (data) {
                    if(data.status < 400) {
                        data.json().then(data =>{
                            resolve(data)
                        })
                    }
                    else{
                        data.json().then(error => {
                            reject(error)
                        })
                    }
                }
            )
            .catch(error => {
                console.log(error)
            })
    })
}


export const redux = (url, key, params = {}) => (dispatch) => new Promise((resolve, reject)=>{
    dispatch({
        type: '@FETCH_DATA/REQUEST',
        payload: {
            key: key
        }
    })
    FETCH_DATA(url, key, params)
        .then(data=>{
            dispatch({
                type: '@FETCH_DATA/SUCCESS',
                payload: {
                    key: key,
                    response: data.response
                }
            })
            resolve()
        })
        .catch(error=>{
            dispatch({
                type: '@FETCH_DATA/ERROR',
                payload:{
                    key: key,
                    error: error
                }
            })
            reject()
        })
})

export const fetchData = FETCH_DATA
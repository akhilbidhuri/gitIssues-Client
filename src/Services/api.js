import axios from 'axios'
import store from '../store/store';
import qs from 'qs'
import {RECEIVED, REQUEST} from '../store/actions'

var baseUrl = 'https://gitissues-radius.herokuapp.com/' //'http://localhost:5000/'

export const getData = (repo_url) => {
    store.dispatch({type: REQUEST})
    axios.post(
        baseUrl + 'getIssues',
        qs.stringify({'repo_url': repo_url})
      )
      .then((res)=>{
          store.dispatch({type: RECEIVED, payload: res.data})
      })
      .catch((err)=>{
          console.log(err)
      })
} 

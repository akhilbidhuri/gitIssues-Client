import React,{Component} from 'react'
import {getData} from '../Services/api'
import Close from '../close.png'
class input extends Component{
    constructor(){
        super();
        this.state = {
            correctInput: true,
            url:''
        }
    }
    input= () =>{
        //this.setState({url: this.refs})
        console.log(this.refs.url.value)
        if(!this.isValidURL(this.refs.url.value)){
            this.setState({correctInput:false});
        }
        else{
            this.setState({correctInput:true});
            getData(this.refs.url.value);
        }
    }
    isValidURL=(str)=> {
        var pattern = new RegExp('^((https?:)?\\/\\/)?'+ // protocol
            '(?:\\S+(?::\\S*)?@)?' + // authentication
            'github.com'+ // domain name
            '(\\/[-a-z\\d%_.~+\\-A-Z].*)'+
            '(\\/[-a-z\\d%_.~+\\-A-Z].*)') // path
        if (!pattern.test(str)) {
            return false;
        } else {
            return true;
        }
    }
    closeAlert=()=>{
        this.setState({correctInput: true})
    }
    render(){
        return <div>
                <span>
                    <input className="cusInput" ref="url" placeholder="Enter the Repo URL" type="url"></input>
                    <button className="cusBut1" onClick={this.input}>OK</button>
                </span>
                {
                    !this.state.correctInput &&
                    <div className="alert">
                            <h2 style={{ display:'inline'}}>Wrong URL entered!! </h2>
                            <img onClick={this.closeAlert} src={Close} style={{ width:'7%', height:'7%', float:'right', display:'inline', cursor:'pointer'}}/>
                    </div>
                }
            </div>
    }
}

export default input;
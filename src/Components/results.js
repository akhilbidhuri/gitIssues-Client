import React, {Component} from 'react'
import { connect } from 'react-redux'
import Loading from './dataloading'
import Close from '../close.png'
import Fork from '../branch.png'
import Eye from '../eye.png'
import Day from '../24-hours.png'
import Lang from '../data.png'
import Week from '../schedule.png'
import Calendar from '../calendar.png'
import Issue from '../problem.png'
import Stars from '../rating.png'
import {CLALERT} from '../store/actions'
import store from '../store/store';

class results extends  Component{
    constructor(){
        super();
       
    }
   
    
    closeAlert = () =>{
        store.dispatch({type: CLALERT})
    }
    
    render(){
        return<div>
                {
                    this.props.request &&
                    <Loading/>
                }
                {
                    this.props.alert  &&
                    <div className="alert">
                        <h2 style={{ display:'inline'}}>{this.props.data.msg}</h2>
                        <img onClick={this.closeAlert} src={Close} style={{ width:'7%', height:'7%', float:'right', display:'inline', cursor:'pointer'}}/>
                    </div>
                }
                {
                    this.props.data.msg == 'Success' && 
                    <div>
                    <div className="repo">
                            <h1 className="name">{this.props.data.name}</h1>
                            <div style={{background:'#232323', margin:'2%', borderRadius:'15px', padding:'1%', float:'right'}}>
                                <h5>{this.props.data.desc}</h5>
                            </div>
                    </div>
                    <div style={{marginTop:'2%', display:'flex'}}>
                    <div className="dataCapsule">
                        <div className="icon" style={{width:'15%'}}>
                            <img src={Stars} style={{height: '70%', width:'70%'}}/>
                        </div>
                        <h3>{this.props.data.stars}</h3>
                        <h6 style={{color:'#ddd'}}>Stars</h6>
                    </div>
                    <div className="dataCapsule">
                        <div className="icon" style={{width:'15%'}}>
                            <img src={Eye} style={{height: '70%', width:'70%'}}/>
                        </div>
                        <h3>{this.props.data.watchers}</h3>
                        <h6 style={{color:'#ddd'}}>Watchers</h6>
                    </div>
                    <div className="dataCapsule">
                        <div className="icon" style={{width:'15%'}}>
                            <img src={Fork} style={{height: '70%', width:'70%'}}/>
                        </div>
                        <h3>{this.props.data.forks}</h3>
                        <h6 style={{color:'#ddd'}}>Forks</h6>
                    </div>
                    <div className="dataCapsule">
                        <div className="icon" style={{width:'15%'}}>
                            <img src={Lang} style={{height: '70%', width:'70%'}}/>
                        </div>
                        <h3>{this.props.data.language}</h3>
                        <h6 style={{color:'#ddd'}}>Language</h6>
                    </div>
                </div>
                <div style={{marginTop:'2%', display:'flex'}}>
                <div className="dataCapsule">
                            <div className="icon" style={{width:'15%'}}>
                                <img src={Issue} style={{height: '70%', width:'70%'}}/>
                            </div>
                            <h3>{this.props.data.total_issues}</h3>
                            <h6 style={{color:'#ddd'}}>Total Issues</h6>
                        </div>
                    <div className="dataCapsule">
                        <div className="icon" style={{width:'15%'}}>
                            <img src={Day} style={{height: '70%', width:'70%'}}/>
                        </div>
                        <h3>{this.props.data.issues_24_hr}</h3>
                        <h6 style={{color:'#ddd'}}>Issues in 24hrs</h6>
                    </div>
                    <div className="dataCapsule">
                        <div className="icon" style={{width:'15%'}}>
                            <img src={Week} style={{height: '70%', width:'70%'}}/>
                        </div>
                        <h3>{this.props.data.issues_7_days}</h3>
                        <h6 style={{color:'#ddd'}}>Issues more than 24hrs<br/>less than 7 days</h6>
                    </div>
                    <div className="dataCapsule">
                        <div className="icon" style={{width:'15%'}}>
                            <img src={Calendar} style={{height: '70%', width:'70%'}}/>
                        </div>
                        <h3>{this.props.data.more_than_7_days}</h3>
                        <h6 style={{color:'#ddd'}}>Issues older than 7 days</h6>
                    </div>
                    </div>
                </div>
                }
            </div>
    }
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(results);

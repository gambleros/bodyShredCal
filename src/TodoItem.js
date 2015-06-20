import React, { Component } from 'react';

export default class TodoItem extends React.Component{
	constructor() {
	  super();
	  this.change=this.change.bind(this);
	  this.fin=this.fin.bind(this);
	  this.notdone=this.notdone.bind(this);
	 }
	change(obj){
		this.props.changed(obj,this.props.i);
	}
	fin(){
		this.change({id:this.props.id,finished:true,pastDay:true});
	}
	notdone(){
		this.change({id:this.props.id,finished:false,pastDay:true});
	}
	render(){
		var tmpClass=this.props.pastDay ? 'checked' : 'not-checked';
		var redGreen=this.props.finished? 'greenC' : 'redC';
		var redCheck,greenCheck;
		redCheck=greenCheck=false;
		if (this.props.pastDay&&!this.props.finished) redCheck=true;
		if (this.props.pastDay&&this.props.finished) greenCheck=true;
		var hideLabel = this.props.hide ? 'hideLabel' : '';
		return(
			<li className={`${tmpClass} ${redGreen}`}>
				<p>{this.props.description}</p>
				<input type='radio' name={this.props.id} id={`${this.props.id}1`} onChange={this.fin} value="fin" checked={greenCheck} disabled={this.props.hide ? "disabled" : false}/>
				<label htmlFor={`${this.props.id}1`} className={hideLabel}><i className="fa fa-check"></i></label>
				<input type='radio' name={this.props.id} id={`${this.props.id}2`} onChange={this.notdone} value="notdone" checked={redCheck} disabled={this.props.hide ? "disabled" : false}/>
				<label htmlFor={`${this.props.id}2`} className={`warning ${hideLabel}`}><i className="fa fa-times"></i></label>
			</li>
		);
		
	}
}
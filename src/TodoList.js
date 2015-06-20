import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component{
	constructor() {
	  super();
	 }
	render(){
		var classShow= this.props.show ? 'show' : 'hide';
		var items=this.props.description.map(function(data,i){
			if(data.id%7==6) return (<TodoItem key={data.id} hide={true} id={data.id} i={i} description={data.description} finished={data.finished} changed={this.props.changed} pastDay={data.pastDay}></TodoItem>);
			return (<TodoItem key={data.id} id={data.id} i={i} description={data.description} finished={data.finished} changed={this.props.changed} pastDay={data.pastDay}></TodoItem>);
		}.bind(this));
		var weeks=['Sunday','Monday','Tuesday','Wedensday','Thirsday','Friday','Saturday'].map(function(data,i){
			return <li key={i}>{data}</li>
		});
		return(
			<div>
			<ul className="weekCl">{weeks}</ul>
				<ul className={`${classShow} defStyle`}>
					{items}
				</ul>
			</div>
			);
	}
}
import React, { Component } from 'react';

export default class Nav extends Component{
		constructor() {
		  super();
		  this.month1=this.month1.bind(this);
		  this.month2=this.month2.bind(this);
		 }
		month1(e){
			e.preventDefault()
			this.props.changeMonths(0);
		}
		month2(e){
			e.preventDefault()
			this.props.changeMonths(1);
		}
	render() {
		return (
			<nav>
				<input type="checkbox" id="open_menu" className="open_menu" />
				<label htmlFor="open_menu" className="burger"><i className="fa fa-bars"></i>Open Menu</label>
				<ul className="months">
					<div className="menu_item">
			      <a href="#" onClick={this.month1}>
			        <i className="fa fa-futbol-o"></i>
			        <span>Month 1</span>
			      </a>
			    </div>

			    <div className="menu_item">
			      <a href="#" onClick={this.month2}>
			        <i className="fa fa-futbol-o"></i>
			        <span>Month 2</span>
			      </a>
			    </div>
				</ul>
				
			</nav>
		);
	}
}
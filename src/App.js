import React, { Component } from 'react';
import TodoList from './TodoList';
// import reqwest from 'reqwest';
import Nav from './Nav';
import _ from 'lodash';
import Firebase from 'firebase';


export default class App extends Component {
  constructor() {
    super();
    this.state={todoList: [],show:true}
    this.changeFinished=this.changeFinished.bind(this);
    this.showRadio=this.showRadio.bind(this);
    this.splitMonths=this.splitMonths.bind(this);
    this.loadData=this.loadData.bind(this);
   }
    loadData() {
      var ref=new Firebase('https://bodyshred.firebaseio.com/api');
      ref.once('value',function (snap) {
        var itemZ = [];
        snap.forEach(function (itemSnap) {
          var item=itemSnap.val();
          itemZ.push(item);
        });
        this.setState({
          wholeList: itemZ
        });
        this.splitMonths(0);
      }.bind(this));
  }
   changeFinished(obj,i){
    var ref=new Firebase('https://bodyshred.firebaseio.com/api').child(obj.id);
    var tmpObj=this.state.todoList;
    tmpObj[i].finished=obj.finished;
    tmpObj[i].pastDay=obj.pastDay;
    // reqwest({url:`http://localhost:3030/api/${obj.id}`,
    //   method:'put',
    //   data: tmpObj[obj.id],
    //   success: function(data) {
    //     console.log(data);     
    //  }
    //  });
    this.setState({
      todoList: tmpObj
    });
    ref.update(obj);
   }
   showRadio(){
      var tmpShow=!this.state.show;
      console.log("show");
      this.setState({
        show: tmpShow
      });
   }
   splitMonths(id){
      var tmpArr=_.chunk(this.state.wholeList,28);
      this.setState({
        todoList: tmpArr[id]
      });
   }
   componentDidMount(){
    //  	var _tmp;
    //  	reqwest({url:'http://localhost:3030/api',
  		// method:'get',
  		// success: function(data) {
  		// 	_tmp=data;
  		// 	console.log(_tmp[0].description);
  		// 	this.setState({
  		// 		wholeList: _tmp
  		// 	});
    //     this.splitMonths(0);
  		// }.bind(this)
  	 // });
      this.loadData();
   }
   
  render() {
    return (
      <div>
        <Nav changeMonths={this.splitMonths}></Nav>
        <h1>BodyShred</h1>
        <span className="topRigth" onClick={this.showRadio}><i className="fa fa-cog"></i></span>
      	<TodoList description={this.state.todoList} changed={this.changeFinished} show={this.state.show}></TodoList>
      </div>
    );
  }
}



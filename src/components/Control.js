import React, {Component} from 'react';

class Control extends Component {
    render(){
      return (
        <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create'); //변수를 전달받아서 쓰듯이 함수를 전달받아서 쓴다고 이해
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
  }

export default Control;
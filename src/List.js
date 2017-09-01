import React from 'react';
import { connect } from 'react-redux';
import Dellrec from './Dellrec';
class List extends React.Component{

    render(){
        let searchInp = this.props.todos.search;
        return (<div>
            <ul className="recording_list">
                {this.props.todos.list.filter((item, i) => {
                    if (searchInp.length === 0 || item.text.indexOf(searchInp) >= 0){
                        return true
                    }else {
                        return false
                    }
                }).map((item, i) =>{ return <li className="recording_list-item" key={i}>
                    <div className="recording_list_rec">{item.text}</div>
                    <button className="recording_list_btn recording_list_btn-edit" >Редактировать</button>
                    <Dellrec idDell={item.id} />
                </li> } )}
            </ul>
        </div>)
    }
}
function mapStateToProps (state) {
    return {todos: state};
}
export default connect(mapStateToProps)(List)
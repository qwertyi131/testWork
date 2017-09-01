import React from 'react';
import { connect } from 'react-redux';
import { dellAll } from './actions';

class DellBtn extends React.Component{

    render(){

        return(
            <button className="content_btn content_btn-dell" id="delAllPost" onClick={
                () => {
                    this.props.dispatch(dellAll());
                }
            }>
                Удалить все
            </button>
        )
    }
}
DellBtn = connect()(DellBtn);
export default DellBtn;

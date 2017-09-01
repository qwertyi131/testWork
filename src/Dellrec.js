import React from 'react';
import { connect } from 'react-redux';
import { dellRec } from './actions';

class Dellrec extends React.Component{

    render(){
        return(
            <button className="recording_list_btn recording_list_btn-dell"
                    onClick={() => {
                this.props.dispatch(dellRec(this.props.idDell))
            }

            }
            >Удалить</button>
        )
    }
}
Dellrec = connect()(Dellrec);
export default Dellrec;
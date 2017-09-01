import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class RecInput extends React.Component{
    render(){
        let input

        return (
            <div>
                <form className="recording_form"
                    onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        this.props.open()
                        this.props.dispatch(addTodo(input.value))
                        input.value = ''
                    }}
                >
                    <input className="recording_input recording_input-theme"
                        ref={node => {
                            input = node
                        }}
                    />
                    <button className="recording_add_btn recording_add_btn-search" type="submit">
                        Ок!
                    </button>
                </form>
            </div>
        )
    }
}

RecInput = connect()(RecInput)

export default RecInput

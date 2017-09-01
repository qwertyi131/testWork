import React from 'react';
import Search from './Search';
import RecInput from './RecInput';
import List from './List';
import DellBtn from './DellBtn';


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { isOpened : false};
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState(){
        this.setState({ isOpened:!this.state.isOpened });
    }
    render () {
        return (
            <div className="content content_width-lg">
                <button className="content_btn content_btn-success" onClick={this.toggleState}>
                    Создать новый лист
                </button>
                <DellBtn />
                <Search />
                {this.state.isOpened && <RecInput open={this.toggleState}/>}
                <List />
            </div>
        )
    }
}
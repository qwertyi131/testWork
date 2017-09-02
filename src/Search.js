import React from 'react';
import { connect } from 'react-redux';
import { search } from './actions';

class Search extends React.Component {



    render(){
        let input
        return (<div>
                    <form className="content_form"
                          onSubmit={e => {
                              e.preventDefault()
                              this.props.dispatch(search(input.value));
                              input.value = ''
                          }}>
                        <input type="search" placeholder="Serch for..." className="content_input content_input-theme"
                               onChange={() => {
                                   this.props.dispatch( search(input.value))
                               }}
                               ref={node => {
                            input = node
                        }}/>
                        <button className="content_btn content_btn-search" >Go!</button>
                    </form>
                </div>
        )}
}


Search = connect()(Search)

export default Search
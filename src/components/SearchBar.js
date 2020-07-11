import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    /*
    onInputChange(event){
        console.log(event.target.value); //shows what user has typed into the search bar
    }
    
    
    onInputClick(){
        console.log('Input was clicked');
    }
    */

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.props);
        this.props.onSubmit(this.state.term);
    };
    
    render(){
        return ( 
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            //onClick={this.onInputClick} 
                            onChange={(e) => this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;


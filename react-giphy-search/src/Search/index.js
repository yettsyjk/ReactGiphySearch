import React, { Component } from 'react';



class Search extends Component {
    constructor() {
        super();
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
//
handleChange(event) {
    this.setState({ value: event.target.value});
}
handleSubmit(event) {
    alert('A phrase was submitted: '+ this.state.value);
    event.prevenetDefault();
}

render() {
    return (
<div className="Search">
    <h1>App </h1>
    <form onSubmit={this.handleSubmit}>
<label>Searching for :
    <input type="text" placeholder="search phrase" onChange={this.handleChange}/>
    </label>
    <input type="submit" value="Submit"/>
    </form>
</div>
    );
}
}


export default Search;

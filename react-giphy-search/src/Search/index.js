import React, { Component } from 'react';

//create a new component called Search
class Search extends Component {
    constructor() {
        super();
//we are passing down state down as props 
    this.state = { 
        keyword: '',
        gifs: [],
        query: '',
        value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
getGif = (e) => {
    this.setState({
        query: e.target.value
    });
}

handleChange = (e) => {
    this.setState({ 
        [e.target.name]: e.target.value
    });
}
//create method handleSubmit waiting for event trigger getGif

handleSubmit = (e) => {
    // alert('A phrase was submitted: ' + this.state.query);
    e.preventDefault();
    this.props.getQuery(this.state.query);
    // console.log(this.state.query);
}
//the componentDidMount method logged
componentDidMount() {
    console.log('componentDidMount');
  }
//have Search component render a search form: single input and submit button
//launch function on form submit

//clear input onClick
render() {
    return (
<div className="searchContainer">
    <h3 claasName="title">Giphy Search</h3>
    <form>
<label>Type in a search phrase :
    <textarea type="text" name="query" placeholder="search for gifs..." onChange={this.getGif} />
    </label>
    <button onClick={this.handleSubmit}><strong>Submit</strong></button>
    </form>
</div>
     );
    }
}
export default Search;
